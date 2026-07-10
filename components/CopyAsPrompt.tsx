"use client";

import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

interface CopyAsPromptProps {
  code: string;
  description: string;
  language: string;
}

export function CopyAsPrompt({ code, description, language }: CopyAsPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const prompt = `Use this pattern in my code:\n\n${code}\n\nFollow these conventions: ${description}\n\nLanguage: ${language}`;

    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may fail in insecure contexts or when permission is denied
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
      aria-label={copied ? "Copied as prompt" : "Copy as AI prompt"}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Sparkles className="h-4 w-4" />
          Copy as Prompt
        </>
      )}
    </button>
  );
}
