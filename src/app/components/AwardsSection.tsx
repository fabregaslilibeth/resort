'use client';

import { ScrollTrigger } from './ScrollTrigger';
import Image from 'next/image';
import award1 from '@/images/awards/1.png';
import award2 from '@/images/awards/2.png';

interface AwardsSectionProps {
  isLoaded: boolean;
}

export function AwardsSection({ isLoaded }: AwardsSectionProps) {
  const awards = [
    award1,
    award2,
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ACCOLADES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lalaguna Villas continues to receive the highest accolades and ratings from our trusted partners.


            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’re a TripAdvisor 2020, 2021, 2022, 2023, 2024, and 2025 Travelers’ Choice Award winner in the following categories in the Philippines: 
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top 25 Value for Money Hotels
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top 25 Small Hotels 
            </p>
          </div>
        </ScrollTrigger>
        
        <div className="grid md:grid-cols-2 bg-red-500">
        <div className={`flex justify-center items-center bg-white rounded-xl p-6 text-center hover-scale transition-all relative h-48 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${1 * 0.1}s`}}>
               <Image
                  src={award1}
                  alt="award"
                  height={400}
                  width={award2.width}
                  className="object-contain"
                />
              </div>
              <div className={`flex justify-center items-center bg-white rounded-xl p-6 text-center hover-scale transition-all relative h-48 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${2 * 0.1}s`}}>
                  <Image
                  src={award2}
                  alt="award"
                  height={500}
                  width={award2.width}
                  className="object-cover"
                />
              </div>
        </div>
      </div>
    </section>
  );
} 