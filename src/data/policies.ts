// Cancellation, peak period, rain guarantee and force majeure terms, shown
// on each villa's page.
export interface PolicySection {
  title: string;
  /** Plain paragraphs. */
  text?: string[];
  /** A line set apart, e.g. the rain guarantee's quote. */
  quote?: string;
  items?: string[];
  /** A closing note, e.g. a recommendation. */
  note?: string;
}

export const policies: PolicySection[] = [
  {
    title: 'Off-peak bookings: flexible',
    text: ['For all dates outside the designated Peak Periods:'],
    items: [
      'Cancellations made 21 days or more before the scheduled arrival date are eligible for a full refund.',
      'Cancellations made within 21 days of arrival will incur a charge equivalent to the first night.',
      'Cancellations made within 7 days of arrival will incur a 50% cancellation fee or the first night, whichever is greater.',
      'No-shows will be charged in full and are non-refundable.',
    ],
  },
  {
    title: 'Peak period bookings: non-refundable & non-amendable',
    text: ['Reservations during the following Peak Periods are non-refundable and cannot be modified. Contact us directly for undue hardship situations.'],
    items: [
      'Independence Day: 12 June – 15 June 2025',
      'Christmas & New Year: 23 December 2025 – 4 January 2026',
      'Chinese New Year: 17 February 2026 – 20 February 2026',
      'Easter: 2 April 2026 – 3 April 2026',
      'May Labor Day: 1 May 2026 – 5 May 2026',
    ],
  },
  {
    title: 'Booking grace period',
    text: ['All reservations may be canceled or amended within 24 hours of creation without penalty, regardless of stay dates.'],
  },
  {
    title: 'Rescheduling',
    text: [
      'We understand travel plans can change. Depending on availability and circumstances, we may be able to accommodate a date change. Please contact us directly to discuss your options.',
    ],
  },
  {
    title: 'LLV Rain Guarantee',
    quote: 'In everyone’s life, a little rain must fall. But not too much when you are on vacation!',
    text: [
      'If any two days of your stay are affected by official Orange or Red Rainfall Warnings, you’ll receive 1 free night, either as an extension of your current stay or a future credit.',
    ],
    items: ['Only applicable to direct bookings.', 'Cannot be combined with other promotions.'],
  },
  {
    title: 'Force majeure & external disruptions',
    text: [
      'Cancellation or disruption caused by Lalaguna Holdings Inc. (e.g., mechanical issues or other unforeseeable internal problems) will entitle you to a pro-rata refund (in credit or cash) for the affected portion of your stay.',
      'Disruptions caused by circumstances beyond our control are not the responsibility of Lalaguna Holdings Inc. and must be covered by you or your travel insurance provider. These may include, but are not limited to:',
    ],
    items: [
      'Inclement weather',
      'Natural disaster',
      'Health-related issues',
      'Family emergencies',
      'Lost or delayed luggage',
      'Cancelled or postponed flights or transfers',
    ],
    note: 'We strongly recommend that all guests obtain comprehensive travel insurance to cover these potential risks. Upon request, Lalaguna Holdings Inc. will provide documentation to support your insurance claims; however, the responsibility for securing appropriate coverage rests solely with you.',
  },
];
