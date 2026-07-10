import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface SnippetMeta {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

const SNIPPETS_DIR = path.join(process.cwd(), "content", "snippets");

export function getAllSnippets(): SnippetMeta[] {
  const files = fs.readdirSync(SNIPPETS_DIR).filter((f) => f.endsWith(".mdx"));

  const snippets: SnippetMeta[] = files.map((filename) => {
    const id = filename.replace(/\.mdx$/, "");
    const filePath = path.join(SNIPPETS_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      id,
      title: data.title ?? "",
      description: data.description ?? "",
      category: data.category ?? "",
      language: data.language ?? "",
      tags: data.tags ?? [],
      createdAt: data.createdAt ?? "",
      updatedAt: data.updatedAt ?? "",
    };
  });

  return snippets.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getSnippetById(id: string): SnippetMeta | undefined {
  const snippets = getAllSnippets();
  return snippets.find((s) => s.id === id);
}

export function getSnippetSlugs(): string[] {
  const files = fs.readdirSync(SNIPPETS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => f.replace(/\.mdx$/, ""));
}
