export interface OfferSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  features?: string[];
  services?: string[];
}

export const offersData: OfferSection[] = [
  {
    id: 'affordable-luxury',
    title: 'Affordable Luxury',
    content: `Lalaguna Villas Luxury Dive Resort & Spa is the premier luxury resort in Puerto Galera, featuring a blend of style, friendly service, and luxury comfort.

Lalaguna Villas Resort - Puerto Galera's Premier Luxury Dive Resort

We offer a private villas-style atmosphere that is within a short walk from the center of the lively town of Sabang. Our resort capitalizes on one of our location's greatest assets, the outstanding views of the pristine waters of the famous scuba diving hub of Puerto Galera.

Lalaguna Villas - Puerto Galera's Premier Luxury Dive Resort`,
    image: '/images/r1.png'
  },
  {
    id: 'amazing-diving',
    title: 'Amazing Diving',
    content: `Lalaguna Villas - Puerto Galera's premier luxury dive resort

Experience some of the best diving in Asia with LLV Divers, our scuba diving center at Lalaguna Villas Sabang. Dive with our international team of PADI-certified professionals and explore the amazing dive sites in the area.

Our new state-of-the-art beachfront dive center is centrally located, offering quick access to most of the best dive sites in the area with a short speedboat ride of around 5 minutes.

We're an authorized PADI 5 Star Dive Resort, so you're in the best of hands with our service, standards, and equipment.

LLV Divers`,
    image: '/images/f-dive.png'
  },
  {
    id: 'premium-accommodation',
    title: 'Premium Accommodation',
    content: `Most of our villas feature spectacular ocean views of one of the most renowned tropical diving areas in Asia.

All are equipped with the latest facilities and amenities, providing the highest western standard luxuries for your enjoyment and comfort.

We offer a broad range of accommodation options, ranging from economical studios, our unrivaled Luxury Villa range, up to our signature VIP multi-bedroom Penthouse apartment, with its magnificent 100 sqm terrace with BBQ.

Villa Room at Lalaguna Villas & LLV Divers 1
Lalaguna Villas Resort - Puerto Galera's Premier Luxury Dive Resort
Villa Room at Lalaguna Villas & LLV Divers 
Lalaguna Villas Luxury Dive Resort & Spa - L81-Penthouse

Our Rooms`,
    image: '/images/f-accom.png'
  },
  {
    id: 'outstanding-dining',
    title: 'Outstanding Dining',
    content: `Experience our exceptional international menu offering an extensive range of Asian and Western cuisine with a focus on fresh local produce and fresh seafood. Our Restaurant, Bar, and Room Service operate 24 hours.

Our poolside bar offers a great selection of local and international beers, signature cocktails, and an extensive wine list, including an eclectic collection of exquisite imported wines from our cellar.

Restaurant & Bar`,
    image: '/images/f-food.png'
  },
  {
    id: 'services-amenities',
    title: 'Services & Amenities',
    content: `With luxury amenities and outstanding service, our resort is in a class of its own among dive resorts in Puerto Galera.

Lalaguna Villas - Poolside Dining`,
    features: [
      'Electronic Door Locks',
      'Split-system Air-con',
      'International Powerpoints',
      'Microwave Oven',
      'Wine glasses, crockery & cutlery',
      'Hairdryer',
      'Daily Room Cleaning Service',
      'Smoke-free guest rooms',
      'Multiple Bedroom Family Rooms',
      'In-room vault, laptop-sized',
      'Sound bars with phone/iPod cable'
    ],
    services: [
      'Front Desk 24 hours daily',
      'Local Sim Card/Load available',
      'Currency exchange',
      'Credit Card accepted',
      'Express Check-in/Check-out',
      'Free WiFi within the resort',
      'Laundry service',
      'Meeting room',
      'Luggage storage',
      'Babysitting',
      'Tours & tickets'
    ]
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    content: `Restaurant & Poolside Bar – 24 Hours
Room Service – 24 Hours
Extensive range of Asian and Western cuisine
A focus on fresh local produce
The freshest local seafood
International beers, Spirits, Signature Cocktails
Extensive Wine List & Owners Cellar
Weekend Dining Buffets and Specials

Enjoy
In-room massage available
Video on-demand (Plex)
TV Net Cable TV and Cignal Satellite TV (available only at 2Br Premium Villa, 2Br Luxury Villa & 2Br Penthouse)
Curved and/or Flat screen Samsung Smart TV`,
    image: '/images/f-food.png'
  },
  {
    id: 'diving-center',
    title: 'Diving Center',
    content: `Lalaguna Villas - the Best Diving in Puerto Galera
Diving Center
PADI 5 Star Dive Resort

Experienced Professionals

A highly respected PADI certified dive team
Guided by experienced Divemasters
Multilingual dive team: English, Chinese, Japanese & Tagalog
Maximum of 5 divers per Divemaster
Training from PADI Discover Scuba Diving to Divemaster

Modern Equipment

PADI 5 Star Dive Resort
New state of the art luxury dive center
Largest training swimming pool in Sabang
Air-conditioned classroom with HD TV's
PADI E-learning and books available
Brand new Cressi professional diving equipment
Nitrox tanks available
Modern dive speedboats for quick transit`,
    image: '/images/f-dive.png'
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    content: `Scuba diving – beginners to advanced
Outdoor pool
Pool sun lounges
Fitness facilities
Full-service spa
Activities Desk – Tours, excursions, local attractions
Recreation Area with Table Tennis & Billiard table
Clubhouse with Karaoke & Games`,
    image: '/images/f-ame.png'
  },
  {
    id: 'excursions-activities',
    title: 'Excursions and Activities',
    content: `Aquatic Adventure
Extreme Sports (Mud Go Karts, ATVs, Paintball & Zombieland Crossbow/Airgun) 
Island Hopping on LLV's Speed Boat
Inland Tours
Talipanan Falls
Tamaraw Falls
Tukaran Falls (AKA Hidden Paradise)
Mangyan Village
Infinity Farms
Underwater Cave
Lantuyan River (Falls in Baco)
Haligi Beach, Dalungan Beach & White Beach 
Golfing and ​zip line at Ponderosa Golf Club
Motorbike, Yacht rental`,
    image: '/images/f-ame.png'
  },
  {
    id: 'transport',
    title: 'Transport',
    content: `VIP private transfer from Manila directly to our doorstep in our luxury car and craft (extra charge)
Private Luxury Car – Hyundai Starex
Minibus
Speedboat Water Taxi-Shuttle between resort and ferry ports (extra charge)`,
    image: '/images/f-acce.png'
  },
  {
    id: 'luxurious-spa',
    title: 'Luxurious Spa',
    content: `WellZen Spa at Lalaguna Villas – Luxury for the Mind, Body, and Soul.

Pamper your senses with our revitalizing therapies to ease away stress and enhance your physical and mental wellbeing.

With treatments such as Reflexology, Warm Bamboo Massage, Aroma Stone Massage, and Body Mask Detox, you're in good hands with our highly-skilled therapists.`,
    image: '/images/f-spa.png'
  }
]; 