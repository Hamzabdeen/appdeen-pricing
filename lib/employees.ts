/**
 * ─────────────────────────────────────────────────────────────
 *  APPDEEN AI — MOCK AI EMPLOYEES
 * ─────────────────────────────────────────────────────────────
 *  Replace this with real data / an API later. Every field that
 *  appears on the marketplace and profile pages lives here.
 * ─────────────────────────────────────────────────────────────
 */

export type EmployeeStatus = "Ready to Hire" | "Popular" | "New" | "Beta";

export type Skill = { icon: string; title: string; desc: string };
export type WorkflowStep = { icon: string; title: string; desc: string };

export type Employee = {
  slug: string;
  name: string;
  role: string;
  category: string;
  accent: string;
  status: EmployeeStatus;
  tagline: string;
  shortDescription: string;
  // details
  department: string;
  bestFor: string;
  setupTime: string;
  languages: string[];
  availability: string;
  estHours: string;
  tools: string[];
  accessPriceLabel: string;
  // rich content
  skills: Skill[];
  workflow: WorkflowStep[];
  usageExample: string;
  usageBullets: string[];
  // marketplace meta
  rating: number;
  hires: string;
  featured?: boolean;
};

export const EMPLOYEES: Employee[] = [
  {
    slug: "sarah",
    name: "Sarah",
    role: "AI Sales Employee",
    category: "Sales",
    accent: "#5C48F6",
    status: "Ready to Hire",
    tagline: "Your always-on sales development rep",
    shortDescription:
      "Sarah helps your business find leads, qualify prospects, write follow-ups, and organize sales opportunities.",
    department: "Sales & Revenue",
    bestFor: "Founders and sales teams who need consistent pipeline",
    setupTime: "≈ 5 minutes",
    languages: ["English", "Arabic", "French", "Spanish"],
    availability: "24/7",
    estHours: "Light — most tasks take a few minutes of work time",
    tools: ["CRM", "Email", "Calendar", "LinkedIn", "Spreadsheets", "Web research"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "target", title: "Lead generation", desc: "Finds and builds targeted lists of potential customers." },
      { icon: "refresh", title: "CRM updates", desc: "Keeps records clean, current, and organized automatically." },
      { icon: "mail", title: "Follow-up emails", desc: "Writes personalized, on-brand outreach and follow-ups." },
      { icon: "doc", title: "Sales scripts", desc: "Drafts call scripts and talk tracks tuned to each prospect." },
      { icon: "clock", title: "Meeting summaries", desc: "Turns calls and notes into clear next-step summaries." },
      { icon: "search", title: "Prospect research", desc: "Researches companies and people before you reach out." },
    ],
    workflow: [
      { icon: "send", title: "Receives task", desc: "You assign a goal — like ‘find 50 leads in Jordan’." },
      { icon: "search", title: "Searches & uses knowledge", desc: "Pulls from company knowledge and researches the web." },
      { icon: "doc", title: "Produces the work", desc: "Builds the list, writes the messages, drafts the plan." },
      { icon: "chart", title: "Reports back", desc: "Delivers a clear summary of what was done and why." },
      { icon: "refresh", title: "Updates systems", desc: "Syncs results to your CRM and tools, if connected." },
    ],
    usageExample:
      "Ask Sarah to find 50 potential leads in Jordan, write personalized outreach messages, and organize them in your CRM.",
    usageBullets: [
      "Builds a targeted list of 50 qualified leads",
      "Writes a personalized first message for each one",
      "Organizes everything neatly inside your CRM",
    ],
    rating: 4.9,
    hires: "2,400+",
    featured: true,
  },
  {
    slug: "omar",
    name: "Omar",
    role: "AI Customer Support Employee",
    category: "Support",
    accent: "#0EA5A5",
    status: "Popular",
    tagline: "Fast, friendly support that never sleeps",
    shortDescription:
      "Omar answers customer questions, resolves tickets, and keeps your support inbox calm — day and night.",
    department: "Customer Experience",
    bestFor: "Teams drowning in repetitive support tickets",
    setupTime: "≈ 8 minutes",
    languages: ["English", "Arabic", "German", "Spanish"],
    availability: "24/7",
    estHours: "Light — replies are quick, hours add up only at high volume",
    tools: ["Helpdesk", "Email", "Chat", "Knowledge base", "CRM"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "mail", title: "Ticket replies", desc: "Answers customer questions accurately and on-brand." },
      { icon: "search", title: "Knowledge lookup", desc: "Finds the right answer from your help docs instantly." },
      { icon: "refresh", title: "Ticket triage", desc: "Tags, sorts, and routes tickets to the right place." },
      { icon: "doc", title: "Macros & templates", desc: "Drafts reusable replies for common questions." },
      { icon: "chart", title: "Escalation notes", desc: "Summarizes tricky cases before handing them to a human." },
      { icon: "clock", title: "Follow-ups", desc: "Checks back with customers so nothing slips." },
    ],
    workflow: [
      { icon: "send", title: "Receives a ticket", desc: "A new question lands in your support inbox." },
      { icon: "search", title: "Searches knowledge", desc: "Looks up the correct answer from your docs." },
      { icon: "mail", title: "Writes the reply", desc: "Responds clearly, warmly, and in your voice." },
      { icon: "chart", title: "Reports back", desc: "Flags anything that needs a human touch." },
      { icon: "refresh", title: "Updates the ticket", desc: "Tags and closes it in your helpdesk." },
    ],
    usageExample:
      "Ask Omar to clear the overnight support queue, answer common questions, and flag anything that needs your team’s attention.",
    usageBullets: [
      "Clears repetitive tickets before your team logs on",
      "Answers using your real help docs — no guessing",
      "Escalates the few cases that truly need a human",
    ],
    rating: 4.8,
    hires: "1,900+",
    featured: true,
  },
  {
    slug: "layla",
    name: "Layla",
    role: "AI Marketing Employee",
    category: "Marketing",
    accent: "#E4478D",
    status: "Ready to Hire",
    tagline: "A content engine that stays on brand",
    shortDescription:
      "Layla plans content, writes posts, drafts campaigns, and keeps your marketing calendar moving.",
    department: "Marketing & Growth",
    bestFor: "Lean teams that need a steady flow of content",
    setupTime: "≈ 7 minutes",
    languages: ["English", "Arabic", "French"],
    availability: "24/7",
    estHours: "Moderate — long-form content uses more work time",
    tools: ["Social", "Blog / CMS", "Email", "Design briefs", "Analytics"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "doc", title: "Content writing", desc: "Blogs, posts, and captions written in your brand voice." },
      { icon: "target", title: "Campaign planning", desc: "Maps out multi-channel campaigns end to end." },
      { icon: "refresh", title: "Content calendar", desc: "Keeps a consistent posting schedule organized." },
      { icon: "mail", title: "Email newsletters", desc: "Drafts newsletters that people actually open." },
      { icon: "search", title: "Topic research", desc: "Finds trends and angles worth writing about." },
      { icon: "chart", title: "Performance recaps", desc: "Summarizes what worked and what to try next." },
    ],
    workflow: [
      { icon: "send", title: "Receives a brief", desc: "You share a goal, product, or campaign idea." },
      { icon: "search", title: "Researches angles", desc: "Explores topics, keywords, and your knowledge base." },
      { icon: "doc", title: "Produces content", desc: "Writes posts, emails, and copy ready to publish." },
      { icon: "chart", title: "Reports back", desc: "Shares a calendar and rationale for each piece." },
      { icon: "refresh", title: "Updates the plan", desc: "Schedules to your tools when connected." },
    ],
    usageExample:
      "Ask Layla to plan a two-week product launch: blog posts, social captions, and a launch-day email — all on brand.",
    usageBullets: [
      "Builds a full two-week content calendar",
      "Writes every post and email in your voice",
      "Recaps performance so you know what to double down on",
    ],
    rating: 4.9,
    hires: "1,500+",
  },
  {
    slug: "adam",
    name: "Adam",
    role: "AI HR Employee",
    category: "People / HR",
    accent: "#F09E28",
    status: "New",
    tagline: "People operations, handled with care",
    shortDescription:
      "Adam screens candidates, drafts job posts, answers policy questions, and keeps HR running smoothly.",
    department: "People & Operations",
    bestFor: "Growing teams without a full HR department",
    setupTime: "≈ 6 minutes",
    languages: ["English", "Arabic", "Spanish"],
    availability: "24/7",
    estHours: "Light — most HR tasks are short and frequent",
    tools: ["ATS", "Email", "Docs", "Calendar", "Knowledge base"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "doc", title: "Job descriptions", desc: "Writes clear, inclusive job posts fast." },
      { icon: "search", title: "Candidate screening", desc: "Reviews applications against your criteria." },
      { icon: "mail", title: "Candidate comms", desc: "Sends warm, timely updates to applicants." },
      { icon: "clock", title: "Interview scheduling", desc: "Coordinates times without the back-and-forth." },
      { icon: "target", title: "Onboarding checklists", desc: "Builds first-week plans for new hires." },
      { icon: "refresh", title: "Policy answers", desc: "Answers common HR questions from your handbook." },
    ],
    workflow: [
      { icon: "send", title: "Receives a request", desc: "A hiring need or a policy question comes in." },
      { icon: "search", title: "Checks your handbook", desc: "Uses your policies and criteria as the source." },
      { icon: "doc", title: "Produces the work", desc: "Drafts the post, screen, or onboarding plan." },
      { icon: "chart", title: "Reports back", desc: "Summarizes candidates or answers clearly." },
      { icon: "refresh", title: "Updates systems", desc: "Syncs to your ATS and calendar when connected." },
    ],
    usageExample:
      "Ask Adam to write a job post for a designer, screen the first 40 applicants, and schedule interviews with the top 5.",
    usageBullets: [
      "Writes and posts an inclusive job description",
      "Screens applicants against your must-haves",
      "Books interviews with the strongest candidates",
    ],
    rating: 4.7,
    hires: "820+",
  },
  {
    slug: "william",
    name: "William",
    role: "AI Legal Employee",
    category: "Legal",
    accent: "#3B7DD8",
    status: "Ready to Hire",
    tagline: "A first pass on everyday legal work",
    shortDescription:
      "William reviews contracts, drafts standard agreements, and flags risky clauses before they reach you.",
    department: "Legal & Compliance",
    bestFor: "Teams that need faster first-pass legal review",
    setupTime: "≈ 9 minutes",
    languages: ["English", "Arabic", "French", "German"],
    availability: "24/7",
    estHours: "Moderate — detailed contract review uses more time",
    tools: ["Docs", "Contract templates", "Email", "Knowledge base"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "doc", title: "Contract review", desc: "Reads agreements and highlights key terms." },
      { icon: "target", title: "Risk flagging", desc: "Surfaces clauses worth a closer human look." },
      { icon: "refresh", title: "Standard drafts", desc: "Prepares NDAs and common agreements." },
      { icon: "search", title: "Clause lookup", desc: "Finds and compares terms across documents." },
      { icon: "chart", title: "Plain-language summaries", desc: "Explains contracts in clear language." },
      { icon: "mail", title: "Redline notes", desc: "Suggests edits and comments for your review." },
    ],
    workflow: [
      { icon: "send", title: "Receives a document", desc: "You upload a contract or share a request." },
      { icon: "search", title: "Reviews against playbook", desc: "Checks it against your standards and templates." },
      { icon: "doc", title: "Produces the work", desc: "Drafts, redlines, or summarizes the document." },
      { icon: "chart", title: "Reports back", desc: "Flags risks and explains them in plain terms." },
      { icon: "refresh", title: "Updates the file", desc: "Saves the reviewed version to your docs." },
    ],
    usageExample:
      "Ask William to review a vendor contract, flag any unusual clauses, and summarize the risks in plain English.",
    usageBullets: [
      "Reviews the full agreement in minutes",
      "Flags non-standard or risky clauses",
      "Explains the risks so anyone can understand",
    ],
    rating: 4.8,
    hires: "610+",
  },
  {
    slug: "noor",
    name: "Noor",
    role: "AI Operations Employee",
    category: "Operations",
    accent: "#16A36E",
    status: "Beta",
    tagline: "The glue that keeps work moving",
    shortDescription:
      "Noor organizes projects, chases updates, prepares reports, and keeps your operations tidy.",
    department: "Operations",
    bestFor: "Teams juggling many tools and moving parts",
    setupTime: "≈ 6 minutes",
    languages: ["English", "Arabic"],
    availability: "24/7",
    estHours: "Light — coordination tasks are short and steady",
    tools: ["Project tools", "Spreadsheets", "Email", "Docs", "Calendar"],
    accessPriceLabel: "Price varies by employee",
    skills: [
      { icon: "refresh", title: "Project tracking", desc: "Keeps tasks, owners, and deadlines in order." },
      { icon: "chart", title: "Status reports", desc: "Compiles clean weekly updates automatically." },
      { icon: "mail", title: "Update chasing", desc: "Nudges the right people for what’s missing." },
      { icon: "doc", title: "Process docs", desc: "Turns how-you-work into clear playbooks." },
      { icon: "search", title: "Data cleanup", desc: "Tidies spreadsheets and reconciles records." },
      { icon: "clock", title: "Scheduling", desc: "Coordinates meetings and timelines." },
    ],
    workflow: [
      { icon: "send", title: "Receives a goal", desc: "You share a project or a report to prepare." },
      { icon: "search", title: "Gathers the details", desc: "Collects status from your tools and notes." },
      { icon: "doc", title: "Produces the work", desc: "Builds the report, plan, or clean dataset." },
      { icon: "chart", title: "Reports back", desc: "Delivers a tidy summary you can act on." },
      { icon: "refresh", title: "Updates systems", desc: "Syncs to your project tools when connected." },
    ],
    usageExample:
      "Ask Noor to prepare this week’s project status report, chase the two missing updates, and clean up the tracker.",
    usageBullets: [
      "Compiles a clear weekly status report",
      "Follows up on missing information for you",
      "Keeps your trackers clean and current",
    ],
    rating: 4.7,
    hires: "430+",
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(EMPLOYEES.map((e) => e.category))),
];

export function getEmployee(slug: string): Employee | undefined {
  return EMPLOYEES.find((e) => e.slug === slug);
}

export function getRelated(slug: string, count = 4): Employee[] {
  return EMPLOYEES.filter((e) => e.slug !== slug).slice(0, count);
}
