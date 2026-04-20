import { SectionFrame } from "./section-frame";

type Lesson = {
  title: string;
  body: string;
};

const lessons: Lesson[] = [
  {
    title: "No formal eval set.",
    body: "We tested retrieval quality by hand against a ~40-question checklist. For v2, we\u2019d stand up RAGAS or TruLens and track faithfulness and answer-relevance on every corpus update \u2014 so regressions are visible before a user hits them.",
  },
  {
    title: "Corpus is statewide, not county-specific.",
    body: "Georgia\u2019s core programs are consistent, but DFCS offices vary on process \u2014 intake forms, voucher timelines, case manager availability. We\u2019d add a county layer so an Atlanta user and a Savannah user see locally accurate procedure notes.",
  },
  {
    title: "Crisis routing is keyword-based.",
    body: "A regex + phrase list is auditable and predictable, which is exactly what we want for the 988 / 211 bypass. But it misses oblique phrasings. We\u2019d add a small classifier running in parallel \u2014 not as a replacement, as a second signal.",
  },
  {
    title: "Cold start is unguided.",
    body: "A first-time user doesn\u2019t know what to ask a foster-care assistant. For v2, we\u2019d scaffold onboarding with three pre-seeded question paths \u2014 Medicaid, housing, money \u2014 instead of a blank prompt.",
  },
];

export function Lessons() {
  return (
    <SectionFrame id="lessons" number="09" eyebrow="What we\u2019d do differently">
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
        The things we&rsquo;d change in v2.
      </h2>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        Shipping on a twelve-week timeline meant some decisions we&rsquo;d revisit. Writing
        them down makes the next build sharper &mdash; and the case study honest.
      </p>

      <dl className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
        {lessons.map((lesson, i) => (
          <div key={lesson.title} className="border-t border-white/[0.08] pt-6">
            <dt>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                v2 &middot; {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                {lesson.title}
              </p>
            </dt>
            <dd className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {lesson.body}
            </dd>
          </div>
        ))}
      </dl>
    </SectionFrame>
  );
}
