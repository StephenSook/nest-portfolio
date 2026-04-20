import type { Metadata } from "next";
import { ScrollProgress } from "@/components/nest-case-study/scroll-progress";
import { CaseHero } from "@/components/nest-case-study/case-hero";
import { StakesReveal } from "@/components/nest-case-study/stakes-reveal";
import { Problem } from "@/components/nest-case-study/problem";
import { Approach } from "@/components/nest-case-study/approach";
import { ScreenGallery } from "@/components/nest-case-study/screen-gallery";
import { ArchitectureDiagram } from "@/components/nest-case-study/architecture-diagram";
import { StackRationale } from "@/components/nest-case-study/stack-rationale";
import { Outcomes } from "@/components/nest-case-study/outcomes";
import { AudioDeepDive } from "@/components/nest-case-study/audio-deep-dive";
import { Sources } from "@/components/nest-case-study/sources";
import { CaseFooter } from "@/components/nest-case-study/case-footer";

export const metadata: Metadata = {
  title: "Nest · A case study",
  description:
    "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator that onboards in two minutes.",
  openGraph: {
    title: "Nest · A case study",
    description:
      "How three KSU CS students replaced Georgia's 250-page foster care transition handbook with an AI navigator.",
    type: "article",
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

export default function NestCaseStudy() {
  return (
    <main id="main">
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <ScrollProgress />
      <CaseHero />
      <StakesReveal />
      <Problem />
      <Approach />
      <ScreenGallery />
      <ArchitectureDiagram />
      <StackRationale />
      <Outcomes />
      <AudioDeepDive />
      <Sources />
      <CaseFooter />
    </main>
  );
}
