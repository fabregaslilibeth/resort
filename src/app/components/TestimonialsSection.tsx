'use client';

import { ScrollTrigger } from './ScrollTrigger';

interface TestimonialsSectionProps {
  isLoaded: boolean;
}

export function TestimonialsSection({ isLoaded }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: "⭐⭐⭐⭐⭐",
      text: "Absolutely breathtaking! The ocean view villa exceeded all our expectations. The staff was incredibly attentive and the amenities were top-notch."
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: "⭐⭐⭐⭐⭐",
      text: "Perfect family vacation spot. The kids loved the pool and beach activities. We'll definitely be back next year!"
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: "⭐⭐⭐⭐⭐",
      text: "The sunset villa was pure magic. Waking up to those views every morning was unforgettable. Highly recommend!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Guests Say
            </h2>
          </div>
        </ScrollTrigger>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollTrigger key={index} animationType="slide-bottom" delay={index * 0.2}>
              <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-2xl mb-4">{testimonial.rating}</div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </ScrollTrigger>
          ))}
        </div>
      </div>
    </section>
  );
} 