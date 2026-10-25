import type { Metadata } from 'next';
import { site } from '@/data/site';
import { spaData, type SpaCategory } from '@/data/spa';
import { deskContacts, peso } from '../components/activities/activity-data';
import { Enquiry } from '../components/sections/Enquiry';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { Ledger, type LedgerRow } from '../components/sections/Ledger';
import { SectionHead } from '../components/sections/SectionHead';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/activities.css';

export const metadata: Metadata = {
  title: 'WellZen Spa · Lalaguna Villas, Puerto Galera',
  description:
    'WellZen Spa at Lalaguna Villas: Balinese, deep tissue and couples massage, warm bamboo and aroma stone signatures, scrubs, body masks and foot care, with packages from ₱3,300.',
};

// Shorter write-ups than the spa menu's for the longer treatments.
const SHORT: Record<string, string> = {
  'thai-herbal-poultice': 'Warm pouches of herbs, the rocking rhythm of the therapy and the aroma of the herbs combine for a deeply soothing massage.',
  'aroma-stone': 'Heated stones relax tight, stiff muscles so the massage can release more tension and ease soreness.',
  'coffee-apricot-scrub': 'Coffee and apricot exfoliate, lifting dry and dead skin to reveal the healthy-looking skin beneath.',
  'glutathione-whitening': 'A whitening scrub with glutathione, an antioxidant like vitamins C and E.',
  'black-mud-mineral': 'A heated Dead Sea mineral mud mask with a warming blend of essential oils, then a comforting wrap while it works.',
  'whitening-clay-mask': 'A clay mask that boosts circulation, tightens and refines the skin and lifts dead cells; for all skin types.',
};

const category = (id: string) => spaData.categories.find((c) => c.id === id) as SpaCategory;

/** Massages: one price for an hour, the 90-minute price under it. */
const timedRows = (id: string): LedgerRow[] =>
  (category(id).services ?? []).map((service) => ({
    title: service.name,
    text: SHORT[service.id] ?? service.description,
    meta: '60 or 90 minutes',
    price: peso(service.price60),
    priceNote: `60 min · ${peso(service.price90)} for 90`,
  }));

const treatmentRows = (...ids: string[]): LedgerRow[] =>
  ids.flatMap((id) =>
    (category(id).treatments ?? []).map((treatment) => ({
      title: treatment.name,
      badge: ids.length > 1 ? category(id).title : undefined,
      text: SHORT[treatment.id] ?? treatment.description,
      meta: treatment.price ? undefined : 'Price on request',
      price: treatment.price ? peso(treatment.price) : undefined,
    })),
  );

const choiceGroups = [
  { label: 'Massage', options: (category('massage').services ?? []).map((s) => s.name) },
  { label: 'Signature treatments', options: (category('signature-treatments').services ?? []).map((s) => s.name) },
  {
    label: 'Scrubs & masks',
    options: [...(category('body-scrub-glow').treatments ?? []), ...(category('body-mask-detox').treatments ?? [])].map((t) => t.name),
  },
  { label: 'Foot & nail care', options: (category('foot-nail-care').treatments ?? []).map((t) => t.name) },
  { label: 'Packages', options: spaData.packages.map((p) => p.name) },
];

export default function SpaPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Activities) WellZen Spa"
          lines={['Luxury for the mind,', 'body and soul.']}
          lead="Revitalising therapies to ease away stress and lift your physical and mental wellbeing, from our highly skilled therapists."
          image="/images/home/pool-villas.jpg"
          alt="The pool and a sun lounger beneath the villas"
          water
        />
        <Statement
          eyebrow="WellZen Spa"
          lines={['The ultimate retreat', 'for your senses.']}
          text={[
            'WellZen Spa at Lalaguna Villas is the place to pamper yourself, with a range of luxury treatments such as reflexology, warm bamboo and aroma stone massage, and our exclusive body mask detox.',
            'Staying a few days? Our therapists can design a personalised treatment programme for you, for the ultimate in pampering throughout your stay.',
          ]}
        />
        <Ledger id="massage" eyebrow="Massage" lines={['Relax.', 'An hour or ninety minutes.']} intro="Prices in Philippine pesos." rows={timedRows('massage')} />
        <Ledger id="signature" eyebrow="Signature treatments" lines={['Rebalance,', 'with warmth.']} rows={timedRows('signature-treatments')} />
        <Ledger
          id="scrubs"
          eyebrow="Scrubs & masks"
          lines={['Rejuvenate,', 'detoxify.']}
          rows={treatmentRows('body-scrub-glow', 'body-mask-detox')}
        />
        <Ledger id="nails" eyebrow="Foot & nail care" lines={['Pamper', 'your feet.']} rows={treatmentRows('foot-nail-care')} />
        <section className="trio" aria-labelledby="packages-title">
          <SectionHead
            id="packages-title"
            eyebrow="Packages"
            lines={['Three treatments,', 'one booking.']}
            intro="Some of our favourite treatments, put together."
          />
          <ol className="trio__list" data-reveal-group>
            {spaData.packages.map((pkg) => (
              <li className="trio__item" key={pkg.id} data-reveal>
                <h3 className="serif trio__name">{pkg.name.replace('Package ', '')}</h3>
                <p className="trio__text">{pkg.description}</p>
                <p className="trio__price">
                  <span className="serif">{peso(pkg.price)}</span>
                </p>
              </li>
            ))}
          </ol>
        </section>
        <Enquiry
          eyebrow={spaData.bookingInfo.title}
          lines={['Book before', 'you arrive.']}
          text="Start your holiday relaxed: book your massage or treatments before you arrive, and unwind after the journey."
          contacts={deskContacts.map((contact, i) => (i === 0 ? { ...contact, label: 'Write to the spa' } : contact))}
        >
          <EnquiryForm
            id="spa"
            to={site.bookingEmail}
            subject="Spa booking"
            choice={{ label: 'Treatment', groups: choiceGroups }}
            date="Date"
            time={{ label: 'Time', options: ['Morning', 'Afternoon', 'Evening'] }}
            guests="Guests"
            message="Anything we should know, e.g. pressure, injuries"
            submit="Request a booking"
          />
        </Enquiry>
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
