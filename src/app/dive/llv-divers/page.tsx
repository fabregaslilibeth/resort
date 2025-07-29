"use client";

import DivingForm from "../../components/DivingForm";

export default function LLVDiversPage() {
  const features = [
    {
      title: "Experienced Professionals",
      image: "https://lalagunavillas.com/wp-content/uploads/2021/09/4.1.jpg",
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
      title: "Modern Equipment",
      image: "https://lalagunavillas.com/wp-content/uploads/2020/05/PADI-at-LLV-Divers-Puerto-Galera-1.jpg",
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/498283106/photo/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life.jpg?s=612x612&w=0&k=20&c=xOj00xaZTpy5-AtKvMvIHHfexz9miSSct_CXb6F9KVA=')`,
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
                  const form = document.getElementById("book-dive-form");
                  if (form) {
                    form.scrollIntoView({ behavior: "smooth" });
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

      {/* PADI 5 Star Dive Resort Section */}
      <div className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900 mb-6 uppercase">
              Full 5-Star Experience
            </h2>
            <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
              <p>
                We&apos;re a PADI 5 Star Dive Resort, which means we excel in
                providing divers with memorable diving experiences by providing
                outstanding professional service. We also make the whole
                experience a lot of fun.
              </p>
              <p>We offer the full range of PADI scuba programs and have a great selection of modern professional equipment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-white max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl text-gray-900 uppercase mb-6">
                  {feature?.title}
                </h3>
                <ul className="text-gray-600 space-y-3 text-base">
                  {feature?.list?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3"
                    >
                      <span className="text-green-500 text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image */}
              <div className="flex-1">
                <img 
                  src={feature?.image} 
                  alt={feature?.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
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

      {/* Diving at LLV Divers Section */}
      <div className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://lalagunavillas.com/wp-content/uploads/2020/03/Lalaguna-Villas-Diving.jpg')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl text-gray-900 mb-6 uppercase">
              DIVING AT LLV DIVERS
            </h2>
            <p className="text-gray-900 mb-8 text-lg">
              Recreational diving and PADI certification courses for all levels.
            </p>
            <div className="space-y-6 text-gray-900">
              <p>
                Our team can introduce you to the world of diving with a brief
                dive in our pool, or you can pursue more advanced and specialty
                courses.
              </p>
              <p>
                With our fun professional diving team, and some of the
                world&apos;s best diving nearby, you&apos;re in for a memorable
                experience.
              </p>
            </div>
          </div>
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
    </div>
  );
}
