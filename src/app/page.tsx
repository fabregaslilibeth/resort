'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OffersSection } from './components/OffersSection';
import { AccommodationSection } from './components/AccommodationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsSection } from './components/AwardsSection';
import { BookDirectSection } from './components/BookDirectSection';
import { Footer } from './components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isScrolling } = useSmoothScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="">
      <Navbar isScrolling={isScrolling} />
      <HeroSection isLoaded={isLoaded} />
      <OffersSection />
      <AwardsSection isLoaded={isLoaded} />
      <AccommodationSection isLoaded={isLoaded} />
      <TestimonialsSection isLoaded={isLoaded} />
      <BookDirectSection isLoaded={isLoaded} />
      <Footer />
    </div>
  );
}
