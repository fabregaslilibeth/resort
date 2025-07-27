"use client";

import BackToTop from "../../components/BackToTop";
import DivingForm from "../../components/DivingForm";

export default function LLVDiversPage() {
  
  const features = [
    {
      title: "Experienced Professionals",
      icon: "👨‍🏫",
      list: [
        "Guided by our team of experienced Divemasters",
        "Multilingual team: English, Chinese, Japanese & Tagalog",
        "Maximum of 5 divers per Divemaster",
        "PADI specialty courses available",
        "Training from Discover Scuba Diving to Divemaster",
        "Largest training swimming pool in Sabang",
      ],
    },
    {
      title: "Full 5-Star Experience",
      description:
        "We offer the full range of PADI scuba programs and have a great selection of modern professional equipment.",
      icon: "🏊‍♂️",
    },
    {
      title: "Modern Equipment",
      icon: "🤿",
      list: [
        "New state of the art beachfront dive center",
        "Air-conditioned classroom",
        "Scubapro professional diving equipment",
        "Nitrox tanks available",
        "Modern dive speedboats for quick transit",
        "PADI E-learning and books available",
      ],
    },
  ];
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/498283106/photo/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life.jpg?s=612x612&w=0&k=20&c=xOj00xaZTpy5-AtKvMvIHHfexz9miSSct_CXb6F9KVA=')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 bg-orange-500/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-3xl text-white mb-6 uppercase">LLV Divers</h1>
            <p className="mb-8 max-w-4xl mx-auto">
              Experience the best diving that the Philippines has to offer with
              LLV Divers, our modern diving center at Lalaguna Villas, Sabang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const form = document.getElementById('book-dive-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-100 hover:text-primary transition-all duration-300 cursor-pointer"
              >
                Book Your Dive
              </button>
              <a 
                href="/dive/diving-courses"
                className="text-primary bg-white bg-opacity-20 px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer inline-block text-center"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-white max-w-7xl mx-auto px-6 lg:px-8">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="rounded-3xl p-2 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">{feature?.icon}</div>
                <h3 className="text-lg text-gray-900 uppercase">
                  {feature?.title}
                </h3>
                <p className="text-gray-600">{feature?.description}</p>
                <ul className="text-gray-600 space-y-3 text-sm p-4">
                  {feature?.list?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-left gap-3"
                    >
                      <span className="text-green-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/MIpXCktcdpI?si=sB0PKvDJTAoxLlDq&autoplay=1&rel=0&modestbranding=1&mute=1"
        title="YouTube video player"
        rel="noreferrer"
        allow="autoplay; encrypted-media" 
      ></iframe>
    </div>

      {/* Image Slider Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-6 uppercase">
              @LLVDIVERS
            </h2>
            <p className="text-gray-600">
              Take a look at our diving adventures and facilities
            </p>
          </div>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-73cb9b87-8df0-4ef6-b53e-f309b760dc63"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div id="book-dive-form">
            <DivingForm title="Book Your Dive" />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
