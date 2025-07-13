'use client';

import { useState } from 'react';
import { offersData, OfferSection } from '@/data/offers';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScrollTrigger } from '../components/ScrollTrigger';
import Breadcrumb from '../components/Breadcrumb';

export default function OffersPage() {
  const [selectedOffer, setSelectedOffer] = useState<OfferSection>(offersData[0]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          BC1={{ link: "/offers", text: "Offers & Services" }}
        />

        {/* Page Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-700">
              Our Offers & Services
            </h1>
        </motion.div>

        {/* Header with Image - Full Width */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedOffer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            {selectedOffer.image && (
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={selectedOffer.image}
                  alt={selectedOffer.title}
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute right-0 bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent">
                  <h2 className="text-4xl md:text-5xl font-bold text-center text-primary p-4">
                    {selectedOffer.title}
                  </h2>
                </div> */}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Dropdown Navigation */}
          <div className="lg:hidden mb-6">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <select
                value={selectedOffer.id}
                onChange={(e) => {
                  const selected = offersData.find(offer => offer.id === e.target.value);
                  if (selected) setSelectedOffer(selected);
                }}
                className="w-full px-3 py-2 text-base font-medium text-gray-700 bg-white border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
              >
                {offersData.map((offer) => (
                  <option key={offer.id} value={offer.id}>
                    {offer.title}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Desktop Sidebar Navigation */}
          <motion.div 
            className="hidden lg:block lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {offersData.map((offer, index) => (
                  <motion.button
                    key={offer.id}
                    onClick={() => setSelectedOffer(offer)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedOffer.id === offer.id
                        ? 'bg-[#ff8804] text-white shadow-md'
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
            className="w-full lg:w-2/3"
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
                  {/* Content */}
                    <div className="">
                  <h2 className="text-3xl font-bold text-primary p-4">
                    {selectedOffer.title}
                  </h2>
                </div>
                  <div className="p-8">
                    {/* {!selectedOffer.image && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {selectedOffer.title}
                      </h2>
                    )} */}
                    
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
