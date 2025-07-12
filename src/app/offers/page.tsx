'use client';

import { useState } from 'react';
import { offersData, OfferSection } from '@/data/offers';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScrollTrigger } from '../components/ScrollTrigger';

export default function OffersPage() {
  const [selectedOffer, setSelectedOffer] = useState<OfferSection>(offersData[0]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Offers & Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover everything Lalaguna Villas has to offer - from luxury accommodation to world-class diving experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
              <nav className="space-y-2">
                {offersData.map((offer, index) => (
                  <motion.button
                    key={offer.id}
                    onClick={() => setSelectedOffer(offer)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedOffer.id === offer.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">{offer.title}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ScrollTrigger>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedOffer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Header with Image */}
                  {selectedOffer.image && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={selectedOffer.image}
                        alt={selectedOffer.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white text-center px-4">
                          {selectedOffer.title}
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {!selectedOffer.image && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {selectedOffer.title}
                      </h2>
                    )}
                    
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
              </AnimatePresence>
            </ScrollTrigger>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
