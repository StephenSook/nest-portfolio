import type { Metadata } from "next";
import { ScrollProgress } from "@/components/nest-case-study/scroll-progress";
import { SectionNav } from "@/components/nest-case-study/section-nav";
import { MobileNav } from "@/components/nest-case-study/mobile-nav";
import { CommandPalette } from "@/components/nest-case-study/command-palette";
import { ShortcutOverlay } from "@/components/nest-case-study/shortcut-overlay";
import { ListenInstead } from "@/components/nest-case-study/listen-instead";
import { CaseHero } from "@/components/nest-case-study/case-hero";
import { StakesReveal } from "@/components/nest-case-study/stakes-reveal";
import { Problem } from "@/components/nest-case-study/problem";
import { Approach } from "@/components/nest-case-study/approach";
import { ScreenGallery } from "@/components/nest-case-study/screen-gallery";
import { ArchitectureDiagram } from "@/components/nest-case-study/architecture-diagram";
import { CodeSpotlight } from "@/components/nest-case-study/code-spotlight";
import { StackRationale } from "@/components/nest-case-study/stack-rationale";
import { Outcomes } from "@/components/nest-case-study/outcomes";
import { TeamContributions } from "@/components/nest-case-study/team-contributions";
import { Lessons } from "@/components/nest-case-study/lessons";
import { Faq, faqItems } from "@/components/nest-case-study/faq";
import { AudioDeepDive } from "@/components/nest-case-study/audio-deep-dive";
import { Sources } from "@/components/nest-case-study/sources";
import { CaseFooter } from "@/components/nest-case-study/case-footer";

export const metadata: Metadata = {
  title: "Nest · A case study",
  description:
    "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator that onboards in two minutes.",
  alternates: { canonical: "/nest" },
  openGraph: {
    title: "Nest · A case study",
    description:
      "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest · A case study",
    description:
      "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator.",
  },
};

const SITE_URL = "https://nest-portfolio-pi.vercel.app";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nest — A case study",
  description:
    "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator that onboards in two minutes.",
  image: `${SITE_URL}/nest/opengraph-image`,
  datePublished: "2026-04-15",
  dateModified: "2026-04-20",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/nest`,
  },
  author: [
    {
      "@type": "Person",
      name: "Stephen Sookra",
      url: "https://stephensookra.com",
      sameAs: [
        "https://www.linkedin.com/in/stephen-sookra-633682339/",
        "https://github.com/StephenSook",
      ],
    },
    {
      "@type": "Person",
      name: "Tylin Delaney",
      url: "https://tylindelaney.dev/",
      sameAs: [
        "https://www.linkedin.com/in/tylin-delaney/",
        "https://github.com/tylinndd",
      ],
    },
    {
      "@type": "Person",
      name: "Brenden Bryant",
      sameAs: ["https://www.linkedin.com/in/brenden-bryant-422464329/"],
    },
  ],
  publisher: {
    "@type": "CollegeOrUniversity",
    name: "Kennesaw State University",
    department: "College of Computing and Software Engineering",
    url: "https://ccse.kennesaw.edu/",
  },
  about: [
    "Foster care",
    "Transition services",
    "Retrieval-Augmented Generation",
    "Georgia public policy",
  ],
  keywords:
    "foster care, aging out, RAG, ChromaDB, Llama 3, Kennesaw State, Georgia DFCS",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nest",
  description:
    "AI transition navigator for Georgia foster youth aging out of state care. Grounded retrieval over the Georgia DFCS handbook and partner-nonprofit corpora — every answer cited to real policy.",
  url: "https://nest-zeta-nine.vercel.app",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Social services navigator",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Retrieval-augmented answers cited to Georgia DFCS policy",
    "Deterministic crisis routing to 988 and 211",
    "Two-minute intake generating a ninety-day transition plan",
    "Refusal sentinel — the model never speculates past the corpus",
  ],
  author: articleJsonLd.author,
  publisher: articleJsonLd.publisher,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/nest`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nest — a case study",
      item: `${SITE_URL}/nest`,
    },
  ],
};

export default function NestCaseStudy() {
  return (
    <main id="main">
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(softwareAppJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      <ScrollProgress />
      <SectionNav />
      <MobileNav />
      <CommandPalette />
      <ShortcutOverlay />
      <ListenInstead />
      <CaseHero />
      <StakesReveal />
      <Problem />
      <Approach />
      <ScreenGallery />
      <ArchitectureDiagram />
      <CodeSpotlight />
      <StackRationale />
      <Outcomes />
      <TeamContributions />
      <Lessons />
      <Faq />
      <AudioDeepDive />
      <Sources />
      <CaseFooter />
    </main>
  );
}
