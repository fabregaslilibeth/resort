"use client";

import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import { locations } from "@/data/locations";
import { useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// Group activities by main categories
const groupedActivities = activities.reduce((acc, activity) => {
  let mainCategory = "land";

  if (activity.category === "water") {
    mainCategory = "water";
  }

  if (!acc[mainCategory]) {
    acc[mainCategory] = [];
  }
  acc[mainCategory].push(activity);
  return acc;
}, {} as Record<string, typeof activities>);

// Group locations by main categories
// const groupedLocations = locations.reduce((acc, location) => {
//   let mainCategory = "land";

//   if (
//     location.category.toLowerCase() === "beach" ||
//     location.category.toLowerCase() === "waterfall"
//   ) {
//     mainCategory = "water";
//   } else if (location.category.toLowerCase() === "water sports") {
//     mainCategory = "sports";
//   }

//   if (!acc[mainCategory]) {
//     acc[mainCategory] = [];
//   }
//   acc[mainCategory].push(location);
//   return acc;
// }, {} as Record<string, typeof locations>);

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<"land" | "water">(
    "land"
  );

  const formatPrice = (price: number, currency?: string) => {
    if (!currency) {
      return new Intl.NumberFormat("en-PH", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    }

    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h1 className="text-3xl text-gray-900 mb-6 uppercase">
            Activities & Adventures
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From water sports to land adventures, discover exciting activities
            and beautiful locations for every type of traveler.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("land")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "land"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              🏔️ Land
            </button>
            <button
              onClick={() => setActiveTab("water")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "water"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              🌊 Water
            </button>
          </div>
        </motion.div>

        {/* Content Section */}
        {activeTab && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Category Header */}
            <motion.h2
              className="text-3xl text-gray-900 mb-6 uppercase"
              variants={fadeInUp}
            >
              <span className="text-3xl">
                {activeTab === "water"
                  ? "🌊"
                  : "🏔️"}
              </span>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
              Activities
            </motion.h2>

            {/* Activities List */}
            <div className="bg-gray-50">
              <div className="space-y-8">
                {groupedActivities[activeTab] &&
                  groupedActivities[activeTab].map((activity, index) => (
                    <motion.div
                      key={`${activity.name}-${index}`}
                      variants={itemVariants}
                    >
                      {/* Activity Item */}
                      <div className="flex justify-between items-start pb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <h3 className="text-xl text-gray-900 uppercase">
                              {activity.name}
                            </h3>
                          </div>

                          {/* Description */}
                          {activity.description && (
                            <p className="text-gray-600 text-xs">
                              {activity.description}
                            </p>
                          )}

                          {/* Notes and Special Info */}
                          {activity.note && (
                            <div className="mt-3 text-sm text-orange-600 font-medium">
                              Note: {activity.note}
                            </div>
                          )}

                          {/* Inclusions */}
                          {activity.inclusions && (
                            <div className="mt-3">
                              <div className="text-sm font-semibold text-green-600 mb-1">
                                Inclusions:
                              </div>
                              <div className="text-sm text-gray-600">
                                {activity.inclusions.join(", ")}
                              </div>
                            </div>
                          )}

                          {/* Options */}
                          {activity.options && (
                            <div className="mt-3">
                              <div className="text-sm font-semibold text-blue-600 mb-2">
                                Options:
                              </div>
                              <div className="space-y-1">
                                {activity.options.map((option, idx) => (
                                  <div
                                    key={idx}
                                    className="text-sm text-gray-600"
                                  >
                                    {option["#ofActivities"] ||
                                      option.ofActivities}{" "}
                                    activities -{" "}
                                    {option.price
                                      ? formatPrice(option.price, "PHP")
                                      : "Price on request"}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          {/* Price */}
                          <div className="text-right ml-6">
                            <div className="text-gray-600 uppercase">
                              {activity.price
                                ? formatPrice(activity.price, activity.currency)
                                : "Price on request"}
                            </div>
                          </div>

                          {/* Additional Details */}
                          <div className="text-right text-sm text-gray-500">
                            {(activity.capacity ||
                              activity.minimumCapacity) && (
                              <div>
                                {activity.capacity ||
                                  `Min: ${activity.minimumCapacity} persons`}
                              </div>
                            )}
                            {activity.unit && <div>Unit: {activity.unit}</div>}
                          </div>
                        </div>
                      </div>

                      {/* Separator */}
                      {index < groupedActivities[activeTab].length - 1 && (
                        <div className="border-t border-gray-200"></div>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 bg-white rounded-3xl p-12 shadow-xl"
          variants={fadeInUp}
        >
          <h2 className="text-3xl text-gray-900 mb-6 uppercase">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your activities and tours with our experienced guides who
            ensure your safety while providing insider knowledge about the best
            spots and local culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-primary hover:bg-secondary text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Activities
            </motion.button>
            <motion.button
              className="border-2 border-primary text-primary px-8 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
