'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const offers = [
  {
    id: 1,
    title: "Luxury Accommodation",
    description: "Experience world-class comfort in our premium villas and suites",
    image: "/images/f-accom.png"
  },
  {
    id: 2,
    title: "Fine Dining",
    description: "Savor exquisite cuisine prepared by renowned chefs",
    image: "/images/f-food.png"
  },
  {
    id: 3,
    title: "Spa & Wellness",
    description: "Rejuvenate your mind and body with our luxury spa treatments",
    image: "/images/f-spa.png"
  },
  {
    id: 4,
    title: "Diving Adventures",
    description: "Explore the underwater world with our professional diving guides",
    image: "/images/f-dive.png"
  },
  {
    id: 5,
    title: "Amenities & Services",
    description: "Enjoy premium amenities and personalized services",
    image: "/images/f-ame.png"
  },
  {
    id: 6,
    title: "Accessibility",
    description: "Inclusive experiences designed for all guests",
    image: "/images/f-acce.png"
  }
];

export function OffersSectionHoriScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100 * (offers.length - 1)]);

  return (
    <section className="relative bg-white">
      {/* Section Header - Fixed outside the scroll container */}
      <div className="sticky top-0 z-10 bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              What we offer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Link 
                href="/offers" 
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                VIEW ALL →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="relative h-screen overflow-hidden"
        style={{ height: `${offers.length * 100}vh` }}
      >
        <motion.div 
          className="flex absolute top-0 left-0 h-screen"
          style={{
            x: x,
            width: `${offers.length * 100}vw`
          }}
        >
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id} 
              className="w-screen flex-shrink-0 px-4 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-5xl w-full">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                      {offer.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {offer.description}
                    </p>
                    <motion.button
                      className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 