"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { SnippetMeta } from "@/lib/snippets";

export function SnippetSearch({ snippets }: { snippets: SnippetMeta[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all unique tags from snippets
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    snippets.forEach((snippet) => {
      snippet.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [snippets]);

  const filteredSnippets = snippets.filter((snippet) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      !query ||
      snippet.title.toLowerCase().includes(query) ||
      snippet.category.toLowerCase().includes(query) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesTag = !activeTag || snippet.tags.includes(activeTag);

    return matchesQuery && matchesTag;
  });

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, category, or tags..."
          aria-label="Search snippets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400 sm:max-w-md"
        />
      </div>

      {/* Tag filter bar */}
      <nav aria-label="Filter by tag" className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            activeTag === null
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSnippets.map((snippet) => (
          <Link
            key={snippet.id}
            href={`/snippets/${snippet.id}`}
            className="group rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            <article>
              <span className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {snippet.category}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                {snippet.title}
              </h2>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                {snippet.description}
              </p>
              {/* Tag pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {snippet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
      {filteredSnippets.length === 0 && (
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          No snippets found matching your search.
        </p>
      )}
    </div>
  );
}
