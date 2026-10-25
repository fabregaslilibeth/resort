// Same-page anchors scroll smoothly. Capture phase, so this runs before
// next/link handles the click; the menu and the skip link handle their own.
import { scrollToTarget } from './smooth-scroll';

/** Starts handling anchor clicks; returns the function that stops it. */
export function smoothAnchors(): () => void {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link || event.defaultPrevented || link.closest('#menu') || link.classList.contains('skip')) return;
    const url = new URL(link.href);
    if (url.pathname !== window.location.pathname || !url.hash) return;
    if (!scrollToTarget(url.hash)) return;
    event.preventDefault();
    history.replaceState(history.state, '', url.hash);
  };
  document.addEventListener('click', onClick, true);
  return () => document.removeEventListener('click', onClick, true);
}
