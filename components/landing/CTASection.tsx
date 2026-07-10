"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function CTASection() {
  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-12 text-center dark:from-zinc-800 dark:to-zinc-900 sm:px-12 sm:py-16">
            {/* Decorative elements */}
            <div
              className="absolute left-0 top-0 -z-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 -z-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Start Building Your Snippet Library
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-zinc-300">
                Explore community-contributed snippets across Splunk, React,
                Python, Bash, and more. Copy what you need and get back to
                building.
              </p>
              <div className="mt-8">
                <Link
                  href="/snippets"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  Explore All Snippets
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
