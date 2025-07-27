"use client";

import DivingForm from '@/app/components/DivingForm';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      <div className="relative text-white overflow-hidden" style={{
        backgroundImage: `url('https://lalagunavillas.com/wp-content/uploads/2024/05/Contact-us-header--scaled.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-700/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl mb-6 bg-clip-text text-white uppercase">
                GO PROFESSIONAL
              </h1>
              <h2 className="mb-6 text-blue-100">
                Explore the Depths with a PADI Divemaster Course in Puerto Galera, Philippines
              </h2>
              {/* <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Dive into excellence with our comprehensive one-month PADI Divemaster Course at Lalaguna Luxury Villas, 
                located in the heart of Puerto Galera, Philippines. Our program is meticulously designed to equip you 
                with the skills, knowledge, and certification essential for a successful career in diving.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
                <button className="group bg-white text-blue-900 px-8 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  <span className="flex items-center gap-2">
                    Apply Now
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="border-2 border-white text-white px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm cursor-pointer">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl text-gray-900 mb-6 uppercase">
                Why Choose Lalaguna Villas Luxury Dive Resort & Spa?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nestled in the breathtaking beauty of Puerto Galera, Lalaguna Luxury Villas offers the perfect blend 
                of comfort, adventure, and professional training. Our resort provides affordable accommodation in 
                state-of-the-art facilities with unparalleled hospitality, ensuring an unforgettable diving experience.
              </p>
              <p className="text-gray-600 mb-6">
                We are also a PADI 5-star Instructor Development Center, your training will be conducted by instructors 
                that understand the demands of the next level of training and will properly prepare you for it. Should 
                you choose to continue your journey on to PADI Open Water Scuba Instructor, you can join one of our 
                PADI Instructor Development programs (PADI IDC) in the same training facility.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl mb-6 uppercase">Course Highlights</h3>
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
      <div id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-gray-900 mb-6 uppercase">
              Our PADI Divemaster Course Training Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
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
                <motion.div 
                  key={index} 
                  className={getCardStyle()}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Ribbon */}
                  <div className={`absolute top-0 right-0 ${getRibbonColor()} text-white px-4 py-2 text-sm font-bold rounded-bl-lg shadow-lg`}>
                    {pkg.package.includes('Bronze') ? 'BRONZE' : pkg.package.includes('Silver') ? 'SILVER' : 'GOLD'}
                  </div>
                  
                  <div className="text-center pt-4">
                    <h3 className="text-2xl text-gray-900 mb-4 uppercase">
                      {pkg.name}
                    </h3>
                    <div className={`text-xl ${getPriceColor()} mb-6`}>
                      {pkg.price}
                    </div>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-800 font-semibold mb-3 uppercase">Inclusion</h4>
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
                    <h4 className="text-gray-800 font-semibold mb-3 uppercase">Exclusion (Payable to PADI)</h4>
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
              </motion.div>
             );
           })}
        </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-gray-900 mb-6 uppercase">
              Course Details & Experience
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Throughout the month-long course, led by seasoned PADI instructors, you&apos;ll delve into essential 
              dive theory, practical skills, leadership development, and environmental awareness.
            </p>
          </div>

          <div className="space-y-12">
            {/* Steps 1-3 with shared image on right */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-start gap-8">
                <div className="flex-1 space-y-12">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-gray-900 mb-4 uppercase">Diving Experience</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      We want you to gain as much valuable diving experience as possible, for that reason we invite 
                      you to join as many of our scheduled dive trips as you like. Your instructor will explain your 
                      course schedule on the first day of training, use any free time outside of these to join 
                      scheduled dives with open spots available.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-gray-900 mb-4 uppercase">IDC Prep Course</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      The IDC prep course is conducted by our instructor development team and provides valuable 
                      insights into your continued journey to PADI Dive Instructor. We will show you what to expect 
                      from the instructor training and provide you with some training goals to map out your path 
                      to success on this challenging program.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-gray-900 mb-4 uppercase">Equipment & Store</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      We carry a range of dive equipment from well known manufactures such as ScubaPro, Gull, 
                      Pelican, Octo, and Ocean Reef. If you will be bringing your own equipment, please ask us 
                      for a price adjustment on the packages. If you would like to purchase your own set, 
                      Lalaguna Villas is an authorised ScubaPro reseller, and we have a well-stocked store 
                      on site that can cater to your needs.
                    </p>
                  </motion.div>
                </div>

                {/* Shared image on right */}
                <motion.div 
                  className="hidden lg:block flex-shrink-0"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div 
                    className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-200 aspect-square w-[400px] flex items-center justify-center relative overflow-hidden"
                    style={{
                      backgroundImage: `url('https://lalagunavillas.com/wp-content/uploads/2024/05/PADI-Instructor-1.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-green-900/40"></div>
                    <div className="relative z-10 text-center text-white">
                      <h4 className="text-lg font-semibold mb-2">Professional Training</h4>
                      <p className="text-sm opacity-90">PADI Instructor Development</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Steps 4-5 with shared image on left */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-start gap-8">
                {/* Shared image on left */}
                <motion.div 
                  className="hidden lg:block flex-shrink-0"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div 
                    className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl border border-orange-200 aspect-square w-[400px] flex items-center justify-center relative overflow-hidden"
                    style={{
                      backgroundImage: `url('https://lalagunavillas.com/wp-content/uploads/2024/05/272307773_470249971118435_2982894881921134642_n.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-orange-900/40"></div>
                    <div className="relative z-10 text-center text-white">
                      <h4 className="text-lg font-semibold mb-2">DSD Leader Training</h4>
                      <p className="text-sm opacity-90">Professional Diving Instruction</p>
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 space-y-12">
                  {/* Step 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-gray-900 mb-4 uppercase">DSD Leader Training</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      PADI Discover Scuba Diving, or DSD, requires no previous experience and is the most popular 
                      way to try scuba for the first time. DSD leaders are PADI Divemasters who have undertaken 
                      additional training that allows them to conduct DSDs independently. This will greatly increase 
                      your employability and earning potential, making you a valuable asset to any dive center.
                    </p>
                  </motion.div>

                  {/* Step 5 */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-gray-900 mb-4 uppercase">Diver Propulsion Vehicles (DPV)</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Diver Propulsion Vehicles (or DPVs) are great ways to explore more on each dive and have a lot 
                      more fun doing so. Lalaguna Villas carries a range of SUEX DPVs which are available for courses 
                      and rental. Try one out during your DM training, if you would like to continue your training 
                      add the specialty to your package and get certified. Later when you become a PADI Dive Instructor 
                      you can teach the PADI DPV Specialty yourself.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Program Phases */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl mb-6 uppercase">
              Program Structure
            </h2>
            <p className="max-w-3xl mx-auto">
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
                      <h3 className="text-2xl uppercase">{phase.phase}</h3>
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

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div id="book-dive-form">
            <DivingForm
              title="Book your Divemaster Course now"
              course="Divemaster Course"
              subtitle="Ready to enroll?"
              description="Embark on an extraordinary journey into the underwater world with our PADI Divemaster Course at Lalaguna Luxury Villas. Secure your spot now and prepare for a month of excitement, growth, and exploration in one of the most renowned diving destinations in the Philippines. Contact us to kickstart your career in diving today!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
