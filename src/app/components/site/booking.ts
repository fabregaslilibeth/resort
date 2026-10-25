// Any "Book a stay" button opens the booking drawer (BookingSheet) through
// this event, optionally with a villa preselected.
export const BOOK_EVENT = 'lalaguna:book';

export interface BookDetail {
  villa?: string;
}

export function openBooking(villa?: string): void {
  window.dispatchEvent(new CustomEvent<BookDetail>(BOOK_EVENT, { detail: { villa } }));
}
