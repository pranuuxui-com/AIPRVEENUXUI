import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Share2 } from "lucide-react";

import { caseStudies } from "@/data/portfolio";
import { shareLink } from "@/lib/share";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Praveen UX × AI" },
      { name: "description", content: "UX/UI and AI case studies by Praveen, AI UX Architect." },
      { property: "og:title", content: "Portfolio — Praveen UX × AI" },
      { property: "og:description", content: "UX/UI and AI case studies by Praveen, AI UX Architect." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioLayout,
});

function PortfolioLayout() {
  const isDetail = useMatches().some((m) => m.routeId === "/portfolio/$slug");
  if (isDetail) return <Outlet />;
  return (
    <main className="dark min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:py-14">
        <header className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Home</Link>
          <button type="button" aria-label="Share portfolio" onClick={() => shareLink(window.location.href, "Praveen's portfolio")} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"><Share2 className="size-4" /></button>
        </header>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-splash-cyan">AI UX Architect</p>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-none sm:text-6xl">Selected work</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">UX is no longer about designing screens. It is about designing intelligent experiences that understand people.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link to="/portfolio/$slug" params={{ slug: c.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1">
                <CaseCover hue={c.hue} title={c.title} />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground"><span>{c.role}</span><span>{c.year}</span></div>
                  <h2 className="mt-2 flex items-start justify-between gap-3 text-lg font-semibold">{c.title}<ArrowUpRight className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground" /></h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{t}</span>)}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export function CaseCover({ hue, title }: { hue: number; title: string }) {
  return (
    <div role="img" aria-label={`${title} cover`} className="case-cover" style={{ "--case-hue": hue } as React.CSSProperties}>
      <div className="case-cover-device"><span /><span /><span /></div>
    </div>
  );
}
