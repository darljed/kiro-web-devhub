import type { Metadata } from "next";
import { getAllSnippets } from "@/lib/snippets";
import { SnippetSearch } from "@/components/SnippetSearch";

export const metadata: Metadata = {
  title: "Snippets | Dev Hub",
};

export default function SnippetsPage() {
  const snippets = getAllSnippets();

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Snippet Vault
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Browse and search through curated code snippets.
      </p>
      <div className="mt-8">
        <SnippetSearch snippets={snippets} />
      </div>
    </section>
  );
}
