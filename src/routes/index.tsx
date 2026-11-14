import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check, Copy, Loader2, Pause, Play, Share2, Sparkles, Wand2 } from "lucide-react";

import portraitAsset from "@/assets/praveen-ux-ai-portrait.png.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generatePersonalPrompt } from "@/lib/prompt.functions";
import { copyText, shareLink } from "@/lib/share";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen — UX × AI" },
      { name: "description", content: "Explore the intersection of thoughtful UX and artificial intelligence with Praveen." },
      { property: "og:title", content: "Praveen — UX × AI" },
      { property: "og:description", content: "Explore the intersection of thoughtful UX and artificial intelligence with Praveen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MOTION_KEY = "praveen-reduced-motion";

function Index() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [prompt, setPrompt] = useState("PRAVEEN UX X AI");
  const [copied, setCopied] = useState(false);
  const [interests, setInterests] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);
  const generate = useServerFn(generatePersonalPrompt);

  useEffect(() => {
    const saved = window.localStorage.getItem(MOTION_KEY);
    if (saved !== null) setReduced(saved === "1");
    else setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function toggleMotion() {
    const next = !reduced;
    setReduced(next);
    window.localStorage.setItem(MOTION_KEY, next ? "1" : "0");
  }

  async function personalize() {
    setLoading(true);
    setError(null);
    try {
      const res = await generate({ data: { interests, role } });
      if (res.prompt) {
        setPrompt(res.prompt);
        setCopied(false);
      } else setError(res.error);
    } catch {
      setError("Couldn't create your prompt right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={`splash-screen${reduced ? " reduce-motion" : ""}`}>
      <img className="splash-art" src={portraitAsset.url} alt="Praveen in a luminous neon portrait" />
      <div className="splash-shade" aria-hidden="true" />

      <header className="splash-topline">
        <span className="splash-mark" aria-hidden="true">P.</span>
        <div className="splash-actions">
          <button type="button" className="splash-icon" onClick={toggleMotion} aria-pressed={reduced} aria-label={reduced ? "Turn animations on" : "Reduce motion"}>
            {reduced ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
          <button type="button" className="splash-icon" onClick={() => shareLink(window.location.origin + "/", "Praveen UX × AI")} aria-label="Share this page">
            <Share2 aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="splash-intro" aria-labelledby="splash-title">
        <p className="splash-eyebrow">A little imagination goes a long way</p>
        <h1 id="splash-title">
          PRAVEEN
          <span>UX <i aria-hidden="true">×</i> AI</span>
        </h1>
      </section>

      <div className="splash-bottom">
        <nav className="splash-links" aria-label="Explore">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/workflow">30-phase workflow</Link>
        </nav>
        <Button className="splash-cta" onClick={() => setIsPromptOpen(true)}>
          <Sparkles aria-hidden="true" />
          <span>AI PROMPT</span>
          <span className="splash-cta-divider" aria-hidden="true" />
          <span className="splash-cta-name">PRAVEEN UX X AI</span>
        </Button>
      </div>

      <Dialog open={isPromptOpen} onOpenChange={setIsPromptOpen}>
        <DialogContent className="prompt-dialog">
          <DialogHeader>
            <DialogTitle>Start with a spark.</DialogTitle>
            <DialogDescription>Tell me what you're into and AI will write a prompt just for you.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Input aria-label="Your role" placeholder="Your role (e.g. product designer)" value={role} maxLength={80} onChange={(e) => setRole(e.target.value)} />
            <Input aria-label="Your interests" placeholder="Your interests (e.g. fintech, accessibility, agents)" value={interests} maxLength={400} onChange={(e) => setInterests(e.target.value)} />
            <Button variant="secondary" onClick={personalize} disabled={loading || interests.trim().length < 2}>
              {loading ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Wand2 aria-hidden="true" />}
              {loading ? "Creating…" : "Personalize with AI"}
            </Button>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          </div>
          <Textarea aria-label="AI prompt" className="prompt-input" value={prompt} onChange={(e) => { setPrompt(e.target.value); setCopied(false); }} />
          <Button className="prompt-copy" onClick={async () => setCopied(await copyText(prompt))} disabled={!prompt.trim()}>
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? "Copied" : "Copy prompt"}
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
}
