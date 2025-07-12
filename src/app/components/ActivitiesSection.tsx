'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface ActivitiesSectionProps {
  isLoaded: boolean;
}

export function ActivitiesSection({ isLoaded }: ActivitiesSectionProps) {
  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Activities & Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From water sports to land adventures, discover exciting activities for all ages
            </p>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
} 