'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface TransportSectionProps {
  isLoaded: boolean;
}

export function TransportSection({ isLoaded }: TransportSectionProps) {
  return (
    <section id="transport" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transportation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convenient and comfortable transportation options to enhance your stay
            </p>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
} 