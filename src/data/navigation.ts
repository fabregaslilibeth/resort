export interface MenuItem {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    dropdown: [
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Journal', href: '/blogs' },
      { name: 'Offers & Services', href: '/offers' }
    ]
  },
  { name: 'Villas', href: '/villas' },
  {
    name: 'Diving',
    href: '/diving',
    dropdown: [
      { name: 'LLV Divers', href: '/dive/llv-divers' },
      { name: 'Diving Courses', href: '/dive/diving-courses' },
      { name: 'Go Professional', href: '/dive/padi-divemaster-internship' },
      { name: 'Dive Sites', href: '/dive/dive-sites' },
    ]
  },
  {
    name: 'Dining',
    href: '/dining',
    dropdown: [
      { name: 'Menu', href: '/dining/menu' },
    ]
  },
  {
    name: 'Activities',
    href: '/activities',
    dropdown: [
      { name: 'Spa', href: '/spa' },
      { name: 'On the Water', href: '/activities#water' },
      { name: 'On Land', href: '/activities#land' },
      { name: 'Places to Explore', href: '/activities#explore' },
    ]
  },
  { name: 'Transport', href: '/transport' },
  { name: 'Contact', href: '/contact' }
];
