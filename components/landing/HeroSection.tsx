"use client";

import Link from "next/link";
import { useMounted } from "@/hooks/useMounted";
import { Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  const loaded = useMounted();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/50 via-transparent to-transparent dark:from-purple-950/20"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            AI-Ready Pattern Library
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            The battle-tested snippets{" "}
            <span className="bg-gradient-to-r from-purple-600 to-sky-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-sky-400">
              AI can&#39;t generate
            </span>{" "}
            from scratch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Your team&#39;s curated collection of production-ready patterns,
            organized for instant reuse. Not GitHub Gists. Not ChatGPT output.
            Real code from real systems, with the context that makes it work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/snippets"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              Browse 120+ Snippets
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Explore Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
