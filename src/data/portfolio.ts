export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  tags: string[];
  problem: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  hue: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-operating-system",
    title: "AI Operating System for UX/UI Designers",
    tagline: "From designing screens to designing intelligent experiences.",
    role: "AI UX Architect",
    year: "2026",
    tags: ["AI Agents", "Design Systems", "Research"],
    problem: "Traditional design workflows — research, wireframes, screens, prototypes — are slow, manual and depend on one designer's bandwidth.",
    approach: ["Mapped an 'Intelligent Design Brain' linking research, knowledge, memory and reasoning", "Designed an 11-step AI workflow from research to optimization", "Built a model-agnostic stack across LLMs, agents, design and build tools"],
    outcome: "A repeatable operating system where AI agents handle research, personas, architecture and documentation while the designer leads strategy.",
    metrics: [{ label: "Workflow steps", value: "11" }, { label: "Skills mapped", value: "25" }, { label: "Roadmap levels", value: "10" }],
    hue: 210,
  },
  {
    slug: "design-system-tokens",
    title: "Intelligent Design System",
    tagline: "Tokens and components that stay in sync from design to code.",
    role: "Design Systems Lead",
    year: "2025",
    tags: ["Design Tokens", "Components", "Handoff"],
    problem: "Design and code drifted apart, causing inconsistent UI and slow developer handoff.",
    approach: ["Defined semantic color, type and spacing tokens", "Built an accessible component library with variants", "Automated token sync into the codebase"],
    outcome: "One source of truth for every product surface with faster, cleaner handoff.",
    metrics: [{ label: "Components", value: "60+" }, { label: "Handoff time", value: "-50%" }, { label: "A11y", value: "AA" }],
    hue: 315,
  },
  {
    slug: "synthetic-personas",
    title: "AI Persona & Research Engine",
    tagline: "Faster empathy through AI-assisted user research.",
    role: "UX Researcher",
    year: "2025",
    tags: ["UX Research", "Personas", "Journeys"],
    problem: "Research cycles took weeks of interviews, notes and synthesis before design could begin.",
    approach: ["Used AI to cluster interview insights", "Generated draft personas and journeys for team review", "Validated with real users before committing"],
    outcome: "Research synthesis in days instead of weeks, with humans still validating every insight.",
    metrics: [{ label: "Synthesis", value: "3x faster" }, { label: "Personas", value: "6" }, { label: "Journeys", value: "12" }],
    hue: 160,
  },
  {
    slug: "design-to-code-pipeline",
    title: "Design-to-Code Pipeline",
    tagline: "Prototype, code, test and ship in one flow.",
    role: "UX Engineer",
    year: "2024",
    tags: ["Prototyping", "React", "Testing"],
    problem: "Prototypes were thrown away and rebuilt by engineering from scratch.",
    approach: ["Prototyped directly in production components", "Added automated usability and visual checks", "Shipped with analytics to learn continuously"],
    outcome: "Prototypes became the product, shortening the path from idea to release.",
    metrics: [{ label: "Release cycle", value: "-40%" }, { label: "Rework", value: "-60%" }, { label: "Tests", value: "Auto" }],
    hue: 40,
  },
];

export type Phase = { n: number; title: string; agent: string };
const agents = ["Research Agent", "Architecture Agent", "Design System Agent", "UI Agent", "Code Agent", "QA & Launch Agent"];
const titles = [
  "Discovery brief", "Stakeholder goals", "User interviews", "Competitive scan", "Insight synthesis",
  "Personas", "Customer journeys", "Information architecture", "User flows", "Wireframes",
  "Design tokens", "Typography & color", "Component library", "Accessibility rules", "Motion guidelines",
  "UI screens", "Responsive layouts", "Interactive prototype", "Usability testing", "Design iteration",
  "Developer handoff", "Frontend build", "Backend & APIs", "AI features", "Automated testing",
  "Security review", "Deployment", "Analytics", "Learning loop", "Optimization",
];
export const phases: Phase[] = titles.map((title, i) => ({ n: i + 1, title, agent: agents[Math.floor(i / 5)] ?? "AI Agent" }));
