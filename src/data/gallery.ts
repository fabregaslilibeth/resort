export interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: string;
    title: string;
    description: string;
  }
  

export interface Category {
    id: string;
    name: string;
    icon: string;
  }
  
// Gallery data with categories
export const galleryData: GalleryItem[] = [
    // Accommodation images
    {
      id: 1,
      src: '/images/r1.png',
      alt: 'Luxury Villa 1',
      category: 'accommodation',
      title: 'Ocean View Villa',
      description: 'Spacious villa with panoramic ocean views'
    },
    {
      id: 2,
      src: '/images/r2.png',
      alt: 'Luxury Villa 2',
      category: 'accommodation',
      title: 'Garden Villa',
      description: 'Private villa surrounded by tropical gardens'
    },
    {
      id: 3,
      src: '/images/r3.png',
      alt: 'Luxury Villa 3',
      category: 'accommodation',
      title: 'Beachfront Villa',
      description: 'Direct access to pristine white sand beaches'
    },
    {
      id: 4,
      src: '/images/r4.png',
      alt: 'Luxury Villa 4',
      category: 'accommodation',
      title: 'Sunset Villa',
      description: 'Perfect spot to watch breathtaking sunsets'
    },
    // Diving images
    {
      id: 5,
      src: '/images/f-dive.png',
      alt: 'Diving Experience',
      category: 'diving',
      title: 'Coral Reef Exploration',
      description: 'Discover vibrant marine life and coral reefs'
    },
    {
      id: 6,
      src: '/images/f-acce.png',
      alt: 'Diving Equipment',
      category: 'diving',
      title: 'Professional Diving Gear',
      description: 'Top-quality equipment for safe diving adventures'
    },
    {
      id: 7,
      src: '/images/f-ame.png',
      alt: 'Diving Training',
      category: 'diving',
      title: 'PADI Certification',
      description: 'Learn from certified diving instructors'
    },
    // Food images
    {
      id: 8,
      src: '/images/f-food.png',
      alt: 'Gourmet Dining',
      category: 'food',
      title: 'Fine Dining Experience',
      description: 'Exquisite cuisine prepared by world-class chefs'
    },
    {
      id: 9,
      src: '/images/f-spa.png',
      alt: 'Spa and Wellness',
      category: 'food',
      title: 'Wellness Cuisine',
      description: 'Healthy and nutritious spa cuisine'
    },
    {
      id: 10,
      src: '/images/f-accom.png',
      alt: 'Beach Dining',
      category: 'food',
      title: 'Beachside Dining',
      description: 'Romantic dining experience by the ocean'
    }
  ];