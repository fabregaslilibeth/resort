'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Menu items configuration
const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us',
    href: '/about',
    dropdown: [
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Blog', href: '/blog' }
    ]
  },
  { name: 'Villas', href: '/villas' },
  { 
    name: 'Diving', 
    href: '/diving',
    dropdown: [
      { name: 'LLV Divers', href: '/dive/llv-divers' },
      { name: 'Go Professional', href: '/dive/padi-divemaster-internship' },
      { name: 'Diving Courses', href: '/diving-courses' },
      { name: 'Dive Sites', href: '/dive-sites' },
      { name: 'LLV Charters', href: '/llv-charters' },
      { name: 'LLV Catamaran', href: '/llv-catamaran' },
      { name: 'Diving Blog', href: '/diving-blog' },
    ]
  },
  {
    name: 'Dining', 
    href: '/dining',
    dropdown: [
      { name: 'Menu', href: '/menu' },
      { name: 'Chinese Menu', href: '/chinese-menu' },
    ]
  },
  { 
    name: 'Activities', 
    href: '/activities',
    dropdown: [
      { name: 'Spa', href: '/spa' },
      { name: 'Water & Land Activities', href: '/water-land-activities' },
      { name: 'LLV Charters', href: '/llv-charters' },
      { name: 'LLV Catamaran', href: '/llv-catamaran' },
    ]
  },
  { name: 'Transport', href: '/transport' },
  { name: 'Contact', href: '/contact' }
];

interface NavbarProps {
  isScrolling: boolean;
}

export function Navbar({ isScrolling }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdownOpen(null);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolling 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
          : 'bg-white/80 backdrop-blur-lg'
      }`}>
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Lalaguna Villas
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <div className="relative">
                      <button className="px-6 py-3 transition-all duration-500 flex items-center gap-2 font-medium text-gray-700 hover:text-primary hover:bg-gray-50/80">
                        {item.name}
                        <motion.svg 
                          className="w-4 h-4 transition-transform duration-500"
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            className="absolute top-full left-0 mt-4 w-52 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-100/50 overflow-hidden"
                          >
                            <div className="p-3">
                              {item.dropdown.map((dropdownItem, index) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.05,
                                    ease: [0.4, 0, 0.2, 1]
                                  }}
                                >
                                  <Link 
                                    href={dropdownItem.href}
                                    className="block px-4 py-1 text-gray-700 hover:text-white hover:bg-primary transition-all duration-500 rounded-2xl group/item"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium">{dropdownItem.name}</span>
                                      <motion.div
                                        className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover/item:opacity-100 transition-all duration-500"
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1.5 }}
                                      />
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="px-6 py-3 rounded-2xl transition-all duration-500 font-medium relative text-gray-700 hover:text-primary hover:bg-gray-50/80"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-primary text-white px-8 py-3 rounded-2xl hover:bg-secondary transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                BOOK NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-2xl hover:bg-gray-100/80 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-gray-700 block mb-1.5"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-gray-700 block mb-1.5"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-gray-700 block"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-8 py-2 border-b border-gray-100/50">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={closeMobileMenu}
                className="p-3 rounded-2xl hover:bg-gray-100/80 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6">
              {MENU_ITEMS.map((item) => (
                <div key={item.name} className="mb-3">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between px-4 py-1 text-left text-gray-700 hover:bg-gray-50/80 rounded-2xl transition-all duration-300 font-medium"
                      >
                        <span>{item.name}</span>
                        <motion.svg 
                          className="w-5 h-5 transition-transform duration-300"
                          animate={{ rotate: mobileDropdownOpen === item.name ? 180 : 0 }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {mobileDropdownOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 space-y-2 mt-2">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <motion.div
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: dropdownIndex * 0.05 
                                  }}
                                >
                                  <Link 
                                    href={dropdownItem.href}
                                    onClick={closeMobileMenu}
                                    className="block px-4 py-1 text-gray-600 hover:text-primary hover:bg-primary transition-all duration-300"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-1 text-gray-700 hover:bg-gray-50/80 rounded-2xl transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="mt-8 p-4">
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-500 font-semibold shadow-lg">
                  BOOK NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 