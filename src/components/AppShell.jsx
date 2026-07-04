import React from 'react';
import { sx } from '../lib/sx.js';
import Sidebar from './Sidebar.jsx';
import MobileNav from './MobileNav.jsx';

export default function AppShell({ ctx, children }) {
  return (
    <div style={sx('display: flex; min-height: 100vh;')}>
      {ctx.notIsMobile && <Sidebar ctx={ctx} />}
      {ctx.isMobile && <MobileNav ctx={ctx} />}
      <main style={sx(ctx.mainContentStyle)}>{children}</main>
    </div>
  );
}
