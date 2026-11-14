import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  interests: z.string().trim().min(2).max(400),
  role: z.string().trim().max(80).optional(),
});

export const generatePersonalPrompt = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    const { generateResponse, GatewayError } = await import("@lovable.dev/ai-gateway");
    try {
      const res = await generateResponse({
        model: "openai/gpt-6.1-terra",
        instructions:
          "You write one personalized creative AI prompt for a visitor of Praveen's UX x AI portfolio. Start with 'PRAVEEN UX X AI —'. Blend UX design thinking with AI. 60-110 words, plain text, no markdown, no preamble.",
        input: `Visitor role: ${data.role || "curious visitor"}\nInterests: ${data.interests}`,
      });
      const text = extractText(res).trim();
      if (!text) return { prompt: null, error: "The AI returned an empty answer. Please try again." };
      return { prompt: text, error: null };
    } catch (err) {
      console.error("generatePersonalPrompt failed", err);
      if (err instanceof GatewayError && err.httpStatus === 429)
        return { prompt: null, error: "Lots of requests right now — please wait a moment and try again." };
      if (err instanceof GatewayError && err.httpStatus === 402)
        return { prompt: null, error: "AI credits are used up for now." };
      return { prompt: null, error: "Couldn't create your prompt right now. Please try again." };
    }
  });

function extractText(res: unknown): string {
  const r = res as { output_text?: string; output?: Array<{ content?: Array<{ type?: string; text?: string }> }> };
  if (typeof r.output_text === "string") return r.output_text;
  return (r.output ?? [])
    .flatMap((o) => o.content ?? [])
    .filter((c) => c.type === "output_text" && typeof c.text === "string")
    .map((c) => c.text)
    .join("");
}
