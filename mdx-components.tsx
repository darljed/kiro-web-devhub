import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children, ...props }) => (
      <pre
        className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-950 p-4 text-sm leading-relaxed dark:border-zinc-700"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, ...props }) => <code {...props}>{children}</code>,
    ...components,
  };
}
