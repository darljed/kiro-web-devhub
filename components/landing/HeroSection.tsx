"use client";

import Link from "next/link";
import { HeroIllustration } from "@/components/HeroIllustration";
import { useMounted } from "@/hooks/useMounted";

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div
            className={`text-center transition-all duration-700 ease-out lg:text-left ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
              Open-Source Snippet Vault
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
              Your Code,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-sky-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-sky-400">
                Organized
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              DevHub is a fast, searchable code snippet vault built for
              developers who reuse patterns daily. Stop digging through old
              projects - find, copy, and ship in seconds.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/snippets"
                className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Browse Snippets
              </Link>
              <a
                href="#use-cases"
                className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                See Use Cases
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div
            className={`transition-all delay-200 duration-700 ease-out ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-md lg:max-w-none">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
