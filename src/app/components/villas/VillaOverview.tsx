import { bookingGuaranteeData } from '@/data/bookingGuarantee';
import { site } from '@/data/site';
import { BookButton } from '../site/BookButton';
import { guests, type VillaCard } from './villa-cards';

// The villa's description beside a card that stays in view: what it is,
// who it sleeps, what's in it, and the way to book it direct.
export function VillaOverview({ villa }: { villa: VillaCard }) {
  const [lead, ...rest] = villa.text;

  return (
    <section className="vdetail" aria-labelledby="vdetail-title">
      <div className="vdetail__main">
        <p className="eyebrow" data-reveal>
          The {villa.name.toLowerCase()}
        </p>
        <h2 className="sr-only" id="vdetail-title">
          About the {villa.name}
        </h2>
        {lead && (
          <p className="serif vdetail__lead" data-reveal>
            {lead}
          </p>
        )}
        {rest.length > 0 && (
          <div className="vdetail__text" data-reveal>
            {rest.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
      </div>

      <aside className="vdetail__card" aria-label={`Book the ${villa.name}`} data-reveal>
        <dl className="vdetail__specs">
          <div>
            <dt>Size</dt>
            <dd>{villa.area}</dd>
          </div>
          <div>
            <dt>Guests</dt>
            <dd>{guests(villa)}</dd>
          </div>
          {villa.facilities.length > 0 && (
            <div>
              <dt>In the room</dt>
              <dd>{villa.facilities.join(' · ')}</dd>
            </div>
          )}
        </dl>
        <BookButton className="pill pill--dark vdetail__book" villa={villa.name}>
          Book this villa
        </BookButton>
        <a className="vdetail__mail" href={`mailto:${site.bookingEmail}?subject=${encodeURIComponent(villa.name)}`}>
          or write to {site.bookingEmail}
        </a>
        <div className="vdetail__perks">
          <p className="eyebrow">Booking direct</p>
          <ul>
            {bookingGuaranteeData.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
