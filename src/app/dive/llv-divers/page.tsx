import type { Metadata } from 'next';
import { DiveEnquiry } from '../../components/dive/DiveEnquiry';
import { Film } from '../../components/sections/Film';
import { LinkCards } from '../../components/sections/LinkCards';
import { Split } from '../../components/sections/Split';
import { Statement } from '../../components/sections/Statement';
import { BackToTop } from '../../components/site/BackToTop';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/dive.css';

export const metadata: Metadata = {
  title: 'LLV Divers · PADI 5 Star dive centre, Sabang, Puerto Galera',
  description:
    'LLV Divers, our beachfront PADI 5 Star dive centre at Lalaguna Villas in Sabang: experienced divemasters, modern Scubapro equipment, nitrox and fast dive boats.',
};

export default function LLVDiversPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dive) LLV Divers"
          lines={['Our dive centre,', 'on the beach.']}
          lead="The best diving the Philippines has to offer, with LLV Divers, our modern dive centre at Lalaguna Villas, Sabang."
          image="/images/home/dive-boat.jpg"
          alt="The LLV Divers boat with divers kitting up on turquoise water"
          water
        />
        <Statement
          eyebrow="PADI 5 Star Dive Resort"
          lines={['The full', 'five-star experience.']}
          text={[
            'We’re a PADI 5 Star Dive Resort, which means we excel in providing divers with memorable diving experiences through outstanding professional service. We also make the whole experience a lot of fun.',
            'We offer the full range of PADI scuba programs and have a great selection of modern professional equipment.',
          ]}
        />
        <Split
          image="/images/home/divers.jpg"
          alt="A divemaster leading a diver past a school of batfish"
          eyebrow="The team"
          lines={['Experienced', 'professionals.']}
          items={[
            'Guided by our team of experienced Divemasters',
            'Multilingual team: English, Chinese, Japanese & Tagalog',
            'Maximum of 5 divers per Divemaster',
            'PADI specialty courses available',
            'Training from Discover Scuba Diving to Divemaster',
            'Largest training swimming pool in Sabang',
          ]}
        />
        <Split
          flip
          image="/images/home/speedboat.jpg"
          alt="A dive speedboat crossing the bay"
          eyebrow="The kit"
          lines={['Modern', 'equipment.']}
          items={[
            'New state of the art beachfront dive center',
            'Air-conditioned classroom',
            'Scubapro professional diving equipment',
            'Nitrox tanks available',
            'Modern dive speedboats for quick transit',
            'PADI E-learning and books available',
          ]}
        />
        <Film videoId="MIpXCktcdpI" title="Diving with LLV Divers" poster="/images/home/reef.jpg" />
        <Statement
          eyebrow="Diving at LLV Divers"
          lines={['Every level,', 'one team.']}
          text={[
            'Recreational diving and PADI certification courses for all levels. Our team can introduce you to the world of diving with a brief dive in our pool, or you can pursue more advanced and specialty courses.',
            'With our fun, professional diving team and some of the world’s best diving nearby, you’re in for a memorable experience.',
          ]}
        />
        <LinkCards
          eyebrow="Next"
          lines={['Plan', 'your dives.']}
          cards={[
            { href: '/dive/diving-courses', image: '/images/home/reef.jpg', title: 'Diving courses', text: 'Fun dives, and PADI from Bubblemaker up' },
            { href: '/dive/dive-sites', image: '/images/home/divers.jpg', title: 'Dive sites', text: 'Reefs, walls and wrecks near Sabang' },
            { href: '/dive/padi-divemaster-internship', image: '/images/home/speedboat.jpg', title: 'Go professional', text: 'A four-week PADI Divemaster internship' },
          ]}
        />
        <DiveEnquiry lines={['Book', 'your dive.']} />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
