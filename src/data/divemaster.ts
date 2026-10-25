// The PADI Divemaster internship: packages, what the month includes, and
// how the program runs.
export interface DivemasterPackage {
  name: string;
  price: string;
  inclusions: string[];
  exclusions: string[];
}

export const divemasterPackages: DivemasterPackage[] = [
  {
    name: 'Bronze',
    price: '$1550',
    inclusions: [
      'Divemaster Internship (4-weeks)',
      'Unlimited diving during the course',
      'Accommodation at our DM Lodge',
      '15% F&B Discount at LLV Restaurant',
      'IDC Prep Course',
    ],
    exclusions: ['PADI DM Application Fees ($245 AUD)'],
  },
  {
    name: 'Silver',
    price: '$1950',
    inclusions: [
      'Divemaster Internship (4-weeks)',
      'Unlimited diving during the course',
      'Accommodation at our DM Lodge',
      '15% F&B Discount at LLV Restaurant',
      'IDC Prep Course',
      'DSD Leader Training (Assist on 4 Real DSDs)',
      'Intro to DPV Experience',
      'PADI Deep Diver Specialty',
    ],
    exclusions: ['PADI DM Application Fees ($245 AUD)', 'PADI DSD Leader Application Fees ($138 AUD)'],
  },
  {
    name: 'Gold',
    price: '$2450',
    inclusions: [
      'Divemaster Internship (4-weeks)',
      'Unlimited diving during the course',
      'Accommodation at our DM Lodge',
      '15% F&B Discount at LLV Restaurant',
      'IDC Prep Course',
      'DSD Leader Training (Assist on 4 Real DSDs)',
      'PADI DPV Specialty',
      'PADI Deep Diver Specialty',
      'PADI Peak Performance Buoyancy',
    ],
    exclusions: ['PADI DM Application Fees ($245 AUD)', 'PADI DSD Leader Application Fees ($138 AUD)'],
  },
];

export const divemasterSteps = [
  {
    title: 'Dive as much as you like',
    text: 'We want you to gain as much valuable diving experience as possible, so we invite you to join as many of our scheduled dive trips as you like. Your instructor will explain your course schedule on the first day of training; use any free time outside of it to join scheduled dives with open spots.',
  },
  {
    title: 'IDC prep course',
    text: 'Run by our instructor development team, the IDC prep course gives you valuable insight into the road to PADI Dive Instructor: what to expect from instructor training, and goals to map out your path through this challenging program.',
  },
  {
    title: 'Equipment',
    text: 'We carry dive equipment from well-known manufacturers such as ScubaPro, Gull, Pelican, Octo and Ocean Reef. Bringing your own? Ask us for a price adjustment on the packages. Buying a set? Lalaguna Villas is an authorised ScubaPro reseller with a well-stocked store on site.',
  },
  {
    title: 'DSD leader training',
    text: 'PADI Discover Scuba Diving needs no previous experience and is the most popular way to try scuba. DSD leaders are Divemasters with extra training to run DSDs on their own, which greatly increases your employability and earning potential.',
  },
  {
    title: 'DPV experience',
    text: 'Diver Propulsion Vehicles let you explore more on each dive and have a lot more fun doing it. We carry a range of SUEX DPVs for courses and rental: try one during your training, add the specialty to get certified, and later, as an instructor, teach it yourself.',
  },
];

export const divemasterPhases = [
  {
    phase: 'Theory & knowledge development',
    duration: '2–3 weeks',
    content: ['PADI Divemaster manual study', 'Physics and physiology review', 'Equipment knowledge', 'Dive planning and management', 'Risk management principles'],
  },
  {
    phase: 'Practical skills development',
    duration: '2–3 weeks',
    content: ['Water skills assessment', 'Rescue skills refinement', 'Equipment setup and maintenance', 'Dive site mapping', 'Emergency procedures practice'],
  },
  {
    phase: 'Professional experience',
    duration: '2–4 weeks',
    content: ['Assist with PADI courses', 'Lead certified divers', 'Customer service training', 'Business operations exposure', 'Final assessment and evaluation'],
  },
];
