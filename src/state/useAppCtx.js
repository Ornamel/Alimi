import { useCallback, useEffect, useState } from 'react';

// Ported 1:1 from the Claude Design prototype's `class Component extends DCLogic`
// (Alimi.dc.html's <script type="text/x-dc" data-dc-script>). Keeps the same
// state shape, action names, and derived-value shape (renderVals()) so screen
// components can consume `ctx.xxx` exactly as the prototype's `{{ xxx }}`
// bindings did.

const DEMO_AGENTS = [
  { id: 'a1', name: 'Lekki Homes Closer', status: 'live', channels: 'WhatsApp + Email', convos: 24, qualified: 6, goalRate: 32, lastActive: 'Active 3 mins ago' },
  { id: 'a2', name: 'Ikoyi Rentals Bot', status: 'archived', channels: 'WhatsApp', convos: 0, qualified: 0, goalRate: 18, lastActive: 'Archived 2 days ago' },
  { id: 'a3', name: 'Abuja Launch Agent', status: 'archived', channels: 'Not connected', convos: 0, qualified: 0, goalRate: 0, lastActive: 'Archived — never launched' },
];

const ICONS = {
  dashboard: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7.5" height="7.5" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="13.5" y="3" width="7.5" height="5" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="13.5" y="11" width="7.5" height="10" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="13" width="7.5" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>',
  monitor: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.1-2.9-.4L4 20l1.2-3.5C4.1 15.2 3 13.5 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.5" cy="11.5" r="1" fill="currentColor"/><circle cx="12" cy="11.5" r="1" fill="currentColor"/><circle cx="15.5" cy="11.5" r="1" fill="currentColor"/></svg>',
  briefing: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 3l-1.5 8H17l-6 10 1.5-8H6l7-10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  entry: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 15l6-6M11 6l1-1a4 4 0 0 1 6 6l-1 1M13 18l-1 1a4 4 0 0 1-6-6l1-1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  analytics: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20h16M8 16l3.5-4 3 2.5L20 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const initialState = {
  screen: 'landing',
  isMobile: false,
  pwSent: false,
  onboardStep: 1,
  agentFilter: 'all',
  justSignedUp: false,
  agentsList: [
    { id: 'a1', name: 'Lekki Homes Closer', status: 'live', channels: 'WhatsApp + Email', convos: 24, qualified: 6, goalRate: 32, lastActive: 'Active 3 mins ago' },
    { id: 'a2', name: 'Ikoyi Rentals Bot', status: 'archived', channels: 'WhatsApp', convos: 0, qualified: 0, goalRate: 18, lastActive: 'Archived 2 days ago' },
    { id: 'a3', name: 'Abuja Launch Agent', status: 'archived', channels: 'Not connected', convos: 0, qualified: 0, goalRate: 0, lastActive: 'Archived — never launched' },
  ],
  planTier: 'free',
  agentLimit: 1,
  settingsTab: 'profile',
  profileMenuOpen: false,
  billingSelectedPlan: null,
  billingShowPayment: false,
  showUpgradeModal: false,
  deleteConfirmOpen: false,
  invoices: [],
  teamMembers: [],
  builderName: 'Lekki Homes Closer',
  builderPersona: '',
  builderChannels: { wa: true, email: false },
  kb: 'ready',
  takenOver: {},
  vertical: 'realestate',
  intervene: '',
  flashMsg: '',
  billingAnnual: false,
  builderStep: 1,
  builderMode: 'create',
  selConvo: null,
  takenOverActive: false,
  toast: false,
  toastEditMode: false,
};

export function useAppCtx() {
  const [state, setStateRaw] = useState(initialState);

  const setState = useCallback((updater) => {
    setStateRaw((prev) => {
      const partial = typeof updater === 'function' ? updater(prev) : updater;
      return { ...prev, ...partial };
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => setState({ isMobile: window.innerWidth < 760 });
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flashTimer = { current: undefined };

  // ---- actions ----
  const go = (s) => () => setState({ screen: s });
  const flash = (msg) => {
    setState({ flashMsg: msg });
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setState({ flashMsg: '' }), 2200);
  };
  const fl = (msg) => () => flash(msg);
  const setMonthly = () => setState({ billingAnnual: false });
  const setAnnual = () => setState({ billingAnnual: true });
  const onBillingToggle = (v) => setState({ billingAnnual: v });
  const startOnboarding = () => setState({ screen: 'onboarding', onboardStep: 1 });
  const goAgentsEmpty = () => setState({ screen: 'agents', justSignedUp: true, agentsList: [] });
  const signInToAgents = () => setState({ screen: 'agents', justSignedUp: false, agentsList: DEMO_AGENTS });

  const slotsFull = () => {
    const used = (state.agentsList || []).filter((a) => a.status !== 'archived').length;
    return used >= (state.agentLimit || 1);
  };
  const resetBuilder = () => setState({ screen: 'builder', builderStep: 1, builderMode: 'create' });
  const createNewAgent = () => {
    if (slotsFull()) { flash('You have reached the Free plan limit. Upgrade to create more agents.'); return; }
    if (state.justSignedUp) startOnboarding(); else resetBuilder();
  };
  const restoreAgent = (id) => () => {
    if (slotsFull()) { flash('You have reached the Free plan limit. Upgrade to restore this agent.'); return; }
    setState((s) => ({ agentsList: s.agentsList.map((a) => (a.id === id ? { ...a, status: 'draft' } : a)) }));
    flash('Agent restored — resume setup anytime.');
  };
  const openSettings = () => setState({ screen: 'settings' });
  const toggleProfileMenu = () => setState((s) => ({ profileMenuOpen: !s.profileMenuOpen }));
  const closeProfileMenu = () => setState({ profileMenuOpen: false });
  const goProfileFromMenu = () => setState({ screen: 'settings', settingsTab: 'profile', profileMenuOpen: false });
  const goSettingsFromMenu = () => setState({ screen: 'settings', profileMenuOpen: false });
  const signOutFromMenu = () => setState({ screen: 'landing', profileMenuOpen: false });
  const upgradeFromAgents = () => setState({ screen: 'billing' });
  const goBilling = () => setState({ screen: 'billing' });
  const goSettingsFromBilling = () => setState({ screen: 'settings', settingsTab: 'billing' });
  const setSettingsTab = (tab) => () => setState({ settingsTab: tab });
  const selectUpgradePlan = (planId) => () => {
    if (planId === 'agency') { flash('Thanks — our team will reach out within one business day.'); return; }
    if (planId === 'free') return;
    setState({ billingSelectedPlan: planId, billingShowPayment: true });
  };
  const confirmUpgrade = () => {
    const newLimit = state.billingSelectedPlan === 'pro' ? 3 : state.agentLimit;
    setState((s) => ({
      planTier: s.billingSelectedPlan || 'pro',
      agentLimit: newLimit,
      billingShowPayment: false,
      showUpgradeModal: true,
      invoices: [{ id: 'INV-00124', date: '04 Jul 2026', plan: 'Pro', amount: '₦45,000', status: 'Paid' }, ...s.invoices],
    }));
    flash('Your plan has been upgraded to Pro.');
  };
  const cancelUpgrade = () => setState({ billingShowPayment: false, billingSelectedPlan: null });
  const closeUpgradeModal = () => setState({ screen: 'agents', showUpgradeModal: false });
  const openDeleteConfirm = () => setState({ deleteConfirmOpen: true });
  const closeDeleteConfirm = () => setState({ deleteConfirmOpen: false });
  const confirmDeleteAccount = () => { setState({ deleteConfirmOpen: false, screen: 'landing' }); flash('Your Alimi workspace has been deleted.'); };
  const saveSettingsToast = () => flash('Changes saved successfully.');
  const savePrefsToast = () => flash('Notification preferences saved.');
  const passwordToast = () => flash('Password updated successfully.');
  const exportDataToast = () => flash('Exporting your data — we’ll email a link shortly.');
  const inviteTeamToast = () => flash('Upgrade to Pro to invite team members.');
  const nextOb = () => setState((s) => ({ onboardStep: Math.min(5, (s.onboardStep || 1) + 1) }));
  const prevOb = () => setState((s) => ({ onboardStep: Math.max(1, (s.onboardStep || 1) - 1) }));
  const setObField = (key) => (e) => setState({ [key]: e.target.value });
  const requestReset = () => setState({ pwSent: true });
  const backToSignin = () => setState({ pwSent: false, screen: 'signin' });
  const toggleTakeover = () => setState((s) => ({ takenOverActive: !s.takenOverActive }));
  const selectConvo = (id) => () => setState({ selConvo: id, takenOverActive: false });

  const setName = (e) => setState({ builderName: e.target.value });
  const setPersona = (e) => setState({ builderPersona: e.target.value });
  const setUseCase = (e) => setState({ builderUseCase: e.target.value });
  const toggleChan = (k) => () => setState((s) => ({ builderChannels: { ...s.builderChannels, [k]: !s.builderChannels[k] } }));
  const launch = () => {
    const editing = state.builderMode === 'edit';
    setState({ toast: true, toastEditMode: editing });
    setTimeout(() => setState({ screen: editing ? 'agents' : 'dashboard', toast: false, builderStep: 1, justSignedUp: false }), 1600);
  };
  const nextBuilderStep = () => setState((s) => ({ builderStep: Math.min(5, (s.builderStep || 1) + 1) }));
  const cancelBuilder = () => setState({ screen: 'agents', builderStep: 1 });
  const prevBuilderStep = () => {
    const cur = state.builderStep || 1;
    if (cur <= 1) setState({ screen: 'dashboard' });
    else setState({ builderStep: cur - 1 });
  };
  const saveDraft = () => { flash('Draft saved — resume anytime from Your Agents'); setState({ screen: 'agents' }); };
  const saveOnboardDraft = () => {
    const step = state.onboardStep || 1;
    const name = state.builderName || state.obBusiness || 'Untitled agent';
    setState((s) => {
      const list = s.agentsList || [];
      const existing = list.find((a) => a.id === 'new-agent-draft');
      const draftEntry = { id: 'new-agent-draft', name, status: 'draft', channels: 'Not connected', convos: 0, qualified: 0, goalRate: 0, lastActive: 'Saved just now', draftStep: step };
      const agentsList = existing ? list.map((a) => (a.id === 'new-agent-draft' ? draftEntry : a)) : [...list, draftEntry];
      return { agentsList, screen: 'agents', justSignedUp: false };
    });
    flash('Agent draft saved. You can continue setup anytime.');
  };
  const continueDraft = (step) => () => setState({ screen: 'onboarding', onboardStep: step || 1 });

  const setAgentFilter = (f) => () => setState({ agentFilter: f });
  const setAgentStatus = (id, status, msg) => () => {
    setState((s) => ({ agentsList: s.agentsList.map((a) => (a.id === id ? { ...a, status } : a)) }));
    flash(msg);
  };
  const editAgent = () => setState({ screen: 'builder', builderStep: 1, builderMode: 'edit' });
  const selectVertical = (v) => () => setState({ vertical: v });

  // ---- derived value builders ----
  function builderVals() {
    const name = state.builderName || '';
    const persona = state.builderPersona || '';
    const wa = state.builderChannels.wa;
    const em = state.builderChannels.email;
    const cardBase = 'flex:1;text-align:left;border-radius:14px;padding:16px;cursor:pointer;transition:all .15s;background:#fff;';
    const sel = 'border:2px solid #0B7A4B;box-shadow:0 2px 8px rgba(11,122,75,0.12);';
    const unsel = 'border:2px solid #EAE5D9;';
    const pvChannel = wa && em ? 'WhatsApp + Email' : em ? 'Email' : 'WhatsApp';
    const bStep = state.builderStep || 1;
    const bStepLabels = ['Agent Details', 'Channel Setup', 'Knowledge Base', 'Success Event & Preview', 'Share & Launch'];
    return {
      builderName: name,
      builderPersona: persona,
      builderUseCase: state.builderUseCase || '',
      setName, setPersona, setUseCase,
      waCardStyle: cardBase + (wa ? sel : unsel),
      emCardStyle: cardBase + (em ? sel : unsel),
      toggleWa: toggleChan('wa'),
      toggleEmail: toggleChan('email'),
      waCheck: wa, emCheck: em, notWaCheck: !wa, notEmCheck: !em,
      pvName: name || 'Untitled agent',
      pvChannel,
      launch,
      showToast: !!state.toast,
      launchBtnLabel: state.builderMode === 'edit' ? 'Save changes' : 'Launch agent',
      toastMsg: state.toastEditMode ? 'Changes saved.' : 'Your agent is live. Conversations start the moment someone taps your link.',
      resetBuilder,
      bStep,
      bStep1: bStep === 1, bStep2: bStep === 2, bStep3: bStep === 3, bStep4: bStep === 4, bStep5: bStep === 5,
      bNotStep1: bStep !== 1, bNotStep5: bStep !== 5,
      bStepLabel: `Step ${bStep} of 5 · ${bStepLabels[bStep - 1]}`,
      bProgressStyle: `width:${bStep * 20}%;height:100%;background:#0B7A4B;border-radius:4px;transition:width .2s ease;`,
      bBackLabel: bStep === 1 ? 'Cancel' : '← Back',
      bBack: bStep === 1 ? cancelBuilder : prevBuilderStep,
      bNext: nextBuilderStep,
      saveDraft,
    };
  }

  function onboardVals() {
    const cur = state.vertical;
    const base = 'text-align:left;background:#fff;border-radius:14px;padding:18px;cursor:pointer;transition:all .15s;';
    const on = 'border:2px solid #0B7A4B;box-shadow:0 3px 12px rgba(11,122,75,0.13);';
    const off = 'border:2px solid #EAE5D9;';
    const defs = [
      { id: 'realestate', emoji: '🏠', title: 'Real estate & property', sub: 'Book viewings, qualify buyers', iconBg: '#E7F3EC' },
      { id: 'creator', emoji: '🎥', title: 'Creator economy & courses', sub: 'Convert followers to enrollments', iconBg: '#FBEAD8' },
      { id: 'sme', emoji: '🛍️', title: 'Small business & services', sub: 'Answer, quote, and book jobs', iconBg: '#E9EFFC' },
      { id: 'agency', emoji: '🏢', title: 'Agency & multi-client', sub: 'Deploy agents for every client', iconBg: '#F0ECE1' },
    ];
    const verticals = defs.map((d) => ({
      emoji: d.emoji, title: d.title, sub: d.sub, iconBg: d.iconBg,
      select: selectVertical(d.id),
      cardStyle: base + (cur === d.id ? on : off),
    }));

    const step = state.onboardStep || 1;
    const stepLabels = ['Business Profile', 'Agent Setup', 'Channels', 'Knowledge & Goal', 'Share & Launch'];
    const selBase = 'width:100%;border:1px solid #E4DFD3;background:#F7F4EE;border-radius:11px;padding:12px 15px;font-size:14px;outline:none;color:#12211B;';
    return {
      verticals,
      onboardStep: step,
      obStep1: step === 1, obStep2: step === 2, obStep3: step === 3, obStep4: step === 4, obStep5: step === 5,
      notObStep5: step !== 5,
      obStepLabel: `Step ${step} of 5: ${stepLabels[step - 1]}`,
      obProgressStyle: `width:${step * 20}%;height:100%;background:#0B7A4B;border-radius:4px;transition:width .2s ease;`,
      obBack: step === 1 ? go('signup') : prevOb,
      obNext: nextOb,
      saveOnboardDraft,
      obName: state.obName ?? 'Tunde Bakare',
      obEmail: state.obEmail ?? 'tunde@lekkihomes.com',
      obBusiness: state.obBusiness ?? 'Lekki Homes',
      obLanguage: state.obLanguage || 'English',
      obVolume: state.obVolume || '100–500 conversations/mo',
      setObName: setObField('obName'),
      setObEmail: setObField('obEmail'),
      setObBusiness: setObField('obBusiness'),
      setObLanguage: setObField('obLanguage'),
      setObVolume: setObField('obVolume'),
      selInputStyle: selBase,
    };
  }

  function responsiveVals() {
    const m = !!state.isMobile;
    const g = (desktop) => (m ? '1fr' : desktop);
    return {
      gridStatRow: `display: grid; grid-template-columns: repeat(${m ? 2 : 4}, 1fr); gap: 16px; margin-bottom: 26px;`,
      gridDashTwoCol: `display: grid; grid-template-columns: ${g('1.55fr 1fr')}; gap: 20px;`,
      gridBriefBody: `display: grid; grid-template-columns: ${g('1.15fr 1fr')}; gap: 0;`,
      gridBriefMoves: `display: grid; grid-template-columns: repeat(${m ? 1 : 3}, 1fr); gap: 14px;`,
      gridMonitorMain: `display: grid; grid-template-columns: ${g('1.35fr 1fr')}; gap: 20px;`,
      gridAnalyticsStat: `display: grid; grid-template-columns: repeat(${m ? 2 : 4}, 1fr); gap: 16px; margin-bottom: 20px;`,
      gridAnalyticsVolFunnel: `display: grid; grid-template-columns: ${g('1.6fr 1fr')}; gap: 20px; margin-bottom: 20px;`,
      gridAnalyticsPerfSource: `display: grid; grid-template-columns: ${g('1fr 1fr')}; gap: 20px;`,
      gridBuilderStep4: `display: grid; grid-template-columns: ${g('1.1fr 1fr')}; gap: 32px; align-items: start; max-width: 980px; margin: 0 auto;`,
      gridHero: `max-width: 1160px; margin: 0 auto; padding: 40px 32px 60px; display: grid; grid-template-columns: ${g('1fr 1fr')}; gap: 48px; align-items: center;`,
      gridStatBand: `max-width: 1160px; margin: 0 auto; padding: 34px 32px; display: grid; grid-template-columns: repeat(${m ? 2 : 4}, 1fr); gap: 24px;`,
      gridHowItWorks: `display: grid; grid-template-columns: repeat(${m ? 1 : 3}, 1fr); gap: 20px;`,
      gridFeatures: `display: grid; grid-template-columns: repeat(${m ? 1 : 3}, 1fr); gap: 20px;`,
      gridPricingCards: `display: grid; grid-template-columns: repeat(${m ? 1 : 3}, 1fr); gap: 20px; align-items: stretch;`,
      gridBuiltFor: `display: grid; grid-template-columns: repeat(${m ? 2 : 4}, 1fr); gap: 16px;`,
      gridTestimonials: `display: grid; grid-template-columns: repeat(${m ? 1 : 2}, 1fr); gap: 20px;`,
      gridAuth: m ? 'display: flex; flex-direction: column; min-height: 100vh;' : 'display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh;',
      gridBilling: `display: grid; grid-template-columns: ${g('1.1fr 1fr')}; gap: 22px; align-items: start;`,
      gridSettings: m ? 'display: flex; flex-direction: column; gap: 20px;' : 'display: grid; grid-template-columns: 200px 1fr; gap: 28px; align-items: start;',
      gridObStep1a: `display: grid; grid-template-columns: repeat(${m ? 1 : 2}, 1fr); gap: 14px; margin-bottom: 20px;`,
      gridObVerticals: `display: grid; grid-template-columns: repeat(${m ? 1 : 2}, 1fr); gap: 14px; margin-bottom: 20px;`,
      gridObStep1c: `display: grid; grid-template-columns: repeat(${m ? 1 : 2}, 1fr); gap: 14px; margin-bottom: 28px;`,
      gridObStep2: `display: grid; grid-template-columns: ${g('1.1fr 1fr')}; gap: 28px; align-items: start;`,
      gridStatesEmpty: `display: grid; grid-template-columns: repeat(${m ? 1 : 2}, 1fr); gap: 16px;`,
      gridStatesErrors: `display: grid; grid-template-columns: repeat(${m ? 1 : 3}, 1fr); gap: 16px;`,
    };
  }

  function billingVals() {
    const tier = state.planTier || 'free';
    const usedSlots = (state.agentsList || []).filter((a) => a.status !== 'archived').length;
    const limit = state.agentLimit || 1;
    const pillBase = 'padding:11px 20px;border-radius:999px;font-size:14px;font-weight:600;border:none;cursor:pointer;';
    const disabledPill = pillBase + 'background:#EAE5D9;color:#9AA39C;cursor:not-allowed;';
    const activePill = pillBase + 'background:#0B7A4B;color:#fff;';
    const outlinePill = pillBase + 'background:none;border:1px solid #E4DFD3;color:#12211B;';
    return {
      isFreeTier: tier === 'free', isProTier: tier === 'pro',
      currentPlanLabel: tier === 'pro' ? 'Pro Plan' : 'Free Plan',
      currentPlanPrice: tier === 'pro' ? '₦45,000/mo' : '₦0/month',
      currentPlanUsageText: `${usedSlots} of ${limit} agent${limit !== 1 ? 's' : ''} used`,
      currentPlanChannels: tier === 'pro' ? 'WhatsApp + Email, unlimited conversations' : '1 channel — WhatsApp or Email',
      currentPlanConvLimit: tier === 'pro' ? 'Unlimited conversations' : 'Up to 50 conversations/month',
      currentPlanSupport: tier === 'pro' ? 'Priority support' : 'Community support',
      limitReachedBilling: usedSlots >= limit,
      usageConvos: tier === 'pro' ? 'Unlimited' : '32 / 50',
      usageBriefings: '8',
      freeBtnStyle: tier === 'free' ? disabledPill : outlinePill,
      proBtnStyle: tier === 'pro' ? disabledPill : activePill,
      proBtnLabel: tier === 'pro' ? 'Current plan' : 'Upgrade to Pro',
      selectFree: selectUpgradePlan('free'),
      selectPro: selectUpgradePlan('pro'),
      selectAgency: selectUpgradePlan('agency'),
      billingShowPayment: !!state.billingShowPayment,
      showUpgradeModal: !!state.showUpgradeModal,
      confirmUpgrade, cancelUpgrade, closeUpgradeModal, goBilling,
      hasInvoices: (state.invoices || []).length > 0,
      notHasInvoices: (state.invoices || []).length === 0,
      invoiceList: (state.invoices || []).map((i) => ({ ...i, dlToast: fl('Downloading ' + i.id + '…') })),
    };
  }

  function settingsVals() {
    const tab = state.settingsTab || 'profile';
    const tabDefs = [
      { id: 'profile', label: 'Profile' },
      { id: 'workspace', label: 'Workspace' },
      { id: 'billing', label: 'Plan & Billing' },
      { id: 'notifications', label: 'Notifications' },
      { id: 'team', label: 'Team & Access' },
      { id: 'security', label: 'Security' },
      { id: 'privacy', label: 'Data & Privacy' },
    ];
    const settingsTabs = tabDefs.map((t) => ({
      label: t.label, go: setSettingsTab(t.id),
      style: 'display:block;width:100%;text-align:left;padding:10px 14px;border-radius:10px;border:none;font-size:14px;font-weight:600;cursor:pointer;margin-bottom:2px;'
        + (tab === t.id ? 'background:#12211B;color:#fff;' : 'background:none;color:#6E7A73;'),
    }));
    return {
      settingsTabs,
      isTabProfile: tab === 'profile', isTabWorkspace: tab === 'workspace', isTabBilling: tab === 'billing',
      isTabNotifications: tab === 'notifications', isTabTeam: tab === 'team', isTabSecurity: tab === 'security', isTabPrivacy: tab === 'privacy',
      deleteConfirmOpen: !!state.deleteConfirmOpen,
      openDeleteConfirm, closeDeleteConfirm, confirmDeleteAccount,
      saveSettingsToast, savePrefsToast, passwordToast, exportDataToast, inviteTeamToast,
    };
  }

  function agentsVals() {
    const filter = state.agentFilter || 'all';
    const statusMeta = {
      live: { label: 'Live', style: 'font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:#E7F3EC;color:#0B7A4B;' },
      paused: { label: 'Paused', style: 'font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:#FBEAD8;color:#C9631C;' },
      draft: { label: 'Draft', style: 'font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:#F0ECE1;color:#6E7A73;' },
      archived: { label: 'Archived', style: 'font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:#F0ECE1;color:#9AA39C;' },
    };
    const all = state.agentsList || [];
    const filtered = filter === 'all' ? all : all.filter((a) => a.status === filter);
    const tabDefs = [
      { id: 'all', label: 'All agents' },
      { id: 'live', label: 'Live' },
      { id: 'draft', label: 'Drafts' },
      { id: 'paused', label: 'Paused' },
      { id: 'archived', label: 'Archived' },
    ];
    const tabBase = 'white-space:nowrap;border:none;padding:8px 15px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer;';
    const agentTabs = tabDefs.map((t) => ({
      label: t.label,
      go: setAgentFilter(t.id),
      style: tabBase + (filter === t.id ? 'background:#12211B;color:#fff;' : 'background:#fff;color:#6E7A73;border:1px solid #EAE5D9;'),
    }));
    const agentCards = filtered.map((a) => ({
      id: a.id,
      name: a.name,
      channels: a.channels,
      lastActive: a.lastActive,
      statusLabel: statusMeta[a.status].label,
      statusStyle: statusMeta[a.status].style,
      statLine: a.status === 'live' ? `${a.convos} conversations today · ${a.qualified} qualified leads` : a.status === 'draft' ? `Draft · ${a.draftStep || 1} of 5 steps complete` : a.status === 'paused' ? `${a.goalRate}% goal completion rate (paused)` : 'Hidden from your active list',
      isLive: a.status === 'live', isPaused: a.status === 'paused', isDraft: a.status === 'draft', isArchived: a.status === 'archived',
      notArchived: a.status !== 'archived',
      openDash: a.status === 'draft' ? continueDraft(a.draftStep) : a.status === 'archived' ? restoreAgent(a.id) : go('dashboard'),
      openDashLabel: a.status === 'draft' ? 'Continue setup' : a.status === 'archived' ? 'Restore' : 'Open dashboard',
      editAgent,
      pause: setAgentStatus(a.id, 'paused', `${a.name} paused — it will stop responding to new messages.`),
      resume: setAgentStatus(a.id, 'live', `${a.name} resumed — conversations restarting.`),
      archive: setAgentStatus(a.id, 'archived', `${a.name} archived — hidden from your active list.`),
    }));
    const usedSlots = all.filter((a) => a.status !== 'archived').length;
    const limit = state.agentLimit || 1;
    const limitReached = usedSlots >= limit;
    const createBtnStyle = 'flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; border: none; padding: 12px 20px; border-radius: 999px; font-size: 14.5px; font-weight: 600; box-shadow: 0 3px 10px rgba(11,122,75,0.25);'
      + (limitReached ? 'background:#EAE5D9;color:#9AA39C;cursor:not-allowed;box-shadow:none;' : 'background:#0B7A4B;color:#fff;cursor:pointer;');
    return {
      agentTabs, agentCards,
      agentCount: all.filter((a) => a.status !== 'archived').length,
      agentCountPlural: all.filter((a) => a.status !== 'archived').length !== 1,
      hasNoAgentsInFilter: agentCards.length === 0,
      justSignedUp: !!state.justSignedUp,
      notJustSignedUp: !state.justSignedUp,
      startOnboarding, createNewAgent, openSettings, upgradeFromAgents,
      usedSlots, agentLimit: limit, limitReached, limitNotReached: !limitReached,
      planUsageText: `${usedSlots} of ${limit} agent${limit !== 1 ? 's' : ''} used`,
      createBtnStyle,
      createBtnTitle: limitReached ? 'You have reached the Free plan limit. Upgrade to create more agents.' : '',
      yourAgentsPlanBadge: (state.planTier || 'free') === 'pro' ? 'Pro plan' : 'Free plan',
      agentLimitPlural: limit !== 1 ? 's' : '',
    };
  }

  function analyticsVals() {
    const days = ['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'];
    const waArr = [22, 28, 19, 14, 31, 38, 42, 35, 40, 26, 20, 44, 48, 41];
    const emArr = [8, 10, 6, 5, 12, 14, 11, 9, 13, 7, 6, 15, 16, 13];
    const max = 66;
    const volume = days.map((d, i) => {
      const total = waArr[i] + emArr[i];
      const hPct = Math.round((total / max) * 100);
      const waShare = Math.round((waArr[i] / total) * 100);
      return {
        day: d,
        outer: `width:100%;display:flex;flex-direction:column;justify-content:flex-end;border-radius:5px 5px 0 0;overflow:hidden;height:${hPct}%;`,
        emailBar: `background:#9DC9B4;height:${100 - waShare}%;`,
        waBar: `background:#0B7A4B;height:${waShare}%;`,
      };
    });
    const fRow = (pct, col) => `height:100%;width:${pct}%;background:${col};border-radius:6px;`;
    const bigFunnel = [
      { label: 'Visitors', pct: '2,140', barStyle: fRow(100, '#0C1712') },
      { label: 'Engaged', pct: '486 · 23%', barStyle: fRow(70, '#0B7A4B') },
      { label: 'Qualified', pct: '117 · 24%', barStyle: fRow(48, '#16C47F') },
      { label: 'Goal hit', pct: '58 · 50%', barStyle: fRow(30, '#5DBF8E') },
      { label: 'Closed', pct: '31 · 53%', barStyle: fRow(18, '#E07B2E') },
    ];
    const agents = [
      { ini: 'LH', name: 'Lekki Homes Closer', rate: '34%', bg: '#0B7A4B', barStyle: 'height:100%;width:34%;background:#0B7A4B;border-radius:4px;' },
      { ini: 'IK', name: 'Ikoyi Rentals Bot', rate: '28%', bg: '#2F6BEC', barStyle: 'height:100%;width:28%;background:#2F6BEC;border-radius:4px;' },
      { ini: 'VI', name: 'VI Land Sales', rate: '19%', bg: '#E07B2E', barStyle: 'height:100%;width:19%;background:#E07B2E;border-radius:4px;' },
    ];
    const convSources = [
      { label: 'YouTube links', vol: 214, conv: '31%', col: '#0B7A4B' },
      { label: 'Website widget', vol: 138, conv: '22%', col: '#16C47F' },
      { label: 'QR codes', vol: 84, conv: '18%', col: '#E07B2E' },
      { label: 'WhatsApp status', vol: 50, conv: '14%', col: '#2F6BEC' },
    ];
    return { volume, bigFunnel, agents, convSources };
  }

  function pricingVals() {
    const annual = !!state.billingAnnual;
    const toggleBase = 'padding:9px 20px;border-radius:999px;border:none;font-size:13.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:7px;transition:all .15s;';
    return {
      billingAnnual: annual,
      setMonthly, setAnnual, onBillingToggle,
      monthlyBtnStyle: toggleBase + (!annual ? 'background:#16C47F;color:#07130D;' : 'background:transparent;color:#9FB0A6;'),
      annualBtnStyle: toggleBase + (annual ? 'background:#16C47F;color:#07130D;' : 'background:transparent;color:#9FB0A6;'),
      annualBadgeStyle: 'font-size:11px;font-weight:700;padding:1px 8px;border-radius:20px;' + (annual ? 'background:rgba(7,19,13,0.16);color:#07130D;' : 'background:rgba(22,196,127,0.16);color:#16C47F;'),
      proPrice: annual ? '₦36,000' : '₦45,000',
      proSub: annual ? 'billed ₦432,000/yr' : 'billed monthly · cancel anytime',
    };
  }

  function renderVals() {
    const s = state.screen;
    const inAppShell = ['dashboard', 'monitor', 'briefing', 'entry', 'analytics'].includes(s);

    const sideDefs = [
      { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard },
      { id: 'monitor', label: 'Conversations', icon: ICONS.monitor, badge: '12' },
      { id: 'briefing', label: 'Briefings', icon: ICONS.briefing, badge: '3' },
      { id: 'entry', label: 'Entry points', icon: ICONS.entry },
      { id: 'analytics', label: 'Analytics', icon: ICONS.analytics },
    ];
    const navBase = 'display:flex;align-items:center;gap:11px;width:100%;padding:9px 11px;border:none;border-radius:10px;font-size:14px;font-weight:500;cursor:pointer;transition:all .14s;';
    const sideNav = sideDefs.map((n) => {
      const active = s === n.id;
      return {
        label: n.label, go: go(n.id), icon: n.icon, badge: n.badge || '',
        style: navBase + (active ? 'background:#16C47F;color:#07130D;' : 'background:transparent;color:#9FB0A6;'),
        badgeStyle: 'font-size:11px;font-weight:700;padding:1px 7px;border-radius:20px;' + (active ? 'background:rgba(7,19,13,0.18);color:#07130D;' : 'background:rgba(255,255,255,0.1);color:#C9D2CC;'),
        mobileStyle: 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;position:relative;padding:6px 2px;border:none;border-radius:10px;cursor:pointer;background:transparent;' + (active ? 'color:#16C47F;' : 'color:#8A968F;'),
      };
    });

    const chan = (t) => (t === 'wa'
      ? 'font-size:11px;font-weight:600;color:#0B7A4B;background:#E7F3EC;padding:2px 8px;border-radius:20px;'
      : 'font-size:11px;font-weight:600;color:#2F6BEC;background:#E9EFFC;padding:2px 8px;border-radius:20px;');
    const badge = (kind) => ({
      hot: 'font-size:11px;font-weight:600;color:#C9631C;background:#FBEAD8;padding:2px 8px;border-radius:20px;',
      qualify: 'font-size:11px;font-weight:600;color:#6E7A73;background:#F0ECE1;padding:2px 8px;border-radius:20px;',
      flag: 'font-size:11px;font-weight:600;color:#D64545;background:#FAE7E7;padding:2px 8px;border-radius:20px;',
    }[kind]);
    const rowBase = 'display:flex;gap:13px;align-items:center;padding:15px 20px;border-bottom:1px solid #F4F0E6;';
    const ava = (bg) => `width:40px;height:40px;flex-shrink:0;border-radius:50%;background:${bg};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:15px;`;
    const primaryBtn = 'background:#0B7A4B;color:#fff;border:none;padding:7px 13px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap;';
    const ghostBtn = 'background:#F5F2EB;color:#12211B;border:1px solid #E4DFD3;padding:7px 13px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap;';
    const convos = [
      { initials: 'CO', name: 'Chioma Okafor', channel: 'WhatsApp', chanKind: 'wa', badge: 'Hot — ready to close', bk: 'hot', last: 'Saturday 10am works perfectly. My email is chioma.o@…', source: 'YouTube · Lekki Tour', time: '2m ago', to: 'briefing', al: 'View briefing →', bg: '#0B7A4B' },
      { initials: 'DA', name: 'David Adeyemi', channel: 'WhatsApp', chanKind: 'wa', badge: 'Needs your attention', bk: 'flag', last: 'Do you offer a 24-month payment plan on the penthouse?', source: 'QR · Site Banner', time: '6m ago', to: 'monitor', al: 'Take over', bg: '#E07B2E' },
      { initials: 'FN', name: 'Fatima Nwosu', channel: 'Email', chanKind: 'email', badge: 'Qualify — gathering information', bk: 'qualify', last: 'Re: Ikoyi 3-bed — could you send the floor plan PDF?', source: 'Website widget', time: '11m ago', to: 'monitor', al: 'Open', bg: '#2F6BEC' },
      { initials: 'KB', name: 'Kwame Boateng', channel: 'WhatsApp', chanKind: 'wa', badge: 'Hot — ready to close', bk: 'hot', last: 'Great, I can transfer the deposit today. Send details.', source: 'YouTube · Accra', time: '18m ago', to: 'briefing', al: 'View briefing →', bg: '#0B7A4B' },
    ].map((c) => ({
      initials: c.initials, name: c.name, channel: c.channel, last: c.last, source: c.source, time: c.time,
      rowStyle: rowBase,
      avatarStyle: ava(c.bg),
      chanStyle: chan(c.chanKind),
      badge: c.badge, badgeStyle: badge(c.bk),
      action: go(c.to),
      actionLabel: c.al,
      actionStyle: c.bk === 'hot' ? primaryBtn : ghostBtn,
    }));

    const srcBar = (pct, col) => `width:${pct}%;height:100%;background:${col};border-radius:5px;`;
    const sources = [
      { label: 'YouTube links', count: '18', barStyle: srcBar(88, '#0B7A4B') },
      { label: 'Website widget', count: '11', barStyle: srcBar(54, '#16C47F') },
      { label: 'QR codes', count: '8', barStyle: srcBar(39, '#E07B2E') },
      { label: 'WhatsApp status', count: '4', barStyle: srcBar(20, '#2F6BEC') },
    ];

    const fBar = (pct) => `height:26px;width:${pct}%;background:linear-gradient(90deg,#16C47F,#0B7A4B);border-radius:6px;min-width:26px;`;
    const funnel = [
      { label: 'Visitors', value: '312', barStyle: fBar(100) },
      { label: 'Engaged', value: '41', barStyle: fBar(64) },
      { label: 'Qualified', value: '23', barStyle: fBar(42) },
      { label: 'Goal hit', value: '9', barStyle: fBar(24) },
    ];

    // ---- Monitor ----
    const selId = state.selConvo || 'chioma';
    const mList = [
      { id: 'chioma', initials: 'CO', name: 'Chioma Okafor', chan: 'wa', badge: 'Hot', bk: 'hot', last: 'Saturday 10am works perfectly.', time: '2m', bg: '#0B7A4B' },
      { id: 'david', initials: 'DA', name: 'David Adeyemi', chan: 'wa', badge: 'Flagged', bk: 'flag', last: 'Do you offer a 24-month plan?', time: '6m', bg: '#E07B2E' },
      { id: 'fatima', initials: 'FN', name: 'Fatima Nwosu', chan: 'email', badge: 'Qualify', bk: 'qualify', last: 'Could you send the floor plan?', time: '11m', bg: '#2F6BEC' },
      { id: 'kwame', initials: 'KB', name: 'Kwame Boateng', chan: 'wa', badge: 'Hot', bk: 'hot', last: 'I can transfer the deposit today.', time: '18m', bg: '#0B7A4B' },
    ];
    const mBadge = (k) => ({
      hot: 'font-size:10.5px;font-weight:600;color:#C9631C;background:#FBEAD8;padding:1px 7px;border-radius:20px;',
      qualify: 'font-size:10.5px;font-weight:600;color:#6E7A73;background:#F0ECE1;padding:1px 7px;border-radius:20px;',
      flag: 'font-size:10.5px;font-weight:600;color:#D64545;background:#FAE7E7;padding:1px 7px;border-radius:20px;',
    }[k]);
    const monitorList = mList.map((c) => ({
      id: c.id,
      initials: c.initials, name: c.name, last: c.last, time: c.time, badge: c.badge,
      select: selectConvo(c.id),
      rowStyle: 'display:flex;gap:11px;align-items:center;padding:13px 15px;cursor:pointer;border-left:3px solid ' + (selId === c.id ? '#0B7A4B' : 'transparent') + ';background:' + (selId === c.id ? '#F0F5F1' : 'transparent') + ';',
      avatarStyle: `width:38px;height:38px;flex-shrink:0;border-radius:50%;background:${c.bg};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;`,
      chanDot: c.chan === 'wa' ? '#0B7A4B' : '#2F6BEC',
      badgeStyle: mBadge(c.bk),
    }));
    const takenOverActive = !!state.takenOverActive;

    return {
      inAppShell, sideNav,
      monitorList, selConvo: selId, takenOverActive, notTakenOver: !takenOverActive, toggleTakeover, sendMsg: fl('Message sent to the prospect'),
      ...analyticsVals(),
      ...builderVals(),
      ...onboardVals(),
      ...agentsVals(),
      ...billingVals(),
      ...settingsVals(),
      goAgents: go('agents'), isAgents: s === 'agents', signInToAgents,
      isBilling: s === 'billing', isSettings: s === 'settings',
      openSettings, goBillingBack: go('agents'),
      ...responsiveVals(),
      isMobile: !!state.isMobile,
      notIsMobile: !state.isMobile,
      mainContentStyle: state.isMobile
        ? 'flex: 1; min-width: 0; background: #F5F2EB; padding: 20px 16px 88px;'
        : 'flex: 1; min-width: 0; background: #F5F2EB; padding: 30px 38px 48px;',
      profileMenuOpen: !!state.profileMenuOpen,
      toggleProfileMenu, goProfileFromMenu, goSettingsFromMenu, signOutFromMenu,
      goSignup: go('signup'), goOnboarding: go('onboarding'), goBuilder: go('builder'), goDashboard: go('dashboard'), goLanding: go('landing'),
      goMonitor: go('monitor'), goEntry: go('entry'), goDemo: go('mobilechat'), startOnboarding, goAgentsEmpty,
      goSignin: go('signin'), goForgotPw: go('forgotpw'),
      requestReset, backToSignin,
      isSignin: s === 'signin', isForgotPw: s === 'forgotpw',
      pwSent: !!state.pwSent, notPwSent: !state.pwSent,
      flashMsg: state.flashMsg || '',
      saveLabel: fl('Entry point label saved'),
      copyLink: fl('Link copied to clipboard'),
      copySnippet: fl('Embed snippet copied'),
      dlPng: fl('QR code downloaded · PNG'),
      dlSvg: fl('QR code downloaded · SVG'),
      addCal: fl('Saturday 10 AM added to your calendar'),
      exportCsv: fl('Export started — your CSV is downloading'),
      resumeAgent: fl('Agent resumed — conversations restarting'),
      upgradePlan: fl('Opening billing…'),
      contactSales: fl('Thanks — our team will reach out within one business day.'),
      resetBuilder,
      ...pricingVals(),
      isDashboard: s === 'dashboard',
      isMonitor: s === 'monitor',
      isBriefing: s === 'briefing',
      isEntry: s === 'entry',
      isAnalytics: s === 'analytics',
      isLanding: s === 'landing',
      isSignup: s === 'signup',
      isOnboarding: s === 'onboarding',
      isBuilder: s === 'builder',
      isMobileChat: s === 'mobilechat',
      isMobileBrief: s === 'mobilebrief',
      isStates: s === 'states',
      convos, sources, funnel,
    };
  }

  return { state, setState, go, ...renderVals() };
}
