// Color mapping for badges and borders
export const colorMap: Record<string, { border: string; badge: string; price: string }> = {
  blue: {
    border: '#3b82f6',
    badge: 'bg-blue-100 text-blue-800',
    price: 'text-blue-600'
  },
  green: {
    border: '#10b981',
    badge: 'bg-green-100 text-green-800',
    price: 'text-green-600'
  },
  purple: {
    border: '#8b5cf6',
    badge: 'bg-purple-100 text-purple-800',
    price: 'text-purple-600'
  },
  orange: {
    border: '#f97316',
    badge: 'bg-orange-100 text-orange-800',
    price: 'text-orange-600'
  },
  indigo: {
    border: '#6366f1',
    badge: 'bg-indigo-100 text-indigo-800',
    price: 'text-indigo-600'
  },
  red: {
    border: '#ef4444',
    badge: 'bg-red-100 text-red-800',
    price: 'text-red-600'
  },
  yellow: {
    border: '#eab308',
    badge: 'bg-yellow-100 text-yellow-800',
    price: 'text-yellow-600'
  },
  gray: {
    border: '#6b7280',
    badge: 'bg-gray-100 text-gray-800',
    price: 'text-gray-600'
  },
  teal: {
    border: '#14b8a6',
    badge: 'bg-teal-100 text-teal-800',
    price: 'text-teal-600'
  }
};

// Fun diving data
export const funDivingData = [
  {
    title: "Recreational Fun Dives",
    price: "$37",
    priceLabel: "per dive",
    image: "/images/f-dive.png",
    features: [
      "Experienced divemaster",
      "Maximum 5 divers per guide",
      "All equipment included",
      "Boat transportation"
    ]
  },
  {
    title: "Nitrox Diving",
    price: "$10",
    priceLabel: "additional fee",
    image: "/images/f-dive.png",
    features: [
      "Extended bottom time",
      "Reduced surface intervals",
      "Professional gas blending",
      "Safety monitoring"
    ]
  },
  {
    title: "Night Dives",
    price: "$10",
    priceLabel: "additional fee",
    image: "/images/f-dive.png",
    features: [
      "Underwater lights provided",
      "Nocturnal marine life",
      "Experienced night dive guides",
      "Safety equipment included"
    ]
  }
];

// PADI courses data
export const padiCoursesData = [
  {
    title: "Bubblemaker",
    badge: "Children 8+",
    badgeColor: "blue",
    description: "Experience scuba diving under the direct supervision of a PADI Pro. Take your first breaths underwater in water shallower than 2 metres/6 ft.",
    features: [
      "First underwater experience",
      "Safe shallow water introduction",
      "Professional supervision"
    ],
    price: "$105",
    duration: "3 Hours"
  },
  {
    title: "Discovery Scuba Diving",
    badge: "Introduction",
    badgeColor: "green",
    description: "An introduction to explore scuba diving and the underwater world. It&apos;s a great way for non-certified divers to literally &apos;test the waters&apos;.",
    features: [
      "Introduction to scuba diving",
      "Underwater world exploration",
      "No certification required"
    ],
    price: "$105",
    duration: "3 Hours"
  },
  {
    title: "Scuba Diver",
    badge: "Quick Course",
    badgeColor: "purple",
    description: "Limited time? No problem! The PADI Scuba Diver Course is a great way to learn how to scuba dive within a tight time frame.",
    features: [
      "Quick certification option",
      "Foundation for Open Water",
      "Limited time commitment"
    ],
    price: "$390",
    duration: "2 Days"
  },
  {
    title: "Open Water Diver",
    badge: "Entry Level",
    badgeColor: "blue",
    description: "Welcome to the world of scuba diving, your diver certification begins here with PADI&apos;s entry-level Open Water Diver Course.",
    features: [
      "Complete PADI certification",
      "Online eLearning included",
      "Lifetime certification"
    ],
    price: "$580",
    duration: "3-4 Days"
  },
  {
    title: "Adventure Diver",
    badge: "Intermediate",
    badgeColor: "orange",
    description: "The Adventure Diver course is a subset of the PADI Advanced Open Water Diver Course. With a long list of dive adventures, you can take part in during this program.",
    features: [
      "Three adventure dives",
      "Build scuba skills",
      "Gain confidence"
    ],
    price: "$330",
    duration: "1-2 Days"
  },
  {
    title: "Advanced Open Water",
    badge: "Advanced",
    badgeColor: "indigo",
    description: "Advance your diving knowledge & skills with the PADI Advanced Open Water Diver course. Designed to be taken after completing the PADI Open Water Diver certification.",
    features: [
      "Five adventure dives",
      "Deep and navigation dives",
      "Expand skills"
    ],
    price: "$465",
    duration: "2-3 Days"
  },
  {
    title: "Rescue Diver",
    badge: "Advanced",
    badgeColor: "red",
    description: "A challenging yet rewarding course. You&apos;ll learn to prevent and manage problems in the water, becoming a more confident diver knowing that you can help others if needed.",
    features: [
      "Problem prevention",
      "Emergency management",
      "Self-rescue skills"
    ],
    price: "$500",
    duration: "2-3 Days"
  },
  {
    title: "PADI EFR",
    badge: "First Aid",
    badgeColor: "yellow",
    description: "The Emergency First Response course teaches simple to follow steps for emergency care, CPR and first aid skills, and you practice applying these skills in a nonstressful learning environment.",
    features: [
      "Emergency care training",
      "CPR certification",
      "Required for Rescue Diver"
    ],
    price: "$200",
    duration: "1 Day"
  },
  {
    title: "Divemaster Course - Bronze",
    badge: "Professional",
    badgeColor: "gray",
    description: "Completing the PADI Divemaster course is the first step in becoming a scuba professional, giving you a sense of diving self-confidence and achievement.",
    features: [
      "Professional certification",
      "Assist instructors",
      "Advanced navigation"
    ],
    price: "$1550 +fees",
    duration: "More information"
  },
  {
    title: "Divemaster Course - Silver",
    badge: "Professional",
    badgeColor: "gray",
    description: "Completing the PADI Divemaster course is the first step in becoming a scuba professional, giving you a sense of diving self-confidence and achievement.",
    features: [
      "Professional certification",
      "Assist instructors",
      "Advanced navigation"
    ],
    price: "$1950 +fees",
    duration: "More information"
  },
  {
    title: "Divemaster Course - Gold",
    badge: "Professional",
    badgeColor: "gray",
    description: "Completing the PADI Divemaster course is the first step in becoming a scuba professional, giving you a sense of diving self-confidence and achievement.",
    features: [
      "Professional certification",
      "Assist instructors",
      "Advanced navigation"
    ],
    price: "$2450 +fees",
    duration: "More information"
  }
];

