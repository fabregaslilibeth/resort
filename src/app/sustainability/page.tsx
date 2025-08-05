"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

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
      description:
        "Our state-of-the-art water conservation, purification and recycling systems ensure we minimize water waste while maintaining luxury standards.",
    },
    {
      icon: "⚡",
      title: "Power Management System",
      description:
        "State-of-the-art power management system for greater efficiency, reducing energy consumption and carbon emissions.",
    },
    {
      icon: "🌿",
      title: "Zero Carbon Resorts",
      description:
        "Member of the voluntary international program known as Zero Carbon Resorts, committed to carbon-neutral operations.",
    },
    {
      icon: "🏆",
      title: "ANAHAW Certification",
      description:
        "One of only 27 pioneer awardees for the ANAHAW Philippine Sustainable Tourism Certification (2018-2020).",
    },
    {
      icon: "🐠",
      title: "Marine Conservation",
      description:
        "Partnership with Blue Alliance Philippines for marine conservation and coral reef protection programs.",
    },
    {
      icon: "🏝️",
      title: "Save Our Spots (SOS)",
      description:
        "Supporter of the Department of Tourism (DOT) 'Save Our Spots (SOS)' campaign for responsible and sustainable tourism.",
    },
  ];

  const environmentalInitiatives = [
    {
      title: "ANAHAW Philippine Sustainable Tourism Certification",
      content:
        "Lalaguna Villas is one of only 27 hotels and resorts that were named pioneer awardees for the ANAHAW Philippine Sustainable Tourism Certification (2018-2020). We are the only resort in the Puerto Galera area to have achieved this important certification. The Anahaw certification initiative aims to reduce the carbon emission impact of tourism, by empowering resorts to use innovative techniques to help save energy, water, fuel, and other resources, reduce waste and carbon emission, and improve overall operational efficiency.",
      image:
        "https://lalagunavillas.com/wp-content/uploads/2020/04/ANAHAW-Award-Ceremony-Lalaguna-Villas.jpg",
    },
    {
      title: "Zero Carbon Resorts Program",
      content:
        "Aiming to advance towards carbon-neutral operations through the adoption of innovative practices and technology, the use of renewable resources, and resource efficiency, the Center for Appropriate Technology from Austria (GrAT) launched the Zero Carbon Resorts for Sustainable Tourism project in the Philippines and Thailand. We're proud to be a member of this vital project, and we look forward to our continuing cooperation.",
      image:
        "https://lalagunavillas.com/wp-content/uploads/2020/04/zero-carbon-resorts-sustainable-tourism.png",
    },
    {
      title: "Environmental Awareness Program",
      content:
        "Our sustainability efforts are in areas such as advanced water conservation, purification and recycling, and a state of the art power management system for greater efficiency. This is part of our ongoing environmental awareness program, as a member of the voluntary international program known as Zero Carbon Resorts.",
      image:
        "https://lalagunavillas.com/wp-content/uploads/2020/04/ANAHAW-Philippine-Sustainable-Tourism-Certification-4.png",
    },
    {
      title: "Save Our Spots (SOS) Campaign",
      content:
        "We're a supporter of the Department of Tourism (DOT) 'Save Our Spots (SOS)' campaign, to inspire a culture of responsible and sustainable tourism, in an effort to save precious environmental and cultural areas.",
      image:
        "https://lalagunavillas.com/wp-content/uploads/2020/04/LLV_Sustainable_Resort-Medium.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-blue-900/70 to-teal-800/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          }}
        ></div>

        <motion.div
          className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h5
            className="text-2xl md:text-4xl mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Sustainability
          </motion.h5>
          <motion.p
            className="mb-8 text-green-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Being located in such a magnificent area, we&apos;re passionate
            about protecting the natural environment
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Our Initiatives
            </button>
            <button className="px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Breadcrumb
          BC1={{ link: "/", text: "Home" }}
          BC2={{ link: "/sustainability", text: "Sustainability" }}
        />
      </div>

      {/* Sustainability Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl text-gray-900 mb-4 uppercase break-words">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm break-words">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal text-gray-900 mb-6 uppercase">
              ECO-CONSCIOUS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              While many lifestyle brands have adopted sustainability for
              marketing reasons, at Lalaguna Villas, being eco-conscious was
              never part of a marketing strategy, it&apos;s been part of our DNA
              from the start. The reason we built our resort in such an idyllic
              beachfront location in Puerto Galera, surrounded by pristine
              waters and the world&apos;s best diving, is that we truly value
              what nature put here.
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-4xl mx-auto px-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/v63kzJRmDF8?feature=oembed"
                  title="Lalaguna Villas Sustainability Commitment"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-2 left-2 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/3 right-2 w-2 h-2 bg-amber-400 rounded-full opacity-25"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Environmental Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-200 via-amber-600 to-amber-500 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-normal mb-6 uppercase">
              Our Achievements
            </h2>
            <p className="text-green-100">
              Recognition for our commitment to sustainable tourism
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "27", label: "ANAHAW Pioneer Awardees" },
              { number: "1", label: "Only Resort in Puerto Galera" },
              { number: "100%", label: "Zero Carbon Commitment" },
              { number: "SOS", label: "Save Our Spots Supporter" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base break-words">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
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
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-normal text-gray-900 mb-4 uppercase break-words">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base break-words">
                    {initiative.content}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="aspect-video bg-gradient-to-r from-orange-200 via-amber-600 to-amber-500 rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6 uppercase">
              A CONTINUOUS PROCESS
            </h2>
            <p className="pt-3 break-words">
              While many lifestyle brands have adopted sustainability for
              marketing reasons, at Lalaguna Villas, being eco-conscious was
              never part of a marketing strategy, it's been part of our DNA from
              the start.
            </p>
            <p className="pt-3 break-words">
              The reason we built our resort in such an idyllic beachfront
              location in Puerto Galera, surrounded by pristine waters and the
              world's best diving, is that we truly value what nature put here.
              Why would we not want to preserve that for ourselves and for
              everyone that visits this remarkable area?
            </p>
            <p className="pt-3 break-words">
              So while we're grateful to be recognized for our eco-conscious
              endeavors and investment, it's something we feel strongly about
              doing anyway and will continue to push to lead the way in our
              region.
            </p>
            <p className="pt-3 break-words">
              We know that many of our guests also feel strongly about being
              eco-conscious, as many of you are avid divers that value the
              natural ecosystem in this region. We're proud of our initiatives
              to conserve our natural resources and are happy to give interested
              guests a tour of our facilities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
