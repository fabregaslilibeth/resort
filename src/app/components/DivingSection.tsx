'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface DivingSectionProps {
  isLoaded: boolean;
}

export function DivingSection({ isLoaded }: DivingSectionProps) {
  return (
    <section id="diving" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Diving Adventures
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the underwater world with our professional diving services and equipment
            </p>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
} 