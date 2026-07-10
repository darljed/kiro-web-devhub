"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

interface CodeTab {
  label: string;
  code: string;
  language?: string;
}

interface CodeTabsProps {
  tabs: CodeTab[];
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;

  const activeTab = tabs[activeIndex];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800">
        <nav className="flex" role="tablist" aria-label="Code tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-xs font-medium transition-colors ${
                index === activeIndex
                  ? "border-b-2 border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="pr-3">
          <CopyButton code={activeTab.code} />
        </div>
      </div>
      <pre className="overflow-x-auto rounded-b-lg border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-700">
        <code className="text-sm leading-relaxed text-zinc-100">
          {activeTab.code}
        </code>
      </pre>
    </div>
  );
}
