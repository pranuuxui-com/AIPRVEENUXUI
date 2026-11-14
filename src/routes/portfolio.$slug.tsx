import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Share2 } from "lucide-react";

import { caseStudies } from "@/data/portfolio";
import { shareLink } from "@/lib/share";
import { CaseCover } from "./portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Praveen UX × AI` : "Case study unavailable";
    const desc = loaderData?.tagline ?? "This case study could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="dark grid min-h-svh place-items-center bg-background p-6 text-foreground">
      <div className="text-center"><p>Case study not found.</p><Link to="/portfolio" className="mt-4 inline-block underline">Back to portfolio</Link></div>
    </main>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const c = Route.useLoaderData();
  return (
    <main className="dark min-h-svh bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-5 py-8 sm:py-14">
        <header className="flex items-center justify-between">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All work</Link>
          <button type="button" aria-label="Share case study" onClick={() => shareLink(window.location.href, c.title)} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"><Share2 className="size-4" /></button>
        </header>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-splash-cyan">{c.role} · {c.year}</p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">{c.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{c.tagline}</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border"><CaseCover hue={c.hue} title={c.title} /></div>
        <dl className="mt-8 grid grid-cols-3 gap-3">
          {c.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-border bg-card p-3 sm:p-4">
              <dt className="text-xs text-muted-foreground">{m.label}</dt>
              <dd className="mt-1 text-xl font-semibold sm:text-2xl">{m.value}</dd>
            </div>
          ))}
        </dl>
        <section className="mt-10"><h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">The problem</h2><p className="mt-3 leading-relaxed">{c.problem}</p></section>
        <section className="mt-8"><h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Approach</h2>
          <ol className="mt-3 space-y-3">{c.approach.map((a, i) => <li key={a} className="flex gap-3"><span className="font-display text-splash-cyan">{String(i + 1).padStart(2, "0")}</span><span>{a}</span></li>)}</ol>
        </section>
        <section className="mt-8"><h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Outcome</h2><p className="mt-3 leading-relaxed">{c.outcome}</p></section>
        <div className="mt-8 flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">{t}</span>)}</div>
      </article>
    </main>
  );
}
