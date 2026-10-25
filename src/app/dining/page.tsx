import type { Metadata } from 'next';
import { DineEnquiry } from '../components/dine/DineEnquiry';
import { DishMarquee } from '../components/dine/DishMarquee';
import { MenuIndex } from '../components/dine/MenuIndex';
import { countIn } from '../components/dine/menu-data';
import { Facts } from '../components/sections/Facts';
import { Split } from '../components/sections/Split';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { TransitionLink } from '../components/site/Curtain';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/dine.css';

export const metadata: Metadata = {
  title: 'Dining · Lalaguna Villas, Puerto Galera',
  description:
    'Asian and Western cooking built on local produce and the freshest seafood. The restaurant, poolside bar and room service at Lalaguna Villas all run 24 hours.',
};

export default function DiningPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dine) Restaurant & poolside bar"
          lines={['The kitchen', 'never closes.']}
          lead="An international menu of Asian and Western cooking, built on local produce and the freshest seafood. The restaurant, poolside bar and room service run 24 hours."
          image="/images/home/feast.jpg"
          alt="A seafood boodle feast laid out on banana leaves"
        />
        <Statement
          eyebrow="The restaurant"
          lines={['Local produce,', 'the freshest seafood.']}
          text={[
            'Our menu offers an extensive range of Asian and Western cuisine, with a focus on fresh local produce and the freshest local seafood.',
            'The restaurant, the poolside bar and room service all run 24 hours, and at weekends there are dining buffets and specials.',
          ]}
        />
        <Facts
          label="Dining at Lalaguna"
          facts={[
            { value: '24 hours', label: 'Restaurant, poolside bar and room service' },
            { value: String(countIn('food')), label: 'Dishes on the menu' },
            { value: String(countIn('wine')), label: 'Wines, with the owners’ cellar' },
            { value: 'Weekends', label: 'Dining buffets and specials' },
          ]}
        />
        <DishMarquee />
        <MenuIndex />
        <Split
          image="/images/home/pool.jpg"
          alt="Tables under orange umbrellas beside the pool and the bar"
          eyebrow="The poolside bar"
          lines={['Cocktails', 'by the pool.']}
          text={[
            'Our poolside bar offers a great selection of local and international beers, signature cocktails and an extensive wine list, including an eclectic collection of imported wines from our cellar.',
          ]}
          items={['Local and international beers, and spirits', 'Signature cocktails', 'The wine list and the owners’ cellar']}
        >
          <TransitionLink className="text-link" href="/dining/menu#cocktails">
            See the drinks
          </TransitionLink>
        </Split>
        <Split
          flip
          image="/images/home/terrace.jpg"
          alt="A table on a rooftop terrace looking over the bay"
          eyebrow="Room service"
          lines={['Dinner on', 'your terrace.']}
          text={['Room service runs 24 hours too, so you can eat on your own terrace, with the bay below, whenever you like.']}
        >
          <TransitionLink className="text-link" href="/villas">
            The villas
          </TransitionLink>
        </Split>
        <DineEnquiry />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
