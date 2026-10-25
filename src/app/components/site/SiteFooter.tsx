import { paymentOptions } from '@/data/paymentOptions';
import { site } from '@/data/site';
import { TransitionLink } from './Curtain';

const EXPLORE = [
  { name: 'Villas', href: '/villas' },
  { name: 'Diving', href: '/diving' },
  { name: 'Dining', href: '/dining' },
  { name: 'Activities', href: '/activities' },
  { name: 'Spa', href: '/spa' },
  { name: 'Offers', href: '/offers' },
  { name: 'Transport', href: '/transport' },
  { name: 'Contact', href: '/contact' },
];

export function SiteFooter() {
  const payments = paymentOptions.filter((p) => p.name !== 'Other').map((p) => p.name);

  return (
    <footer className="footer">
      <div className="footer__cols">
        <TransitionLink className="serif footer__brand" href="/" aria-label={`${site.name} home`}>
          Lalaguna
          <br />
          <em>Villas</em>
        </TransitionLink>
        <div>
          <p className="footer__head">Visit</p>
          <p>
            {site.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="footer__head">Call</p>
          <p>
            {site.phones.map((phone) => (
              <span key={phone}>
                <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="footer__head">Write</p>
          <p>
            {site.emails.map((email) => (
              <span key={email.address}>
                <a href={`mailto:${email.address}`}>{email.address}</a>
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="footer__head">Explore</p>
          <p>
            {EXPLORE.map((link) => (
              <span key={link.href}>
                <TransitionLink href={link.href}>{link.name}</TransitionLink>
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="footer__base">
        <span>
          {site.company} © {new Date().getFullYear()}
        </span>
        <span>We accept {payments.join(' · ')}</span>
      </div>
    </footer>
  );
}
