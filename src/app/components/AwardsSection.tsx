"use client";

import { ScrollTrigger } from "./ScrollTrigger";

interface AwardsSectionProps {
  isLoaded: boolean;
}

export function AwardsSection({ isLoaded }: AwardsSectionProps) {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className="grid md:grid-cols-2">
            <div
              className={`text-left mb-16 ${
                isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl font-normal text-gray-900 uppercase">
                Accolades
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lalaguna Villas is proud to be consistently recognized among the best in the Philippines.
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’ve been honored with the  
              <span className="font-bold"> TripAdvisor Travelers’ Choice Award</span> for six consecutive years —
              <span className="font-bold">2020 to 2025</span>
              — in the following categories:

              </p>
              <ol className="text-xl text-gray-600 max-w-3xl mx-auto">
                <li>Top 25 Value for Money Hotels</li>
                <li>Top 25 Small Hotels</li>
              </ol>
            </div>
            {/* <div>
              <div
                className={`flex justify-center items-center bg-white rounded-xl p-6 text-center hover-scale transition-all relative h-48 ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${2 * 0.1}s` }}
              >
                <Image src={agoda} alt="award" className="object-cover" />
              </div>
              <div
                className={`justify-center items-center bg-white rounded-xl p-6 text-center hover-scale transition-all relative h-48 ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${1 * 0.1}s` }}
              >
                <Image
                  src={award1}
                  alt="award"
                  fill
                  className="object-contain"
                />
              </div>
            </div> */}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
