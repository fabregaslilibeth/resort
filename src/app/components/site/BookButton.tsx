'use client';

import { openBooking } from './booking';

/** Opens the booking drawer, with `villa` preselected when given. */
export function BookButton({ className, villa, children }: { className: string; villa?: string; children: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => openBooking(villa)}>
      {children}
    </button>
  );
}
