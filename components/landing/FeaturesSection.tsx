"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  SearchIllustration,
  OrganizeIllustration,
  ShareIllustration,
  CopyIllustration,
} from "@/components/FeatureIllustrations";

const features = [
  {
    title: "Instant Search",
    description:
      "Filter snippets by title, language, or category in real-time. No waiting, no page reloads.",
    icon: SearchIllustration,
  },
  {
    title: "Organized by Category",
    description:
      "Snippets are grouped by language and framework so you can find what you need at a glance.",
    icon: OrganizeIllustration,
  },
  {
    title: "One-Click Copy",
    description:
      "Copy any snippet to your clipboard with a single click. Paste directly into your editor.",
    icon: CopyIllustration,
  },
  {
    title: "Share with Your Team",
    description:
      "Bookmark and share snippet URLs with teammates. Everyone stays on the same page.",
    icon: ShareIllustration,
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/50 py-16 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Built for Developer Productivity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Every feature is designed to reduce friction between finding code and
            shipping features.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                <feature.icon />
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
