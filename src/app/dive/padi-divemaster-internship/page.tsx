"use client";

import { useEffect, useState } from 'react';

export default function PADIDivemasterInternshipPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coursePackages = [
    {
      name: "Divemaster",
      package: "Bronze",
      price: "$1550 USD",
      inclusions: [
        "Divemaster Internship (4-weeks)",
        "Unlimited diving during the course",
        "Accommodation at our DM Lodge",
        "15% F&B Discount at LLV Restaurant",
        "IDC Prep Course"
      ],
      exclusions: [
        "PADI DM Application Fees ($245 AUD)"
      ]
    },
    {
      name: "Divemaster",
      package: "Silver",
      price: "$1950 USD",
      inclusions: [
        "Divemaster Internship (4-weeks)",
        "Unlimited diving during the course",
        "Accommodation at our DM Lodge",
        "15% F&B Discount at LLV Restaurant",
        "IDC Prep Course",
        "DSD Leader Training (Assist on 4 Real DSDs)",
        "Intro to DPV Experience",
        "PADI Deep Diver Specialty"
      ],
      exclusions: [
        "PADI DM Application Fees ($245 AUD)",
        "PADI DSD Leader Application Fees ($138 AUD)"
      ]
    },
    {
      name: "Divemaster",
      package: "Gold",
      price: "$2450 USD",
      inclusions: [
        "Divemaster Internship (4-weeks)",
        "Unlimited diving during the course",
        "Accommodation at our DM Lodge",
        "15% F&B Discount at LLV Restaurant",
        "IDC Prep Course",
        "DSD Leader Training (Assist on 4 Real DSDs)",
        "PADI DPV Specialty",
        "PADI Deep Diver Specialty",
        "PADI Peak Performance Buoyancy"
      ],
      exclusions: [
        "PADI DM Application Fees ($245 AUD)",
        "PADI DSD Leader Application Fees ($138 AUD)"
      ]
    }
  ];





  const programDetails = [
    {
      phase: "Phase 1: Theory & Knowledge Development",
      duration: "2-3 weeks",
      content: [
        "PADI Divemaster manual study",
        "Physics and physiology review",
        "Equipment knowledge",
        "Dive planning and management",
        "Risk management principles"
      ]
    },
    {
      phase: "Phase 2: Practical Skills Development",
      duration: "2-3 weeks",
      content: [
        "Water skills assessment",
        "Rescue skills refinement",
        "Equipment setup and maintenance",
        "Dive site mapping",
        "Emergency procedures practice"
      ]
    },
    {
      phase: "Phase 3: Professional Experience",
      duration: "2-4 weeks",
      content: [
        "Assist with PADI courses",
        "Lead certified divers",
        "Customer service training",
        "Business operations exposure",
        "Final assessment and evaluation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                GO PROFESSIONAL
              </h1>
              <h2 className="text-2xl lg:text-3xl mb-6 text-blue-100">
                Explore the Depths with a PADI Divemaster Course in Puerto Galera, Philippines
              </h2>
              <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Dive into excellence with our comprehensive one-month PADI Divemaster Course at Lalaguna Luxury Villas, 
                located in the heart of Puerto Galera, Philippines. Our program is meticulously designed to equip you 
                with the skills, knowledge, and certification essential for a successful career in diving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Apply Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg backdrop-blur-sm">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

 {/* Why Choose Lalaguna Villas */}
 <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Lalaguna Villas Luxury Dive Resort & Spa?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nestled in the breathtaking beauty of Puerto Galera, Lalaguna Luxury Villas offers the perfect blend 
                of comfort, adventure, and professional training. Our resort provides affordable accommodation in 
                state-of-the-art facilities with unparalleled hospitality, ensuring an unforgettable diving experience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We are also a PADI 5-star Instructor Development Center, your training will be conducted by instructors 
                that understand the demands of the next level of training and will properly prepare you for it. Should 
                you choose to continue your journey on to PADI Open Water Scuba Instructor, you can join one of our 
                PADI Instructor Development programs (PADI IDC) in the same training facility.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>4-week comprehensive program</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>Unlimited diving during course</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>Accommodation included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>PADI 5-star IDC center</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span>Professional equipment available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Packages */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our PADI Divemaster Course Training Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our course packages are designed to make sure you get the most out of your time in Puerto Galera 
              and leave us as a confident and competent dive professional that would be a valuable addition to any dive team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coursePackages.map((pkg, index) => {
              const getCardStyle = () => {
                if (pkg.package.includes('Bronze')) {
                  return 'group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-300 relative overflow-hidden';
                } else if (pkg.package.includes('Silver')) {
                  return 'group bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-400 relative overflow-hidden';
                } else if (pkg.package.includes('Gold')) {
                  return 'group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-yellow-400 relative overflow-hidden';
                }
                return 'group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100';
              };

              const getRibbonColor = () => {
                if (pkg.package.includes('Bronze')) {
                  return 'bg-gradient-to-r from-amber-600 to-orange-600';
                } else if (pkg.package.includes('Silver')) {
                  return 'bg-gradient-to-r from-gray-600 to-slate-600';
                } else if (pkg.package.includes('Gold')) {
                  return 'bg-gradient-to-r from-yellow-600 to-amber-600';
                }
                return 'bg-blue-600';
              };

              const getPriceColor = () => {
                if (pkg.package.includes('Bronze')) {
                  return 'text-amber-700';
                } else if (pkg.package.includes('Silver')) {
                  return 'text-gray-700';
                } else if (pkg.package.includes('Gold')) {
                  return 'text-yellow-700';
                }
                return 'text-blue-600';
              };

              return (
                <div 
                  key={index} 
                  className={getCardStyle()}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Ribbon */}
                  <div className={`absolute top-0 right-0 ${getRibbonColor()} text-white px-4 py-2 text-sm font-bold rounded-bl-lg shadow-lg`}>
                    {pkg.package.includes('Bronze') ? 'BRONZE' : pkg.package.includes('Silver') ? 'SILVER' : 'GOLD'}
                  </div>
                  
                  <div className="text-center pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {pkg.name}
                    </h3>
                    <div className={`text-4xl font-bold ${getPriceColor()} mb-6`}>
                      {pkg.price}
                    </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Inclusion</h4>
                    <ul className="text-gray-700 space-y-2 text-left">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="text-green-500 text-lg">✓</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Exclusion (Payable to PADI)</h4>
                    <ul className="text-gray-700 space-y-2 text-left">
                      {pkg.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="text-red-500 text-lg">✗</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
               );
             })}
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Course Details & Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Throughout the month-long course, led by seasoned PADI instructors, you&apos;ll delve into essential 
              dive theory, practical skills, leadership development, and environmental awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diving Experience</h3>
                <p className="text-gray-700 mb-4">
                  We want you to gain as much valuable diving experience as possible, for that reason we invite 
                  you to join as many of our scheduled dive trips as you like. Your instructor will explain your 
                  course schedule on the first day of training, use any free time outside of these to join 
                  scheduled dives with open spots available.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IDC Prep Course</h3>
                <p className="text-gray-700 mb-4">
                  The IDC prep course is conducted by our instructor development team and provides valuable 
                  insights into your continued journey to PADI Dive Instructor. We will show you what to expect 
                  from the instructor training and provide you with some training goals to map out your path 
                  to success on this challenging program.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment & Store</h3>
                <p className="text-gray-700 mb-4">
                  We carry a range of dive equipment from well known manufactures such as ScubaPro, Gull, 
                  Pelican, Octo, and Ocean Reef. If you will be bringing your own equipment, please ask us 
                  for a price adjustment on the packages. If you would like to purchase your own set, 
                  Lalaguna Villas is an authorised ScubaPro reseller, and we have a well-stocked store 
                  on site that can cater to your needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DSD Leader Training</h3>
                <p className="text-gray-700 mb-4">
                  PADI Discover Scuba Diving, or DSD, requires no previous experience and is the most popular 
                  way to try scuba for the first time. DSD leaders are PADI Divemasters who have undertaken 
                  additional training that allows them to conduct DSDs independently. This will greatly increase 
                  your employability and earning potential, making you a valuable asset to any dive center.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diver Propulsion Vehicles (DPV)</h3>
                <p className="text-gray-700 mb-4">
                  Diver Propulsion Vehicles (or DPVs) are great ways to explore more on each dive and have a lot 
                  more fun doing so. Lalaguna Villas carries a range of SUEX DPVs which are available for courses 
                  and rental. Try one out during your DM training, if you would like to continue your training 
                  add the specialty to your package and get certified. Later when you become a PADI Dive Instructor 
                  you can teach the PADI DPV Specialty yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Phases */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Program Structure
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our comprehensive program is divided into three phases to ensure thorough training and development.
            </p>
          </div>

          <div className="space-y-8">
            {programDetails.map((phase, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                      <p className="text-blue-200 font-semibold">{phase.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.content.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Your Dive Master Course */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your Dive Master Course Today!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Embark on an extraordinary journey into the underwater world with our PADI Divemaster Course 
            at Lalaguna Luxury Villas. Secure your spot now and prepare for a month of excitement, 
            growth, and exploration in one of the most renowned diving destinations in the Philippines. 
            Contact us to kickstart your career in diving today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="flex items-center gap-2">
                CONTACT US
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+63 917 570 3415</p>
              <p className="text-gray-600">+63 998 541 1557</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">gopro@lalagunavillas.com.ph</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Sabang, Puerto Galera, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
