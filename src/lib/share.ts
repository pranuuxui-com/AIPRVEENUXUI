import { toast } from "sonner";

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const t = document.createElement("textarea");
    t.value = text;
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.append(t);
    t.select();
    const ok = document.execCommand("copy");
    t.remove();
    return ok;
  }
}

export async function shareLink(url: string, title: string) {
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title, url });
      return;
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
    }
  }
  if (await copyText(url)) toast.success("Link copied to clipboard");
  else toast.error("Couldn't copy the link");
}
