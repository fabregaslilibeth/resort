'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { diveSitesData } from '@/data/diveSites';

const categories = [
  { id: 'all', name: 'All Sites', icon: '🌊' },
  { id: 'reefs', name: 'Coral Reefs', icon: '🪸' },
  { id: 'wrecks', name: 'Wrecks', icon: '🚢' },
  { id: 'walls', name: 'Walls', icon: '🏔️' },
//   { id: 'advanced', name: 'Advanced', icon: '⚡' }
];

const difficulties = [
  { id: 'all', name: 'All Levels', icon: '🤿' },
  { id: 'Beginner', name: 'Beginner', icon: '🟢' },
  { id: 'Intermediate', name: 'Intermediate', icon: '🟡' },
  { id: 'Advanced', name: 'Advanced', icon: '🔴' }
];

export default function DiveSitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedSite, setSelectedSite] = useState<typeof diveSitesData[0] | null>(null);

  const filteredSites = diveSitesData.filter(site => {
    const categoryMatch = selectedCategory === 'all' || site.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || site.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                DIVE SITES
              </h1>
              <h2 className="text-2xl lg:text-3xl mb-6 text-blue-100">
                Explore Puerto Galera&apos;s Underwater Paradise
              </h2>
              <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover world-class dive sites teeming with marine life, from vibrant coral reefs 
                to dramatic walls and fascinating wrecks. Our expert guides will take you to the 
                best spots around Verde Island and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

     

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Choose Your Adventure</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
             <div className="">
            <div className="flex justify-center">
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-full px-6 py-3 pr-12 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-400 transition-colors duration-300 min-w-[200px]"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.icon} {difficulty.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* Difficulty Filter Dropdown */}
         

          {/* Results Count */}
          <div className="text-gray-600">
            Showing {filteredSites.length} of {diveSitesData.length} dive sites
          </div>
        </motion.div>

        {/* Dive Sites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedSite(site)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-t-2xl flex items-center justify-center" style={{ backgroundImage: `url(${site.image})` }}>
                { site.difficulty &&
                    <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(site.difficulty)}`}>
                      {site.difficulty}
                    </span>
                  </div>
                }
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-2 text-sm">
                  <div>
                    <span className="text-gray-500">Depth:</span>
                    <p className="font-semibold text-gray-900">{site.depth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Visibility:</span>
                    <p className="font-semibold text-gray-900">{site.visibility}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {site?.marineLife?.map((animal, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredSites.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🤿</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No dive sites found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more dive sites
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Why Choose Our Dive Sites */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Dive Sites?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best diving in Puerto Galera with our expert guides and world-class facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Centrally located with quick access to the best dive sites in Puerto Galera
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                PADI-certified professionals with years of local diving experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art diving equipment and well-maintained boats
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rich Marine Life</h3>
              <p className="text-gray-600">
                Diverse underwater ecosystem with colorful corals and marine species
              </p>
            </motion.div>
          </div>
        </div>
      </div>

       {/* Featured Day Trips Section */}
       <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              VERDE ISLAND - DIVING DAY TRIPS
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Experience world-class diving just minutes from our beachfront resort
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Verde Island Trip */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏝️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LLV DIVERS DAY TRIP TO VERDE ISLAND</h3>
                  <p className="text-blue-100">Join us for an amazing day of diving</p>
                </div>
              </div>
              
                             <p className="text-lg mb-6 leading-relaxed">
                 Experience some of the best diving anywhere in the world just a short speedboat ride from our beachfront resort in Sabang. Our team will take care of everything, it&apos;s always a memorable day.
               </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">⏱️</span>
                  <span>40 minutes travel by speedboat</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">🍖</span>
                  <span>BBQ and drinks on the beach in a tropical hut</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">👥</span>
                  <span>Minimum of 4 people and minimum certified Advanced Open Water Diver</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">🎓</span>
                  <span>Recommended to be Enriched Air Diver, Drift Diver and Deep Diver</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <p className="text-center text-2xl font-bold">
                  Price per Diver/Snorkeler from $US90
                </p>
                <p className="text-center text-blue-100 text-sm">
                  (Excluding dives and dive/snorkel equipment costs)
                </p>
              </div>

              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300">
                Book Verde Island Trip
              </button>
            </motion.div>

            {/* Anilao Trip */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📸</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">NEW DAY TRIP TO ANILAO</h3>
                  <p className="text-blue-100">The birthplace of diving in the Philippines</p>
                </div>
              </div>
              
                             <p className="text-lg mb-6 leading-relaxed">
                 LLV Divers is proud to announce our newest day trip to Anilao, &quot;the birthplace of diving in the Philippines&quot;. A Marine Protected Sanctuary, Anilao is the best spot in the Philippines for underwater macro photography.
               </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">🐠</span>
                  <span>Marine Protected Sanctuary</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">📷</span>
                  <span>Best spot for underwater macro photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">🏊</span>
                  <span>Great dive sites: Mainit Point, Sombrero, Secret Bay</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-200">🔜</span>
                  <span>Stay tuned for more details</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <p className="text-center text-lg font-semibold">
                  Coming Soon
                </p>
                <p className="text-center text-blue-100 text-sm">
                  More details and pricing to be announced
                </p>
              </div>

              <button className="w-full bg-white/20 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors duration-300 border border-white/30">
                Get Notified
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Dive?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your diving adventure with our experienced team and explore the underwater wonders of Puerto Galera
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors duration-300">
                Book a Dive Trip
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Site Details */}
      {selectedSite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-t-2xl flex items-center justify-center">
              <span className="text-6xl">🤿</span>
              <button
                onClick={() => setSelectedSite(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSite.name}</h2>
              <p className="text-gray-600 mb-4">{selectedSite.location}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Depth</span>
                  <p className="font-semibold text-gray-900">{selectedSite.depth}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Visibility</span>
                  <p className="font-semibold text-gray-900">{selectedSite.visibility}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Difficulty</span>
                  <p className="font-semibold text-gray-900">{selectedSite.difficulty}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Best Time</span>
                  <p className="font-semibold text-gray-900">{selectedSite.bestTime}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{selectedSite.longDescription}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {selectedSite?.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="text-blue-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marine Life</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSite?.marineLife?.map((animal, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                  Book This Site
                </button>
                <button 
                  onClick={() => setSelectedSite(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
