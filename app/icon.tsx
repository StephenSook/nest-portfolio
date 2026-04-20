import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

async function loadSerif() {
  const path = join(
    process.cwd(),
    "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff",
  );
  return readFile(path);
}

export default async function Icon() {
  const serifData = await loadSerif();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f6c370",
          fontFamily: "Instrument Serif",
          fontSize: 56,
          lineHeight: 1,
          letterSpacing: -2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 6,
        }}
      >
        N
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
