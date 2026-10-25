// Moving water over a photo or a video: the fragment shader refracts the
// media through a slow drifting swell, and rings of ripples spread from
// wherever the pointer moves (plus the odd drop on their own, so phones see
// it too). No light effects: just water.
import { createQuad, createTexture, loopWhileVisible } from './gl';

const MAX_DROPS = 10;

const FRAGMENT = `
uniform vec2 uRes;
uniform float uTime;
uniform sampler2D uMedia;
uniform vec2 uMediaSize;
uniform float uScroll;
// xy: where it fell (0..1, y up), z: when, w: strength.
uniform vec4 uDrops[${MAX_DROPS}];

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float t = uTime;

  // The surface swell: a slow, low refraction everywhere.
  vec2 swell = vec2(fbm(p * 2.6 + vec2(t * 0.07, t * 0.05)),
                    fbm(p * 2.6 + vec2(5.2, 1.3) - t * 0.06)) - 0.5;
  vec2 offset = swell * 0.008;
  float slope = 0.0;

  // Ripples: a packet of rings travelling out from each drop and fading.
  for (int i = 0; i < ${MAX_DROPS}; i++) {
    vec4 drop = uDrops[i];
    float age = t - drop.z;
    if (age < 0.0 || age > 4.0 || drop.w <= 0.0) continue;
    vec2 d = (uv - drop.xy) * vec2(aspect, 1.0);
    float dist = length(d) + 0.0001;
    float ring = dist - age * 0.28;
    float envelope = exp(-ring * ring * 70.0) * exp(-age * 1.15) * drop.w;
    float wave = sin(ring * 70.0) * envelope;
    offset += (d / dist) * wave * 0.011 / vec2(aspect, 1.0);
    slope += wave;
  }

  // Sinking a little as the section scrolls away.
  vec2 muv = cover((uv - 0.5) / (1.0 + 0.08 * uScroll) + 0.5 + offset, uRes, uMediaSize);
  muv.y = 1.0 - muv.y;
  vec3 col = texture2D(uMedia, muv).rgb;

  // Just enough shading on the ripple slopes for the rings to read.
  col *= 1.0 + slope * 0.05;
  gl_FragColor = vec4(col, 1.0);
}`;

export interface Ripples {
  /** How far the section has scrolled away (0..1). */
  params: { scroll: number };
  /** Drops a ripple at x, y (0..1 from the top left). */
  splash: (x: number, y: number, strength?: number) => void;
  stop: () => void;
}

/**
 * Draws `source` (a video element, or a photo's URL) on `canvas` through
 * moving water. Without WebGL, or with `animate` false, the canvas stays
 * hidden and the plain media underneath shows.
 */
export function startRipples(canvas: HTMLCanvasElement | null, source: HTMLVideoElement | string | null, animate: boolean): Ripples {
  const params = { scroll: 0 };
  const none: Ripples = { params, splash: () => undefined, stop: () => undefined };
  if (!canvas || !source || !animate) return none;
  const quad = createQuad(canvas, FRAGMENT, 'ripples');
  if (!quad) return none;
  const { gl, uniform } = quad;

  const uTime = uniform('uTime');
  const uMediaSize = uniform('uMediaSize');
  const uScroll = uniform('uScroll');
  const uDrops = uniform('uDrops');
  gl.uniform1i(uniform('uMedia'), 0);
  createTexture(gl);

  const drops = new Float32Array(MAX_DROPS * 4);
  let next = 0;
  const start = performance.now();
  const clock = () => (performance.now() - start) / 1000;

  const splash = (x: number, y: number, strength = 1) => {
    drops.set([x, 1 - y, clock(), strength], next * 4);
    next = (next + 1) % MAX_DROPS;
  };

  // A new ripple whenever the pointer has travelled a little over the
  // canvas, stronger the faster it goes.
  let last = { x: -1, y: -1, at: 0 };
  const onPointer = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const now = clock();
    const moved = Math.hypot(x - last.x, y - last.y);
    if (moved < 0.05 || now - last.at < 0.08) return;
    splash(x, y, Math.min(1, 0.35 + moved * 4));
    last = { x, y, at: now };
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  // The odd drop on its own, so the water never sits still.
  const rain = window.setInterval(() => splash(0.15 + Math.random() * 0.7, 0.15 + Math.random() * 0.6, 0.55), 2600);

  // A photo is uploaded once it has loaded; a video whenever it has a new frame.
  let media: HTMLVideoElement | HTMLImageElement | null = null;
  let fresh = false;
  if (typeof source === 'string') {
    const image = new Image();
    image.src = source;
    image
      .decode()
      .then(() => {
        media = image;
        fresh = true;
      })
      .catch((error) => console.warn('[ripples] photo failed to load:', error));
  } else {
    media = source;
    const watchFrames = () => {
      fresh = true;
      source.requestVideoFrameCallback?.(watchFrames);
    };
    source.requestVideoFrameCallback?.(watchFrames);
  }

  let live = false;
  const frame = () => {
    if (!media) return;
    const video = media instanceof HTMLVideoElement ? media : null;
    if (video && video.readyState < 2) return;
    // Videos without requestVideoFrameCallback upload every frame.
    if (fresh || !live || (video && !('requestVideoFrameCallback' in video))) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, media);
      fresh = false;
    }
    if (!live) {
      gl.uniform2f(uMediaSize, video ? video.videoWidth : (media as HTMLImageElement).naturalWidth, video ? video.videoHeight : (media as HTMLImageElement).naturalHeight);
      quad.resize();
    }
    gl.uniform1f(uTime, clock());
    gl.uniform1f(uScroll, params.scroll);
    gl.uniform4fv(uDrops, drops);
    quad.draw();
    if (!live) {
      live = true;
      canvas.classList.add('is-live');
    }
  };

  const resizeObserver = new ResizeObserver(() => quad.resize());
  resizeObserver.observe(canvas);
  const stopLoop = loopWhileVisible(canvas, frame);

  return {
    params,
    splash,
    stop: () => {
      stopLoop();
      resizeObserver.disconnect();
      window.clearInterval(rain);
      window.removeEventListener('pointermove', onPointer);
    },
  };
}
