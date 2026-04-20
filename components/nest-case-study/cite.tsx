import { citations } from "@/lib/citations";

export function Cite({ n }: { n: number }) {
  const cite = citations.find((c) => c.n === n);
  if (!cite) return null;
  return (
    <a
      href={`#source-${n}`}
      aria-label={`Citation ${n}. See sources.`}
      className="ml-0.5 align-super font-mono text-[0.58em] text-accent no-underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
    >
      {n}
    </a>
  );
}
