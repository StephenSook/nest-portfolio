import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nest — AI transition navigator for Georgia foster youth",
    short_name: "Nest",
    description:
      "Portfolio of three Kennesaw State CS students. Our flagship project is an AI transition navigator for Georgia foster youth aging out of care.",
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
