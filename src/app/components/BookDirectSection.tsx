"use client";

import { ScrollTrigger } from "./ScrollTrigger";

interface BookDirectSectionProps {
  isLoaded: boolean;
}

export function BookDirectSection({ isLoaded }: BookDirectSectionProps) {
  return (
    <section id="book-direct" className="py-20 bg-gray-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className="">
            <div
              className={`mb-16 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-normal text-gray-900 uppercase">
                Direct Booking Guarantee
              </h2>
              
              <p className="text-xl text-gray-600 my-6">
                We guarantee that if a lower rate is advertised for the same room type and conditions – even after you book – until 7 days before arrival, we will match that lower rate.
              </p>
              
              <p className="text-xl text-gray-600 mb-4">
                Direct bookings receive additional benefits which apply regardless of any promo rate:
              </p>
              
              <ul className="text-xl text-gray-600 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                  <svg className={`w-4 h-4 text-green-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Waiver of the 3% service charge usually added to the room rate
                </li>
                <li className="flex items-center gap-2">
                  <svg className={`w-4 h-4 text-green-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Complimentary transfer to and from Sabang pier on check in and check out
                </li>
                <li className="flex items-center gap-2">
                  <svg className={`w-4 h-4 text-green-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Early check in OR late check out, subject to availability
                </li>
                <li className="flex items-center gap-2">
                  <svg className={`w-4 h-4 text-green-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
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
