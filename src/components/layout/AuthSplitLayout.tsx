import type { ReactNode } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { LogoMark } from '../icons';
import './AuthSplitLayout.css';

export function AuthSplitLayout({
  heading,
  body,
  children,
}: {
  heading: string;
  body: string;
  children: ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <div className={`auth-split ${isMobile ? 'auth-split--mobile' : ''}`}>
      {!isMobile && (
        <div className="auth-split__brand">
          <div className="auth-split__brand-top">
            <LogoMark size={30} />
            <span className="auth-split__brand-name">Alimi</span>
          </div>
          <div>
            <h2 className="auth-split__heading">{heading}</h2>
            <p className="auth-split__body">{body}</p>
            <div className="auth-split__pills">
              <span className="auth-split__pill">
                <span className="auth-split__dot" style={{ background: '#16c47f' }} />
                WhatsApp
              </span>
              <span className="auth-split__pill">
                <span className="auth-split__dot" style={{ background: '#5b90f5' }} />
                Email
              </span>
            </div>
          </div>
          <p className="auth-split__trust">Trusted by 200+ businesses across Lagos, Accra, and Nairobi.</p>
        </div>
      )}
      <div className="auth-split__form">
        <div className="auth-split__form-inner">{children}</div>
      </div>
    </div>
  );
}
