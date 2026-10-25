'use client';

// A short enquiry (name, email, an optional choice, date, time and party
// size, a message). Until there's a backend for it, sending opens a
// pre-filled email to the team that handles it.
import { useState } from 'react';

export interface ChoiceGroup {
  label: string;
  options: string[];
}

interface EnquiryFormProps {
  /** Prefixes the field ids. */
  id: string;
  to: string;
  subject: string;
  /** A select, e.g. the course, grouped like the course list. */
  choice?: { label: string; groups: ChoiceGroup[]; value?: string };
  date?: string;
  time?: { label: string; options: string[] };
  guests?: string;
  message?: string;
  submit: string;
}

export function EnquiryForm({ id, to, subject, choice, date, time, guests, message = 'Message', submit }: EnquiryFormProps) {
  const [values, setValues] = useState<Record<string, string>>({ choice: choice?.value ?? '', guests: guests ? '2' : '' });
  const set = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const lines = [
      `Name: ${values.name ?? ''}`,
      `Email: ${values.email ?? ''}`,
      choice && `${choice.label}: ${values.choice || 'Not sure yet'}`,
      date && `${date}: ${values.date ?? ''}`,
      time && `${time.label}: ${values.time ?? time.options[0]}`,
      guests && `${guests}: ${values.guests}`,
      '',
      values.message ?? '',
    ].filter((line): line is string => typeof line === 'string');
    const fullSubject = values.choice ? `${subject}: ${values.choice}` : subject;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <label className="enquiry-form__field" htmlFor={`${id}-name`}>
        <span>Name</span>
        <input id={`${id}-name`} type="text" autoComplete="name" required value={values.name ?? ''} onChange={set('name')} />
      </label>
      <label className="enquiry-form__field" htmlFor={`${id}-email`}>
        <span>Email</span>
        <input id={`${id}-email`} type="email" autoComplete="email" required value={values.email ?? ''} onChange={set('email')} />
      </label>
      {choice && (
        <label className="enquiry-form__field enquiry-form__wide" htmlFor={`${id}-choice`}>
          <span>{choice.label}</span>
          <select id={`${id}-choice`} value={values.choice} onChange={set('choice')}>
            <option value="">Not sure yet</option>
            {choice.groups.map((group) => (
              <optgroup label={group.label} key={group.label}>
                {group.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
      )}
      {date && (
        <label className="enquiry-form__field" htmlFor={`${id}-date`}>
          <span>{date}</span>
          <input id={`${id}-date`} type="date" value={values.date ?? ''} onChange={set('date')} />
        </label>
      )}
      {time && (
        <label className="enquiry-form__field" htmlFor={`${id}-time`}>
          <span>{time.label}</span>
          <select id={`${id}-time`} value={values.time ?? time.options[0]} onChange={set('time')}>
            {time.options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}
      {guests && (
        <label className="enquiry-form__field" htmlFor={`${id}-guests`}>
          <span>{guests}</span>
          <input id={`${id}-guests`} type="number" min={1} max={30} value={values.guests} onChange={set('guests')} />
        </label>
      )}
      <label className="enquiry-form__field enquiry-form__wide" htmlFor={`${id}-message`}>
        <span>{message}</span>
        <textarea id={`${id}-message`} rows={3} value={values.message ?? ''} onChange={set('message')} />
      </label>
      <div className="enquiry-form__foot enquiry-form__wide">
        <button type="submit" className="pill pill--orange">
          {submit}
        </button>
        <span>Opens an email to {to}</span>
      </div>
    </form>
  );
}
