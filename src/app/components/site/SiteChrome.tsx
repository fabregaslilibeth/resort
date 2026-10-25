'use client';

// Every page's frame: skip link, header and menu, footer, booking drawer.
import { BookingSheet } from './BookingSheet';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteChrome({ children, villas }: { children: React.ReactNode; villas: string[] }) {
  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <BookingSheet villas={villas} />
    </div>
  );
}
