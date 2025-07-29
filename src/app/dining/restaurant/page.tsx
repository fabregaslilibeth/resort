"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { ScrollTrigger } from "../../components/ScrollTrigger";
import { menuItem } from "../../../data/menu";
import { menuCategories } from "../../../data/menuCategories";
import { useRef } from "react";
import { categoryToSlug } from "../menu/utils";

export default function RestaurantPage() {
  // Get featured categories from menuCategories
  const featuredCategories = menuCategories
    .filter((category) => category.isFeatured)
    .sort((a, b) => a.order - b.order)
    .map((category) => category.name);

  // Extract unique categories from menu data that are also featured
  const availableFeaturedCategories = featuredCategories.filter((category) =>
    menuItem.some((item) => item.category === category)
  );

  // Helper function to get icon for a category
  const getCategoryIcon = (categoryName: string) => {
    const category = menuCategories.find((cat) => cat.name === categoryName);
    return category?.icon || "🍽️";
  };

  // Create refs for smooth scrolling
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const reservationFormRef = useRef<HTMLDivElement | null>(null);

  const scrollToCategory = (category: string) => {
    const element = categoryRefs.current[category];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToReservationForm = () => {
    const element = reservationFormRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = scrollTop + rect.top - 80; // 80px offset

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

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
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <motion.h1
                className="text-3xl text-gray-900 mb-6 uppercase"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Dining & Bar
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience world-class dining with stunning ocean views and
                fresh local ingredients
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={scrollToReservationForm}
                  className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold"
                >
                  Make Reservation
                </button>
                <Link
                  href="/dining/menu"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-semibold inline-block"
                >
                  View Full Menu
                </Link>
              </motion.div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                Special Features
              </h2>
              <p className="text-gray-600">
                Discover what makes our restaurant truly special
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2 uppercase">
                  Local Ingredients
                </h3>
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
                <h3 className="text-xl text-gray-900 mb-2 uppercase">
                  Expert Chefs
                </h3>
                <p className="text-gray-600">
                  World-class culinary team with international experience
                </p>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-bottom" threshold={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛎️</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2 uppercase">
                  Room Service
                </h3>
                <p className="text-gray-600">
                  24/7 in-room dining service for your convenience
                </p>
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
              <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                Menu Highlights
              </h2>
              <p className="text-gray-600 mb-8">
                Discover our culinary offerings across all categories
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {availableFeaturedCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToCategory(category)}
                    className="px-4 py-2 bg-white border border-blue-200 rounded-full text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-sm font-medium"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollTrigger>

          {/* Menu Categories */}
          {availableFeaturedCategories.map((category) => {
            const categoryItems = menuItem
              .filter((item) => item.category === category)
              .slice(0, 3);

            return (
              <ScrollTrigger
                key={category}
                animationType="slide-bottom"
                threshold={0.2}
              >
                <div
                  className="mb-20"
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                >
                  <div className="mb-12 flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl text-gray-900 mb-4 uppercase">
                        {category}
                      </h3>
                      <div className="w-24 h-1 bg-blue-600"></div>
                    </div>
                    <a
                      href={`/dining/menu/${categoryToSlug(category)}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center gap-2"
                    >
                      View All
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryItems.map((item, itemIndex) => (
                      <motion.div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="h-56 overflow-hidden relative">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                              <span className="text-5xl">
                                {getCategoryIcon(category)}
                              </span>
                            </div>
                          )}
                          {item.code && (
                            <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {item.code}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.title}
                            </h4>
                            {item.price !== undefined && (
                              <span className="text-blue-600 font-bold text-xl">
                                {item.price === 0
                                  ? "POA"
                                  : `₱${item.price.toLocaleString()}`}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollTrigger>
            );
          })}
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
                <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                  Unforgettable Dining Experience
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Our restaurant combines exceptional cuisine with breathtaking
                  ocean views, creating the perfect setting for memorable meals.
                  Whether you&apos;re celebrating a special occasion or enjoying
                  a casual dinner, our attentive staff ensures every detail is
                  perfect.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🌅</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">Sunset Dining</h4>
                      <p className="text-gray-600">
                        Reserve a table for the perfect sunset view
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎵</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">Live Music</h4>
                      <p className="text-gray-600">
                        Enjoy live acoustic music on select evenings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🍷</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">Wine Pairing</h4>
                      <p className="text-gray-600">
                        Expert wine recommendations with your meal
                      </p>
                    </div>
                  </div>
                </div>
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
                <h2 className="text-3xl text-gray-900 mb-6 uppercase">
                  Make a Reservation
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Reserve your table for an unforgettable dining experience. We
                  recommend booking in advance, especially for dinner service.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">
                        Phone Reservation
                      </h4>
                      <p className="text-gray-600">+62 361 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">
                        Email Reservation
                      </h4>
                      <p className="text-gray-600">
                        restaurant@lalagunavillas.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase">Opening Hours</h4>
                      <p className="text-gray-600">
                        Breakfast: 7:00 AM - 10:30 AM
                        <br />
                        Lunch: 12:00 PM - 2:30 PM
                        <br />
                        Dinner: 6:00 PM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>

            <ScrollTrigger animationType="slide-left" threshold={0.2}>
              <div
                ref={reservationFormRef}
                className="bg-gray-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl text-gray-900 mb-6 uppercase">
                  Quick Reservation
                </h3>
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
