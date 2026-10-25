import type { Metadata } from 'next';
import { PhotoGallery } from '../components/gallery/PhotoGallery';
import { photos } from '../components/gallery/photos';
import { BackToTop } from '../components/site/BackToTop';
import { BookCta } from '../components/site/BookCta';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/about.css';

export const metadata: Metadata = {
  title: 'Gallery · Lalaguna Villas, Puerto Galera',
  description: 'Photos of Lalaguna Villas: the resort above Small Lalaguna Beach, every villa, the dive boats and reef, and the food.',
};

export default function GalleryPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(About) Gallery"
          lines={['From the hillside', 'to the reef.']}
          lead="Stills from our film and photos of every villa: the resort above Small Lalaguna Beach, the boats, the reef and the table."
          image="/images/home/aerial-hills.jpg"
          alt="The white villas of Lalaguna on the green hillside above Sabang, from the air"
        />
        <PhotoGallery photos={photos} />
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
