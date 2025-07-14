'use client';

import { ScrollTrigger } from './ScrollTrigger';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { offersData, OfferSection } from '@/data/offers';
import { useState } from 'react';

export function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<OfferSection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOfferClick = (offer: OfferSection) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedOffer(null), 300);
  };

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
              className="text-3xl font-bold text-gray-900"
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
            </motion.div>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-3 auto-rows-[180px]">
            {offersData.slice(0, 10).map((offer, index) => {
              // Define exact card sizes for tight bento grid
              const cardSizes = [
                { cols: 4, rows: 2 }, // Large card (4x2)
                { cols: 2, rows: 1 }, // Small card (2x1)
                { cols: 2, rows: 1 }, // Small card (2x1)
                { cols: 2, rows: 2 }, // Wide card (2x1)
                { cols: 1, rows: 2 }, // Tall card (2x2)
                { cols: 4, rows: 1 }, // Small card (2x1)
                { cols: 2, rows: 2 }, // Wide card (2x1)
                { cols: 2, rows: 1 }, // Small card (2x1)
                { cols: 2, rows: 1 }, // Small card (2x1)
                { cols: 4, rows: 1 }, // Small card (2x1)
                { cols: 4, rows: 1 }, // Wide card (2x1)
                { cols: 4, rows: 1 }, // Small card (2x1)
              ];
              
              const size = cardSizes[index % cardSizes.length];
              const isLarge = size.rows > 1 || size.cols > 2;
              
              return (
                <motion.div
                  key={offer.id}
                  className={`group cursor-pointer relative overflow-hidden rounded-lg shadow-md ${
                    isLarge ? 'md:col-span-4 lg:col-span-4' : 'md:col-span-2 lg:col-span-2'
                  } ${size.rows > 1 ? 'row-span-2' : 'row-span-1'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOfferClick(offer)}
                >
                  <Image
                    src={offer.image || '/images/f-ame.png'}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className={`font-bold text-white mb-1 ${
                      isLarge ? 'text-lg md:text-xl' : 'text-sm md:text-base'
                    }`}>
                      {offer.title}
                    </h3>
                    <p className={`text-white/90 line-clamp-2 ${
                      isLarge ? 'text-sm' : 'text-xs'
                    }`}>
                      {offer.content.substring(0, isLarge ? 120 : 60)}...
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-2 flex items-center text-white/80 text-xs">
                      <span>View details</span>
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-200" />
                </motion.div>
              );
            })}
          </div>
        </ScrollTrigger>

        {/* Modal Overlay */}
        <AnimatePresence>
          {isModalOpen && selectedOffer && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />
              
              {/* Modal Content */}
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Hero Image */}
                {selectedOffer.image && (
                  <div className="relative h-80 w-full">
                    <Image
                      src={selectedOffer.image}
                      alt={selectedOffer.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {selectedOffer.title}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                      {selectedOffer.content}
                    </div>
                  </div>

                  {/* Features List */}
                  {selectedOffer.features && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Room Comforts & Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedOffer.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services List */}
                  {selectedOffer.services && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Services</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedOffer.services.map((service, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 