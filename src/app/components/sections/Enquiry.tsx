import { Lines } from './Lines';

interface Contact {
  label: string;
  value: string;
  href: string;
}

interface EnquiryProps {
  id?: string;
  eyebrow: string;
  lines: string[];
  text: string;
  contacts: Contact[];
  /** The form (EnquiryForm). */
  children: React.ReactNode;
}

/** A navy band: who to talk to on the left, the enquiry form on the right. */
export function Enquiry({ id = 'enquire', eyebrow, lines, text, contacts, children }: EnquiryProps) {
  return (
    <section className="enquiry" id={id} aria-labelledby={`${id}-title`}>
      <div className="enquiry__intro">
        <p className="eyebrow enquiry__eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2 className="serif enquiry__title" id={`${id}-title`} data-lines>
          <Lines lines={lines} />
        </h2>
        <p className="enquiry__text" data-reveal>
          {text}
        </p>
        <dl className="enquiry__contacts" data-reveal>
          {contacts.map((contact) => (
            <div key={contact.value}>
              <dt>{contact.label}</dt>
              <dd>
                <a href={contact.href}>{contact.value}</a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="enquiry__panel" data-reveal>
        {children}
      </div>
    </section>
  );
}
