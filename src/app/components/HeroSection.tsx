'use client';

import { ScrollTrigger } from './ScrollTrigger';
import { useState } from 'react';

interface HeroSectionProps {
  isLoaded: boolean;
}

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
        style={{ 
            backgroundImage: 'url(https://lalagunavillas.com/wp-content/uploads/2021/04/Lalaguna-Villas-Terrace.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
      {/* Background Image */}
        {/* <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://lalagunavillas.com/wp-content/uploads/2021/04/Lalaguna-Villas-Terrace.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div> */}

      {/* Hero Content - Right Aligned */}
      <ScrollTrigger animationType="slide-bottom" threshold={0.3} className="relative w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-end ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-wide">
                Dive into luxury at
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold mb-2 leading-tight text-amber-400">
                Lalaguna Villas
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                A Luxury Resort & Spa
              </p>
              <button 
                className="bg-[#FF8804] text-white px-8 py-4 rounded-[10px] text-lg font-semibold hover:bg-[#FF8804]/90 transition-all hover:scale-105"
                onClick={handleBookNow}
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      {/* Booking Form - Bottom Half */}
    <div className="absolute -bottom-20 left-0 right-0 z-20">
        <div className="w-11/12 mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
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
    </div>
    </section>
  );
} 