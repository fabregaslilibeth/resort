'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { spaData } from '@/data/spa';
import { ScrollTrigger } from '../components/ScrollTrigger';

export default function SpaPage() {
  const [activeCategory, setActiveCategory] = useState('massage');

  const formatPrice = (price: number) => {
    return `₱${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                {spaData.hero.title}
              </h1>
              <h2 className="text-3xl md:text-5xl font-light text-amber-600 mb-8">
                {spaData.hero.subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-amber-700 mb-4 font-medium">
                {spaData.hero.tagline}
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {spaData.hero.description}
              </p>
            </motion.div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {spaData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {spaData.categories.map((category) => (
            <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
              <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-2xl text-amber-600 font-light">
                    {category.subtitle}
                  </p>
                </div>
              </ScrollTrigger>

              {/* Services Grid */}
              {category.services && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">{service.duration60}</span>
                            <span className="text-2xl font-bold text-amber-600">
                              {formatPrice(service.price60)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">{service.duration90}</span>
                            <span className="text-2xl font-bold text-amber-600">
                              {formatPrice(service.price90)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Treatments Grid */}
              {category.treatments && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.treatments.map((treatment, index) => (
                    <motion.div
                      key={treatment.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                          {treatment.name}
                        </h3>
                        {treatment.description && (
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {treatment.description}
                          </p>
                        )}
                        {treatment.price && (
                          <div className="text-right">
                            <span className="text-3xl font-bold text-amber-600">
                              {formatPrice(treatment.price)}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Treatment Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the ultimate pampering with our curated treatment packages
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-3 gap-8">
            {spaData.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="text-4xl font-bold text-amber-600 mb-6">
                    {formatPrice(pkg.price)}
                  </div>
                  <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-full font-medium hover:bg-amber-700 transition-colors">
                    Book Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {spaData.bookingInfo.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                {spaData.bookingInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-600 text-white py-4 px-8 rounded-full font-medium hover:bg-amber-700 transition-colors text-lg">
                  Book Your Treatment
                </button>
                <button className="border-2 border-white text-white py-4 px-8 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors text-lg">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
}
