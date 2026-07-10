"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  FileCode2,
  Component,
  Terminal,
  Server,
  Cpu,
  Database,
  Search,
  Container,
  Cloud,
  HardDrive,
  Workflow,
  Network,
  Braces,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  count: number;
  icon: LucideIcon;
  gradient: string;
}

const categories: Category[] = [
  {
    name: "TypeScript",
    count: 18,
    icon: FileCode2,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "React",
    count: 14,
    icon: Component,
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Python",
    count: 15,
    icon: Terminal,
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Go",
    count: 11,
    icon: Server,
    gradient: "from-sky-500 to-sky-600",
  },
  {
    name: "Rust",
    count: 10,
    icon: Cpu,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Splunk",
    count: 11,
    icon: Search,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Bash",
    count: 11,
    icon: Terminal,
    gradient: "from-zinc-600 to-zinc-700",
  },
  {
    name: "Kubernetes",
    count: 8,
    icon: Container,
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Terraform",
    count: 7,
    icon: Cloud,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "SQL",
    count: 6,
    icon: Database,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "Redis",
    count: 3,
    icon: HardDrive,
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "GraphQL",
    count: 2,
    icon: Workflow,
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    name: "Docker",
    count: 1,
    icon: Braces,
    gradient: "from-blue-600 to-blue-700",
  },
  {
    name: "More...",
    count: 5,
    icon: Network,
    gradient: "from-teal-500 to-teal-600",
  },
];

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="border-t border-zinc-200 bg-zinc-50/50 py-16 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Every Language Your Team Uses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From frontend frameworks to infrastructure as code. Real patterns
            for every part of your stack.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
            <AnimateOnScroll key={category.name} delay={index * 60}>
              <div className="group flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-4 transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${category.gradient}`}
                >
                  <category.icon
                    className="h-4.5 w-4.5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {category.count} snippets
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
