import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/**
 * @type {import('next').NextConfig}
 *
 * NOTE: The build script uses `next build --webpack` (see package.json) because
 * Turbopack cannot serialize the rehype-pretty-code plugin functions passed in
 * the MDX config below. Without --webpack, the build fails with a cryptic
 * serialization error. This is a known Turbopack limitation as of Next.js 16.
 */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
