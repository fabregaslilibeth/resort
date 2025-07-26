'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

export default function Sustainability() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sustainabilityFeatures = [
    {
      icon: "💧",
      title: "Advanced Water Conservation",
      description: "Our state-of-the-art water conservation, purification and recycling systems ensure we minimize water waste while maintaining luxury standards."
    },
    {
      icon: "⚡",
      title: "Power Management System",
      description: "State-of-the-art power management system for greater efficiency, reducing energy consumption and carbon emissions."
    },
    {
      icon: "🌿",
      title: "Zero Carbon Resorts",
      description: "Member of the voluntary international program known as Zero Carbon Resorts, committed to carbon-neutral operations."
    },
    {
      icon: "🏆",
      title: "ANAHAW Certification",
      description: "One of only 27 pioneer awardees for the ANAHAW Philippine Sustainable Tourism Certification (2018-2020)."
    },
    {
      icon: "🐠",
      title: "Marine Conservation",
      description: "Partnership with Blue Alliance Philippines for marine conservation and coral reef protection programs."
    },
    {
      icon: "🏝️",
      title: "Save Our Spots (SOS)",
      description: "Supporter of the Department of Tourism (DOT) 'Save Our Spots (SOS)' campaign for responsible and sustainable tourism."
    }
  ];

  const environmentalInitiatives = [
    {
      title: "ANAHAW Philippine Sustainable Tourism Certification",
      content: "Lalaguna Villas is one of only 27 hotels and resorts that were named pioneer awardees for the ANAHAW Philippine Sustainable Tourism Certification (2018-2020). We are the only resort in the Puerto Galera area to have achieved this important certification. The Anahaw certification initiative aims to reduce the carbon emission impact of tourism, by empowering resorts to use innovative techniques to help save energy, water, fuel, and other resources, reduce waste and carbon emission, and improve overall operational efficiency."
    },
    {
      title: "Zero Carbon Resorts Program",
      content: "Aiming to advance towards carbon-neutral operations through the adoption of innovative practices and technology, the use of renewable resources, and resource efficiency, the Center for Appropriate Technology from Austria (GrAT) launched the Zero Carbon Resorts for Sustainable Tourism project in the Philippines and Thailand. We're proud to be a member of this vital project, and we look forward to our continuing cooperation."
    },
    {
      title: "Environmental Awareness Program",
      content: "Our sustainability efforts are in areas such as advanced water conservation, purification and recycling, and a state of the art power management system for greater efficiency. This is part of our ongoing environmental awareness program, as a member of the voluntary international program known as Zero Carbon Resorts."
    },
    {
      title: "Save Our Spots (SOS) Campaign",
      content: "We're a supporter of the Department of Tourism (DOT) 'Save Our Spots (SOS)' campaign, to inspire a culture of responsible and sustainable tourism, in an effort to save precious environmental and cultural areas."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-blue-900/70 to-teal-800/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        ></div>
        
        <motion.div 
          className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Sustainability
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-green-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Being located in such a magnificent area, we&apos;re passionate about protecting the natural environment
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Our Initiatives
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumb BC1={{ link: '/', text: 'Home' }} BC2={{ link: '/sustainability', text: 'Sustainability' }} />
      </div>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-normal text-gray-900 mb-6">
              ECO-CONSCIOUS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While many lifestyle brands have adopted sustainability for marketing reasons, at Lalaguna Villas, being eco-conscious was never part of a marketing strategy, it&apos;s been part of our DNA from the start. The reason we built our resort in such an idyllic beachfront location in Puerto Galera, surrounded by pristine waters and the world&apos;s best diving, is that we truly value what nature put here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal mb-6 uppercase">Our Achievements</h2>
            <p className="text-green-100">Recognition for our commitment to sustainable tourism</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "27", label: "ANAHAW Pioneer Awardees" },
              { number: "1", label: "Only Resort in Puerto Galera" },
              { number: "100%", label: "Zero Carbon Commitment" },
              { number: "SOS", label: "Save Our Spots Supporter" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 mb-6 uppercase">
              A CONTINUOUS PROCESS
            </h2>
            <p className="">
              We have made significant strides in all of these areas, and also continue to advance in other areas that are not part of the requirements. To us, sustainable tourism is about re-focusing and adapting, ensuring the balance between environmental limits and usage is maintained.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {environmentalInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-normal text-gray-900 mb-4 uppercase">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{initiative.content}</p>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conservation Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 mb-6 uppercase">
              Our Conservation Partnership
            </h2>
            <p className="">
              Working with Blue Alliance Philippines for marine conservation and coral reef protection
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-normal text-gray-900 mb-6 uppercase">Blue Alliance Partnership</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our guests, and members of our team, got a chance to learn about, donate to, and indeed hang out with some of the great people who work for our partners in the marine conservation group Blue Alliance Philippines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This partnership allows us to actively participate in coral reef restoration and marine life protection programs, ensuring the preservation of the underwater ecosystem that makes Puerto Galera a world-class diving destination.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl shadow-lg"></div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 mb-6 uppercase">
              Learn More About Our Initiatives
            </h2>
            <p className="text-gray-600">
              Read our blog posts to learn more about specific eco-conscious projects that we&apos;ve completed, and continue to improve, at Lalaguna Villas.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gray-900 mb-4 uppercase">Choosing the Perfect Dive Resort</h3>
              <p className="text-gray-600 mb-4">Jul 14, 2024 | Conservation, dive sites, Diving, Marine life, Puerto Galera, Resort, Services, Sustainability</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Diving is a thrilling adventure that offers unparalleled access to the wonders of the underwater world. But to make the most of your diving experience, selecting the right dive resort in Puerto Galera is crucial.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                Read More →
              </button>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gray-900 mb-4 uppercase">Our Conservation Partnership with Blue Alliance</h3>
              <p className="text-gray-600 mb-4">Sep 16, 2023 | Conservation, Marine life, Puerto Galera, Sustainability, Team Building</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our guests, and members of our team, got a chance to learn about, donate to, and indeed hang out with some of the great people who work for our partners in the marine conservation group Blue Alliance Philippines.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                Read More →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6 uppercase">
              Experience Sustainable Luxury
            </h2>
            <p className="text-green-100 mb-8">
              We know that many of our guests also feel strongly about being eco-conscious, as many of you are avid divers that value the natural ecosystem in this region. We&apos;re proud of our initiatives to conserve our natural resources and are happy to give interested guests a tour of our facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-700 hover:bg-green-50 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Book Your Stay
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 