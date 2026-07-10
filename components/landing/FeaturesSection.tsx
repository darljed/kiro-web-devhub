"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { MessageSquare, Shield, Library, Globe } from "lucide-react";

const features = [
  {
    title: "Copy as AI Prompt",
    description:
      "Format any snippet for Claude, ChatGPT, or Copilot in one click. Give your AI assistant the context it needs to extend your patterns correctly.",
    icon: MessageSquare,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Battle-Tested Patterns",
    description:
      "Real production code from real systems. Not toy examples or interview puzzles. Every snippet has been deployed, debugged, and refined.",
    icon: Shield,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "120+ Snippets",
    description:
      "A massive library spanning 15+ languages and frameworks. From Splunk queries to Terraform modules, Rust patterns to React hooks.",
    icon: Library,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Zero Backend",
    description:
      "Fully static site that deploys anywhere. No databases, no API keys, no cold starts. Loads instantly, works offline, costs nothing to host.",
    icon: Globe,
    gradient: "from-amber-500 to-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/50 py-16 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            What Makes DevHub Different
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Built for the AI era. Every feature is designed to help you and your
            AI tools work with proven patterns instead of guessing.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                <div
                  className={`inline-flex rounded-lg bg-gradient-to-r p-2.5 ${feature.gradient}`}
                >
                  <feature.icon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
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
