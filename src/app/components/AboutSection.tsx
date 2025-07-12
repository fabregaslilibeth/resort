'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface AboutSectionProps {
  isLoaded: boolean;
}

export function AboutSection({ isLoaded }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind Lalaguna Villas and our commitment to providing exceptional luxury experiences
            </p>
          </div>
        </ScrollTrigger>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollTrigger animationType="slide-left" delay={0.1}>
            <div className={`${isLoaded ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to create the ultimate beachfront paradise, Lalaguna Villas combines luxury, comfort, and natural beauty in perfect harmony.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and attention to detail ensures every guest experiences the vacation of their dreams.
              </p>
            </div>
          </ScrollTrigger>
          
          <ScrollTrigger animationType="slide-right" delay={0.2}>
            <div className={`bg-gradient-to-br from-blue-100 to-amber-100 rounded-2xl p-8 ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🏖️</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Luxury Redefined</h4>
                <p className="text-gray-600">
                  Experience the perfect blend of modern amenities and natural beauty in our exclusive beachfront location.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
} 