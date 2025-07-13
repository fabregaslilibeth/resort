"use client";

import { ScrollTrigger } from "./ScrollTrigger";

interface BookDirectSectionProps {
  isLoaded: boolean;
}

export function BookDirectSection({ isLoaded }: BookDirectSectionProps) {
  return (
    <section id="book-direct" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className="grid md:grid-cols-2">
            <div
              className={`text-left mb-16 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Direct Booking Guarantee
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                We guarantee that if a lower rate is advertised for the same room type and conditions – even after you book – until 7 days before arrival, we will match that lower rate.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Direct Booking Benefits
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Direct bookings receive additional benefits which apply regardless of any promo rate:
              </p>
              
              <ul className="text-xl text-gray-600 max-w-3xl mx-auto space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  Waiver of the 3% service charge usually added to the room rate
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  Complimentary transfer to and from Sabang pier on check in and check out
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  Early check in OR late check out, subject to availability
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  Free laundry, up to 1kg per night of stay
                </li>
              </ul>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
