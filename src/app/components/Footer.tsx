'use client';

import { useState } from 'react';

export function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* CONTACT US Section */}
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">CONTACT US</h3>
            <div className="text-sm space-y-2">
              <p>Lalaguna Villas Luxury Dive Resort & Spa</p>
              <p>Lalaguna Holdings Inc.</p>
              <p>Small Lalaguna Beach</p>
              <p>Sabang, Puerto Galera</p>
              <p>Oriental Mindoro 5203</p>
              <p>Philippines</p>
              <div className="mt-4">
                <p className="font-semibold">Phone:</p>
                <p>+63 917 570 3415</p>
                <p>+63 998 541 1557</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Email:</p>
                <p>info@lalagunavillas.com.ph</p>
                <p>llvdivers@lalagunavillas.com.ph</p>
                <p>gopro@lalagunavillas.com.ph</p>
              </div>
            </div>
          </div>

          {/* WE ACCEPT Section */}
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">WE ACCEPT</h3>
            <div className="bg-white p-4 rounded">
              <div className="grid grid-cols-2 gap-2">
                {/* Payment method placeholders - you can replace with actual logos */}
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">GCash</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">WISE</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">QRPh</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">Maya</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">UnionPay</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">Alipay</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">WeChat Pay</div>
                <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">Other</div>
              </div>
            </div>
          </div>

          {/* ACCOLADES Section */}
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">ACCOLADES</h3>
            <div className="bg-white p-4 rounded">
              <div className="space-y-3">
                {/* TripAdvisor Awards */}
                <div className="flex gap-2">
                  <div className="h-6 bg-yellow-200 rounded flex items-center justify-center text-xs text-yellow-800 px-2">2022</div>
                  <div className="h-6 bg-yellow-200 rounded flex items-center justify-center text-xs text-yellow-800 px-2">2021</div>
                  <div className="h-6 bg-yellow-200 rounded flex items-center justify-center text-xs text-yellow-800 px-2">2023 GOLD</div>
                </div>
                
                {/* Agoda Ratings */}
                <div className="flex gap-2">
                  <div className="h-6 bg-blue-200 rounded flex items-center justify-center text-xs text-blue-800 px-2">8.4</div>
                  <div className="h-6 bg-blue-200 rounded flex items-center justify-center text-xs text-blue-800 px-2">8.7</div>
                </div>
                
                {/* Booking.com Rating */}
                <div className="h-6 bg-green-200 rounded flex items-center justify-center text-xs text-green-800 px-2">9.1</div>
                
                {/* Certifications */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-6 bg-red-200 rounded flex items-center justify-center text-xs text-red-800 px-1">Zero Carbon</div>
                  <div className="h-6 bg-orange-200 rounded flex items-center justify-center text-xs text-orange-800 px-1">DOT</div>
                  <div className="h-6 bg-green-200 rounded flex items-center justify-center text-xs text-green-800 px-1">Anahaw</div>
                </div>
              </div>
            </div>
          </div>

          {/* SUBSCRIBE Section */}
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-4">SUBSCRIBE</h3>
            <div className="bg-white p-4 rounded">
              {/* Logo */}
              <div className="text-center mb-4">
                <div className="text-blue-900 font-bold text-sm">LALAGUNA Villas</div>
                <div className="text-blue-900 text-xs">Luxury Dive Resort & Spa</div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">Keep In Touch</p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded font-bold text-sm hover:bg-orange-600 transition-colors"
                >
                  SUBSCRIBE!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">
            © 2025 Lalaguna Villas - Luxury Dive Resort & Spa. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 