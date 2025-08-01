'use client';

// import { ScrollTrigger } from './ScrollTrigger';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  isLoaded: boolean;
}

// Component for wave text animation
// function WaveText({ text, className, delay = 0, staggerDelay = 0.05 }: { 
//   text: string; 
//   className: string; 
//   delay?: number;
//   staggerDelay?: number;
// }) {
//   return (
//     <div className="overflow-hidden">
//       <motion.div 
//         className={className}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay }}
//       >
//         {text.split('').map((char, index) => (
//           <motion.span
//             key={index}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 0.3,
//               delay: delay + (index * staggerDelay),
//               ease: "easeOut"
//             }}
//             className="inline-block"
//           >
//             {char === ' ' ? '\u00A0' : char}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

export function HeroSection({ isLoaded }: HeroSectionProps) {
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0
  });

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const roomTypes = [
    'Ocean View Villa',
    'Beachfront Villa',
    'Garden Villa',
    'Presidential Suite',
    'Family Villa'
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookNow = () => {
    // Handle booking logic here
    console.log('Booking data:', bookingData);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded and ready to play');
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.log('Video failed to load');
    setVideoError(true);
    setVideoLoaded(true); // Stop loading even if there's an error
  };

  const handleCanPlay = () => {
    console.log('Video can play');
    setVideoLoaded(true);
  };

  // Fallback timeout to hide loader after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        console.log('Video loading timeout - hiding loader');
        setVideoLoaded(true);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [videoLoaded]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section
          id="home" 
          className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[90vh] flex items-center justify-center"
          >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          onLoadedData={handleVideoLoad}
          onCanPlay={handleCanPlay}
          onError={handleVideoError}
        >
          <source src="https://lalagunavillas.com/wp-content/uploads/2025/07/Lalaguna-Villas-Luxury-Dive-Resort-SPA-2024.mov" type="video/quicktime" />
          <source src="https://lalagunavillas.com/wp-content/uploads/2025/07/Lalaguna-Villas-Luxury-Dive-Resort-SPA-2024.mov" type="video/mp4" />
        </video>

        {/* Full Page Loader */}
        <AnimatePresence>
          {!videoLoaded && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative text-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>

                {/* Main Loading Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Logo/Icon Animation */}
                  <div className="relative mb-8">
                    <motion.div
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <span className="text-2xl font-bold text-amber-600">LV</span>
                      </motion.div>
                    </motion.div>
                    
                    {/* Orbiting dots */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-amber-400 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${i * 90}deg) translateX(40px)`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Text Animations */}
                  <motion.h2
                    className="text-white text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-white to-amber-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Welcome to Lalaguna Villas
                  </motion.h2>
                  
                  <motion.p
                    className="text-white/80 text-lg md:text-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Loading your luxury experience...
                  </motion.p>

                  {/* Progress Bar */}
                  <div className="w-64 mx-auto mb-6">
                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                          delay: 0.8
                        }}
                      />
                    </div>
                  </div>

                  {/* Loading Dots */}
                  <motion.div className="flex justify-center space-x-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-amber-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-10 left-10 text-amber-400/30 text-4xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10 text-blue-400/30 text-3xl"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🌊
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-10 text-green-400/30 text-2xl"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  🏖️
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fallback Background Image if Video Fails */}
        {videoError && (
          <div 
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              backgroundImage: 'url(/images/r1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Hero Content - Right Aligned */}
        {/* <ScrollTrigger animationType="slide-bottom" threshold={0.3} className="relative w-full">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <AnimatePresence>
                {isLoaded && (
                  <motion.div 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-2">
                      <WaveText 
                        text="Dive into luxury at"
                        className="text-4xl leading-wide"
                        delay={0.5}
                        staggerDelay={0.03}
                      />
                    </div>

                    <div className="mb-2">
                      <WaveText 
                        text="Lalaguna Villas"
                        className="text-5xl md:text-9xl leading-tight text-amber-400 font-whisper"
                        delay={1.0}
                        staggerDelay={0.02}
                      />
                    </div>

                    <div className="mb-2">
                      <WaveText 
                        text="A Luxury Resort & Spa"
                        className="text-4xl leading-wide text-right font-"
                        delay={1.5}
                        staggerDelay={0.03}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollTrigger> */}

        {/* Booking Form - Bottom Half with Dissolve Effect */}
        <AnimatePresence>
          {isLoaded && videoLoaded && (
            <motion.div 
              className="absolute -bottom-60 md:-bottom-20 left-0 right-0 z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 2.5, // Appears after all text animations
                ease: "easeOut"
              }}
            >
              {/* Desktop Booking Form (lg and above) */}
              <div className="hidden lg:block mx-20 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                <div className="grid grid-cols-6 gap-4 items-end">
                  {/* Room Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                    <select 
                      value={bookingData.roomType}
                      onChange={(e) => handleInputChange('roomType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    >
                      <option value="">Select Room Type</option>
                      {roomTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Check-in Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <input 
                      type="date"
                      value={bookingData.checkin}
                      onChange={(e) => handleInputChange('checkin', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <input 
                      type="date"
                      value={bookingData.checkout}
                      onChange={(e) => handleInputChange('checkout', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Adults */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                    <input 
                      type="number"
                      min="1"
                      value={bookingData.adults}
                      onChange={(e) => handleInputChange('adults', parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                    <input 
                      type="number"
                      min="0"
                      value={bookingData.children}
                      onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Book Now Button */}
                  <div className="mt-6 text-center">
                    <button 
                      onClick={handleBookNow}
                      className="bg-[#FF8804] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FF8804]/90 transition-all hover:scale-105"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Booking Section (md and below) */}
              <div className="lg:hidden max-w-7xl mx-auto px-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    {/* Check-in Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                      <input 
                        type="date"
                        value={bookingData.checkin}
                        onChange={(e) => handleInputChange('checkin', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                      />
                    </div>

                    {/* Check-out Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                      <input 
                        type="date"
                        value={bookingData.checkout}
                        onChange={(e) => handleInputChange('checkout', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                      />
                    </div>

                    {/* Book Now Button */}
                    <div className="text-center">
                      <button 
                        onClick={handleOpenModal}
                        className="w-full bg-[#FF8804] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#FF8804]/90 transition-all hover:scale-105"
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl p-6 w-full max-w-2xl md:max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Stay</h2>
                <p className="text-gray-600">Select your preferences and dates</p>
              </div>

              {/* Booking Form */}
              <div className="space-y-4">
                {/* Room Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                  <select 
                    value={bookingData.roomType}
                    onChange={(e) => handleInputChange('roomType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                  >
                    <option value="">Select Room Type</option>
                    {roomTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Check-in Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <input 
                      type="date"
                      value={bookingData.checkin}
                      onChange={(e) => handleInputChange('checkin', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <input 
                      type="date"
                      value={bookingData.checkout}
                      onChange={(e) => handleInputChange('checkout', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Adults */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                    <input 
                      type="number"
                      min="1"
                      value={bookingData.adults}
                      onChange={(e) => handleInputChange('adults', parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                    <input 
                      type="number"
                      min="0"
                      value={bookingData.children}
                      onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8804] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="pt-4">
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-[#FF8804] text-white px-12 py-4 rounded-[10px] text-lg font-semibold hover:bg-[#FF8804]/90 transition-all hover:scale-105"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 