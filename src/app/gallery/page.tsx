'use client';

import Gallery from '../components/Gallery';
import { galleryData, Category } from '@/data/gallery';


const categories: Category[] = [
  { id: 'all', name: 'All', icon: '🏖️' },
  { id: 'accommodation', name: 'Accommodation', icon: '🏠' },
  { id: 'diving', name: 'Diving', icon: '🤿' },
  { id: 'food', name: 'Food & Dining', icon: '🍽️' }
];

export default function GalleryPage() {
  return (
    <Gallery
      items={galleryData}
      categories={categories}
      title="Our Gallery"
      subtitle="Discover the beauty of our resort through stunning photography"
    />
  );
}
