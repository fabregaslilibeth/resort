'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { diveSitesData } from '@/data/diveSites';
import DivingForm from '@/app/components/DivingForm';

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
    <div className="bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://lalagunavillas.com/wp-content/uploads/2020/03/Verde-Island-Diving-with-LLV-Divers.jpg')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-semibold mb-6 bg-gradient-to-r from-orange-200 to-primary bg-clip-text text-transparent">
              Explore Puerto Galera&apos;s Underwater Paradise
              </h1>
              <p className="mb-8 max-w-4xl mx-auto leading-relaxed">
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
          <h3 className="text-2xl text-gray-900 mb-8">Choose Your Adventure</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-white border border-primary text-primary shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
             <div className="">
            <div className="flex justify-center">
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-full px-6 py-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary transition-colors duration-300 min-w-[200px] cursor-pointer"
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
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-amber-500 rounded-t-2xl flex items-center justify-center" style={{ backgroundImage: `url(${site.image})` }}>
                { site.difficulty &&
                    <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${getDifficultyColor(site.difficulty)}`}>
                      {site.difficulty}
                    </span>
                  </div>
                }
              </div>
              
              <div className="p-4">
                <h3 className="text-gray-900 mb-2 uppercase">{site.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-2 text-sm">
                  <div>
                    <span className="text-gray-500">Depth:</span>
                    <p className="text-gray-900">{site.depth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Visibility:</span>
                    <p className="text-gray-900">{site.visibility}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {site?.marineLife?.map((animal, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-orange-600 text-xs rounded-full">
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
            <h3 className="text-2xl text-gray-900 mb-2">No dive sites found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more dive sites
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors duration-300 cursor-pointer"
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
            <h2 className="text-2xl text-gray-900 mb-6 uppercase">
              Why Choose Our Dive Sites?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-gray-900 mb-2 uppercase">Prime Location</h3>
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-gray-900 mb-2 uppercase">Expert Guides</h3>
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤿</span>
              </div>
              <h3 className="text-gray-900 mb-2 uppercase">Modern Equipment</h3>
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐠</span>
              </div>
              <h3 className="text-gray-900 mb-2 uppercase">Rich Marine Life</h3>
              <p className="text-gray-600">
                Diverse underwater ecosystem with colorful corals and marine species
              </p>
            </motion.div>
          </div>
        </div>
      </div>

       {/* Featured Day Trips Section */}
       <div className="bg-gradient-to-br from-orange-100 via-white to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl mb-6">
              VERDE ISLAND - DIVING DAY TRIPS
            </h2>
            <p className="text-gray-600max-w-4xl mx-auto">
              Experience world-class diving just minutes from our beachfront resort
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Verde Island Trip */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏝️</span>
                </div>
                <div>
                  <h3 className="text-xl">LLV DIVERS DAY TRIP TO VERDE ISLAND</h3>
                  <p className="text-gray-600">Join us for an amazing day of diving</p>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                 Experience some of the best diving anywhere in the world just a short speedboat ride from our beachfront resort in Sabang. Our team will take care of everything, it&apos;s always a memorable day.
               </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">⏱️</span>
                  <span>40 minutes travel by speedboat</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">🍖</span>
                  <span>BBQ and drinks on the beach in a tropical hut</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">👥</span>
                  <span>Minimum of 4 people and minimum certified Advanced Open Water Diver</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">🎓</span>
                  <span>Recommended to be Enriched Air Diver, Drift Diver and Deep Diver</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-xl p-4 mb-6">
                <p className="text-center text-xl uppercase">
                  Price per Diver/Snorkeler from $US90
                </p>
                <p className="text-center text-gray-600 text-sm">
                  (Excluding dives and dive/snorkel equipment costs)
                </p>
              </div>

              <button className="w-full bg-white text-orange-600 border border-orange-600 py-2 rounded-full hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                Book Verde Island Trip
              </button>
            </motion.div>

            {/* Anilao Trip */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📸</span>
                </div>
                <div>
                  <h3 className="text-xl">NEW DAY TRIP TO ANILAO</h3>
                  <p className="text-gray-600">The birthplace of diving in the Philippines</p>
                </div>
              </div>
              
               <p className="mb-6 leading-relaxed">
                 LLV Divers is proud to announce our newest day trip to Anilao, &quot;the birthplace of diving in the Philippines&quot;. A Marine Protected Sanctuary, Anilao is the best spot in the Philippines for underwater macro photography.
               </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">🐠</span>
                  <span>Marine Protected Sanctuary</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">📷</span>
                  <span>Best spot for underwater macro photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">🏊</span>
                  <span>Great dive sites: Mainit Point, Sombrero, Secret Bay</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200">🔜</span>
                  <span>Stay tuned for more details</span>
                </div>
              </div>

              <div className="bg-white/20 p-4 mb-6">
                <p className="uppercase">
                  Coming Soon
                </p>
                <p className="text-gray-600 text-sm">
                  More details and pricing to be announced
                </p>
              </div>

              <button className="w-full mx-4 bg-primary border border-white text-white py-2 rounded-full font-bold text-lg hover:bg-white/30 hover:text-primary transition-colors duration-300 cursor-pointer">
                Get Notified
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div id="book-dive-form">
            <DivingForm title="Book Your Dive" />
          </div>
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
            <div className="relative h-48 bg-gradient-to-br from-orange-400 to-amber-500 rounded-t-2xl flex items-center justify-center">
              <span className="text-6xl">🤿</span>
              <button
                onClick={() => setSelectedSite(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl text-gray-900 mb-2">{selectedSite.name}</h2>
              <p className="text-gray-600 mb-4">{selectedSite.location}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Depth</span>
                  <p className="text-gray-900">{selectedSite.depth}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Visibility</span>
                  <p className="text-gray-900">{selectedSite.visibility}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Difficulty</span>
                  <p className="text-gray-900">{selectedSite.difficulty}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <span className="text-gray-500 text-sm">Best Time</span>
                  <p className="text-gray-900">{selectedSite.bestTime}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{selectedSite.longDescription}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {selectedSite?.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="text-orange-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-3">Marine Life</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSite?.marineLife?.map((animal, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                      {animal}
                    </span>
                  ))}
                </div>
              </div>
              
             
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
