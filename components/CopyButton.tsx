"use client";

import { useState } from "react";
import { Copy, Check, X } from "lucide-react";

export function CopyButton({ code }: { code: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      // Clipboard API may fail in insecure contexts or when permission is denied
      setState("failed");
      setTimeout(() => setState("idle"), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
      aria-label={
        state === "copied"
          ? "Copied"
          : state === "failed"
            ? "Copy failed"
            : "Copy code to clipboard"
      }
    >
      {state === "copied" ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : state === "failed" ? (
        <>
          <X className="h-4 w-4 text-red-500" />
          Failed
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy
        </>
      )}
    </button>
  );
}
