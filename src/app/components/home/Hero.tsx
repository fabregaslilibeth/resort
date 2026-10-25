import { BookButton } from '../site/BookButton';
import { StayForm } from '../site/StayForm';

// The resort's film, full-bleed.
export function Hero({ villas }: { villas: string[] }) {
  return (
    <section className="hero" data-hero aria-labelledby="hero-title">
      <div className="hero__media">
        <video className="hero__video" data-hero-video data-hero-zoom poster="/images/home/aerial-beach.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/home.mov" type="video/mp4" />
        </video>
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <h1 className="serif hero__title" id="hero-title" data-hero-title>
          <span className="line">
            <span>Where the reef</span>
          </span>
          <span className="line">
            <span>
              <em>begins at the door.</em>
            </span>
          </span>
        </h1>
        <div className="hero__aside" data-hero-fade>
          <p>A luxury dive resort &amp; spa on Small Lalaguna Beach, in Sabang, Puerto Galera.</p>
          <p className="hero__scroll">
            <span aria-hidden="true" />
            Scroll
          </p>
        </div>
      </div>

      <div className="hero__booking" data-hero-fade>
        <StayForm villas={villas} variant="bar" id="hero" />
        <BookButton className="pill pill--orange hero__book">Check availability</BookButton>
      </div>
    </section>
  );
}
