import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nest — Three KSU students building AI for people the system fails";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(file: string) {
  const path = join(
    process.cwd(),
    "node_modules/@fontsource/instrument-serif/files",
    file,
  );
  return readFile(path);
}

export default async function Image() {
  const [serifRegular, serifItalic] = await Promise.all([
    loadFont("instrument-serif-latin-400-normal.woff"),
    loadFont("instrument-serif-latin-400-italic.woff"),
  ]);

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
          <span
            style={{ fontFamily: "Instrument Serif", fontSize: 32, letterSpacing: 0 }}
          >
            Nest
          </span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>KSU CCSE &middot; C-Day 2026</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Serif",
            fontSize: 144,
            lineHeight: 0.95,
            letterSpacing: -3,
          }}
        >
          <span style={{ display: "flex" }}>Software for people</span>
          <span style={{ display: "flex" }}>
            the system{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "#f6c370",
                marginLeft: 24,
              }}
            >
              fails
            </span>
            .
          </span>
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
          <span>nest-portfolio-pi.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serifRegular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
