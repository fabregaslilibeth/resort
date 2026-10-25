// The gallery: stills from the resort's film and the booking engine's
// photos of every villa, sorted into groups.
import { villas } from '@/data/villas';
import { toVillaCards } from '../villas/villa-cards';
import type { Photo, PhotoGroup } from './groups';

const still = (name: string, group: PhotoGroup, caption: string, alt: string): Photo => ({
  src: `/images/home/${name}.jpg`,
  alt,
  group,
  caption,
});

const STILLS: Photo[] = [
  still('aerial-hills', 'resort', 'The villas above Sabang', 'The white villas of Lalaguna on the green hillside above Sabang, from the air'),
  still('resort', 'resort', 'The pool', 'The pool and the villas under orange umbrellas'),
  still('terrace', 'resort', 'A rooftop terrace', 'A table on a rooftop terrace looking over the bay'),
  still('bay-view', 'resort', 'The view from a villa', 'The bay at Sabang from a villa terrace'),
  still('aerial-beach', 'resort', 'Small Lalaguna Beach', 'The reef off Small Lalaguna Beach from the air'),
  still('pool-villas', 'resort', 'Beneath the villas', 'The pool and a sun lounger beneath the villas'),
  still('shore', 'resort', 'Boats on the reef flat', 'Two boats moored over the shallow reef, seen from directly above'),
  still('evening', 'resort', 'Evening on the terrace', 'Two guests on the terrace at dusk, string lights over the water'),
  still('dusk', 'resort', 'Dusk over the bay', 'Dusk over the bay at Sabang, dive boats at anchor'),
  still('speedboat', 'diving', 'Five minutes to the sites', 'A dive speedboat crossing the bay at Sabang'),
  still('dive-boat', 'diving', 'The LLV Divers boat', 'The LLV Divers boat on the turquoise water'),
  still('kitting-up', 'diving', 'Kitting up', 'Divers kitting up on the boat'),
  still('boat-bow', 'diving', 'Under way', 'The orange bow of the dive boat cutting through the water'),
  still('fins', 'diving', 'Between dives', 'Fins drying on the bow, the bay behind'),
  still('reef', 'diving', 'A wreck, overgrown', 'Reef fish over a coral-covered wreck'),
  still('divers', 'diving', 'Batfish', 'A diver beside a school of batfish'),
  still('batfish', 'diving', 'Among the batfish', 'Divers among a school of batfish'),
  still('feast', 'culture', 'A boodle feast', 'A seafood boodle feast laid out on banana leaves'),
  still('pool', 'culture', 'Lunch by the pool', 'Tables under orange umbrellas beside the pool and the bar'),
  still('dancers', 'culture', 'A dance by the pool', 'Children in traditional dress performing a basket dance in the pool'),
  still('interior', 'villas', 'A villa living room', 'A villa living and dining room, a painting of flowers on the wall'),
];

// The first two photos of each villa.
const VILLA_PHOTOS: Photo[] = toVillaCards(villas).flatMap((villa) =>
  villa.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `${villa.name}, photo ${i + 1}`,
    group: 'villas' as const,
    caption: villa.name,
  })),
);

// Everything, dealt out a group at a time so no one kind of photo bunches up.
const byGroup = (['resort', 'villas', 'diving', 'culture'] as const).map((group) =>
  [...STILLS, ...VILLA_PHOTOS].filter((photo) => photo.group === group),
);
const longest = Math.max(...byGroup.map((list) => list.length));

export const photos: Photo[] = Array.from({ length: longest }, (_, i) => byGroup.map((list) => list[i])).flat().filter((photo): photo is Photo => Boolean(photo));
