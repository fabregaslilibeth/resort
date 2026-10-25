// Lists about the resort as a whole, taken from the offers copy
// (src/data/offers.ts) so the pages that show them stay in step.
import { offersData } from './offers';

const section = (id: string) => offersData.find((offer) => offer.id === id);

/** "Line one\nLine two" → ["Line one", "Line two"]. */
const lines = (text = '') =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export const resortServices = section('services-amenities')?.services ?? [];

export const villaComforts = section('services-amenities')?.features ?? [];

export const resortEntertainment = lines(section('entertainment')?.content);

export const excursions = lines(section('excursions-activities')?.content);

export const transportOptions = lines(section('transport')?.content);
