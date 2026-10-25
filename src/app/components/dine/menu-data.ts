// The menu (src/data/menu.ts) sorted into food, drinks and wine, each
// category with its own address under /dining/menu.
import { menuItem } from '@/data/menu';
import { menuCategories } from '@/data/menuCategories';
import { site } from '@/data/site';

export type MenuItem = (typeof menuItem)[number];

export interface MenuCategory {
  name: string;
  /** For display: "Owners Cellar · Red Wine". */
  title: string;
  slug: string;
  items: MenuItem[];
}

export interface MenuGroup {
  id: 'food' | 'drinks' | 'wine';
  label: string;
  /** Leads into a category's name in its hero ("From the bar, / Cocktails"). */
  from: string;
  image: string;
  alt: string;
  categories: MenuCategory[];
}

/** "Starters & Pica Pica" → "starters-and-pica-pica", 'Pizza 12"' → "pizza-12". */
export function categoryToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}

// Drinks in the order a guest reads them; everything named "...Wine" is wine.
const DRINKS = ['Drinks', 'Coffee', 'Espresso With a Shot', 'Iced & Frappuccino', 'Tea', 'Cocktails', 'Local Beers'];
const groupOf = (name: string): MenuGroup['id'] => (name.includes('Wine') ? 'wine' : DRINKS.includes(name) ? 'drinks' : 'food');

// Categories in the menu's own order; any it doesn't list go last.
const order = (name: string) =>
  DRINKS.includes(name) ? 100 + DRINKS.indexOf(name) : (menuCategories.find((category) => category.name === name)?.order ?? 99);
const names = [...new Set(menuItem.map((item) => item.category))].sort((a, b) => order(a) - order(b));

const GROUPS: Omit<MenuGroup, 'categories'>[] = [
  { id: 'food', label: 'Food', from: 'From the kitchen,', image: '/images/home/feast.jpg', alt: 'A seafood boodle feast laid out on banana leaves' },
  { id: 'drinks', label: 'Drinks', from: 'From the bar,', image: '/images/home/pool.jpg', alt: 'Tables under orange umbrellas beside the pool and the bar' },
  { id: 'wine', label: 'Wine', from: 'From the cellar,', image: '/images/home/dusk.jpg', alt: 'Dusk over the bay at Sabang, dive boats at anchor' },
];

export const menuGroups: MenuGroup[] = GROUPS.map((group) => ({
  ...group,
  categories: names
    .filter((name) => groupOf(name) === group.id)
    .map((name) => ({
      name,
      title: name.replace(' - ', ' · '),
      slug: categoryToSlug(name),
      items: menuItem.filter((item) => item.category === name),
    })),
}));

export const allCategories = menuGroups.flatMap((group) => group.categories);

export const findCategory = (slug: string) => allCategories.find((category) => category.slug === slug);

export const groupOfCategory = (category: MenuCategory) => menuGroups.find((group) => group.categories.includes(category)) ?? menuGroups[0];

export const countIn = (id: MenuGroup['id']) =>
  menuGroups.find((group) => group.id === id)?.categories.reduce((sum, category) => sum + category.items.length, 0) ?? 0;

/** In pesos, no symbol; 0 means the price is on asking. */
export function formatPrice(price?: number): string | undefined {
  if (price === undefined) return undefined;
  return price === 0 ? 'POA' : price.toLocaleString('en-PH');
}

export const dineContacts = [
  { label: 'Write to the restaurant', value: site.bookingEmail, href: `mailto:${site.bookingEmail}` },
  ...site.phones.map((phone) => ({ label: 'Call', value: phone, href: `tel:${phone.replace(/[^\d+]/g, '')}` })),
];
