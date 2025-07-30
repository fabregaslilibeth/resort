'use client';

import { useState } from 'react';
import { ScrollTrigger } from './ScrollTrigger';
import { testimonialsData } from '../../data/testimonials';

interface TestimonialsSectionProps {
  isLoaded: boolean;
}

export function TestimonialsSection({ isLoaded }: TestimonialsSectionProps) {
  const testimonials = testimonialsData;
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl font-normal text-gray-900 uppercase">
              What Our Guests Say
            </h2>
          </div>
        </ScrollTrigger>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-8">
            {currentTestimonials.map((testimonial, index) => (
              <ScrollTrigger key={index} animationType="slide-bottom" delay={index * 0.2}>
                <div className={`bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-2xl mb-4 flex">
                    {[...Array(5)].map((_, starIndex) => {
                      const starValue = starIndex + 1;
                      const isFilled = testimonial.rating >= starValue;
                      const isHalfFilled = testimonial.rating >= starValue - 0.5 && testimonial.rating < starValue;
                      
                      return (
                        <div key={starIndex} className="relative w-6 h-6">
                          {/* Background gray star */}
                          <svg
                            className="w-6 h-6 text-gray-300 fill-current absolute inset-0"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          
                          {/* Filled star (full or half) */}
                          {(isFilled || isHalfFilled) && (
                            <svg
                              className="w-6 h-6 text-yellow-400 fill-current absolute inset-0"
                              viewBox="0 0 24 24"
                            >
                              {isHalfFilled ? (
                                <defs>
                                  <clipPath id={`half-star-${starIndex}`}>
                                    <rect x="0" y="0" width="12" height="24" />
                                  </clipPath>
                                </defs>
                              ) : null}
                              <path 
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                clipPath={isHalfFilled ? `url(#half-star-${starIndex})` : undefined}
                              />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.date}</div>
                  </div>
                </div>
              </ScrollTrigger>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Page Indicator */}
          {/* <div className="text-center mt-4 text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </div> */}
        </div>
      </div>
    </section>
  );
} 