'use client';

// The fixed header and the full-screen menu it opens. Over the homepage
// hero the header is transparent; past it, it turns solid, slips away while
// you scroll down and comes back when you scroll up. The menu closes on its
// button or Escape, keeps focus inside while open, previews a photo for the
// hovered link, and hands same-page anchors to the smooth scroll.
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { MENU_ITEMS } from '@/data/navigation';
import { site } from '@/data/site';
import { openBooking } from './booking';
import { TransitionLink } from './Curtain';
import { pauseScroll, prefersReducedMotion, resumeScroll, scrollToTarget } from './smooth-scroll';

const pad = (n: number) => String(n).padStart(2, '0');
const FOCUSABLE = 'a[href], button:not([disabled])';

/** The resort's logo, as on lalagunavillas.com, and a version with white lettering for dark grounds. */
const LOGO = '/images/logo.png';
const LOGO_LIGHT = '/images/logo-light.png';

/** The photo the menu shows beside each top-level link, by href. */
const PREVIEWS: Record<string, string> = {
  '/': '/images/home/aerial-beach.jpg',
  '/about': '/images/home/aerial-hills.jpg',
  '/villas': '/images/home/pool-villas.jpg',
  '/diving': '/images/home/divers.jpg',
  '/dining': '/images/home/feast.jpg',
  '/activities': '/images/home/dive-boat.jpg',
  '/transport': '/images/home/speedboat.jpg',
  '/contact': '/images/home/dusk.jpg',
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const afterClose = useRef<(() => void) | null>(null);

  // Clear over a hero until it has scrolled under the header, solid
  // throughout on a page without one; hidden while scrolling down, back on
  // the way up.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const hero = document.querySelector<HTMLElement>('[data-hero]');
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight - 90 : 0;
      setSolid(!hero || y > heroEnd);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > Math.max(heroEnd, 200));
        last = y;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    const el = menu.current;
    if (!el || !open) return;
    pauseScroll();
    closeButton.current?.focus();
    if (!prefersReducedMotion()) {
      gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'expo.inOut' });
      gsap.fromTo(el.querySelectorAll('.menu__link'), { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.05, delay: 0.35 });
      gsap.fromTo(el.querySelectorAll('.menu__subs, .menu__foot > *'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, stagger: 0.03, delay: 0.6 });
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const items = [...el.querySelectorAll<HTMLElement>(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function close(after?: () => void) {
    const el = menu.current;
    if (!el) return;
    afterClose.current = after ?? null;
    const done = () => {
      setOpen(false);
      resumeScroll();
      if (afterClose.current) afterClose.current();
      else opener.current?.focus();
    };
    if (prefersReducedMotion()) return done();
    gsap.to(el, { clipPath: 'inset(0 0 100% 0)', duration: 0.7, ease: 'expo.inOut', onComplete: done });
  }

  // Leaving for another page: the curtain covers the menu, so drop it once
  // the route has changed.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    setOpen(false);
    resumeScroll();
  }, [pathname]);

  // Capture phase, so this runs before next/link handles the click.
  const onMenuClick = (event: React.MouseEvent) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link) return;
    const url = new URL(link.href);
    if (url.pathname !== window.location.pathname) return;
    event.preventDefault();
    close(() => {
      if (!url.hash || !scrollToTarget(url.hash)) scrollToTarget(0);
    });
  };

  const state = [open ? '' : solid ? 'is-solid' : 'is-clear', hidden && !open ? 'is-hidden' : ''].join(' ');

  return (
    <>
      <header className={`header ${state}`}>
        <button type="button" className="header__menu" ref={opener} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="menu">
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M0 1h22M0 9h14" />
          </svg>
          Menu
        </button>
        <TransitionLink className="header__brand" href="/" aria-label={`${site.name} home`}>
          <Image className="header__logo header__logo--light" src={LOGO_LIGHT} alt="" width={500} height={179} priority />
          <Image className="header__logo header__logo--colour" src={LOGO} alt="" width={500} height={179} priority />
        </TransitionLink>
        <div className="header__right">
          <nav className="header__links" aria-label="Main">
            <TransitionLink href="/villas">Stay</TransitionLink>
            <TransitionLink href="/diving">Dive</TransitionLink>
            <TransitionLink href="/dining">Dine</TransitionLink>
          </nav>
          <button type="button" className="pill header__book" onClick={() => openBooking()}>
            Book a stay
          </button>
        </div>
      </header>

      <div className="menu" id="menu" ref={menu} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open} onClickCapture={onMenuClick} data-lenis-prevent>
        <div className="menu__top">
          <Image className="menu__logo" src={LOGO_LIGHT} alt={site.name} width={500} height={179} />
          <button type="button" className="pill pill--line pill--light" ref={closeButton} onClick={() => close()}>
            Close
          </button>
        </div>
        <div className="menu__body">
          <nav aria-label="Main">
            <ol className="menu__list">
              {MENU_ITEMS.map((item, i) => (
                <li className="menu__item" key={item.name} onPointerEnter={() => setPreview(i)}>
                  <span className="menu__mask">
                    <TransitionLink
                      className="serif menu__link"
                      href={item.href}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      onFocus={() => setPreview(i)}
                    >
                      <span className="menu__num">{pad(i + 1)}</span>
                      {item.name}
                    </TransitionLink>
                  </span>
                  {item.dropdown && (
                    <ul className="menu__subs" aria-label={item.name}>
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <TransitionLink href={sub.href}>{sub.name}</TransitionLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="menu__preview" aria-hidden="true">
            {MENU_ITEMS.map((item, i) => (
              <div className={`menu__shot${i === preview ? ' is-active' : ''}`} key={item.name}>
                <Image src={PREVIEWS[item.href] ?? PREVIEWS['/']} alt="" fill sizes="(max-width: 900px) 0px, 36vw" />
              </div>
            ))}
          </div>
        </div>
        <div className="menu__foot">
          <span>
            {site.address[0]}, {site.area}
          </span>
          <a href={`tel:${site.phones[0].replace(/[^\d+]/g, '')}`}>{site.phones[0]}</a>
          <a href={`mailto:${site.emails[0].address}`}>{site.emails[0].address}</a>
        </div>
      </div>
    </>
  );
}
