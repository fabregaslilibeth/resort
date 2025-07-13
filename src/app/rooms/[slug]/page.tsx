'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { rooms } from '../../../data/rooms';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
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

  useEffect(() => {
    const roomId = parseInt(params.slug as string);
    const foundRoom = rooms.find(r => r.id === roomId);
    
    if (foundRoom) {
      setRoom(foundRoom);
    } else {
      router.push('/rooms');
    }
    setIsLoading(false);
  }, [params.slug, router]);

  const getRoomTranslation = (room: Room, fieldName: string): string => {
    const translation = room.translations.find(t => t.locale === 'en');
    if (!translation) return '';
    
    const message = translation.messages.find(m => m.fieldName === fieldName);
    return message ? message.value : '';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!room) {
    return null;
  }

  const roomName = getRoomTranslation(room, 'name');
  const roomDescription = getRoomTranslation(room, 'description');
  const totalImages = room.gallery.images.length;

  return (
    <div className="min-h-screen bg-white">
         {/* Breadcrumbs */}
         <Breadcrumb 
          BC1={{ link: '/rooms', text: 'Rooms' }}
          BC2={{ link: '#', text: roomName }}
        />

      {/* Header with Hero Image - Static, no carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[70vh] bg-gray-900"
      >
        {totalImages > 0 && (
          <div className="relative h-full">
            <motion.img
              layoutId={`room-image-${room.id}`}
              src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/1200x0/${room.gallery.images[selectedImageIndex].fileName}`}
              alt={room.gallery.images[selectedImageIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        )}


        {/* Room Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {roomName}
          </motion.h1>
        </div>
      </motion.div>

      {/* Room Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About this room</h2>
              <div 
                className="text-gray-600 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: roomDescription }}
              />
            </motion.div>

            {/* Room Attributes */}
            {room.attributes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Room Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {room.attributes.area && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Room Size</h4>
                      <p className="text-gray-600">
                        {room.attributes.area.from} - {room.attributes.area.to} {room.attributes.area.unit}
                      </p>
                    </div>
                  )}
                  
                  {room.attributes.maxOccupancy && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Occupancy</h4>
                      <p className="text-gray-600">
                        Up to {room.attributes.maxOccupancy.people} people
                        {room.attributes.maxOccupancy.extraBeds > 0 && (
                          <span> + {room.attributes.maxOccupancy.extraBeds} extra beds</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>

               <RoomFeatures />
               <CancellationPolicy />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Room Images Vertical Slider */}
            {totalImages > 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Room Gallery</h3>
                <div className="pr-2">
                  <div className="space-y-4">
                    {room.gallery.images.slice(19, 35).map((image, index) => (
                      <motion.div
                        key={image.fileName}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <div className={`relative overflow-hidden rounded-lg shadow-md ${selectedImageIndex === index ? 'ring-2 ring-blue-500 ring-opacity-75' : ''}`}>
                          <img
                            src={`https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery/thumbs/600x400/${image.fileName}`}
                            alt={image.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 