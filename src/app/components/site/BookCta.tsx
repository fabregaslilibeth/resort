import Image from 'next/image';
import { site } from '@/data/site';
import { BookButton } from './BookButton';

export function BookCta() {
  return (
    <section className="cta" id="book" aria-labelledby="cta-title">
      <div className="cta__media">
        <Image src="/images/home/dusk.jpg" alt="Dusk over the bay at Sabang, dive boats at anchor" fill sizes="100vw" data-backdrop />
        <div className="cta__shade" />
      </div>
      <div className="cta__content">
        <h2 className="serif cta__title" id="cta-title" data-lines>
          <span className="line">
            <span>Book direct,</span>
          </span>
          <span className="line">
            <span>
              <em>the pier transfer’s on us.</em>
            </span>
          </span>
        </h2>
        <ul className="cta__perks" data-reveal>
          <li>Lower rates matched</li>
          <li>No 3% service charge</li>
          <li>Early check-in or late check-out</li>
          <li>Free laundry, 1 kg a night</li>
        </ul>
        <div className="cta__actions" data-reveal>
          <BookButton className="pill pill--orange">Check availability</BookButton>
          <a href={`mailto:${site.bookingEmail}`}>or write to {site.bookingEmail}</a>
        </div>
      </div>
    </section>
  );
}
