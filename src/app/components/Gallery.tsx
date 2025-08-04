'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GalleryItem, Category } from '@/data/gallery';

interface GalleryProps {
  items: GalleryItem[];
  categories: Category[];
  title?: string;
  subtitle?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const filterVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Gallery({ items, categories, title = "Gallery", subtitle }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? items 
    : items.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-orange-300 to-amber-600 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        variants={filterVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4 mb-12 px-4"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              selectedCategory === category.id
                ? 'bg-gradient-to-l from-orange-400 via-amber-400 to-amber-300 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="">{category.icon}</span>
            <span className="uppercase text-xs">{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover="hover"
                layout
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg mb-2">{image.title}</h3>
                    {/* <p className="text-sm opacity-90">{image.description}</p> */}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {categories.find(cat => cat.id === image.category)?.icon} {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h2>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedImage.category)?.icon} {categories.find(cat => cat.id === selectedImage.category)?.name}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 