'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface AmenitiesSectionProps {
  isLoaded: boolean;
}

export function AmenitiesSection({ isLoaded }: AmenitiesSectionProps) {
  const amenities = [
    { icon: "🏊‍♂️", title: "Infinity Pool", desc: "Heated pool with ocean views" },
    { icon: "🍽️", title: "Fine Dining", desc: "Gourmet restaurant & room service" },
    { icon: "🧘‍♀️", title: "Spa & Wellness", desc: "Relaxing treatments & yoga" },
    { icon: "🏖️", title: "Private Beach", desc: "Exclusive beach access" },
    { icon: "🚤", title: "Water Sports", desc: "Kayaking, snorkeling & more" },
    { icon: "🎾", title: "Sports Court", desc: "Tennis & basketball facilities" },
    { icon: "🚗", title: "Concierge", desc: "24/7 personalized service" },
    { icon: "📶", title: "High-Speed WiFi", desc: "Complimentary internet access" }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy exclusive access to our premium facilities and services designed to enhance your stay
            </p>
          </div>
        </ScrollTrigger>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <ScrollTrigger key={index} animationType="scale" delay={index * 0.1}>
              <div className={`bg-white rounded-xl p-6 text-center hover-scale transition-all ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            </ScrollTrigger>
          ))}
        </div>
      </div>
    </section>
  );
} 