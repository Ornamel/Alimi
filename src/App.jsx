import React from 'react';
import { useAppCtx } from './state/useAppCtx.js';
import AppShell from './components/AppShell.jsx';
import Toast from './components/Toast.jsx';

import Dashboard from './screens/Dashboard.jsx';
import Monitor from './screens/Monitor.jsx';
import Briefing from './screens/Briefing.jsx';
import EntryPoints from './screens/EntryPoints.jsx';
import Analytics from './screens/Analytics.jsx';
import AgentBuilder from './screens/AgentBuilder.jsx';
import Landing from './screens/Landing.jsx';
import Signup from './screens/Signup.jsx';
import Signin from './screens/Signin.jsx';
import ForgotPassword from './screens/ForgotPassword.jsx';
import Billing from './screens/Billing.jsx';
import Settings from './screens/Settings.jsx';
import Agents from './screens/Agents.jsx';
import Onboarding from './screens/Onboarding.jsx';
import MobileChat from './screens/MobileChat.jsx';
import MobileBriefing from './screens/MobileBriefing.jsx';
import States from './screens/States.jsx';

export default function App() {
  const ctx = useAppCtx();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        {ctx.inAppShell && (
          <AppShell ctx={ctx}>
            {ctx.isDashboard && <Dashboard ctx={ctx} />}
            {ctx.isMonitor && <Monitor ctx={ctx} />}
            {ctx.isBriefing && <Briefing ctx={ctx} />}
            {ctx.isEntry && <EntryPoints ctx={ctx} />}
            {ctx.isAnalytics && <Analytics ctx={ctx} />}
          </AppShell>
        )}

        {ctx.isBuilder && <AgentBuilder ctx={ctx} />}
        {ctx.isLanding && <Landing ctx={ctx} />}
        {ctx.isSignup && <Signup ctx={ctx} />}
        {ctx.isSignin && <Signin ctx={ctx} />}
        {ctx.isForgotPw && <ForgotPassword ctx={ctx} />}
        {ctx.isBilling && <Billing ctx={ctx} />}
        {ctx.isSettings && <Settings ctx={ctx} />}
        {ctx.isAgents && <Agents ctx={ctx} />}
        {ctx.isOnboarding && <Onboarding ctx={ctx} />}
        {ctx.isMobileChat && <MobileChat ctx={ctx} />}
        {ctx.isMobileBrief && <MobileBriefing ctx={ctx} />}
        {ctx.isStates && <States ctx={ctx} />}

        <Toast ctx={ctx} />
      </div>
    </div>
  );
}
