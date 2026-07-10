"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const sampleCode = `export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`;

export function LivePreviewSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            See What You Get
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Every snippet comes with syntax-highlighted code, usage context, and
            one-click copy. Here is a preview of what is inside.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mx-auto mt-12 max-w-3xl">
            {/* Snippet card */}
            <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              {/* Card header */}
              <header className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    useDebounce Hook
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                    React &middot; TypeScript &middot; Custom Hook
                  </p>
                </div>
                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                  React
                </span>
              </header>

              {/* Code block */}
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="absolute right-3 top-3 rounded-md border border-zinc-300 bg-white/90 p-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800/90 dark:text-zinc-400 dark:hover:bg-zinc-700"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
                <pre className="overflow-x-auto bg-zinc-950 p-5 text-sm leading-relaxed text-zinc-300 dark:bg-zinc-950">
                  <code>{sampleCode}</code>
                </pre>
              </div>

              {/* Card footer */}
              <footer className="border-t border-zinc-200 px-5 py-3 dark:border-zinc-800">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    hooks
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    performance
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    debounce
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    search
                  </span>
                </div>
              </footer>
            </article>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
