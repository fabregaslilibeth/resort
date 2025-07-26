'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { ScrollTrigger } from '../../components/ScrollTrigger';
import { menuItem } from '../../../data/menu';
import { menuCategories } from '../../../data/menuCategories';

// Utility to get sorted categories based on menuCategories order
const getSortedCategories = () => {
  return menuCategories
    .sort((a, b) => a.order - b.order)
    .map(category => category.name);
};

// Utility to get category info from menuCategories
const getCategoryInfo = (categoryName: string) => {
  return menuCategories.find(cat => cat.name === categoryName) || {
    name: categoryName,
    order: 999,
    icon: '🍽️',
    withImage: false,
    isFeatured: false
  };
};

export default function MenuPage() {
  const categories = getSortedCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Intersection Observer to track which category is currently visible
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.getAttribute('data-category');
          if (category) {
            setActiveCategory(category);
          }
        }
      });
    }, observerOptions);

    // Observe all category sections (always observe all, not just filtered ones)
    categories.forEach(category => {
      const element = document.getElementById(`category-${category}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    
    if (category === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveCategory('All');
    } else {
      // First, make sure all categories are visible by setting filter to 'All'
      setSelectedCategory('All');
      
      // Then scroll to the target category after a brief delay to ensure elements are rendered
      setTimeout(() => {
        const element = document.getElementById(`category-${category}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveCategory(category);
        }
      }, 100);
    }
  };

  const filteredCategories = selectedCategory === 'All' ? categories : categories.filter(cat => cat === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Category Filter */}
      <div className="fixed right-6 top-30 transform -translate-y-1/2 z-50 border-2 border-primary rounded-3xl">
        <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white shadow-lg rounded-3xl px-4 py-3 flex items-center gap-3 hover:shadow-xl transition-all duration-300 border border-gray-200 min-w-[200px]"
            >
              <span className="text-lg">
                {activeCategory === 'All' ? '🍽️' : getCategoryInfo(activeCategory).icon}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {activeCategory === 'All' ? 'All Categories' : activeCategory}
              </span>
            <svg 
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-xl rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
              <div className="py-2">
                <button
                  onClick={() => scrollToCategory('All')}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                    activeCategory === 'All' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  <span>🍽️</span>
                  All Categories
                </button>
                {categories.map(category => {
                  const categoryInfo = getCategoryInfo(category);
                  return (
                    <button
                      key={category}
                      onClick={() => scrollToCategory(category)}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${
                        activeCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{categoryInfo.icon}</span>
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Breadcrumb 
          BC1={{ link: "/dining", text: "Dining" }}
          BC2={{ link: "/dining/menu", text: "Menu" }}
        />
      </div>
      
      {/* Featured Items by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => {
            const categoryInfo = getCategoryInfo(category);
            const items = menuItem.filter(item => item.category === category);
            
            // Determine how many items to show with images based on withImage setting
            const itemsWithImages = categoryInfo.withImage ? items.slice(0, 3) : [];
            const remainingItems = categoryInfo.withImage ? items.slice(3) : items;
            
            if (items.length === 0) return null;
            
            return (
              <div key={category} id={`category-${category}`} data-category={category} className="mb-20">
                <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
                  <div className="mb-12">
                    <h2 className="text-3xl mb-4 uppercase">{category}</h2>
                    <div className="w-36 h-[2px] bg-primary mb-4"></div>
                    <p className="text-gray-600">Our featured {category.toLowerCase()} selections</p>
                  </div>
                </ScrollTrigger>

                {/* Items with images (if withImage is true) */}
                {categoryInfo.withImage && itemsWithImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
                    {itemsWithImages.map((item, itemIndex) => (
                      <motion.div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="h-48 overflow-hidden">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                              <span className="text-4xl">{categoryInfo.icon}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg text-gray-900 uppercase">{item.title}</h4>
                            {item.price !== undefined && (
                              <span className="">
                                {item.price === 0 ? 'POA' : item.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.content}</p>
                          {item.code && (
                            <span className="text-xs text-gray-500 font-mono">{item.code}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* All items in list format */}
                <div className="">
                  <div className="space-y-3">
                    {remainingItems.map(item => (
                      <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-3 last:border-b-0">
                        <div className="flex-1">
                         <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900 uppercase">{item.title}</span>
                        {item.code && <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">{item.code}</span>}
                      </div>
                          <p className="text-gray-600 text-sm">{item.content}</p>
                        </div>
                        <div className="text-right min-w-[80px] pl-4 pt-1">
                          {item.price !== undefined && (
                            <span className="text-sm">{item.price === 0 ? 'POA' : item.price.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}