import type { Metadata } from 'next';
import { bookingGuaranteeData as guarantee } from '@/data/bookingGuarantee';
import { paymentOptions } from '@/data/paymentOptions';
import { resortEntertainment, resortServices, transportOptions, villaComforts } from '@/data/resort';
import { ListColumns } from '../components/sections/ListColumns';
import { Numbered } from '../components/sections/Numbered';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { BookButton } from '../components/site/BookButton';
import { BookCta } from '../components/site/BookCta';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/info.css';

export const metadata: Metadata = {
  title: 'Offers & services · Lalaguna Villas, Puerto Galera',
  description:
    'Book direct with Lalaguna Villas: we match any lower rate, waive the 3% service charge, and include the Sabang pier transfer, early check-in or late check-out and free laundry.',
};

// A title for each direct booking benefit, in the order bookingGuarantee.ts lists them.
const BENEFIT_TITLES = ['No service charge', 'The pier transfer', 'Early in or late out', 'Free laundry'];

export default function OffersPage() {
  const benefits = guarantee.benefits.map((benefit, i) => ({ title: BENEFIT_TITLES[i] ?? `Benefit ${i + 1}`, text: `${benefit}.` }));

  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Stay) Offers & services"
          lines={['Book direct,', 'get more.']}
          lead="The best rate for your villa, guaranteed, and a few things the booking sites can’t give you."
          image="/images/home/pool.jpg"
          alt="Tables under orange umbrellas beside the pool and the bar"
        />
        <Statement eyebrow={guarantee.title} lines={['If it’s cheaper elsewhere,', 'we’ll match it.']} text={[guarantee.description]}>
          <BookButton className="pill pill--dark">Check availability</BookButton>
        </Statement>
        <Numbered eyebrow="Booking direct" lines={['Whatever the rate,', 'these come with it.']} intro={guarantee.benefitsIntro} items={benefits} />
        <section className="pay" aria-labelledby="pay-title">
          <h2 className="eyebrow" id="pay-title" data-reveal>
            Ways to pay
          </h2>
          <ul className="pay__list" data-reveal>
            {paymentOptions
              .filter((option) => option.name !== 'Other')
              .map((option) => (
                <li className="serif" key={option.name}>
                  {option.name}
                </li>
              ))}
            <li className="serif">Credit card</li>
          </ul>
        </section>
        <ListColumns
          eyebrow="Services & amenities"
          lines={['In a class', 'of its own.']}
          intro="With luxury amenities and outstanding service, among the dive resorts of Puerto Galera."
          columns={[
            { title: 'At the resort', items: resortServices },
            { title: 'In your villa', items: villaComforts },
            { title: 'Things to do', items: resortEntertainment },
            { title: 'Getting here', items: transportOptions },
          ]}
        />
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
