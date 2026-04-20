"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneFrame } from "./phone-frame";
import { SectionFrame } from "./section-frame";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const screens = [
  {
    id: "onboarding",
    src: "/nest/01-onboarding-name.png",
    alt: "Nest onboarding — name",
    title: "Step one.",
    caption:
      "Eight questions. No SSN. No case number. Everything stays on the device unless the youth chooses to export it.",
  },
  {
    id: "review",
    src: "/nest/02-onboarding-review.png",
    alt: "Nest onboarding — review",
    title: "Confirm, then generate.",
    caption:
      "A final glance at what they told us — age, county, documents, education plan — before the plan is built.",
  },
  {
    id: "plan",
    src: "/nest/03-home-plan.png",
    alt: "Nest home — ninety-day plan",
    title: "The plan, ranked by urgency.",
    caption:
      "Coral is today. Amber is this month. Sage is later. A countdown above — 730 days until exit — keeps the stakes visible.",
  },
  {
    id: "path",
    src: "/nest/04-path.png",
    alt: "Nest path",
    title: "Your path, visualized.",
    caption:
      "Every milestone on the timeline from eighteen to twenty-six. Chafee ETV. Medicaid extension. Housing vouchers.",
  },
  {
    id: "benefits",
    src: "/nest/05-benefits.png",
    alt: "Nest benefits",
    title: "Benefits, filtered.",
    caption:
      "Only programs this youth actually qualifies for — scoped by county, age, and exit status. No blanket lists.",
  },
  {
    id: "navigator",
    src: "/nest/06-navigator.png",
    alt: "Nest Ask Navigator",
    title: "Ask anything. See sources.",
    caption:
      "Every answer grounded in a specific passage of Georgia policy. Embark, KSU ASCEND, Wellroot, Child Welfare Gateway — cited inline.",
  },
  {
    id: "emergency",
    src: "/nest/07-emergency.png",
    alt: "Nest emergency",
    title: "Crisis, one tap away.",
    caption:
      "988 and 211 live here — keyword-routed from chat and never processed by the LLM. Deterministic where it matters.",
  },
  {
    id: "vault",
    src: "/nest/08-vault.png",
    alt: "Nest vault",
    title: "A place for the paperwork.",
    caption:
      "Birth certificate, Social Security card, diploma, lease — named, stored, ready for the next intake form.",
  },
];

type Screen = (typeof screens)[number];

type CaptionProps = {
  screen: Screen;
  index: number;
  onEnter: (id: string) => void;
};

function Caption({ screen, index, onEnter }: CaptionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) onEnter(screen.id);
  }, [inView, onEnter, screen.id]);

  return (
    <div
      ref={ref}
      className="flex min-h-[55vh] flex-col justify-center py-10 md:min-h-[70vh] md:py-16"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        {String(index + 1).padStart(2, "0")} / {String(screens.length).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-[2.75rem]">
        {screen.title}
      </h3>
      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
        {screen.caption}
      </p>

      <div className="mt-10 md:hidden">
        <PhoneFrame src={screen.src} alt={screen.alt} />
      </div>
    </div>
  );
}

export function ScreenGallery() {
  const [activeId, setActiveId] = useState<string>(screens[0].id);

  return (
    <SectionFrame id="gallery" number="04" eyebrow="The product">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        Eight screens. One coherent flow.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Scroll the experience the way a youth aging out would encounter it — from the first
        question to the final vault.
      </p>

      <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative hidden md:block">
          <div className="sticky top-20">
            <PhoneFrame>
              {screens.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={false}
                  animate={{ opacity: activeId === s.id ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </PhoneFrame>
          </div>
        </div>

        <div className="flex flex-col">
          {screens.map((s, i) => (
            <Caption key={s.id} screen={s} index={i} onEnter={setActiveId} />
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
