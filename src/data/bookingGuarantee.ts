export interface BookingGuarantee {
  title: string;
  description: string;
  benefitsIntro: string;
  benefits: string[];
}

export const bookingGuaranteeData: BookingGuarantee = {
  title: "Direct Booking Guarantee",
  description: "We guarantee that if a lower rate is advertised for the same room type and conditions – even after you book – until 7 days before arrival, we will match that lower rate.",
  benefitsIntro: "Direct bookings receive additional benefits which apply regardless of any promo rate:",
  benefits: [
    "Waiver of the 3% service charge usually added to the room rate",
    "Complimentary transfer to and from Sabang pier on check in and check out",
    "Early check in OR late check out, subject to availability",
    "Free laundry, up to 1kg per night of stay"
  ]
}; 