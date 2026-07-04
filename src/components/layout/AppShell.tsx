import type { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useWorkspace } from '../../context/WorkspaceContext';
import { LogoMark, ICONS, SignOutIcon, ChevronDownIcon } from '../icons';
import { useAuth } from '../../context/AuthContext';
import './AppShell.css';

const NAV_ITEMS = [
  { id: 'dashboard', path: '/app/dashboard', label: 'Dashboard', badge: undefined as string | undefined },
  { id: 'monitor', path: '/app/monitor', label: 'Conversations', badge: '12' },
  { id: 'briefing', path: '/app/briefing', label: 'Briefings', badge: '3' },
  { id: 'entry', path: '/app/entry-points', label: 'Entry points', badge: undefined },
  { id: 'analytics', path: '/app/analytics', label: 'Analytics', badge: undefined },
];

export function AppShell({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { workspace, agents, profile } = useWorkspace();
  const { signOut } = useAuth();
  const activeAgent = agents.find((a) => a.status === 'live');

  return (
    <div className="app-shell">
      {!isMobile && (
        <aside className="app-sidebar">
          <div className="app-sidebar__brand">
            <LogoMark size={30} />
            <span className="app-sidebar__brand-name">Alimi</span>
          </div>

          <button className="app-sidebar__active-agent" onClick={() => navigate('/agents')}>
            <div className="app-sidebar__active-agent-label">Active agent</div>
            <div className="app-sidebar__active-agent-row">
              <span className="live-dot" />
              <span className="app-sidebar__active-agent-name">{activeAgent?.name ?? 'No agent live'}</span>
              <ChevronDownIcon size={14} color="#6e7c74" />
            </div>
          </button>

          <nav className="app-sidebar__nav">
            {NAV_ITEMS.map((item) => {
              const Icon = ICONS[item.id as keyof typeof ICONS];
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => `app-sidebar__link ${isActive ? 'app-sidebar__link--active' : ''}`}
                >
                  <Icon size={20} />
                  <span className="app-sidebar__link-label">{item.label}</span>
                  {item.badge && <span className="app-sidebar__badge">{item.badge}</span>}
                </NavLink>
              );
            })}
          </nav>

          <div className="app-sidebar__footer">
            <div className="app-sidebar__footer-avatar">{(profile?.fullName || 'U').charAt(0).toUpperCase()}</div>
            <div className="app-sidebar__footer-text">
              <div className="app-sidebar__footer-name">{profile?.fullName || 'Your account'}</div>
              <div className="app-sidebar__footer-sub">
                {workspace?.businessName} · Admin
              </div>
            </div>
            <button
              className="app-sidebar__signout"
              title="Sign out"
              onClick={async () => {
                await signOut();
                navigate('/');
              }}
            >
              <SignOutIcon size={17} color="#6e7c74" />
            </button>
          </div>
        </aside>
      )}

      <main className={`app-main ${isMobile ? 'app-main--mobile' : ''}`}>{children}</main>

      {isMobile && (
        <nav className="app-bottom-tabs">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.id as keyof typeof ICONS];
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `app-bottom-tabs__item ${isActive ? 'app-bottom-tabs__item--active' : ''}`}
              >
                <span className="app-bottom-tabs__icon-wrap">
                  <Icon size={20} />
                  {item.badge && <span className="app-bottom-tabs__badge">{item.badge}</span>}
                </span>
                <span className="app-bottom-tabs__label">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      )}
    </div>
  );
}
