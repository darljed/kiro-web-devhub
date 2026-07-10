import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { snippets } from "@/lib/data";
import { CopyButton } from "@/components/CopyButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return snippets.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const snippet = snippets.find((s) => s.id === id);
  return {
    title: snippet ? `${snippet.title} | Dev Hub` : "Snippet Not Found",
  };
}

export default async function SnippetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippet = snippets.find((s) => s.id === id);

  if (!snippet) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <article>
        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {snippet.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {snippet.title}
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {snippet.description}
        </p>
        <div className="mt-8">
          <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800">
            <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
              {snippet.language}
            </span>
            <CopyButton code={snippet.code} />
          </div>
          <pre className="overflow-x-auto rounded-b-lg border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-700">
            <code className="text-sm leading-relaxed text-zinc-100">
              {snippet.code}
            </code>
          </pre>
        </div>
      </article>
    </section>
  );
}
