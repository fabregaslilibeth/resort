// What the dive pages share: the course list for enquiries, LLV Divers'
// contacts, and tidy text from src/data (some of it carries HTML entities).
import { funDivingData, padiCoursesData, padiSpecialtyCoursesData } from '@/data/divingCourses';
import { site } from '@/data/site';
import type { ChoiceGroup } from '../sections/EnquiryForm';

/** The course data spells apostrophes and quotes as HTML entities. */
export function decode(text: string): string {
  return text.replace(/&apos;|&#39;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

export const DIVE_EMAIL = site.emails.find((email) => email.label === 'Diving')?.address ?? site.bookingEmail;

export const courseGroups: ChoiceGroup[] = [
  { label: 'Fun diving', options: funDivingData.map((course) => course.title) },
  { label: 'PADI courses', options: padiCoursesData.map((course) => course.title) },
  { label: 'PADI specialty courses', options: padiSpecialtyCoursesData.map((course) => course.title) },
];

export const diveContacts = [
  { label: 'Write to LLV Divers', value: DIVE_EMAIL, href: `mailto:${DIVE_EMAIL}` },
  ...site.phones.map((phone) => ({ label: 'Call', value: phone, href: `tel:${phone.replace(/[^\d+]/g, '')}` })),
];

/** A site in src/data/diveSites.ts; not every site has every field. */
export interface DiveSite {
  id: number;
  name: string;
  depth?: string;
  location?: string;
  difficulty?: string;
  visibility?: string;
  marineLife?: string[];
  description?: string;
  longDescription?: string;
  highlights?: string[];
  bestTime?: string;
  category?: string;
}

/** "15-25m" → [15, 25]; null when a site has no depth listed. */
export function depthRange(depth?: string): [number, number] | null {
  const [from, to] = depth?.match(/\d+/g)?.map(Number) ?? [];
  return from === undefined ? null : [from, to ?? from];
}

/** How deep a chart of these sites goes: the deepest, rounded up to 10 m. */
export function depthScale(sites: DiveSite[]): number {
  return Math.max(10, ...sites.map((site) => Math.ceil((depthRange(site.depth)?.[1] ?? 0) / 10) * 10));
}
