import { Enquiry } from '../sections/Enquiry';
import { EnquiryForm } from '../sections/EnquiryForm';
import { courseGroups, DIVE_EMAIL, diveContacts } from './dive-data';

interface DiveEnquiryProps {
  lines?: string[];
  text?: string;
  /** Preselects a course, e.g. on the Divemaster page. */
  course?: string;
}

/** The dive pages' closing band: talk to LLV Divers, or send an enquiry. */
export function DiveEnquiry({
  lines = ['Ready', 'to dive?'],
  text = 'Tell our dive team what you’d like to do and when. We’ll come back with times, prices and anything you need to bring.',
  course,
}: DiveEnquiryProps) {
  return (
    <Enquiry eyebrow="LLV Divers" lines={lines} text={text} contacts={diveContacts}>
      <EnquiryForm
        id="dive"
        to={DIVE_EMAIL}
        subject="Dive enquiry"
        choice={{ label: 'Course or dive', groups: courseGroups, value: course }}
        date="Preferred date"
        guests="Divers"
        message="Experience, questions, anything else"
        submit="Send enquiry"
      />
    </Enquiry>
  );
}
