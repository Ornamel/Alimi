# ALIMI

Product Requirements Document

User Flows · UI Copy Library

Version 1.0 · June 2026 · Confidential

> “The AI Closer Your Business Needs.”
> Autonomous AI agents on WhatsApp & Email · The 90/10 Model

## Document Contents

- 1. Product Overview & Goals

- 2. User Personas

- 3. Feature Requirements

- 4. User Flows

- 5. UI Copy Library

- 6. Non-Functional Requirements

- 7. Out of Scope

# 1. Product Overview & Goals

## 1.1 Product Vision

Alimi is an AI-native SaaS platform deploying autonomous agentic AI agents into WhatsApp and Email. Agents hold full context-aware sales conversations 24/7 without continuous human involvement. The 90/10 model: AI handles 90% of the conversation journey; human closers step in only for the final 10%.

## 1.2 Product Goals

- Reduce average lead response time from 14+ minutes industry average to under 60 seconds.

- Qualify inbound leads autonomously and deliver structured Intelligence Briefings to closers.

- Enable businesses to deploy a fully-configured AI agent in under 30 minutes, no code required.

- Support WhatsApp and Email as native first-class conversation channels.

- Inject source-aware context at conversation start — agents know where every lead came from.

- Generate real-time Intelligence Briefings that replace full transcript reading for closers.

## 1.3 Success Metrics

| Metric | Target |
| --- | --- |
| Lead response time (P95) | < 60 seconds |
| Agent setup time | < 30 minutes for first deployment |
| Conversation-to-qualification rate | > 20% of engaged leads |
| Intelligence Briefing usefulness | > 90% closers rate it as useful |
| Monthly active agents per customer (Growth) | > 2 |
| Monthly customer churn | < 3% |

## 1.4 Assumptions & Constraints

- WhatsApp Business API access required; businesses must have or obtain a verified number.

- Email channel uses SMTP/IMAP or OAuth (Gmail, Outlook) for inbox access.

- AI agents use RAG grounded in business-supplied documents only — no hallucinated facts.

- Alimi does not process payments — it routes to human or external payment links.

- All conversations are logged and retrievable for audit and briefing generation.

# 2. User Personas

## Persona 1 — Tunde (Real Estate Developer, Lagos)

| Attribute | Detail |
| --- | --- |
| Role | Property developer / sales director |
| Pain | Leads go cold while team sleeps; agents repeat discovery questions every time |
| Goal | Book viewings autonomously; arrive at site with fully-briefed buyer |
| Channels | WhatsApp (primary), Email (secondary) |
| Tech comfort | Medium — uses WhatsApp Business manually today |
| Success event | Viewing appointment confirmed with deposit intent expressed |

## Persona 2 — Amaka (Course Creator / YouTuber)

| Attribute | Detail |
| --- | --- |
| Role | Online educator, 80K YouTube subscribers |
| Pain | 200+ DMs/week asking the same questions; cannot convert viewers to enrollments |
| Goal | Turn YouTube traffic into course sales without manual DM replies |
| Channels | WhatsApp (engagement), Email (checkout & nurture) |
| Tech comfort | Medium-high — comfortable with digital tools |
| Success event | Course checkout link clicked or payment initiated |

## Persona 3 — Chidi (Agency Owner, multi-city)

| Attribute | Detail |
| --- | --- |
| Role | Digital marketing agency, 3 cities, 15-40 person team |
| Pain | Building custom bots per client is expensive; needs one platform for all |
| Goal | Deploy agents for multiple clients from one dashboard |
| Channels | WhatsApp + Email full dual-channel across all clients |
| Tech comfort | High — developer resources available |
| Success event | Client lead form completed or sales call booked |

# 3. Feature Requirements

## 3.1 Agent Builder

The primary configuration interface. Business owners create and configure AI agents without writing code.

### Functional Requirements

| ID | Requirement |
| --- | --- |
| AB-01 | User can create a named AI agent with a persona description (max 500 characters). |
| AB-02 | User can assign the agent to WhatsApp, Email, or both channels. |
| AB-03 | User can upload knowledge base files: PDF, DOCX, CSV up to 50MB each. |
| AB-04 | User can add URLs as live knowledge sources, re-scraped weekly. |
| AB-05 | User can define a Success Event in plain language (e.g. Book a property viewing). |
| AB-06 | Live preview shows the agent opening message before launch. |
| AB-07 | Agent activatable in a single click after full configuration. |
| AB-08 | User can pause, edit, or archive an agent at any time without data loss. |
| AB-09 | Knowledge base processing: < 5 minutes for files under 20MB. |
| AB-10 | In-app and email notification when knowledge base indexing is complete. |

