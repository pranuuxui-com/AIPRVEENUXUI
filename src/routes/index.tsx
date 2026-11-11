import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Sparkles } from "lucide-react";

import portraitAsset from "@/assets/praveen-ux-ai-portrait.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen — UX × AI" },
      {
        name: "description",
        content: "Explore the intersection of thoughtful UX and artificial intelligence with Praveen.",
      },
      { property: "og:title", content: "Praveen — UX × AI" },
      {
        property: "og:description",
        content: "Explore the intersection of thoughtful UX and artificial intelligence with Praveen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [prompt, setPrompt] = useState("PRAVEEN UX X AI");
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
    } catch {
      const copyTarget = document.createElement("textarea");
      copyTarget.value = prompt;
      copyTarget.setAttribute("readonly", "");
      copyTarget.style.position = "fixed";
      copyTarget.style.opacity = "0";
      document.body.append(copyTarget);
      copyTarget.select();
      const didCopy = document.execCommand("copy");
      copyTarget.remove();
      setCopied(didCopy);
    }
  }

  return (
    <main className="splash-screen">
      <img className="splash-art" src={portraitAsset.url} alt="Praveen in a luminous neon portrait" />
      <div className="splash-shade" aria-hidden="true" />

      <header className="splash-topline">
        <span className="splash-mark" aria-hidden="true">P.</span>
        <span className="splash-coordinate">DESIGN / INTELLIGENCE</span>
      </header>

      <section className="splash-intro" aria-labelledby="splash-title">
        <p className="splash-eyebrow">A little imagination goes a long way</p>
        <h1 id="splash-title">
          PRAVEEN
          <span>UX <i aria-hidden="true">×</i> AI</span>
        </h1>
      </section>

      <div className="splash-bottom">
        <p className="splash-note">Curiosity, made tangible.</p>
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
            <DialogDescription>
              Shape a prompt around the ideas of UX and AI.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            aria-label="AI prompt"
            className="prompt-input"
            value={prompt}
            onChange={(event) => {
              setPrompt(event.target.value);
              setCopied(false);
            }}
          />
          <Button className="prompt-copy" onClick={copyPrompt} disabled={!prompt.trim()}>
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? "Copied" : "Copy prompt"}
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
}