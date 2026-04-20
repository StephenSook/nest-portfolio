import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/providers/motion-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nest — Three KSU students building AI for foster youth",
  description:
    "Portfolio of the Nest team. Our flagship project is an AI transition navigator for Georgia foster youth aging out of care.",
  openGraph: {
    title: "Nest",
    description:
      "AI transition navigator for Georgia foster youth aging out of care — built by three KSU CS students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <MotionProvider>
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
