import type { Metadata } from 'next';
import { Facts } from '../components/sections/Facts';
import { Film } from '../components/sections/Film';
import { Numbered } from '../components/sections/Numbered';
import { Split } from '../components/sections/Split';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { BookCta } from '../components/site/BookCta';
import { TransitionLink } from '../components/site/Curtain';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';

export const metadata: Metadata = {
  title: 'Sustainability · Lalaguna Villas, Puerto Galera',
  description:
    'Lalaguna Villas was one of 27 pioneer awardees of the ANAHAW Philippine Sustainable Tourism Certification, and is a member of the Zero Carbon Resorts programme.',
};

const INITIATIVES = [
  {
    title: 'Zero Carbon Resorts',
    text: 'The Center for Appropriate Technology from Austria (GrAT) launched the Zero Carbon Resorts for Sustainable Tourism project in the Philippines and Thailand, to move resorts towards carbon-neutral operations through innovative practice and technology, renewable resources and resource efficiency. We’re proud to be a member, and look forward to our continuing cooperation.',
  },
  {
    title: 'Water and power',
    text: 'Our environmental awareness programme covers advanced water conservation, purification and recycling, and a state-of-the-art power management system for greater efficiency.',
  },
  {
    title: 'Save Our Spots',
    text: 'We support the Department of Tourism’s Save Our Spots (SOS) campaign, which inspires a culture of responsible, sustainable tourism to save precious environmental and cultural areas.',
  },
  {
    title: 'The reef',
    text: 'We partner with Blue Alliance Philippines on marine conservation and the protection of the coral reefs our guests come here to dive.',
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(About) Sustainability"
          lines={['We keep', 'what nature put here.']}
          lead="Being located in such a magnificent area, we’re passionate about protecting the natural environment."
          image="/images/home/reef.jpg"
          alt="Reef fish over a coral-covered wreck"
          water
        />
        <Statement
          eyebrow="Eco-conscious"
          lines={['Part of who we are,', 'not a strategy.']}
          text={[
            'While many lifestyle brands have adopted sustainability for marketing reasons, at Lalaguna Villas being eco-conscious was never part of a marketing strategy: it’s been part of our DNA from the start.',
            'We built the resort on an idyllic stretch of beach in Puerto Galera, surrounded by pristine water and some of the world’s best diving, because we truly value what nature put here.',
          ]}
        />
        <Facts
          label="Recognition"
          facts={[
            { value: '1 of 27', label: 'Pioneer awardees, ANAHAW certification 2018–2020' },
            { value: 'The only', label: 'Resort in the Puerto Galera area to hold it' },
            { value: 'Zero Carbon', label: 'Resorts for Sustainable Tourism member' },
            { value: 'SOS', label: 'Supporter of the DOT’s Save Our Spots' },
          ]}
        />
        <Split
          image="/images/home/award.jpg"
          alt="The ANAHAW Philippine Sustainable Tourism Certification award beside the pool"
          eyebrow="ANAHAW certification"
          lines={['Philippine', 'sustainable tourism.']}
          text={[
            'Lalaguna Villas is one of only 27 hotels and resorts named pioneer awardees of the ANAHAW Philippine Sustainable Tourism Certification (2018–2020), and the only resort in the Puerto Galera area to have achieved it.',
            'The certification sets out to cut the carbon impact of tourism, helping resorts save energy, water, fuel and other resources, reduce waste and emissions, and run more efficiently.',
          ]}
        />
        <Numbered
          eyebrow="What we do"
          lines={['Saving water,', 'power and the reef.']}
          intro="Our ongoing environmental awareness programme, as a member of the voluntary international Zero Carbon Resorts programme."
          items={INITIATIVES}
        />
        <Film videoId="v63kzJRmDF8" title="Our commitment to sustainability" poster="/images/home/shore.jpg" />
        <Statement
          eyebrow="A continuous process"
          lines={['Why would we not', 'want to preserve it?']}
          text={[
            'We’re grateful to be recognised for our eco-conscious work and investment, but it’s something we feel strongly about doing anyway, and we’ll keep pushing to lead the way in our region.',
            'Many of our guests feel the same, as avid divers who value the natural ecosystem here. We’re happy to give anyone interested a tour of our facilities.',
          ]}
        >
          <TransitionLink className="text-link" href="/contact">
            Ask for a tour
          </TransitionLink>
        </Statement>
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
