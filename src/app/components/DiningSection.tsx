'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface DiningSectionProps {
  isLoaded: boolean;
}

export function DiningSection({ isLoaded }: DiningSectionProps) {
  return (
    <section id="dining" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dining Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Savor exquisite cuisine prepared by world-class chefs using the finest local ingredients
            </p>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
} 