import type { Metadata } from 'next';
import { villas } from '@/data/villas';
import { BackToTop } from '../components/site/BackToTop';
import { BookCta } from '../components/site/BookCta';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import { InEveryRoom } from '../components/villas/InEveryRoom';
import { toVillaCards } from '../components/villas/villa-cards';
import { VillaIndex } from '../components/villas/VillaIndex';
import '../styles/villas.css';

export const metadata: Metadata = {
  title: 'Villas & rooms · Lalaguna Villas, Puerto Galera',
  description:
    'Nine rooms and villas in Sabang, Puerto Galera, from a 17 m² standard room to a two-bedroom penthouse with a 98 m² terrace. Most look out over the sea.',
};

export default function VillasPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Stay) Villas & rooms"
          lines={['Nine ways to stay,', 'most with the sea in view.']}
          lead="From a 17 m² standard room to a two-bedroom penthouse with a 98 m² sun terrace, all a short walk from the lively centre of Sabang."
          image="/images/home/pool-villas.jpg"
          alt="The pool beneath the villas"
        />
        <VillaIndex villas={toVillaCards(villas)} />
        <InEveryRoom />
        <BookCta />
      </main>
      <BackToTop target="#villa-index .vindex__bar" label="All villas" ariaLabel="Back to all villas" />
      <PageMotion />
    </>
  );
}
