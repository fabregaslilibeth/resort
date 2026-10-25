// Turns the booking-engine export in src/data/villas.ts into what the
// redesigned pages need. Runs on the server, so the full export stays out of
// the browser bundle.

interface Room {
  id: number;
  gallery: { featured: { fileName: string }; images: { fileName: string }[] };
  translations: { locale: string; messages: { fieldName: string; value: string }[] }[];
  attributes?: {
    area?: { from: number; to: number; unit: string };
    maxOccupancy?: { people: number; extraBeds: number };
    layout?: { kitchen?: boolean | null } | null;
    facilities?: { wifi?: number; airConditioning?: number; balcony?: number; television?: number } | null;
  };
}

export interface VillaCard {
  id: number;
  name: string;
  /** e.g. "30 m²" or "17–46 m²". */
  area: string;
  sleeps: number;
  extraBeds: number;
  /** What the room has, e.g. ["Kitchen", "Balcony", "Air-con"]. */
  facilities: string[];
  /** One sentence for the slider card. */
  summary: string;
  text: string[];
  photos: string[];
}

/** e.g. "Sleeps 2 + 1 extra bed". */
export const guests = (v: VillaCard) => `Sleeps ${v.sleeps}${v.extraBeds ? ` + ${v.extraBeds} extra bed${v.extraBeds > 1 ? 's' : ''}` : ''}`;

function facilities(room: Room): string[] {
  const has = room.attributes?.facilities ?? {};
  return [
    room.attributes?.layout?.kitchen && 'Kitchen',
    has.balcony && 'Balcony',
    has.airConditioning && 'Air-con',
    has.wifi && 'Wi-Fi',
    has.television && 'TV',
  ].filter((item): item is string => Boolean(item));
}

const GALLERY = 'https://r.profitroom.pl/lalagunavillasluxurydiveresortandspa/images/gallery';

function field(room: Room, name: string): string {
  const english = room.translations.find((t) => t.locale === 'en');
  return english?.messages.find((m) => m.fieldName === name)?.value ?? '';
}

/** The description's HTML as plain paragraphs (list items become their own). */
function paragraphs(html: string): string[] {
  return html
    .replace(/<\/(p|li)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;| /g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

/** The first full sentence, skipping lead-ins like "There are 2 variations:". */
function firstSentence(lines: string[]): string {
  const line = lines.find((l) => !l.endsWith(':')) ?? lines[0] ?? '';
  const sentence = line.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? line;
  return sentence.replace(/[;,]$/, '.');
}

export function toVillaCards(rooms: Room[]): VillaCard[] {
  return rooms.map((room) => {
    const area = room.attributes?.area;
    const files = [room.gallery.featured.fileName, ...room.gallery.images.map((image) => image.fileName)];
    const text = paragraphs(field(room, 'description'));
    return {
      id: room.id,
      name: field(room, 'name'),
      area: !area ? '' : area.from === area.to ? `${area.from} ${area.unit}` : `${area.from}–${area.to} ${area.unit}`,
      sleeps: room.attributes?.maxOccupancy?.people ?? 2,
      extraBeds: room.attributes?.maxOccupancy?.extraBeds ?? 0,
      facilities: facilities(room),
      summary: firstSentence(text),
      text,
      photos: [...new Set(files)].map((file) => `${GALLERY}/${file}`),
    };
  });
}
