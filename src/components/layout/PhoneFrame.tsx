import type { ReactNode } from 'react';
import './PhoneFrame.css';

export function PhoneFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="phone-frame">
      <div className="phone-frame__notch" />
      <div className={`phone-frame__screen ${dark ? 'phone-frame__screen--dark' : ''}`}>{children}</div>
      <div className="phone-frame__home-indicator" />
    </div>
  );
}
