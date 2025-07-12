'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface VillasSectionProps {
  isLoaded: boolean;
}

export function VillasSection({ isLoaded }: VillasSectionProps) {
  return (
    <section id="villas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Luxury Villas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of meticulously designed villas, each offering the perfect blend of comfort, style, and breathtaking views
            </p>
          </div>
        </ScrollTrigger>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Villa 1 */}
          <ScrollTrigger animationType="slide-left" delay={0.1}>
            <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover-scale transition-all ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ocean View Villa</h3>
              <p className="text-gray-600 mb-6">
                Spacious 3-bedroom villa with panoramic ocean views, private infinity pool, and direct beach access.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$450/night</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </ScrollTrigger>

          {/* Villa 2 */}
          <ScrollTrigger animationType="slide-bottom" delay={0.2}>
            <div className={`bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 hover-scale transition-all ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden Villa</h3>
              <p className="text-gray-600 mb-6">
                Cozy 2-bedroom villa surrounded by tropical gardens, featuring a private terrace and outdoor dining area.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">$350/night</span>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </ScrollTrigger>

          {/* Villa 3 */}
          <ScrollTrigger animationType="slide-right" delay={0.3}>
            <div className={`bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover-scale transition-all ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunset Villa</h3>
              <p className="text-gray-600 mb-6">
                Premium 4-bedroom villa with spectacular sunset views, rooftop terrace, and luxury amenities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$650/night</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
} 