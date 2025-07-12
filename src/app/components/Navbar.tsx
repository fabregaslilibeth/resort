'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmoothScrollLink } from './SmoothScrollLink';

// Menu items configuration
const MENU_ITEMS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT US', href: '#about' },
  { name: 'ACCOMMODATION', href: '#accommodation' },
  { 
    name: 'DIVING', 
    href: '#diving',
    dropdown: [
      { name: 'Divers', href: '#divers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Site', href: '#site' }
    ]
  },
  { name: 'DINING', href: '#dining' },
  { 
    name: 'ACTIVITIES', 
    href: '#activities',
    dropdown: [
      { name: 'Water Activities', href: '#water-activities' },
      { name: 'Land Activities', href: '#land-activities' },
      { name: 'Adventure Tours', href: '#adventure-tours' }
    ]
  },
  { name: 'TRANSPORT', href: '#transport' },
  { name: 'CONTACT', href: '#contact' }
];

interface NavbarProps {
  isScrolling: boolean;
}

export function Navbar({ isScrolling }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('HOME');
  const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 });
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    const activeIndex = MENU_ITEMS.findIndex(item => item.name === activeSection);
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const activeElement = navRefs.current[activeIndex];
      const rect = activeElement?.getBoundingClientRect();
      const containerRect = navRefs.current[0]?.parentElement?.getBoundingClientRect();
      
      if (rect && containerRect) {
        setIndicatorStyle({
          x: rect.left - containerRect.left,
          width: rect.width
        });
      }
    }
  }, [activeSection]);

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolling ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md border-b border-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Lalaguna Villas</h1>
          </div>
          
          <div className="hidden md:flex space-x-8 relative">
            {/* Active indicator background */}
            <motion.div
              className="absolute h-8 bg-blue-100 rounded-full"
              initial={false}
              animate={{
                x: indicatorStyle.x,
                width: indicatorStyle.width
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              style={{
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
            
            {MENU_ITEMS.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                className="relative z-10"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button className={`px-4 py-2 rounded-full transition-colors flex items-center ${
                      activeSection === item.name 
                        ? 'text-blue-700 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}>
                      {item.name}
                      <svg 
                        className="w-4 h-4 ml-1 transition-transform duration-200"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <motion.div
                              key={dropdownItem.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                              style={{ 
                                transformOrigin: "left center",
                                animationDelay: `${index * 0.1}s`
                              }}
                            >
                              <SmoothScrollLink 
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                              >
                                {dropdownItem.name}
                              </SmoothScrollLink>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <SmoothScrollLink 
                    href={item.href} 
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeSection === item.name 
                        ? 'text-blue-700 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </SmoothScrollLink>
                )}
              </div>
            ))}
          </div>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover-scale">
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
} 