'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { OffersSection } from './components/OffersSection';
import { AccommodationSection } from './components/AccommodationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsSection } from './components/AwardsSection';
import { BookDirectSection } from './components/BookDirectSection';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="">
      <HeroSection isLoaded={isLoaded} />
      <OffersSection />
      <AwardsSection isLoaded={isLoaded} />
      <AccommodationSection isLoaded={isLoaded} />
      <TestimonialsSection isLoaded={isLoaded} />
      <BookDirectSection isLoaded={isLoaded} />
    </div>
  );
}