// PADI specialty courses data
export const padiSpecialtyCoursesData = [
  {
    title: "Enriched Air Diver",
    badge: "Popular",
    badgeColor: "blue",
    description: "PADI&apos;s most popular specialty course! Diving with enriched air nitrox gives you more dive time underwater, especially on repetitive scuba dives.",
    features: [
      "Nitrox with OW: $240",
      "Nitrox with AOW: $195",
      "Nitrox Dry Course: $195"
    ],
    price: "$300",
    duration: "2 Days"
  },
  {
    title: "Night Diver",
    badge: "Specialty",
    badgeColor: "purple",
    description: "The PADI Night Diver course opens your eyes to a different world. You&apos;ll learn the differences between diving during the day and night.",
    features: [
      "Night diving techniques",
      "Equipment requirements",
      "PADI materials included"
    ],
    price: "$375",
    duration: "2-3 Nights"
  },
  {
    title: "Deep Diver",
    badge: "Advanced",
    badgeColor: "indigo",
    description: "Explore the deeper side of diving with the PADI Deep Diver course. Learn to plan and execute dives beyond 18 metres/60 feet.",
    features: [
      "Deep diving planning",
      "Gas management",
      "Safety procedures"
    ],
    price: "$375",
    duration: "2-3 Days"
  },
  {
    title: "Sidemount Diver",
    badge: "Specialty",
    badgeColor: "green",
    description: "Having scuba tanks on your back isn&apos;t a requirement for exploring the underwater world. Many scuba divers have discovered the joy of mounting cylinders on their sides.",
    features: [
      "1 confined water dive",
      "3 open water dives",
      "Flexibility options"
    ],
    price: "$550",
    duration: "2 Days"
  },
  {
    title: "Emergency Oxygen Provider",
    badge: "Safety",
    badgeColor: "red",
    description: "Knowing how and when to use emergency oxygen is a great skill to have and means you&apos;re ready to help others should the need arise.",
    features: [
      "Oxygen administration",
      "Emergency recognition",
      "No prerequisites"
    ],
    price: "$200",
    duration: "1 Day"
  },
  {
    title: "Project AWARE",
    badge: "Conservation",
    badgeColor: "teal",
    description: "An introduction to Project AWARE as a global movement for ocean protection. Focuses on the 10 Tips for Divers to Protect the Ocean Planet.",
    features: [
      "Ocean protection",
      "Environmental awareness",
      "Dry course"
    ],
    price: "$200",
    duration: "1 Day"
  }
];

// Function to get all course names for dropdown
export const getAllCourseNames = () => {
  const funDivingNames = funDivingData.map(course => course.title);
  const padiCourseNames = padiCoursesData.map(course => course.title);
  const specialtyCourseNames = padiSpecialtyCoursesData.map(course => course.title);
  
  return [
    ...funDivingNames,
    ...padiCourseNames,
    ...specialtyCourseNames
  ];
};

// Function to get course options for dropdown with categories
export const getCourseOptions = () => {
  return [
    { value: "", label: "Select a course..." },
    { value: "Fun Diving", label: "Fun Diving", disabled: true },
    ...funDivingData.map(course => ({ 
      value: course.title, 
      label: course.title,
      price: `${course.price} ${course.priceLabel}`
    })),
    { value: "PADI Courses", label: "PADI Courses", disabled: true },
    ...padiCoursesData.map(course => ({ 
      value: course.title, 
      label: course.title,
      price: course.price
    })),
    { value: "Specialty Courses", label: "Specialty Courses", disabled: true },
    ...padiSpecialtyCoursesData.map(course => ({ 
      value: course.title, 
      label: course.title,
      price: course.price
    }))
  ];
}; 