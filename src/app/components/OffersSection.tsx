'use client';

import { ScrollTrigger } from './ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { offersData } from '@/data/offers';

// Take first 6 offers for the homepage preview
const previewOffers = offersData.slice(0, 6);

export function OffersSection() {
  return (
    <section className="py-16 px-4 bg-white pt-32">
      <div className="max-w-7xl mx-auto">
        <ScrollTrigger>
          {/* Section Header */}
          <motion.div 
            className="flex justify-between items-center mb-12"
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

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewOffers.map((offer, index) => (
              <motion.div 
                key={offer.id} 
                className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={offer.image || '/images/f-ame.png'}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pt-4 group-hover:p-4 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offer.content.split('\n')[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
} 