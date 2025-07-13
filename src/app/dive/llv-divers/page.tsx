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
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="font-bold mb-6">LLV Divers</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
              Experience the best diving that the Philippines has to offer with
              LLV Divers, our modern diving center at Lalaguna Villas, Sabang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Book Your Dive
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-lg">
                View Courses
              </button>
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
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature?.description}</p>
                <ul className="text-gray-600 space-y-3 text-sm p-4">
                  {feature.list?.map((item, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              @LLVDIVERS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Fun Diving Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fun Diving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recreational fun dives are a great way to explore the amazing dive
              sites around Puerto Galera, and at the same time, gain further
              experience and develop your skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$37</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Recreational Fun Dives
                </h3>
                <p className="text-gray-600">per dive</p>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Experienced divemaster</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Maximum 5 divers per guide</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>All equipment included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Boat transportation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$10</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nitrox Diving
                </h3>
                <p className="text-gray-600">additional fee</p>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Extended bottom time</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Reduced surface intervals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Professional gas blending</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Safety monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$10</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Night Dives
                </h3>
                <p className="text-gray-600">additional fee</p>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Underwater lights provided</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Nocturnal marine life</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Experienced night dive guides</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Safety equipment included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Equipment Rental */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Dive Gear Rental
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Daily Rates
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Full Equipment Rental</span>
                    <span className="font-semibold text-blue-600">$20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dive Computer Rental</span>
                    <span className="font-semibold text-blue-600">$10</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Per Dive Rates
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Full Equipment Rental</span>
                    <span className="font-semibold text-blue-600">$10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dive Computer Rental</span>
                    <span className="font-semibold text-blue-600">$5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PADI Courses Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              PADI Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recreational diving and PADI certification courses for all levels.
              Our team can introduce you to the world of diving or help you
              pursue advanced certifications.
            </p>
          </div>

          <div className="space-y-4">
            {/* Bubblemaker */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Bubblemaker
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Children 8+
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Experience scuba diving under the direct supervision of a
                    PADI Pro. Take your first breaths underwater in water
                    shallower than 2 metres/6 ft.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• First underwater experience</span>
                    <span>• Safe shallow water introduction</span>
                    <span>• Professional supervision</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">$105</div>
                  <div className="text-gray-600 text-sm">3 Hours</div>
                </div>
              </div>
            </div>

            {/* Discovery Scuba Diving */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Discovery Scuba Diving
                    </h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Introduction
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    An introduction to explore scuba diving and the underwater
                    world. It&apos;s a great way for non-certified divers to
                    literally &apos;test the waters&apos;.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Introduction to scuba diving</span>
                    <span>• Underwater world exploration</span>
                    <span>• No certification required</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$105</div>
                  <div className="text-gray-600 text-sm">3 Hours</div>
                </div>
              </div>
            </div>

            {/* Scuba Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Scuba Diver
                    </h3>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Quick Course
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Limited time? No problem! The PADI Scuba Diver Course is a
                    great way to learn how to scuba dive within a tight time
                    frame.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Quick certification option</span>
                    <span>• Foundation for Open Water</span>
                    <span>• Limited time commitment</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">$390</div>
                  <div className="text-gray-600 text-sm">2 Days</div>
                </div>
              </div>
            </div>

            {/* Open Water Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Open Water Diver
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Entry Level
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Welcome to the world of scuba diving, your diver
                    certification begins here with PADI&apos;s entry-level Open
                    Water Diver Course.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Complete PADI certification</span>
                    <span>• Online eLearning included</span>
                    <span>• Lifetime certification</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">$580</div>
                  <div className="text-gray-600 text-sm">3-4 Days</div>
                </div>
              </div>
            </div>

            {/* Adventure Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Adventure Diver
                    </h3>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Intermediate
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    The Adventure Diver course is a subset of the PADI Advanced
                    Open Water Diver Course. With a long list of dive
                    adventures, you can take part in during this program.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Three adventure dives</span>
                    <span>• Build scuba skills</span>
                    <span>• Gain confidence</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">$330</div>
                  <div className="text-gray-600 text-sm">1-2 Days</div>
                </div>
              </div>
            </div>

            {/* Advanced Open Water */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Advanced Open Water
                    </h3>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Advanced
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Advance your diving knowledge & skills with the PADI
                    Advanced Open Water Diver course. Designed to be taken after
                    completing the PADI Open Water Diver certification.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Five adventure dives</span>
                    <span>• Deep and navigation dives</span>
                    <span>• Expand skills</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">$465</div>
                  <div className="text-gray-600 text-sm">2-3 Days</div>
                </div>
              </div>
            </div>

            {/* Rescue Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Rescue Diver
                    </h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Advanced
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    A challenging yet rewarding course. You&apos;ll learn to
                    prevent and manage problems in the water, becoming a more
                    confident diver knowing that you can help others if needed.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Problem prevention</span>
                    <span>• Emergency management</span>
                    <span>• Self-rescue skills</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">$500</div>
                  <div className="text-gray-600 text-sm">2-3 Days</div>
                </div>
              </div>
            </div>

            {/* PADI EFR */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      PADI EFR
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      First Aid
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    The Emergency First Response course teaches simple to follow
                    steps for emergency care, CPR and first aid skills, and you
                    practice applying these skills in a nonstressful learning
                    environment.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Emergency care training</span>
                    <span>• CPR certification</span>
                    <span>• Required for Rescue Diver</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">$200</div>
                  <div className="text-gray-600 text-sm">1 Day</div>
                </div>
              </div>
            </div>

            {/* Divemaster Course */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Divemaster Course
                    </h3>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Professional
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Completing the PADI Divemaster course is the first step in
                    becoming a scuba professional, giving you a sense of diving
                    self-confidence and achievement.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Professional certification</span>
                    <span>• Assist instructors</span>
                    <span>• Advanced navigation</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-600">
                    Contact Us
                  </div>
                  <div className="text-gray-600 text-sm">
                    Professional Level
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty Courses Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              PADI Specialty Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your diving skills and knowledge with our comprehensive
              specialty courses.
            </p>
          </div>

          <div className="space-y-4">
            {/* Enriched Air Nitrox */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Enriched Air Diver
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    PADI&apos;s most popular specialty course! Diving with
                    enriched air nitrox gives you more dive time underwater,
                    especially on repetitive scuba dives.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Nitrox with OW: $240</span>
                    <span>• Nitrox with AOW: $195</span>
                    <span>• Nitrox Dry Course: $195</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">$300</div>
                  <div className="text-gray-600 text-sm">2 Days</div>
                </div>
              </div>
            </div>

            {/* Night Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Night Diver
                    </h3>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Specialty
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    The PADI Night Diver course opens your eyes to a different
                    world. You&apos;ll learn the differences between diving
                    during the day and night.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Night diving techniques</span>
                    <span>• Equipment requirements</span>
                    <span>• PADI materials included</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">$375</div>
                  <div className="text-gray-600 text-sm">2-3 Nights</div>
                </div>
              </div>
            </div>

            {/* Deep Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Deep Diver
                    </h3>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Advanced
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Explore the deeper side of diving with the PADI Deep Diver
                    course. Learn to plan and execute dives beyond 18 metres/60
                    feet.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Deep diving planning</span>
                    <span>• Gas management</span>
                    <span>• Safety procedures</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">$375</div>
                  <div className="text-gray-600 text-sm">2-3 Days</div>
                </div>
              </div>
            </div>

            {/* Sidemount Diver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Sidemount Diver
                    </h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Specialty
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Having scuba tanks on your back isn&apos;t a requirement for
                    exploring the underwater world. Many scuba divers have
                    discovered the joy of mounting cylinders on their sides.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• 1 confined water dive</span>
                    <span>• 3 open water dives</span>
                    <span>• Flexibility options</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$550</div>
                  <div className="text-gray-600 text-sm">2 Days</div>
                </div>
              </div>
            </div>

            {/* Emergency Oxygen Provider */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Emergency Oxygen Provider
                    </h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Safety
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Knowing how and when to use emergency oxygen is a great
                    skill to have and means you&apos;re ready to help others
                    should the need arise.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Oxygen administration</span>
                    <span>• Emergency recognition</span>
                    <span>• No prerequisites</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">$200</div>
                  <div className="text-gray-600 text-sm">1 Day</div>
                </div>
              </div>
            </div>

            {/* Project AWARE */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Project AWARE
                    </h3>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Conservation
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    An introduction to Project AWARE as a global movement for
                    ocean protection. Focuses on the 10 Tips for Divers to
                    Protect the Ocean Planet.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <span>• Ocean protection</span>
                    <span>• Environmental awareness</span>
                    <span>• Dry course</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600">$200</div>
                  <div className="text-gray-600 text-sm">1 Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Dive?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our diving team to book your adventure or learn more
                about our services. We&apos;re here to make your diving dreams
                come true.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+63 917 570 3415</p>
                    <p className="text-gray-600">+63 998 541 1557</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      llvdivers@lalagunavillas.com.ph
                    </p>
                    <p className="text-gray-600">gopro@lalagunavillas.com.ph</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Small Lalaguna Beach, Sabang
                    </p>
                    <p className="text-gray-600">
                      Puerto Galera, Oriental Mindoro
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book Your Dive
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
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
                    <option>Fun Diving</option>
                    <option>Bubblemaker</option>
                    <option>Discovery Scuba Diving</option>
                    <option>Open Water Diver</option>
                    <option>Advanced Open Water</option>
                    <option>Rescue Diver</option>
                    <option>Specialty Course</option>
                    <option>Other</option>
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
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
