'use client';

import { useState } from 'react';
import { ScrollTrigger } from '../components/ScrollTrigger';
import { villas } from '../../data/villas';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Removed: import Link from 'next/link';

interface RoomsSectionProps {
  isLoaded: boolean;
}

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

export default function RoomsPage() {
  return <Villas isLoaded={true} />;
}

export function Villas({ isLoaded }: RoomsSectionProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [roomId: number]: number }>({});

  const getRoomTranslation = (room: Room, fieldName: string): string => {
    const translation = room.translations.find(t => t.locale === 'en');
    if (!translation) return '';
    
    const message = translation.messages.find(m => m.fieldName === fieldName);
    return message ? message.value : '';
  };

  const nextImage = (roomId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (roomId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: prev[roomId] === 0 ? totalImages - 1 : (prev[roomId] || 0) - 1
    }));
  };

  const goToImage = (roomId: number, index: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: index
    }));
  };

  // Remove handleRoomClick function and its usage on the card

  return (
    <section id="accommodation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
          <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accommodation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of luxurious accommodations designed for your comfort and relaxation
            </p>
          </div>
        </ScrollTrigger>

        <div className="space-y-8">
          {villas.map((room: Room, roomIndex: number) => {
            const roomName = getRoomTranslation(room, 'name');
            const roomDescription = getRoomTranslation(room, 'description');
            const currentImageIndex = activeImageIndex[room.id] || 0;
            const totalImages = room.gallery.images.length;

            return (
              <ScrollTrigger 
                key={room.id} 
                animationType="slide-bottom" 
                threshold={0.2}
                delay={roomIndex * 0.1}
              >
                <div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  // Removed onClick={() => handleRoomClick(room)}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image Gallery */}
                    <div className="lg:col-span-1 relative bg-gray-900 h-[300px]">
                      {totalImages > 0 && (
                        <>
                          {/* Main Image */}
                          <div className="relative h-full">
                            <Link href={`/villas/${room.id}`} scroll={false}>
                              <motion.img
                                layoutId={`room-image-${room.id}`}
                                src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/400x0/${room.gallery.images[0].fileName}`}
                                alt={room.gallery.images[0].title}
                                className="w-full h-full object-cover cursor-pointer"
                              />
                            </Link>
                            
                            {/* Navigation Arrows */}
                            {totalImages > 1 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage(room.id, totalImages);
                                  }}
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage(room.id, totalImages);
                                  }}
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>

                          {/* Dot Indicators */}
                          {totalImages > 1 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                              {room.gallery.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    goToImage(room.id, index);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex 
                                      ? 'bg-white' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Room Details */}
                    <div className="lg:col-span-2 p-6">
                      <div className="space-y-4">
                        {/* Room Name */}
                        <h3 className="text-2xl font-bold text-gray-900">{roomName}</h3>
                        
                        {/* Room Description */}
                        <div 
                          className="text-gray-600 leading-relaxed line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: roomDescription }}
                        />

                        {/* View Details Link */}
                        <div className="pt-2">
                          <a href={`/villas/${room.id}`} className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                            View Details →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            );
          })}
        </div>

      </div>
    </section>
  );
} 