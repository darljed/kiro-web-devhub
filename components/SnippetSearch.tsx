"use client";

import { useState } from "react";
import Link from "next/link";
import type { Snippet } from "@/lib/data";

export function SnippetSearch({ snippets }: { snippets: Snippet[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSnippets = snippets.filter((snippet) => {
    const query = searchQuery.toLowerCase();
    return (
      snippet.title.toLowerCase().includes(query) ||
      snippet.category.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search snippets..."
          aria-label="Search snippets"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400 sm:max-w-md"
        />
      </div>
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
