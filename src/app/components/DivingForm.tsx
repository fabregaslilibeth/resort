"use client";

import { useState } from "react";
import { getCourseOptions } from "../../data/divingCourses";

interface DivingFormProps {
  title?: string;
  className?: string;
  showContactInfo?: boolean;
  course?: string;
  subtitle?: string;
  description?: string;
}

export default function DivingForm({
  title = "Book Your Dive",
  className = "",
  showContactInfo = true,
  course,
  subtitle = "Ready to Dive?",
  description = "Contact our diving team to book your adventure or learn more about our services. We're here to make your diving dreams come true.",
}: DivingFormProps) {
  const [selectedCourse, setSelectedCourse] = useState(course || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className={`grid lg:grid-cols-2 gap-16 ${className}`}>
      {showContactInfo && (
        <div>
          <h2 className="text-3xl text-gray-900 mb-6 uppercase">
            {subtitle}
          </h2>
          <p className="text-gray-600 mb-8">
           {description}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📞</span>
              </div>
              <div>
                <h3 className="text-primary uppercase">Phone</h3>
                <p className="text-gray-600">+63 917 570 3415</p>
                <p className="text-gray-600">+63 998 541 1557</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">✉️</span>
              </div>
              <div>
                <h3 className="text-primary uppercase">Email</h3>
                <p className="text-gray-600">llvdivers@lalagunavillas.com.ph</p>
                <p className="text-gray-600">gopro@lalagunavillas.com.ph</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-primary uppercase">Location</h3>
                <p className="text-gray-600">Small Lalaguna Beach, Sabang</p>
                <p className="text-gray-600">Puerto Galera, Oriental Mindoro</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
        <h3 className="text-2xl text-gray-900 mb-6 uppercase">{title}</h3>
        <form id="book-dive-form" className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Course Interest
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex items-center justify-between"
              >
                <span className={selectedCourse ? "text-gray-900" : "text-gray-500"}>
                  {selectedCourse || "Select a course..."}
                </span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {getCourseOptions().map((option, index) => (
                    <div key={index}>
                      {'disabled' in option && option.disabled ? (
                        <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50 border-b border-gray-200">
                          {option.label}
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCourse(option.label);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span className="text-gray-900">{option.label}</span>
                          {'price' in option && option.price && (
                            <span className="text-blue-600 font-medium">{option.price}</span>
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your diving plans..."
            ></textarea>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-full hover:bg-secondary transition-all duration-300 font-semibold cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
