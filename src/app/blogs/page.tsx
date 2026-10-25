import type { Metadata } from 'next';
import { PostList } from '../components/journal/PostList';
import { posts } from '../components/journal/posts';
import { LinkCards } from '../components/sections/LinkCards';
import { BackToTop } from '../components/site/BackToTop';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/about.css';

export const metadata: Metadata = {
  title: 'Journal · Lalaguna Villas & LLV Divers, Puerto Galera',
  description: 'Team profiles, dive-site guides and news from LLV Divers and Lalaguna Villas in Sabang, Puerto Galera.',
};

export default function JournalPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(About) Journal"
          lines={['Notes from', 'the dive centre.']}
          lead="Team profiles, dive-site guides and news from LLV Divers and Lalaguna Villas."
          image="/images/home/kitting-up.jpg"
          alt="Divers kitting up on the boat"
        />
        <section className="journal" aria-label="Posts">
          <PostList posts={posts} lead />
        </section>
        <LinkCards
          eyebrow="Diving at Lalaguna"
          lines={['Read enough?', 'Get wet.']}
          cards={[
            { href: '/dive/dive-sites', image: '/images/home/reef.jpg', title: 'Dive sites', text: 'Every site, with depths and levels' },
            { href: '/dive/diving-courses', image: '/images/home/divers.jpg', title: 'Diving courses', text: 'Fun dives, and PADI from Bubblemaker up' },
            { href: '/dive/llv-divers', image: '/images/home/dive-boat.jpg', title: 'LLV Divers', text: 'The team, the boats and the gear' },
          ]}
        />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
