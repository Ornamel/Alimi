import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { WorkspaceProvider } from './context/WorkspaceContext';
import { ToastProvider } from './context/ToastContext';
import { Toast } from './components/ui/Toast';
import { AppShell } from './components/layout/AppShell';
import { RequireAuth } from './components/layout/RequireAuth';

import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { AgentsPage } from './pages/AgentsPage';
import { AgentBuilderPage } from './pages/AgentBuilderPage';
import { DashboardPage } from './pages/DashboardPage';
import { MonitorPage } from './pages/MonitorPage';
import { BriefingPage } from './pages/BriefingPage';
import { EntryPointsPage } from './pages/EntryPointsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { BillingPage } from './pages/BillingPage';
import { SettingsPage } from './pages/SettingsPage';
import { StatesPage } from './pages/StatesPage';
import { WatchDemoPage } from './pages/WatchDemoPage';
import { MobileBriefingDemoPage } from './pages/MobileBriefingDemoPage';

export default function App() {
  return (
    <AuthProvider>
      <WorkspaceProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/demo" element={<WatchDemoPage />} />
            <Route path="/demo/briefing" element={<MobileBriefingDemoPage />} />
            <Route path="/states" element={<StatesPage />} />

            <Route
              path="/onboarding"
              element={
                <RequireAuth>
                  <OnboardingPage />
                </RequireAuth>
              }
            />
            <Route
              path="/agents"
              element={
                <RequireAuth>
                  <AgentsPage />
                </RequireAuth>
              }
            />
            <Route
              path="/agents/new"
              element={
                <RequireAuth>
                  <AgentBuilderPage mode="create" />
                </RequireAuth>
              }
            />
            <Route
              path="/agents/:agentId/edit"
              element={
                <RequireAuth>
                  <AgentBuilderPage mode="edit" />
                </RequireAuth>
              }
            />
            <Route
              path="/billing"
              element={
                <RequireAuth>
                  <BillingPage />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <SettingsPage />
                </RequireAuth>
              }
            />

            <Route
              path="/app/dashboard"
              element={
                <RequireAuth>
                  <AppShell>
                    <DashboardPage />
                  </AppShell>
                </RequireAuth>
              }
            />
            <Route
              path="/app/monitor"
              element={
                <RequireAuth>
                  <AppShell>
                    <MonitorPage />
                  </AppShell>
                </RequireAuth>
              }
            />
            <Route
              path="/app/briefing"
              element={
                <RequireAuth>
                  <AppShell>
                    <BriefingPage />
                  </AppShell>
                </RequireAuth>
              }
            />
            <Route
              path="/app/entry-points"
              element={
                <RequireAuth>
                  <AppShell>
                    <EntryPointsPage />
                  </AppShell>
                </RequireAuth>
              }
            />
            <Route
              path="/app/analytics"
              element={
                <RequireAuth>
                  <AppShell>
                    <AnalyticsPage />
                  </AppShell>
                </RequireAuth>
              }
            />
          </Routes>
          <Toast />
        </ToastProvider>
      </WorkspaceProvider>
    </AuthProvider>
  );
}
