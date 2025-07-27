"use client";

import { getCourseOptions } from "../../data/divingCourses";

interface DivingFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showContactInfo?: boolean;
}

export default function DivingForm({
  title = "Book Your Dive",
  subtitle = "Contact our diving team to book your adventure or learn more about our services. We're here to make your diving dreams come true.",
  className = "",
  showContactInfo = true,
}: DivingFormProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 ${className}`}>
      {showContactInfo && (
        <div>
          <h2 className="text-3xl text-gray-900 mb-6 uppercase">
            Ready to Dive?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our diving team to book your adventure or learn more about
            our services. We&apos;re here to make your diving dreams come true.
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
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course Interest
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {getCourseOptions().map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
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
