import type { Metadata } from 'next';
import { site } from '@/data/site';
import { deskContacts } from '../components/activities/activity-data';
import { Enquiry } from '../components/sections/Enquiry';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { Ledger } from '../components/sections/Ledger';
import { Numbered } from '../components/sections/Numbered';
import { Split } from '../components/sections/Split';
import { BackToTop } from '../components/site/BackToTop';
import { TransitionLink } from '../components/site/Curtain';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';

export const metadata: Metadata = {
  title: 'Transport · Getting to Lalaguna Villas, Puerto Galera',
  description:
    'A VIP private transfer from Manila to our door by car and boat, a speedboat water taxi from the ferry ports, and a free Sabang pier transfer when you book direct.',
};

const JOURNEY = [
  {
    title: 'By road from Manila',
    text: 'On our VIP private transfer, a luxury car meets you in Manila and drives you to the coast: our Hyundai Starex, or a minibus for a larger group.',
  },
  {
    title: 'Across to Puerto Galera',
    text: 'From the coast, our own craft carries you across to Puerto Galera and straight to our doorstep on Small Lalaguna Beach.',
  },
  {
    title: 'Or by ferry, then speedboat',
    text: 'Coming on the public ferry? Our speedboat water taxi shuttles between the resort and the ferry ports, and the Sabang pier transfer is free when you book direct.',
  },
];

const OPTIONS = [
  {
    title: 'VIP private transfer',
    badge: 'Extra charge',
    text: 'From Manila directly to our doorstep, in our luxury car and craft.',
  },
  {
    title: 'Private luxury car',
    badge: 'Extra charge',
    text: 'A Hyundai Starex, with a driver.',
  },
  {
    title: 'Minibus',
    badge: 'Extra charge',
    text: 'For families and groups travelling together.',
  },
  {
    title: 'Speedboat water taxi',
    badge: 'Extra charge',
    text: 'A shuttle between the resort and the ferry ports.',
  },
  {
    title: 'Sabang pier transfer',
    badge: 'Free booking direct',
    text: 'To and from Sabang pier on check-in and check-out, when you book with us directly.',
  },
];

export default function TransportPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Getting here) Transport"
          lines={['From Manila', 'to our doorstep.']}
          lead="Puerto Galera is a drive and a short crossing from Manila. Let us take care of both, or meet you off the ferry."
          image="/images/home/boat-bow.jpg"
          alt="The orange bow of the boat cutting through the water"
        />
        <Numbered eyebrow="The journey" lines={['Car, boat,', 'then the beach.']} items={JOURNEY} />
        <Ledger
          id="options"
          eyebrow="Transfers"
          lines={['However you’d', 'like to arrive.']}
          intro="Tell us your flight or ferry times and we’ll quote and arrange it."
          rows={OPTIONS}
        />
        <Split
          image="/images/home/speedboat.jpg"
          alt="A speedboat crossing the bay at Sabang"
          eyebrow="Book direct"
          lines={['The pier transfer', 'is on us.']}
          text={[
            'Book your stay with us directly and we’ll collect you from Sabang pier when you arrive and take you back when you leave, among the other direct booking benefits.',
          ]}
        >
          <TransitionLink className="text-link" href="/offers">
            Direct booking benefits
          </TransitionLink>
        </Split>
        <Enquiry
          eyebrow="Transfers"
          lines={['Arrange', 'your transfer.']}
          text="Let us know when you land or which ferry you’re on, and how many of you are travelling."
          contacts={deskContacts.map((contact, i) => (i === 0 ? { ...contact, label: 'Write to the front desk' } : contact))}
        >
          <EnquiryForm
            id="transfer"
            to={site.bookingEmail}
            subject="Transfer request"
            choice={{ label: 'Transfer', groups: [{ label: 'Transfers', options: OPTIONS.map((option) => option.title) }] }}
            date="Arrival date"
            time={{ label: 'Arriving', options: ['Morning', 'Afternoon', 'Evening'] }}
            guests="Travellers"
            message="Flight or ferry times, luggage, anything else"
            submit="Request a transfer"
          />
        </Enquiry>
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