### Entry Points Generated

- WhatsApp deep-link (wa.me link with pre-fill message and source ID)

- QR code — auto-generated, downloadable PNG and SVG

- Website embed widget — JavaScript snippet under 5KB

- Custom URL with UTM-style source parameters

## 3.2 Source-Aware Context Engine

Reads entry-point metadata on conversation start and injects it into the agent opening context.

| ID | Requirement |
| --- | --- |
| SC-01 | Each entry point carries a unique source ID mapping to a human-readable label. |
| SC-02 | Source label injected into the agent opening message at conversation start. |
| SC-03 | Source data stored per conversation and visible in the conversation monitor. |
| SC-04 | Source attribution included in every Intelligence Briefing. |
| SC-05 | Analytics shows lead volume broken down by source. |
| SC-06 | Source IDs must survive link shorteners and standard URL redirects. |

## 3.3 Agentic Conversation Engine

Core AI layer. Agents reason dynamically and pursue the defined Success Event in every conversation.

| ID | Requirement |
| --- | --- |
| CE-01 | Responses generated dynamically based on conversation history and RAG context — not decision trees. |
| CE-02 | Agent pursues the defined Success Event in every conversation, adapting approach as needed. |
| CE-03 | Agent gracefully handles out-of-scope questions by routing to human. |
| CE-04 | Response latency < 3 seconds for 95% of messages (P95). |
| CE-05 | Multilingual support: English, Pidgin English, and French minimum for v1. |
| CE-06 | Agent must not fabricate pricing or availability not in the knowledge base. |
| CE-07 | Conversation history retained per thread for 90 days. |
| CE-08 | Agent can send WhatsApp-native attachments: PDFs, images, links. |
| CE-09 | Owner can intervene in any live conversation in real time via the monitor. |
| CE-10 | Agent auto-flags conversation for human review when confidence drops below threshold. |

## 3.4 Intelligence Briefing

Generated in real time at the moment a prospect qualifies. Delivered to the human closer instantly — not as an end-of-day digest.

| ID | Requirement |
| --- | --- |
| IB-01 | Briefing triggered when Success Event milestone is reached OR agent flags readiness. |
| IB-02 | Briefing contains: prospect name/number, entry source, channel, summary, key interests, objections raised, and 3 recommended closing actions. |
| IB-03 | Three intent signal scores: Purchase Intent, Budget Alignment, Decision Urgency (0-100%). |
| IB-04 | Briefing accessible via web dashboard, mobile push notification, and email. |
| IB-05 | One-tap actions from briefing: WhatsApp message, add to calendar, view full transcript. |
| IB-06 | Briefing generation completes within 10 seconds of trigger event. |
| IB-07 | Owner can configure briefing recipients: self, team member, or both. |

## 3.5 Owner Dashboard

| ID | Requirement |
| --- | --- |
| DB-01 | Shows: active agents, conversations today, qualified leads, goal completion rate. |
| DB-02 | Live feed of all active conversations, filterable by agent, channel, and status. |
| DB-03 | Needs attention queue for flagged or stalled conversations. |
| DB-04 | Source attribution widget showing lead volume by entry point. |
| DB-05 | One-click Take over visible for each live conversation. |
| DB-06 | Dashboard data refreshes in real time with < 5 second delay. |

## 3.6 Analytics

| ID | Requirement |
| --- | --- |
| AN-01 | Full funnel: Visitors > Engaged > Qualified > Goal hit > Closed. |
| AN-02 | Daily/weekly/monthly conversation volume chart. |
| AN-03 | Agent performance comparison — goal completion rate per agent. |
| AN-04 | Source attribution showing which entry point converts best. |
| AN-05 | Average response time, conversation length, and drop-off point metrics. |
| AN-06 | Data exportable to CSV. |

# 4. User Flows

Three flows documented: business owner onboarding, the full prospect conversation journey, and the human closer handoff.

## Flow A — Business Owner: Onboarding & First Agent Launch

> Trigger: Owner signs up at alimi.ai
> End state: First AI agent is live and accepting conversations
> Primary actor: Business owner (Tunde / Amaka / Chidi)
> Duration target: < 30 minutes

