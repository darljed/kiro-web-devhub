"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function CTASection() {
  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 via-indigo-700 to-sky-600 px-6 py-12 text-center shadow-2xl dark:from-purple-900 dark:via-indigo-900 dark:to-sky-800 sm:px-12 sm:py-16">
            {/* Animated decorative SVGs */}
            <svg
              aria-hidden="true"
              className="absolute left-4 top-6 h-8 w-8 animate-float text-purple-300/60 sm:left-8 sm:top-8 sm:h-10 sm:w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute right-4 top-6 h-7 w-7 animate-rotate-fast text-sky-300/60 sm:right-10 sm:top-10 sm:h-9 sm:w-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute bottom-8 left-6 h-6 w-6 animate-pulse-scale text-indigo-300/50 sm:bottom-10 sm:left-12 sm:h-8 sm:w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute bottom-6 right-6 h-7 w-7 animate-float-delayed text-purple-200/50 sm:bottom-8 sm:right-12 sm:h-9 sm:w-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute left-1/4 top-4 h-5 w-5 animate-rotate text-sky-200/40 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>

            <svg
              aria-hidden="true"
              className="absolute right-1/4 bottom-4 h-5 w-5 animate-pulse-scale-delayed text-indigo-200/40 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3h12l4 6-10 13L2 9z" />
            </svg>

            {/* Background glow effects */}
            <div
              className="absolute left-0 top-0 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Start Building Your Snippet Library
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-indigo-100/90 sm:text-lg">
                Explore community-contributed snippets across Splunk, React,
                Python, Bash, and more. Copy what you need and get back to
                building.
              </p>
              <div className="mt-8">
                <Link
                  href="/snippets"
                  className="inline-flex items-center rounded-lg bg-gradient-to-r from-white to-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3.5 sm:text-base"
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
