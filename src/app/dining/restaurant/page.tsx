'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { ScrollTrigger } from '../../components/ScrollTrigger';

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Breadcrumb 
          BC1={{ link: "/dining", text: "Dining" }}
          BC2={{ link: "/dining/restaurant", text: "Restaurant" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Lalaguna Restaurant
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience world-class dining with stunning ocean views and fresh local ingredients
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold">
                  Make Reservation
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-semibold">
                  View Full Menu
                </button>
              </motion.div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Restaurant Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollTrigger animationType="slide-right" threshold={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Culinary Excellence
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Our restaurant offers a unique blend of traditional Indonesian cuisine and international favorites, 
                  all prepared with the freshest local ingredients. Our expert chefs create memorable dining 
                  experiences that showcase the rich flavors of the region.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  From romantic candlelit dinners to casual beachfront lunches, our restaurant provides 
                  the perfect setting for every dining occasion. Enjoy breathtaking ocean views while 
                  savoring expertly crafted dishes and fine wines.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">🍽️</div>
                    <h4 className="font-semibold text-gray-900">Fine Dining</h4>
                    <p className="text-sm text-gray-600">Elegant atmosphere</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-2">🌊</div>
                    <h4 className="font-semibold text-gray-900">Ocean Views</h4>
                    <p className="text-sm text-gray-600">Stunning vistas</p>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
            <ScrollTrigger animationType="slide-left" threshold={0.2}>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <p className="text-gray-500">Restaurant Interior Image</p>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Menu Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our signature dishes and seasonal specialties
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Breakfast */}
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-blue-100 h-48 flex items-center justify-center">
                  <span className="text-4xl">🍳</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Breakfast</h3>
                  <p className="text-gray-600 mb-4">
                    Start your day with our continental breakfast featuring fresh pastries, 
                    tropical fruits, and made-to-order eggs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Continental breakfast buffet</li>
                    <li>• Made-to-order omelets</li>
                    <li>• Fresh tropical fruits</li>
                    <li>• Artisan breads & pastries</li>
                  </ul>
                </div>
              </div>
            </ScrollTrigger>

            {/* Lunch */}
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-blue-100 h-48 flex items-center justify-center">
                  <span className="text-4xl">🥗</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lunch</h3>
                  <p className="text-gray-600 mb-4">
                    Light and refreshing options perfect for a midday meal with ocean breezes.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Fresh seafood salads</li>
                    <li>• Grilled fish & meats</li>
                    <li>• Local Indonesian dishes</li>
                    <li>• Vegetarian options</li>
                  </ul>
                </div>
              </div>
            </ScrollTrigger>

            {/* Dinner */}
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-blue-100 h-48 flex items-center justify-center">
                  <span className="text-4xl">🍷</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dinner</h3>
                  <p className="text-gray-600 mb-4">
                    Elegant evening dining with candlelit tables and sophisticated cuisine.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Fine dining experience</li>
                    <li>• Premium wine selection</li>
                    <li>• Chef&apos;s specials</li>
                    <li>• Romantic atmosphere</li>
                  </ul>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollTrigger animationType="slide-right" threshold={0.2}>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <p className="text-gray-500">Dining Area Image</p>
              </div>
            </ScrollTrigger>
            <ScrollTrigger animationType="slide-left" threshold={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Unforgettable Dining Experience
                </h2>
                                   <p className="text-gray-600 mb-6 text-lg">
                     Our restaurant combines exceptional cuisine with breathtaking ocean views, 
                     creating the perfect setting for memorable meals. Whether you&apos;re celebrating 
                     a special occasion or enjoying a casual dinner, our attentive staff ensures 
                     every detail is perfect.
                   </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🌅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sunset Dining</h4>
                      <p className="text-gray-600">Reserve a table for the perfect sunset view</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎵</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Music</h4>
                      <p className="text-gray-600">Enjoy live acoustic music on select evenings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🍷</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Wine Pairing</h4>
                      <p className="text-gray-600">Expert wine recommendations with your meal</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Special Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes our restaurant truly special
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Ingredients</h3>
                <p className="text-gray-600">
                  Fresh produce sourced from local markets and our own garden
                </p>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Chefs</h3>
                <p className="text-gray-600">
                  World-class culinary team with international experience
                </p>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ocean Views</h3>
                <p className="text-gray-600">
                  Panoramic views of the crystal-clear waters
                </p>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🕯️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Romantic Setting</h3>
                <p className="text-gray-600">
                  Perfect atmosphere for special occasions and romantic dinners
                </p>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Contact & Reservations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollTrigger animationType="slide-right" threshold={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Make a Reservation
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Reserve your table for an unforgettable dining experience. 
                  We recommend booking in advance, especially for dinner service.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Reservation</h4>
                      <p className="text-gray-600">+62 361 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Reservation</h4>
                      <p className="text-gray-600">restaurant@lalagunavillas.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                      <p className="text-gray-600">Breakfast: 7:00 AM - 10:30 AM<br />
                      Lunch: 12:00 PM - 2:30 PM<br />
                      Dinner: 6:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-left" threshold={0.2}>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Reservation</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
                  >
                    Request Reservation
                  </button>
                </form>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
