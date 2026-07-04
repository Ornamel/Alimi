export interface Conversation {
  id: string;
  initials: string;
  name: string;
  channel: 'WhatsApp' | 'Email';
  badge: string;
  tone: 'hot' | 'flag' | 'qualify';
  last: string;
  source: string;
  time: string;
  avatarBg: string;
  action: 'briefing' | 'monitor';
  actionLabel: string;
}

export const CONVERSATIONS: Conversation[] = [
  {
    id: 'chioma',
    initials: 'CO',
    name: 'Chioma Okafor',
    channel: 'WhatsApp',
    badge: 'Hot — ready to close',
    tone: 'hot',
    last: 'Saturday 10am works perfectly. My email is chioma.o@…',
    source: 'YouTube · Lekki Tour',
    time: '2m ago',
    avatarBg: '#0b7a4b',
    action: 'briefing',
    actionLabel: 'View briefing →',
  },
  {
    id: 'david',
    initials: 'DA',
    name: 'David Adeyemi',
    channel: 'WhatsApp',
    badge: 'Needs your attention',
    tone: 'flag',
    last: 'Do you offer a 24-month payment plan on the penthouse?',
    source: 'QR · Site Banner',
    time: '6m ago',
    avatarBg: '#e07b2e',
    action: 'monitor',
    actionLabel: 'Take over',
  },
  {
    id: 'fatima',
    initials: 'FN',
    name: 'Fatima Nwosu',
    channel: 'Email',
    badge: 'Qualify — gathering information',
    tone: 'qualify',
    last: 'Re: Ikoyi 3-bed — could you send the floor plan PDF?',
    source: 'Website widget',
    time: '11m ago',
    avatarBg: '#2f6bec',
    action: 'monitor',
    actionLabel: 'Open',
  },
  {
    id: 'kwame',
    initials: 'KB',
    name: 'Kwame Boateng',
    channel: 'WhatsApp',
    badge: 'Hot — ready to close',
    tone: 'hot',
    last: 'Great, I can transfer the deposit today. Send details.',
    source: 'YouTube · Accra',
    time: '18m ago',
    avatarBg: '#0b7a4b',
    action: 'briefing',
    actionLabel: 'View briefing →',
  },
];

export const SOURCES = [
  { label: 'YouTube links', count: '18', percent: 88, color: '#0b7a4b' },
  { label: 'Website widget', count: '11', percent: 54, color: '#16c47f' },
  { label: 'QR codes', count: '8', percent: 39, color: '#e07b2e' },
  { label: 'WhatsApp status', count: '4', percent: 20, color: '#2f6bec' },
];

export const TODAY_FUNNEL = [
  { label: 'Visitors', value: '312', percent: 100 },
  { label: 'Engaged', value: '41', percent: 64 },
  { label: 'Qualified', value: '23', percent: 42 },
  { label: 'Goal hit', value: '9', percent: 24 },
];

export const MONITOR_LIST = [
  { id: 'chioma', initials: 'CO', name: 'Chioma Okafor', channel: 'wa', badge: 'Hot', tone: 'hot', last: 'Saturday 10am works perfectly.', time: '2m', bg: '#0b7a4b' },
  { id: 'david', initials: 'DA', name: 'David Adeyemi', channel: 'wa', badge: 'Flagged', tone: 'flag', last: 'Do you offer a 24-month plan?', time: '6m', bg: '#e07b2e' },
  { id: 'fatima', initials: 'FN', name: 'Fatima Nwosu', channel: 'email', badge: 'Qualify', tone: 'qualify', last: 'Could you send the floor plan?', time: '11m', bg: '#2f6bec' },
  { id: 'kwame', initials: 'KB', name: 'Kwame Boateng', channel: 'wa', badge: 'Hot', tone: 'hot', last: 'I can transfer the deposit today.', time: '18m', bg: '#0b7a4b' },
] as const;

export const ANALYTICS_DAYS = ['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'];
const WA_VOLUME = [22, 28, 19, 14, 31, 38, 42, 35, 40, 26, 20, 44, 48, 41];
const EMAIL_VOLUME = [8, 10, 6, 5, 12, 14, 11, 9, 13, 7, 6, 15, 16, 13];
const MAX_VOLUME = 66;

export const ANALYTICS_VOLUME = ANALYTICS_DAYS.map((day, i) => {
  const total = WA_VOLUME[i] + EMAIL_VOLUME[i];
  const heightPercent = Math.round((total / MAX_VOLUME) * 100);
  const waShare = Math.round((WA_VOLUME[i] / total) * 100);
  return { day, heightPercent, waShare, emailShare: 100 - waShare };
});

export const BIG_FUNNEL = [
  { label: 'Visitors', pct: '2,140', percent: 100, color: '#0c1712' },
  { label: 'Engaged', pct: '486 · 23%', percent: 70, color: '#0b7a4b' },
  { label: 'Qualified', pct: '117 · 24%', percent: 48, color: '#16c47f' },
  { label: 'Goal hit', pct: '58 · 50%', percent: 30, color: '#5dbf8e' },
  { label: 'Closed', pct: '31 · 53%', percent: 18, color: '#e07b2e' },
];

export const AGENT_PERFORMANCE = [
  { initials: 'LH', name: 'Lekki Homes Closer', rate: '34%', percent: 34, color: '#0b7a4b' },
  { initials: 'IK', name: 'Ikoyi Rentals Bot', rate: '28%', percent: 28, color: '#2f6bec' },
  { initials: 'VI', name: 'VI Land Sales', rate: '19%', percent: 19, color: '#e07b2e' },
];

export const CONVERTING_SOURCES = [
  { label: 'YouTube links', vol: 214, conv: '31%', color: '#0b7a4b' },
  { label: 'Website widget', vol: 138, conv: '22%', color: '#16c47f' },
  { label: 'QR codes', vol: 84, conv: '18%', color: '#e07b2e' },
  { label: 'WhatsApp status', vol: 50, conv: '14%', color: '#2f6bec' },
];

export const VERTICALS = [
  { id: 'realestate', emoji: '🏠', title: 'Real estate & property', sub: 'Book viewings, qualify buyers', iconBg: '#e7f3ec' },
  { id: 'creator', emoji: '🎥', title: 'Creator economy & courses', sub: 'Convert followers to enrollments', iconBg: '#fbead8' },
  { id: 'sme', emoji: '🛍️', title: 'Small business & services', sub: 'Answer, quote, and book jobs', iconBg: '#e9effc' },
  { id: 'agency', emoji: '🏢', title: 'Agency & multi-client', sub: 'Deploy agents for every client', iconBg: '#f0ece1' },
];
