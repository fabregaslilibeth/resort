import type { Metadata } from 'next';
import { diveSitesData } from '@/data/diveSites';
import { DayTrips } from '../components/dive/DayTrips';
import { DepthChart } from '../components/dive/DepthChart';
import { DiveEnquiry } from '../components/dive/DiveEnquiry';
import { Facts } from '../components/sections/Facts';
import { LinkCards } from '../components/sections/LinkCards';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/dive.css';

export const metadata: Metadata = {
  title: 'Diving with LLV Divers · Lalaguna Villas, Puerto Galera',
  description:
    'LLV Divers is our PADI 5 Star dive centre on the beach at Sabang, Puerto Galera: fun dives, PADI courses to Divemaster, and most of the best sites about five minutes away.',
};

export default function DivingPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dive) LLV Divers · PADI 5 Star"
          lines={['Some of the best', 'diving in Asia.']}
          lead="LLV Divers is our dive centre on the beach at Sabang. Most of Puerto Galera’s best sites are about five minutes away by speedboat."
          image="/images/home/divers.jpg"
          alt="A diver beside a school of batfish"
          water
        />
        <Statement
          eyebrow="LLV Divers"
          lines={['A full five-star', 'dive centre.']}
          text={[
            'We’re a PADI 5 Star Dive Resort: a highly respected, multilingual team, modern equipment, and the largest training pool in Sabang.',
            'Whether it’s your first breath underwater or your Divemaster, you dive with experienced divemasters, never more than five divers to a guide.',
          ]}
        />
        <Facts
          label="LLV Divers in numbers"
          facts={[
            { value: 'PADI 5 Star', label: 'Dive resort and instructor development centre' },
            { value: '≈ 5 min', label: 'By speedboat to most dive sites' },
            { value: '5 divers', label: 'At most, per divemaster' },
            { value: '4 languages', label: 'English, Chinese, Japanese & Tagalog' },
          ]}
        />
        <LinkCards
          eyebrow="Diving at Lalaguna"
          lines={['Where to', 'start.']}
          cards={[
            { href: '/dive/llv-divers', image: '/images/home/dive-boat.jpg', title: 'LLV Divers', text: 'The team, the boats and the gear' },
            { href: '/dive/diving-courses', image: '/images/home/reef.jpg', title: 'Diving courses', text: 'Fun dives, and PADI from Bubblemaker up' },
            { href: '/dive/dive-sites', image: '/images/home/divers.jpg', title: 'Dive sites', text: `${diveSitesData.length} sites around Sabang and Verde Island` },
            { href: '/dive/padi-divemaster-internship', image: '/images/home/speedboat.jpg', title: 'Go professional', text: 'A four-week PADI Divemaster internship' },
          ]}
        />
        <DepthChart
          eyebrow="Nearby sites"
          lines={['How deep', 'it goes.']}
          names={['Small La Laguna', 'Kilima Steps', 'Sabang Wrecks', 'Hole in the Wall', 'Canyons', 'Verde Island Drop-off']}
        />
        <DayTrips />
        <DiveEnquiry />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