| # | Actor | Action | Output |
| --- | --- | --- | --- |
| A1 | Owner | Visits alimi.ai, clicks Get started free. Enters name, email, business name, and selects vertical. | Account created, welcome email sent |
| A2 | Owner | Completes onboarding quiz: primary channel preference, expected monthly conversation volume, and business language. | Recommended tier displayed, Starter default |
| A3 | Owner | Enters Agent Builder. Names agent and writes persona. Live preview shows how the agent will open conversations. | Agent draft created, preview updates in real time |
| A4 | Owner | Selects channels: WhatsApp and/or Email. For WhatsApp: enters business number. System sends verification code. | Channel verified, WhatsApp connected |
| A5 | Owner | Uploads knowledge base files or pastes URLs. System processes each and shows a green tick when ready. | Knowledge base indexed, Agent marked Expert ready |
| A6 | Owner | Defines a Success Event in plain text. System shows examples based on selected vertical. | Success event saved, agent goal configured |
| A7 | Owner | Views Entry Points panel. Copies WhatsApp deep-link, downloads QR code, or grabs website embed snippet. | Entry points live, ready to share |
| A8 | Owner | Clicks Launch agent. Dashboard shows agent status as Live. | Agent live, first conversation can begin |

**Exceptions**

- Exception A-E1: WhatsApp verification fails — Owner prompted to retry or use alternative number.
- Exception A-E2: File exceeds 50MB — System prompts to split or compress.
- Exception A-E3: URL scraping fails — System flags URL, offers manual text paste fallback.

## Flow B — Prospect: Full WhatsApp Conversation Journey

> Trigger: Prospect taps a WhatsApp deep-link from YouTube description
> End state: Viewing booked (Success Event hit) and Intelligence Briefing delivered
> Primary actor: Prospect | Secondary: Alimi AI agent

| # | Actor | Action | Output |
| --- | --- | --- | --- |
| B1 | Prospect | Taps WhatsApp link in YouTube description. Device opens WhatsApp with pre-filled message. | Source ID captured: YouTube > Lekki Tour |
| B2 | AI Agent | Reads source metadata. Generates context-aware opening referencing the exact content the prospect viewed. | Context injected, reply sent < 3 seconds |
| B3 | Prospect | Asks about price. Agent queries knowledge base and returns accurate pricing with payment plan options. | RAG query executed, no hallucination |
| B4 | Prospect | Asks about visiting. Agent checks success event (booking a viewing) and presents two time slots. | Success event pursuit active |
| B5 | Prospect | Selects Saturday 10am. Agent confirms and captures full name and email for calendar invite. | Booking collected, qualification milestone hit |
| B6 | AI Agent | Detects Success Event milestone. Generates Intelligence Briefing. Pushes to dashboard and sends push notification. | Briefing delivered, owner alerted < 10 seconds |
| B7 | AI Agent | Sends prospect WhatsApp confirmation with viewing details and address. | Confirmation sent, conversation marked Success event hit |

**Exceptions**

- Exception B-E1: Question outside knowledge base — Agent flags for human review and sets expectation.
- Exception B-E2: Prospect goes quiet 24h — One gentle follow-up. After 48h, conversation moves to Dormant.
- Exception B-E3: Prospect requests human — Owner notified immediately, expectation set for callback.

## Flow C — Business Owner: Human Closer Handoff

> Trigger: Intelligence Briefing push notification received
> End state: Owner has contacted prospect and progressed toward close
> Primary actor: Owner / closer

| # | Actor | Action | Output |
| --- | --- | --- | --- |
| C1 | Owner | Receives push: Prospect is ready to close — viewing booked. Tap to view briefing. | Notification < 10 seconds from trigger |
| C2 | Owner | Opens Intelligence Briefing. Reviews source, summary, intent scores, and 3 recommended closing actions. | Full briefing visible, no transcript reading needed |
| C3 | Owner | Taps Message prospect — WhatsApp opens with a personalised intro drafted by Alimi. | Personal message ready, one tap to send |
| C4 | Owner | Optionally taps Add to calendar — invite created with prospect details and location. | Calendar event created |
| C5 | Owner | After viewing, returns to dashboard and marks lead as Closed, Nurture, or Lost. | Lead status updated, analytics refreshed |

# 5. UI Copy Library

Tone: direct, warm, outcome-focused. Confident without being corporate. Conversational without being casual. Lead with the action or benefit. Avoid jargon.

## 5.1 Sign-Up & Landing

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Sign-up | Page headline | Your AI closer starts here. | Primary H1 |
| Sign-up | Sub-headline | Set up your Alimi agent in under 30 minutes — no code, no tech team. | Below H1 |
| Sign-up | Primary CTA | Get started free | Button |
| Sign-up | Social proof | Trusted by 200+ businesses across Lagos, Accra, and Nairobi. | Below CTA |
| Sign-up | Email field | Your business email | Input placeholder |
| Sign-up | Name field | Your full name | Input placeholder |
| Sign-up | Submit button | Create my account → | Submit |
| Sign-up | Legal line | By continuing you agree to our Terms and Privacy Policy. No credit card required. | Below submit |

