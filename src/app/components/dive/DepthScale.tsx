import { depthRange } from './dive-data';

/** Metre marks every 10 m along a scale `scale` metres deep. */
export function DepthTicks({ scale }: { scale: number }) {
  const marks = Array.from({ length: scale / 10 + 1 }, (_, i) => i * 10);
  return (
    <span className="depths__ticks">
      {marks.map((m) => (
        <span style={{ left: `${(m / scale) * 100}%` }} key={m}>
          {m} m
        </span>
      ))}
    </span>
  );
}

/** A site's depth range as a bar on the scale (or nothing, when it isn't listed). */
export function DepthTrack({ depth, scale, role }: { depth?: string; scale: number; role?: string }) {
  const range = depthRange(depth);
  return (
    <span className="depths__track" role={role}>
      {range ? (
        <>
          <span
            className="depths__bar"
            style={{ left: `${(range[0] / scale) * 100}%`, width: `${(Math.max(range[1] - range[0], 1) / scale) * 100}%` }}
          />
          <span className="sr-only">
            {range[0]} to {range[1]} metres
          </span>
        </>
      ) : (
        <span className="depths__none">Depth not listed</span>
      )}
    </span>
  );
}

/** The track's 10 m rules, as a style for the element around the rows. */
export const stepStyle = (scale: number) => ({ '--step': `${1000 / scale}%` }) as React.CSSProperties;
