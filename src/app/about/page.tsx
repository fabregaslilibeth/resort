import type { Metadata } from 'next';
import { resortEntertainment, resortServices, villaComforts } from '@/data/resort';
import { villas } from '@/data/villas';
import { Facts } from '../components/sections/Facts';
import { LinkCards } from '../components/sections/LinkCards';
import { ListColumns } from '../components/sections/ListColumns';
import { Split } from '../components/sections/Split';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { BookCta } from '../components/site/BookCta';
import { TransitionLink } from '../components/site/Curtain';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';

export const metadata: Metadata = {
  title: 'About · Lalaguna Villas, Puerto Galera',
  description:
    'Lalaguna Villas is Puerto Galera’s premier luxury dive resort: private villas a short walk from Sabang, a PADI 5 Star dive centre, a 24-hour restaurant and a full-service spa.',
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(About) Lalaguna Villas"
          lines={['Small Lalaguna Beach,', 'Sabang.']}
          lead="Puerto Galera’s premier luxury dive resort: private villas a short walk from the lively centre of Sabang, looking out over some of the most famous diving waters in Asia."
          image="/images/home/resort.jpg"
          alt="The pool and the villas at Lalaguna Villas, under orange umbrellas"
        />
        <Statement
          eyebrow="Affordable luxury"
          lines={['Style, friendly service', 'and luxury comfort.']}
          text={[
            'We offer a private, villa-style atmosphere within a short walk of the lively town of Sabang.',
            'The resort makes the most of our location’s greatest asset: outstanding views over the pristine waters of Puerto Galera, one of the famous scuba diving hubs of Asia.',
          ]}
        />
        <Facts
          label="Lalaguna Villas at a glance"
          facts={[
            { value: String(villas.length), label: 'Ways to stay, from studios to the penthouse' },
            { value: 'PADI 5 Star', label: 'Dive resort, with LLV Divers on the beach' },
            { value: '24 hours', label: 'Restaurant, bar, room service and front desk' },
            { value: 'ANAHAW', label: 'Philippine Sustainable Tourism certified' },
          ]}
        />
        <Split
          image="/images/home/terrace.jpg"
          alt="A table on a rooftop terrace looking over the bay"
          eyebrow="Premium accommodation"
          lines={['Studios to', 'the penthouse.']}
          text={[
            'Most of our villas look out over one of the most renowned tropical diving areas in Asia, and all are fitted with the latest facilities and amenities, to the highest Western standards.',
            'Choose from economical studios, our Luxury Villa range, or the signature multi-bedroom Penthouse with its magnificent sun terrace and barbecue.',
          ]}
        >
          <TransitionLink className="text-link" href="/villas">
            The villas
          </TransitionLink>
        </Split>
        <Split
          flip
          image="/images/home/evening.jpg"
          alt="Two guests on the terrace at dusk, string lights over the water"
          eyebrow="Services & amenities"
          lines={['In a class', 'of its own.']}
          text={['With luxury amenities and outstanding service, the resort is in a class of its own among the dive resorts of Puerto Galera.']}
        >
          <TransitionLink className="text-link" href="/offers">
            Offers & services
          </TransitionLink>
        </Split>
        <ListColumns
          eyebrow="Everything you’ll need"
          lines={['At your service,', 'day and night.']}
          columns={[
            { title: 'At the resort', items: resortServices },
            { title: 'In your villa', items: villaComforts },
            { title: 'Things to do', items: resortEntertainment },
          ]}
        />
        <LinkCards
          eyebrow="More about us"
          lines={['The resort,', 'up close.']}
          cards={[
            { href: '/sustainability', image: '/images/home/award.jpg', title: 'Sustainability', text: 'Certified, and still working at it' },
            { href: '/gallery', image: '/images/home/aerial-beach.jpg', title: 'Gallery', text: 'The resort, the villas, the reef' },
            { href: '/blogs', image: '/images/home/kitting-up.jpg', title: 'Journal', text: 'Notes from the dive centre' },
            { href: '/contact', image: '/images/home/dusk.jpg', title: 'Contact', text: 'Phone, email and how to find us' },
          ]}
        />
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
