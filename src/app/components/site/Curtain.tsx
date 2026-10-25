'use client';

// Page transitions: a TransitionLink raises the deep-water curtain, the route
// changes underneath it, and the curtain lifts away once the new path has
// rendered. Same-page links (anchors) skip it and scroll instead.
import { createContext, useCallback, useContext, useEffect, useRef, type ComponentProps, type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { prefersReducedMotion } from './smooth-scroll';

const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';

const CurtainContext = createContext<((href: string) => void) | null>(null);

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const covering = useRef(false);

  const go = useCallback(
    (href: string) => {
      const el = curtain.current;
      if (!el || prefersReducedMotion()) {
        router.push(href);
        return;
      }
      covering.current = true;
      el.animate([{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }], { duration: 750, easing: EASE, fill: 'forwards' })
        .finished.catch(() => undefined)
        .then(() => router.push(href));
    },
    [router],
  );

  useEffect(() => {
    const el = curtain.current;
    if (!el || !covering.current) return;
    covering.current = false;
    const lift = el.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }], {
      duration: 900,
      delay: 150,
      easing: EASE,
      fill: 'forwards',
    });
    // Back to the stylesheet's resting place, below the screen.
    lift.finished.then(() => el.getAnimations().forEach((a) => a.cancel())).catch(() => undefined);
  }, [pathname]);

  return (
    <CurtainContext.Provider value={go}>
      {children}
      <div className="curtain" ref={curtain} aria-hidden="true">
        <span className="curtain__logo">
          Lalaguna <em>Villas</em>
        </span>
      </div>
    </CurtainContext.Provider>
  );
}

/** A next/link that raises the curtain when it leaves the current page. */
export function TransitionLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const go = useContext(CurtainContext);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!go || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
    event.preventDefault();
    go(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
