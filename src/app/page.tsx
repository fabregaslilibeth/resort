import type { Metadata } from 'next';
import { testimonialsData } from '@/data/testimonials';
import { villas } from '@/data/villas';
import { BookCta } from './components/site/BookCta';
import { DineUnwind } from './components/home/DineUnwind';
import { Dive } from './components/home/Dive';
import { Guests } from './components/home/Guests';
import { Hero } from './components/home/Hero';
import { HomeMotion } from './components/home/HomeMotion';
import { Intro } from './components/home/Intro';
import { Loader } from './components/home/Loader';
import { toVillaCards } from './components/villas/villa-cards';
import { Villas } from './components/home/Villas';
import './styles/home.css';

export const metadata: Metadata = {
  title: 'Lalaguna Villas · Luxury dive resort & spa, Puerto Galera',
  description:
    'Ocean-view villas, a PADI 5 Star dive centre on the beach, 24-hour dining and the WellZen Spa in Sabang, Puerto Galera. Travelers’ Choice 2020 to 2025.',
};

/** The slider leads with the villas that have the views; any others follow. */
const SLIDER_ORDER = [
  'Luxury Villa',
  'Premium Suite',
  '2Br Penthouse',
  '2Br Luxury Villa',
  '2Br Premium Villa',
  '2Br Superior Villa',
  'Superior Villa',
  'Superior Studio',
  'Standard Room',
];

const rank = (name: string) => {
  const i = SLIDER_ORDER.indexOf(name);
  return i === -1 ? SLIDER_ORDER.length : i;
};

export default function Home() {
  const cards = toVillaCards(villas);
  const featured = [...cards].sort((a, b) => rank(a.name) - rank(b.name));

  return (
    <>
      <Loader />
      <main id="main">
        <Hero villas={cards.map((card) => card.name)} />
        <Intro />
        <Villas villas={featured} />
        <Dive />
        <DineUnwind />
        <Guests reviews={testimonialsData} />
        <BookCta />
      </main>
      <HomeMotion />
    </>
  );
}