## 5.2 Onboarding

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Onboarding | Welcome headline | Let's build your first AI agent. | Step 1 H1 |
| Onboarding | Welcome sub | You are 5 steps away from your first autonomous conversation. | Sub |
| Onboarding | Vertical: Real estate | Real estate & property | Option label |
| Onboarding | Vertical: Creator | Creator economy & courses | Option label |
| Onboarding | Vertical: SME | Small business & services | Option label |
| Onboarding | Vertical: Agency | Agency & multi-client | Option label |
| Onboarding | Progress indicator | Step {N} of 5 | Progress |
| Onboarding | Continue button | Continue → | Nav button |

## 5.3 Agent Builder

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Agent Builder | Page headline | Build your AI agent | H1 |
| Agent Builder | Sub-headline | Your agent handles conversations 24/7. You stay in control. | Sub |
| Agent Builder | Step 1: name label | Give your agent a name | Step header |
| Agent Builder | Step 1: helper | This is internal — your customers will not see it. | Helper |
| Agent Builder | Channel: WhatsApp | WhatsApp — 2.7B+ users. Your customers are already here. | Card |
| Agent Builder | Channel: Email | Email — professional reach for B2B and follow-up sequences. | Card |
| Agent Builder | Persona label | Set your agent's personality (optional) | Step header |
| Agent Builder | Persona placeholder | e.g. Warm and professional. Always accurate on pricing. Never pushy. | Textarea |
| Agent Builder | KB label | What does your agent need to know? | Step header |
| Agent Builder | KB helper | Upload your catalogues, pricing docs, or FAQs. Your agent learns from them instantly. | Helper |
| Agent Builder | Upload button | Add files or paste a URL | Button |
| Agent Builder | Processing state | Reading your documents — this takes about 2 minutes. | Status |
| Agent Builder | KB ready | Your agent is now an expert on this. | Success state |
| Agent Builder | Success event label | What counts as a win? | Step header |
| Agent Builder | Success event helper | Define the outcome your agent is working toward. The more specific, the better. | Helper |
| Agent Builder | SE placeholder | e.g. Prospect books a property viewing with deposit intent confirmed. | Textarea |
| Agent Builder | Preview label | Live preview | Panel header |
| Agent Builder | Preview note | This is how your agent will open every conversation. | Below preview |
| Agent Builder | Launch button | Launch agent | Final CTA |
| Agent Builder | Launch toast | Your agent is live. Conversations start the moment someone taps your link. | Toast |

## 5.4 Owner Dashboard

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Dashboard | Welcome (morning) | Good morning, {Name} — {N} new leads overnight. | H1 |
| Dashboard | Welcome (afternoon) | Good afternoon, {Name} — {N} conversations active right now. | H1 |
| Dashboard | Welcome (evening) | Good evening, {Name} — your agents worked hard today. | H1 |
| Dashboard | Empty state | Your agent is live and listening. Share your link to get the first conversation started. | No data |
| Dashboard | Stat: response time | Avg. response time | Metric label |
| Dashboard | Stat: benchmark | Industry average: 14 minutes | Context |
| Dashboard | Stat: qualified | Qualified leads | Metric label |
| Dashboard | Stat: goal rate | Goal completion rate | Metric label |
| Dashboard | Attention queue | {N} need your attention | Badge |
| Dashboard | Source widget | Where your leads are coming from today | Widget title |
| Dashboard | Take over | Take over | Inline button |
| Dashboard | View briefing | View briefing → | Inline button |
| Dashboard | New agent | + New agent | Top nav button |

## 5.5 Conversation Monitor

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Monitor | Page headline | Conversations | H1 |
| Monitor | AI status | AI is handling this conversation | Status |
| Monitor | Flagged badge | Needs your attention | Badge |
| Monitor | Success badge | Success event hit | Milestone badge |
| Monitor | Dormant badge | Prospect went quiet | Status badge |
| Monitor | Intervention bar | Type to intervene — your message goes directly to the prospect. | Override input |
| Monitor | Context pill | Arrived via: {source label} | Source indicator |
| Monitor | Hot badge | Hot — ready to close | Temperature badge |
| Monitor | Qualify badge | Qualify — gathering information | Stage badge |

