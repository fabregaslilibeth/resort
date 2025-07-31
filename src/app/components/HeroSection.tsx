'use client';

// import { ScrollTrigger } from './ScrollTrigger';
import { useState } from 'react';
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

  return (
    <section
        id="home" 
        className="relative w-full min-h-[90vh] flex items-center justify-center"
        >
      {/* Video Background */}
      <video
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
      >
        <source src="https://lalagunavillas.com/wp-content/uploads/2025/07/Lalaguna-Villas-Luxury-Dive-Resort-SPA-2024.mov" type="video/quicktime" />
        <source src="https://lalagunavillas.com/wp-content/uploads/2025/07/Lalaguna-Villas-Luxury-Dive-Resort-SPA-2024.mov" type="video/mp4" />
      </video>
      
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
        {isLoaded && (
          <motion.div 
            className="absolute -bottom-20 left-0 right-0 z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 2.5, // Appears after all text animations
              ease: "easeOut"
            }}
          >
            <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
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
                        className="bg-[#FF8804] text-white px-12 py-4 rounded-[10px] text-lg font-semibold hover:bg-[#FF8804]/90 transition-all hover:scale-105"
                    >
                        Book now
                    </button>
                </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 