import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Darl Jed Matundan
        </h1>
        <p className="mt-3 text-xl font-medium text-zinc-600 dark:text-zinc-400">
          Full-Stack Developer &amp; Automation Engineer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          I build robust web applications, craft automation pipelines, and
          leverage AI to streamline workflows. My expertise spans Splunk
          observability, React frontends, and intelligent automation with Python.
        </p>
        <div className="mt-8">
          <Link
            href="/snippets"
            className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse Snippets
          </Link>
        </div>
      </div>
    </section>
  );
}
