'use client';

// The full menu's category bar: it sticks under the header, marks the
// category being read, and keeps that chip in view as the bar scrolls.
import { useEffect, useRef, useState } from 'react';

interface MenuNavProps {
  groups: { id: string; label: string; categories: { title: string; slug: string }[] }[];
}

export function MenuNav({ groups }: MenuNavProps) {
  const [current, setCurrent] = useState(groups[0]?.categories[0]?.slug);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-menu-section]')];
    // A section counts as being read while it crosses a line a third of
    // the way down the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setCurrent(entry.target.id);
      },
      { rootMargin: '-33% 0px -66% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = bar.current;
    const chip = el?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!el || !chip) return;
    el.scrollTo({ left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2, behavior: 'smooth' });
  }, [current]);

  return (
    <nav className="menunav" aria-label="Menu categories">
      <div className="menunav__bar" ref={bar}>
        {groups.map((group) => (
          <div className="menunav__group" key={group.id}>
            <span className="menunav__label">{group.label}</span>
            {group.categories.map((category) => (
              <a className="chip menunav__chip" href={`#${category.slug}`} aria-current={current === category.slug ? 'true' : undefined} key={category.slug}>
                {category.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
