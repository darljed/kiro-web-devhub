import { ImageResponse } from "next/og";
import { getSnippetById, getSnippetSlugs } from "@/lib/snippets";

export const alt = "Dev Hub Snippet";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return getSnippetSlugs().map((id) => ({ id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippet = getSnippetById(id);

  const title = snippet?.title ?? "Snippet";
  const category = snippet?.category ?? "Code";
  const language = snippet?.language ?? "text";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #042f2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top section: branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#a5b4fc",
              letterSpacing: "-0.02em",
            }}
          >
            Dev Hub
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#64748b",
            }}
          >
            /
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
            }}
          >
            Snippets
          </div>
        </div>

        {/* Middle section: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom section: badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#a5b4fc",
              }}
            >
              {category}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "rgba(20, 184, 166, 0.2)",
              border: "1px solid rgba(20, 184, 166, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#5eead4",
              }}
            >
              {language}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