## 5.6 Intelligence Briefing

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Briefing | Page headline | Intelligence Briefing | H1 |
| Briefing | Status line | Qualified lead · Ready for you · {time} | Sub |
| Briefing | Hot badge | Hot lead | Badge |
| Briefing | Section: summary | What you need to know | Section H2 |
| Briefing | Section: signals | Intent signals | Section H2 |
| Briefing | Signal: purchase | Purchase intent | Signal label |
| Briefing | Signal: budget | Budget alignment | Signal label |
| Briefing | Signal: urgency | Decision urgency | Signal label |
| Briefing | Section: actions | Your next three moves | Section H2 |
| Briefing | Primary CTA | Message {Name} now | Button |
| Briefing | Secondary CTA | Add to calendar | Button |
| Briefing | Tertiary CTA | View full conversation | Link |
| Briefing | Push notification | Alimi: {Name} is ready to close — {success event}. Tap to view briefing. | Push copy |
| Briefing | Email subject | Alimi: {Name} is ready for you — {agent name} | Email subject |

## 5.7 Entry Points & Sharing

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Entry Points | Page title | Share your agent | H1 |
| Entry Points | WA link helper | Anyone who taps this goes straight into a conversation with your agent. | Helper |
| Entry Points | QR helper | Print it, post it, project it — works anywhere. | Helper |
| Entry Points | Copy link | Copy link | Button |
| Entry Points | Download QR | Download QR code | Button |
| Entry Points | Widget helper | Paste one line of code. Your agent appears as a chat bubble on your site. | Helper |
| Entry Points | Source label field | Label this entry point | Input label |
| Entry Points | Source placeholder | e.g. YouTube — Lekki Penthouse Tour | Input placeholder |

## 5.8 Empty States & Errors

| Screen | Element | Copy | Usage note |
| --- | --- | --- | --- |
| Empty states | No agents | You have not built an agent yet. Your first one takes under 30 minutes. | Empty |
| Empty states | No conversations | No conversations yet. Share your link to get started. | Empty |
| Empty states | No briefings | No briefings yet — once your agent qualifies a lead, it appears here instantly. | Empty |
| Empty states | No analytics | Your analytics will populate once conversations start flowing. | Empty |
| Errors | KB processing failed | We could not read that file. Try a PDF or paste the content directly as text. | Error |
| Errors | WA connection failed | Could not connect to WhatsApp. Check your number and try again. | Error |
| Errors | Timeout | That took longer than expected. Refresh — your data will be here. | Timeout |
| Errors | Agent paused | Your agent is paused. Tap Resume — conversations restart automatically. | State |
| Errors | Limit reached | You have used your conversation allowance for this month. Upgrade or add credits. | Limit |

# 6. Non-Functional Requirements

## 6.1 Performance

- AI response latency: < 3 seconds P95 for WhatsApp and Email responses.

- Dashboard data freshness: < 5 seconds real-time update delay.

- Intelligence Briefing generation: < 10 seconds from trigger event.

- Knowledge base indexing: < 5 minutes for files under 20MB.

## 6.2 Reliability

- Platform uptime SLA: 99.5% monthly (Starter/Growth), 99.9% (Enterprise).

- WhatsApp API failover: message queue retained up to 24 hours during outage.

- No conversation data lost during planned maintenance windows.

## 6.3 Security & Privacy

- All data encrypted in transit (TLS 1.3) and at rest (AES-256).

- WhatsApp Business API compliance — no message storage outside Meta policy.

- GDPR-ready: prospect data deletion on request within 30 days.

- Role-based access: Admin, Agent Manager, Closer (read-only briefings).

- SOC 2 Type II target: Year 2 roadmap.

## 6.4 Scalability

- Architecture supports 10,000+ concurrent conversations per tenant cluster.

- Knowledge base: 100 documents / 500MB per agent (Growth tier).

- Horizontal scaling for AI inference layer via containerized deployment.

# 7. Out of Scope — Version 1.0

The following capabilities are explicitly excluded from v1.0 and noted for future roadmap consideration.

| Feature | Rationale | Roadmap |
| --- | --- | --- |
| Payment processing / transaction completion | Regulatory complexity; Alimi routes to external payment links | v1.3 |
| Voice / phone channel | Separate infrastructure stack; text-native channels first | v2.0 |
| Native CRM integrations (Salesforce, HubSpot) | Enterprise need; API available for custom builds in v1 | v1.5 |
| White-label / multi-tenant branding | Agency use case requiring UI theme engine | v1.4 |
| Instagram DM channel | Meta API access restrictions; evaluate post-launch | v1.3 |
| Multi-agent conversation handoff | Complexity; single-agent-per-conversation for v1 | v2.0 |
| AI-generated social content | Outside scope of closing-focused product | TBD |

Document maintained by: Alimi Product Team

Last updated: June 2026 · Version 1.0 · Confidential

Questions: product@alimi.ai
