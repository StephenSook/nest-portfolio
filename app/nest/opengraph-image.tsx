import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Nest — Replacing Georgia's 250-page foster care transition handbook with a conversation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSerif() {
  const path = join(
    process.cwd(),
    "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff",
  );
  return readFile(path);
}

export default async function Image() {
  const serifData = await loadSerif();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 3.6,
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#f6c370" }}>01 · Case study</span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>Nest · 2026</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 260,
              lineHeight: 0.95,
              letterSpacing: -6,
              display: "flex",
            }}
          >
            Nest.
          </div>
          <div
            style={{
              fontSize: 38,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 960,
              display: "flex",
            }}
          >
            Replacing Georgia&rsquo;s 250-page foster care transition handbook with a
            conversation.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 2.4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.42)",
          }}
        >
          <span>Stephen Sookra &middot; Tylin Delaney &middot; Brenden Bryant</span>
          <span>KSU C-Day</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
