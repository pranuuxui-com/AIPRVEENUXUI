import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { phases } from "@/data/portfolio";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "30-Phase AI UX Workflow — Praveen UX × AI" },
      { name: "description", content: "Thirty phases from research to optimization, each assigned to an AI agent." },
      { property: "og:title", content: "30-Phase AI UX Workflow — Praveen UX × AI" },
      { property: "og:description", content: "Thirty phases from research to optimization, each assigned to an AI agent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkflowPage,
});

const agents = Array.from(new Set(phases.map((p) => p.agent)));

function WorkflowPage() {
  const [agent, setAgent] = useState<string | null>(null);
  const list = agent ? phases.filter((p) => p.agent === agent) : phases;
  return (
    <main className="dark min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:py-14">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Home</Link>
        <h1 className="mt-8 font-display text-4xl font-bold uppercase leading-none sm:text-6xl">30-phase workflow</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">Every phase of an AI-powered UX project, and the agent that owns it.</p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by agent">
          <FilterChip active={!agent} onClick={() => setAgent(null)}>All</FilterChip>
          {agents.map((a) => <FilterChip key={a} active={agent === a} onClick={() => setAgent(a)}>{a}</FilterChip>)}
        </div>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.n} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="font-display text-2xl font-bold text-splash-cyan">{String(p.n).padStart(2, "0")}</span>
              <div><p className="font-medium">{p.title}</p><p className="text-xs text-muted-foreground">{p.agent}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button type="button" aria-pressed={active} onClick={onClick} className={`rounded-full border px-3 py-1.5 text-xs ${active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{children}</button>;
}
