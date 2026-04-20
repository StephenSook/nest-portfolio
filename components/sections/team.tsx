import { team } from "@/lib/team";
import { TeamCard } from "@/components/ui/team-card";

export function Team() {
  return (
    <section
      id="team"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-12 md:py-32"
    >
      <header className="mb-16 grid gap-10 md:grid-cols-[auto_1fr] md:gap-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle md:pt-3">
          02 · Team
        </span>
        <div>
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            The three of us.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A frontend lead, a backend engineer, and a designer. All graduating Spring
            2028.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
