"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const useCases = [
  {
    title: "Team Onboarding",
    description:
      "New developers join your team and need to ramp up fast. DevHub gives them a curated library of patterns, queries, and scripts your team actually uses in production.",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
  },
  {
    title: "Cross-Project Consistency",
    description:
      "Stop rewriting the same utility functions across projects. Maintain a single source of truth for common patterns like debounce hooks, API wrappers, and error handlers.",
    gradient: "from-sky-500 to-cyan-500",
    bgGradient: "from-sky-50 to-cyan-50 dark:from-sky-950/20 dark:to-cyan-950/20",
  },
  {
    title: "Interview Prep & Learning",
    description:
      "Build your personal reference library. Save solutions to tricky problems, annotate them, and review before interviews or technical discussions.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  },
  {
    title: "Ops & Automation Scripts",
    description:
      "DevOps engineers maintain dozens of SPL queries, bash scripts, and CI/CD templates. DevHub keeps them searchable and always one click away from your terminal.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
  },
];

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Why Teams Use DevHub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Whether you are a solo developer or part of a growing engineering
            team, DevHub fits naturally into your workflow.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {useCases.map((useCase, index) => (
            <AnimateOnScroll key={useCase.title} delay={index * 120}>
              <div
                className={`relative overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br p-6 dark:border-zinc-800 sm:p-8 ${useCase.bgGradient}`}
              >
                <div
                  className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r ${useCase.gradient}`}
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {useCase.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
