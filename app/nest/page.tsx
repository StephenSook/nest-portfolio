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

export default function NestCaseStudy() {
  return (
    <main>
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
