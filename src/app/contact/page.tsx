import type { Metadata } from 'next';
import { site } from '@/data/site';
import { Enquiry } from '../components/sections/Enquiry';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { LinkCards } from '../components/sections/LinkCards';
import { BackToTop } from '../components/site/BackToTop';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';
import '../styles/info.css';

export const metadata: Metadata = {
  title: 'Contact · Lalaguna Villas, Puerto Galera',
  description: `Lalaguna Villas, Small Lalaguna Beach, Sabang, Puerto Galera. Call ${site.phones[0]} or write to ${site.bookingEmail}; the front desk is open 24 hours.`,
};

const MAP = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Lalaguna Villas Luxury Dive Resort and Spa, Sabang, Puerto Galera')}`;

const tel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Contact) Lalaguna Villas"
          lines={['Write, call,', 'or just come by.']}
          lead="Small Lalaguna Beach, Sabang, Puerto Galera. The front desk is open 24 hours a day."
          image="/images/home/evening.jpg"
          alt="Two guests on the terrace at dusk, string lights over the water"
        />
        <section className="board" aria-labelledby="board-title">
          <h2 className="sr-only" id="board-title">
            How to reach us
          </h2>
          <div className="board__item" data-reveal>
            <p className="eyebrow">Find us</p>
            <address className="serif board__value">
              {site.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <a className="text-link" href={MAP} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </div>
          <div className="board__item" data-reveal>
            <p className="eyebrow">Call</p>
            <p className="serif board__value">
              {site.phones.map((phone) => (
                <span key={phone}>
                  <a href={tel(phone)}>{phone}</a>
                  <br />
                </span>
              ))}
            </p>
            <p className="board__note">{site.phones[0]} is on WhatsApp, WeChat and Viber too.</p>
          </div>
          <div className="board__item" data-reveal>
            <p className="eyebrow">Write</p>
            <dl className="board__emails">
              {site.emails.map((email) => (
                <div key={email.address}>
                  <dt>{email.label}</dt>
                  <dd className="serif">
                    <a href={`mailto:${email.address}`}>{email.address}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <Enquiry
          eyebrow="Send a message"
          lines={['How can', 'we help?']}
          text="Questions about a stay, the diving, the spa or getting here: send us a note and we’ll reply by email."
          contacts={site.emails.map((email) => ({ label: email.label, value: email.address, href: `mailto:${email.address}` }))}
        >
          <EnquiryForm
            id="contact"
            to={site.bookingEmail}
            subject="Enquiry"
            choice={{
              label: 'About',
              groups: [
                {
                  label: 'Subject',
                  options: ['A stay', 'Diving', 'Becoming a Divemaster', 'Dining', 'The spa', 'Activities', 'Transfers', 'Something else'],
                },
              ],
            }}
            message="Your message"
            submit="Send message"
          />
        </Enquiry>
        <LinkCards
          eyebrow="Before you come"
          lines={['Plan', 'the trip.']}
          cards={[
            { href: '/transport', image: '/images/home/boat-bow.jpg', title: 'Getting here', text: 'Transfers from Manila and the ferry ports' },
            { href: '/villas', image: '/images/home/pool-villas.jpg', title: 'The villas', text: 'Nine ways to stay' },
            { href: '/offers', image: '/images/home/pool.jpg', title: 'Book direct', text: 'What you get for booking with us' },
          ]}
        />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
