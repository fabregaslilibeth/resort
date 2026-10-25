// The activities desk's price list (src/data/activities.ts) as ledger rows.
import { activities } from '@/data/activities';
import { site } from '@/data/site';
import type { LedgerRow } from '../sections/Ledger';

type Activity = (typeof activities)[number];

export const peso = (amount: number) => `₱${amount.toLocaleString('en-PH')}`;

const sentence = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** "1-4 persons" → "1–4 guests", "4-7 PM" → "4–7 pm". */
const tidy = (text: string) =>
  sentence(
    text
      .replace(/(\d)-(\d)/g, '$1–$2')
      .replace(/\b(persons|people|pax)\b/g, 'guests')
      .replace(/\b(AM|PM)\b/g, (m) => m.toLowerCase()),
  );

function toRow(activity: Activity): LedgerRow {
  const size = activity.capacity ?? (activity.minimumCapacity ? `${activity.minimumCapacity} guests minimum` : undefined);
  return {
    title: activity.name,
    text: activity.description,
    details: [...(activity.inclusions ?? []), activity.note].filter((detail): detail is string => Boolean(detail)).map(tidy),
    meta: [activity.duration, size].filter((part): part is string => Boolean(part)).map(tidy).join(' · ') || undefined,
    price: activity.price ? peso(activity.price) : undefined,
    priceNote: activity.unit,
  };
}

// Extreme Sports Philippines has its own card (a price per number of activities).
const ESP = 'Extreme Sports Philippines';

export const waterRows = activities.filter((a) => a.category === 'water').map(toRow);

export const landRows = activities.filter((a) => a.category === 'land' && a.name !== ESP).map(toRow);

const esp = activities.find((a) => a.name === ESP);

export const extremeSports = esp && {
  name: esp.name,
  activities: esp.availableActivities ?? [],
  note: esp.paymentNote,
  prices: (esp.options ?? []).map((option) => ({
    count: ('ofActivities' in option ? option.ofActivities : option['#ofActivities']) ?? 0,
    price: peso(option.price),
  })),
};

export const activityGroups = [
  { label: 'On the water', options: activities.filter((a) => a.category === 'water').map((a) => a.name) },
  { label: 'On land', options: activities.filter((a) => a.category === 'land').map((a) => a.name) },
];

export const deskContacts = [
  { label: 'Write to the activities desk', value: site.bookingEmail, href: `mailto:${site.bookingEmail}` },
  ...site.phones.map((phone) => ({ label: 'Call', value: phone, href: `tel:${phone.replace(/[^\d+]/g, '')}` })),
];
