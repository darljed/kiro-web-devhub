export interface Snippet {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  language: string;
}

export const snippets: Snippet[] = [
  {
    id: "splunk-error-aggregation",
    title: "Aggregate Errors by Source",
    description:
      "A Splunk SPL query that aggregates error events by source and displays the top offenders over the last 24 hours.",
    category: "Splunk",
    code: `index=main sourcetype=application level=ERROR earliest=-24h
| stats count AS error_count BY source
| sort -error_count
| head 10
| table source, error_count`,
    language: "spl",
  },
  {
    id: "react-use-debounce",
    title: "useDebounce Hook",
    description:
      "A custom React hook that debounces a value by a specified delay, useful for search inputs and API calls.",
    category: "React",
    code: `import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`,
    language: "typescript",
  },
  {
    id: "python-batch-summarizer",
    title: "Batch Text Summarizer",
    description:
      "A Python script that reads text files from a directory and generates concise summaries using a local transformer model.",
    category: "Python",
    code: `from pathlib import Path
from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def summarize_files(directory: str, max_length: int = 130) -> dict[str, str]:
    results: dict[str, str] = {}
    for file_path in Path(directory).glob("*.txt"):
        text = file_path.read_text(encoding="utf-8")
        summary = summarizer(text, max_length=max_length, min_length=30, do_sample=False)
        results[file_path.name] = summary[0]["summary_text"]
    return results

if __name__ == "__main__":
    summaries = summarize_files("./documents")
    for name, summary in summaries.items():
        print(f"{name}:\\n{summary}\\n")`,
    language: "python",
  },
  {
    id: "bash-log-rotator",
    title: "Log File Rotator",
    description:
      "A Bash script that rotates log files older than 7 days by compressing and archiving them to a backup directory.",
    category: "Bash",
    code: `#!/usr/bin/env bash
set -euo pipefail

LOG_DIR="/var/log/app"
ARCHIVE_DIR="/var/log/app/archive"
RETENTION_DAYS=7

mkdir -p "$ARCHIVE_DIR"

find "$LOG_DIR" -maxdepth 1 -name "*.log" -mtime +$RETENTION_DAYS -print0 |
  while IFS= read -r -d '' file; do
    filename=$(basename "$file")
    gzip -c "$file" > "$ARCHIVE_DIR/\${filename}.$(date +%Y%m%d).gz"
    rm "$file"
    echo "Archived: $filename"
  done

echo "Log rotation complete."`,
    language: "bash",
  },
];
