import React from 'react';
import { motion } from 'framer-motion';

const RoomFeatures: React.FC = () => {
  const features = [
    "Electronic Door Locks",
    "Split-system Air-con",
    "International Powerpoints",
    "Microwave Oven & Toaster",
    "Wine glasses, crockery & cutlery",
    "Hairdryer",
    "Daily Room Cleaning Service",
    "Smoke-free guest rooms",
    "Multiple Bedroom Family Rooms",
    "In-room vault, laptop-sized",
    "IP Phone in rooms",
    "Sound bars with phone/iPod cable"
  ];

  const comforts = [
    "In-room mini-bar",
    "Coffee and Tea making facilities",
    "Free hot/cold drinking water dispenser in all rooms",
    "Hi-Quality Mattresses, Linen & towels",
    "Luxury Bathrobes & Beach Towels",
    "Complimentary toiletries"
  ];

  const enjoy = [
    "In-room massage available",
    "Video-on-demand (Plex)",
    "TV Net Cable TV (free) and Cignal Satellite TV (extra charge)",
    "DVD players",
    "Curved and/or Flat screen Samsung Smart TV"
  ];

  const resortServices = [
    "Free WiFi within the resort",
    "Laundry service",
    "Meeting room",
    "Luggage storage",
    "Babysitting",
    "Tours & tickets"
  ];

  const entertainment = [
    "Scuba diving – beginners to advanced",
    "Outdoor pool",
    "Pool sun lounges",
    "Fitness facilities",
    "Full-service spa",
    "Activities Desk – Tours, excursions, local attractions",
    "Recreation Area with Table Tennis & Billiard table",
    "Free DVD & book library",
    "Clubhouse with Karaoke & Games"
  ];

  const foodBeverage = [
    "Restaurant & Poolside Bar 24 Hours",
    "Room Service 24 Hours",
    "Extensive range of Asian and Western cuisine",
    "A focus on fresh local produce",
    "The freshest local seafood",
    "International beers, Spirits, Signature Cocktails",
    "Extensive Wine List & Owners Cellar",
    "Weekend Dining Buffets and Specials"
  ];

  const featureCategories = [
    {
      title: "Room Features",
      icon: "🏠",
      color: "blue",
      items: features
    },
    {
      title: "Comforts",
      icon: "🛏️",
      color: "green",
      items: comforts
    },
    {
      title: "Entertainment",
      icon: "📺",
      color: "purple",
      items: enjoy
    },
    {
      title: "Resort Services",
      icon: "🛎️",
      color: "orange",
      items: resortServices
    },
    {
      title: "Activities & Recreation",
      icon: "🏊‍♂️",
      color: "teal",
      items: entertainment
    },
    {
      title: "Food & Beverage",
      icon: "🍽️",
      color: "red",
      items: foodBeverage
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-indigo-50 border-blue-100 text-blue-600 bg-blue-100",
      green: "from-green-50 to-emerald-50 border-green-100 text-green-600 bg-green-100",
      purple: "from-purple-50 to-violet-50 border-purple-100 text-purple-600 bg-purple-100",
      orange: "from-orange-50 to-amber-50 border-orange-100 text-orange-600 bg-orange-100",
      teal: "from-teal-50 to-cyan-50 border-teal-100 text-teal-600 bg-teal-100",
      red: "from-red-50 to-pink-50 border-red-100 text-red-600 bg-red-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="space-y-8">
      {featureCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className={`bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} p-6 rounded-xl border ${getColorClasses(category.color).split(' ')[2]} shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${getColorClasses(category.color).split(' ')[4]}`}>
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                className="flex items-start gap-3 group"
              >
                <div className={`p-1.5 rounded-full ${getColorClasses(category.color).split(' ')[4]} mt-0.5 flex-shrink-0`}>
                  <svg className={`w-4 h-4 ${getColorClasses(category.color).split(' ')[3]}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RoomFeatures;