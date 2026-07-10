import { CopyButton } from "@/components/CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800">
        <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
          {filename ?? language ?? "code"}
        </span>
        <CopyButton code={code} />
      </div>
      <pre className="overflow-x-auto rounded-b-lg border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-700">
        <code className="text-sm leading-relaxed text-zinc-100">{code}</code>
      </pre>
    </div>
  );
}
