# DevHub - AI-Era Code Snippet Vault

A curated collection of production-ready code snippets built for the modern developer workflow. Search, copy, and prompt -- all from one place.

**[Live Demo](https://kiro-web-devhub.vercel.app/)**

---

## Built with Kiro

This project was created during **Build Nights: Kiro Web Autonomous Agent Workshop** on July 10, 2025 -- an activity exploring Kiro Web's autonomous agent capabilities.

The entire application -- from scaffolding and component architecture to content generation and deployment -- was built by Kiro Web in a single session. No manual coding, no copy-pasting boilerplate. Kiro handled the full development lifecycle autonomously, demonstrating what AI-assisted development looks like when an agent takes the wheel.

---

## What is DevHub?

DevHub is a fully static, developer-focused snippet vault designed for the AI era. It provides a searchable library of code snippets across multiple languages and tools, with features purpose-built for modern workflows:

- Browse snippets by language, tool, or use case
- Copy code directly to your clipboard with one click
- Format any snippet as an AI prompt for Claude, ChatGPT, or other assistants
- View code alongside its tests and usage examples in tabbed layouts

---

## Features

- **MDX-based snippet system** -- Content authored in MDX with frontmatter metadata for flexible rendering
- **Shiki syntax highlighting** -- Build-time code highlighting via rehype-pretty-code for fast, accurate rendering
- **Client-side search with tag filtering** -- Instantly find snippets by keyword or filter by language/tool tags
- **One-click copy to clipboard** -- Copy any code block with a single click
- **Copy as AI Prompt** -- Format snippets as structured AI instructions ready for Claude or ChatGPT
- **Multi-tab code blocks** -- View code, tests, and usage examples in a tabbed interface
- **Auto-generated OG images** -- Dynamic social sharing images generated for each snippet
- **Dark/light mode** -- Theme toggle with system preference detection via next-themes
- **Fully static** -- No database, no API, no server-side runtime. Deploys anywhere

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework and routing |
| React 19 | UI components |
| Tailwind CSS v4 | Styling |
| MDX | Snippet content format |
| Shiki / rehype-pretty-code | Syntax highlighting |
| next-themes | Dark/light mode |
| lucide-react | Icons |
| gray-matter | Frontmatter parsing |
| Vercel | Hosting and deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/darljed/kiro-web-devhub.git
cd kiro-web-devhub

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
kiro-web-devhub/
├── app/                  # Next.js App Router pages and layouts
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── snippets/         # Snippet detail pages
├── components/           # React components
│   ├── CodeBlock.tsx     # Syntax-highlighted code display
│   ├── CodeTabs.tsx      # Multi-tab code viewer
│   ├── CopyButton.tsx    # Clipboard copy functionality
│   ├── CopyAsPrompt.tsx  # AI prompt formatter
│   ├── SnippetSearch.tsx # Search and filter interface
│   ├── Navbar.tsx        # Navigation bar
│   └── landing/          # Landing page components
├── content/
│   └── snippets/         # MDX snippet files
├── lib/                  # Utility functions and helpers
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

---

## Live Demo

Visit the deployed application at **[kiro-web-devhub.vercel.app](https://kiro-web-devhub.vercel.app/)**.

---

## What I Learned

This project started as an activity during the Build Nights workshop, and it turned into a clear demonstration of what Kiro can accomplish in a short period of time. Watching Kiro Web autonomously scaffold the app, build components, generate content, and handle deployment gave me a concrete understanding of AI-assisted development in practice.

The experience helped me learn about Kiro, Kiro Web, and automations with Kiro -- tools that are genuinely helpful for accelerating development workflows. What stands out is not just the speed, but the quality: production-ready components, proper architecture, and a fully functional application delivered in a single session.

This simple project reflects what Kiro can do with minimal guidance, and it gives a clear idea of how much more we can build with it.

---

## License

This project is open source and available for learning and reference purposes.
