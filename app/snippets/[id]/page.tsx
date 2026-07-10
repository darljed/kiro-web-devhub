import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSnippetById, getSnippetSlugs } from "@/lib/snippets";
import { CopyButton } from "@/components/CopyButton";
import { CopyAsPrompt } from "@/components/CopyAsPrompt";
import { CodeTabs } from "@/components/CodeTabs";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSnippetSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const snippet = getSnippetById(id);
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
  const snippet = getSnippetById(id);

  if (!snippet) {
    notFound();
  }

  const mdxModule = await import(`@/content/snippets/${id}.mdx`);
  const MdxContent = mdxModule.default;
  const codeBlocks = mdxModule.codeBlocks ?? {};

  const mainCode = codeBlocks.main ?? "";

  // Build tabs from the codeBlocks export
  const tabs = Object.entries(codeBlocks).map(([key, code]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    code: code as string,
  }));

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <article>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {snippet.category}
          </span>
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {snippet.title}
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {snippet.description}
        </p>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <CopyButton code={mainCode} />
          <CopyAsPrompt
            code={mainCode}
            description={snippet.description}
            language={snippet.language}
          />
        </div>

        {/* Code Tabs */}
        {tabs.length > 1 && <CodeTabs tabs={tabs} />}

        {/* MDX Content (rendered with Shiki highlighting) */}
        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0">
          <MdxContent />
        </div>
      </article>
    </section>
  );
}
