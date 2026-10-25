import { site } from '@/data/site';
import { Enquiry } from '../sections/Enquiry';
import { EnquiryForm } from '../sections/EnquiryForm';
import { dineContacts } from './menu-data';

/** The dining pages' closing band: ask for a table. */
export function DineEnquiry() {
  return (
    <Enquiry
      eyebrow="Reserve a table"
      lines={['Dinner', 'by the sea.']}
      text="Tell us the day, the time and how many of you there are, and we’ll keep a table. Celebrating, or avoiding something you’re allergic to? Tell us that too."
      contacts={dineContacts}
    >
      <EnquiryForm
        id="table"
        to={site.bookingEmail}
        subject="Table request"
        date="Date"
        time={{ label: 'Time', options: ['Breakfast', 'Lunch', 'Afternoon', 'Dinner', 'Late'] }}
        guests="Guests"
        message="Occasion, dietary needs, anything else"
        submit="Request a table"
      />
    </Enquiry>
  );
}
