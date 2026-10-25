'use client';

// The stay enquiry: dates, guests and villa. It sits as a bar along the
// bottom of the hero and inside the booking drawer. Until it's connected to
// the booking engine, sending it opens a pre-filled email to the front desk.
import { useEffect, useState } from 'react';
import { site } from '@/data/site';

const pad = (n: number) => String(n).padStart(2, '0');

/** yyyy-mm-dd in local time, as date inputs expect. */
function isoDate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function dayAfter(value: string): string {
  const [y, m, d] = value.split('-').map(Number);
  return isoDate(new Date(y, m - 1, d + 1));
}

interface StayFormProps {
  villas: string[];
  variant: 'bar' | 'sheet';
  /** Prefixes the field ids so two forms can share a page. */
  id: string;
  villa?: string;
  /** Moves focus into the first field once mounted (the drawer). */
  autoFocus?: boolean;
}

export function StayForm({ villas, variant, id, villa: preselected = '', autoFocus = false }: StayFormProps) {
  const [villa, setVilla] = useState(preselected);
  const [arrive, setArrive] = useState('');
  const [depart, setDepart] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [today, setToday] = useState('');

  // Today comes from the visitor's clock, after hydration.
  useEffect(() => setToday(isoDate(new Date())), []);
  useEffect(() => setVilla(preselected), [preselected]);

  const onArrive = (value: string) => {
    setArrive(value);
    if (value && depart && depart <= value) setDepart(dayAfter(value));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const stay = villa || 'Any villa';
    const subject = `Booking enquiry: ${stay}, ${arrive} to ${depart}`;
    const body = [
      'Hello Lalaguna Villas,',
      '',
      'I would like to check availability for:',
      `Villa: ${stay}`,
      `Arrive: ${arrive}`,
      `Depart: ${depart}`,
      `Adults: ${adults}`,
      `Children: ${children}`,
      '',
      'Thank you.',
    ].join('\n');
    window.location.href = `mailto:${site.bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={`stay stay--${variant}`} onSubmit={onSubmit}>
      <label className="stay__field" htmlFor={`${id}-arrive`}>
        <span className="stay__label">Arrive</span>
        <input id={`${id}-arrive`} type="date" required value={arrive} min={today} onChange={(e) => onArrive(e.target.value)} autoFocus={autoFocus} />
      </label>
      <label className="stay__field" htmlFor={`${id}-depart`}>
        <span className="stay__label">Depart</span>
        <input
          id={`${id}-depart`}
          type="date"
          required
          value={depart}
          min={arrive ? dayAfter(arrive) : today}
          onChange={(e) => setDepart(e.target.value)}
        />
      </label>
      <div className="stay__field stay__guests" role="group" aria-label="Guests">
        <span className="stay__label" aria-hidden="true">
          Guests
        </span>
        <span className="stay__pair">
          <select aria-label="Adults" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option value={n} key={n}>
                {n} {n === 1 ? 'adult' : 'adults'}
              </option>
            ))}
          </select>
          <select aria-label="Children" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <option value={n} key={n}>
                {n} {n === 1 ? 'child' : 'children'}
              </option>
            ))}
          </select>
        </span>
      </div>
      <label className="stay__field stay__villa" htmlFor={`${id}-villa`}>
        <span className="stay__label">Villa</span>
        <select id={`${id}-villa`} value={villa} onChange={(e) => setVilla(e.target.value)}>
          <option value="">Any of {villas.length}</option>
          {villas.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="pill pill--dark stay__submit">
        Check availability
      </button>
      {variant === 'sheet' && <p className="stay__note">Opens an email to {site.bookingEmail} with your dates.</p>}
    </form>
  );
}
