import type { Metadata } from 'next';
import { diveSitesData } from '@/data/diveSites';
import { DayTrips } from '../../components/dive/DayTrips';
import type { DiveSite } from '../../components/dive/dive-data';
import { DiveEnquiry } from '../../components/dive/DiveEnquiry';
import { SiteFinder } from '../../components/dive/SiteFinder';
import { Statement } from '../../components/sections/Statement';
import { BackToTop } from '../../components/site/BackToTop';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/dive.css';

const SITES: DiveSite[] = diveSitesData;

export const metadata: Metadata = {
  title: 'Dive sites around Puerto Galera · LLV Divers',
  description: `${SITES.length} dive sites around Sabang, Puerto Galera and Verde Island: coral reefs, walls and wrecks, with depths, levels and what you might see.`,
};

export default function DiveSitesPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dive) Dive sites"
          lines={['The reef starts', 'where the beach ends.']}
          lead="World-class sites teeming with marine life, from vibrant coral reefs to dramatic walls and fascinating wrecks, around Sabang, Verde Island and beyond."
          image="/images/home/aerial-beach.jpg"
          alt="The reef off Small Lalaguna Beach from the air"
          water
        />
        <SiteFinder sites={SITES} />
        <Statement
          eyebrow="Why dive here"
          lines={['The best diving', 'in Puerto Galera.']}
          text={[
            'We’re centrally located, with quick access to the best dive sites in Puerto Galera.',
            'Our guides are PADI-certified professionals with years of local diving experience, on modern equipment and well-maintained boats.',
            'And the water itself is the reason to come: a diverse underwater ecosystem of colourful corals and marine species.',
          ]}
        />
        <DayTrips />
        <DiveEnquiry lines={['Pick a site,', 'we’ll take you.']} />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
