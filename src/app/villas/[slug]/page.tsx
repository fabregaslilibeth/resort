'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { villas } from '../../../data/villas';
import { useParams, useRouter } from 'next/navigation';
import RoomFeatures from '../../components/RoomFeatures';
import CancellationPolicy from '../../components/CancellationPolicy';
import Breadcrumb from '../../components/Breadcrumb';

interface RoomImage {
  title: string;
  description: null;
  fileName: string;
  orderIndex: number;
}

interface RoomGallery {
  title: string;
  description: null;
  featured: {
    title: null;
    description: null;
    fileName: string;
    orderIndex: null;
  };
  images: RoomImage[];
}

interface RoomTranslation {
  locale: string;
  messages: {
    fieldName: string;
    value: string;
  }[];
}

interface RoomAttributes {
  area?: {
    from: number;
    to: number;
    unit: string;
  };
  maxOccupancy?: {
    people: number;
    extraBeds: number;
  };
  facilities?: {
    wifi: number;
    airConditioning: number;
    balcony: number;
    television: number;
    parkingLot: number;
  };
}

interface Room {
  id: number;
  gallery: RoomGallery;
  translations: RoomTranslation[];
  attributes?: RoomAttributes;
}

export default function RoomDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreenGallery, setIsFullscreenGallery] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const roomId = parseInt(params.slug as string);
    const foundRoom = villas.find(r => r.id === roomId);
    
    if (foundRoom) {
      setRoom(foundRoom);
    } else {
      router.push('/villas');
    }
    setIsLoading(false);
  }, [params.slug, router]);

  const getRoomTranslation = (room: Room, fieldName: string): string => {
    const translation = room.translations.find(t => t.locale === 'en');
    if (!translation) return '';
    
    const message = translation.messages.find(m => m.fieldName === fieldName);
    return message ? message.value : '';
  };

  const nextImage = () => {
    if (room && room.gallery.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === room.gallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (room && room.gallery.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? room.gallery.images.length - 1 : prev - 1
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="flex space-x-2 mb-8">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-4"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            
            {/* Hero skeleton */}
            <div className="h-[70vh] bg-gray-200 rounded-lg mb-16"></div>
            
            {/* Content skeleton */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!room) {
    return null;
  }

  const roomName = getRoomTranslation(room, 'name');
  const roomDescription = getRoomTranslation(room, 'description');
  const totalImages = room.gallery.images.length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'amenities', label: 'Amenities', icon: '✨' },
    { id: 'policies', label: 'Policies', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto mt-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto py-6">
        <Breadcrumb 
          BC1={{ link: '/villas', text: 'Villas' }}
          BC2={{ link: `/villas/${room.id}`, text: roomName }}
        />
      </div>

      {/* Hero Section with Enhanced Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[80vh] bg-gray-900 overflow-hidden"
      >
        {totalImages > 0 && (
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/1200x0/${room.gallery.images[selectedImageIndex].fileName}`}
                alt={room.gallery.images[selectedImageIndex].title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            {totalImages > 1 && (
              <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">
                  {selectedImageIndex + 1} / {totalImages}
                </span>
              </div>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreenGallery(true)}
              className="absolute top-6 left-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        )}

        {/* Room Name and Quick Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {roomName}
            </motion.h1>
            
            {/* Quick Room Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-white/90"
            >
              {room.attributes?.area && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                  </svg>
                  <span>{room.attributes.area.from}-{room.attributes.area.to} {room.attributes.area.unit}</span>
                </div>
              )}
              {room.attributes?.maxOccupancy && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Up to {room.attributes.maxOccupancy.people} guests</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between py-4">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Save</span>
              </button>
              <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden py-4">
            {/* Mobile Tabs */}
            <div className="flex space-x-2 mb-4 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Save</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">About this room</h2>
                    <div 
                      className="text-gray-600 leading-relaxed text-lg prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: roomDescription }}
                    />
                  </div>

                  {/* Room Attributes Cards */}
                  {room.attributes && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {room.attributes.area && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900">Room Size</h4>
                          </div>
                          <p className="text-gray-700 text-lg font-medium">
                            {room.attributes.area.from} - {room.attributes.area.to} {room.attributes.area.unit}
                          </p>
                        </motion.div>
                      )}
                      
                      {room.attributes.maxOccupancy && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900">Occupancy</h4>
                          </div>
                          <p className="text-gray-700 text-lg font-medium">
                            Up to {room.attributes.maxOccupancy.people} people
                            {room.attributes.maxOccupancy.extraBeds > 0 && (
                              <span className="text-gray-500"> + {room.attributes.maxOccupancy.extraBeds} extra beds</span>
                            )}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'amenities' && (
                <motion.div
                  key="amenities"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Room Amenities</h2>
                  <RoomFeatures />
                </motion.div>
              )}

              {activeTab === 'policies' && (
                <motion.div
                  key="policies"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CancellationPolicy />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            {/* Room Images Horizontal Gallery */}
            {totalImages > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Room Gallery</h3>
                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4">
                    {room.gallery.images.slice(0, 8).map((image, index) => (
                      <motion.div
                        key={image.fileName}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="group cursor-pointer flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <div className={`relative overflow-hidden rounded-lg shadow-lg ${
                          selectedImageIndex === index 
                            ? 'ring-2 ring-blue-500 ring-offset-2' 
                            : 'hover:shadow-xl'
                        }`}>
                          <img
                            src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/400x300/${image.fileName}`}
                            alt={image.title}
                            className="w-48 h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quick Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
              <p className="text-gray-600 mb-6">Experience luxury and comfort in this beautiful room.</p>
              <button className="w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-medium transition-colors mb-3">
                Check Availability
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-primary py-3 px-6 rounded-lg font-medium border border-primary transition-colors">
                Contact Us
              </button>
            </motion.div>

            {/* Room Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Room Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free WiFi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Air Conditioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Daily Cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-100 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 Room Service</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {isFullscreenGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }}
                  src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/1200x0/${room.gallery.images[selectedImageIndex].fileName}`}
                  alt={room.gallery.images[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
              </AnimatePresence>
              
              {/* Close Button */}
              <button
                onClick={() => setIsFullscreenGallery(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {totalImages > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-6 py-3 rounded-full">
                  <span className="text-lg font-medium">
                    {selectedImageIndex + 1} / {totalImages}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 