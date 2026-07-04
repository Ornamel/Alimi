import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWorkspace } from '../../context/WorkspaceContext';
import { ChevronDownIcon, SignOutIcon } from '../icons';
import './ProfileMenu.css';

export function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { profile } = useWorkspace();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const initial = (profile?.fullName || 'U').trim().charAt(0).toUpperCase();

  return (
    <div className="profile-menu" ref={ref}>
      <button className="profile-menu__trigger" onClick={() => setOpen((o) => !o)}>
        <span className="profile-menu__avatar">{initial}</span>
        <ChevronDownIcon size={16} color="var(--color-steel)" />
      </button>
      {open && (
        <div className="profile-menu__dropdown">
          <div className="profile-menu__identity">
            <div className="profile-menu__name">{profile?.fullName || 'Your account'}</div>
            <div className="profile-menu__email">{profile?.email}</div>
          </div>
          <button
            className="profile-menu__item"
            onClick={() => {
              setOpen(false);
              navigate('/settings');
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.5" stroke="var(--color-steel)" strokeWidth="1.7" />
              <path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" stroke="var(--color-steel)" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Profile
          </button>
          <button
            className="profile-menu__item"
            onClick={() => {
              setOpen(false);
              navigate('/settings');
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="var(--color-steel)" strokeWidth="1.7" />
              <path
                d="M19.4 13.5c.04-.5.04-1 0-1.5l1.5-1.2-1.5-2.6-1.8.5c-.4-.3-.8-.6-1.3-.8L16 5.5h-3l-.3 1.9c-.5.2-.9.5-1.3.8l-1.8-.5-1.5 2.6L9.6 12c-.04.5-.04 1 0 1.5L8.1 14.7l1.5 2.6 1.8-.5c.4.3.8.6 1.3.8l.3 1.9h3l.3-1.9c.5-.2.9-.5 1.3-.8l1.8.5 1.5-2.6-1.5-1.2Z"
                stroke="var(--color-steel)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Settings
          </button>
          <div className="profile-menu__divider" />
          <button
            className="profile-menu__item profile-menu__item--danger"
            onClick={async () => {
              setOpen(false);
              await signOut();
              navigate('/');
            }}
          >
            <SignOutIcon size={16} color="#c9631c" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
