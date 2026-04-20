import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionProvider } from "@/components/providers/motion-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ConsoleGreeting } from "@/components/ui/console-greeting";
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
  metadataBase: new URL("https://nest-portfolio-pi.vercel.app"),
  title: "Nest — Three KSU students building AI for foster youth",
  description:
    "Portfolio of the Nest team. Our flagship project is an AI transition navigator for Georgia foster youth aging out of care.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nest",
    description:
      "AI transition navigator for Georgia foster youth aging out of care — built by three KSU CS students.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest",
    description:
      "AI transition navigator for Georgia foster youth aging out of care — built by three KSU CS students.",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-background focus:shadow-lg"
        >
          Skip to content
        </a>
        <MotionProvider>
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
        <ConsoleGreeting />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
