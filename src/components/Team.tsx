import { teamMembers } from "../data/team";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <section id="team" className="bg-[var(--color-surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-lg">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
            Meet the team
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)]">
            The people behind the ideas, products and technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
