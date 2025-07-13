import React from 'react';

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

  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Comforts</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comforts.map((comfort, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{comfort}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Enjoy</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {enjoy.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Resort Services</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resortServices.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Entertainment</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entertainment.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Food & Beverage</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {foodBeverage.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomFeatures;