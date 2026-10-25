// The gallery's groups; shared by the server-built photo list (photos.ts)
// and the client grid and lightbox.
export type PhotoGroup = 'resort' | 'villas' | 'diving' | 'culture';

export interface Photo {
  src: string;
  alt: string;
  group: PhotoGroup;
  caption: string;
}

export const GROUPS: { id: PhotoGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'resort', label: 'The resort' },
  { id: 'villas', label: 'Villas' },
  { id: 'diving', label: 'Diving' },
  { id: 'culture', label: 'Food & culture' },
];

export const groupLabel = (group: PhotoGroup) => GROUPS.find((g) => g.id === group)?.label ?? '';
