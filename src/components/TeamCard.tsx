import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ImageSlot from "./ImageSlot";
import type { TeamMember } from "../data/team";
import { useLanguage } from "../i18n/LanguageContext";

export default function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { lang } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: "easeOut" }}
      className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-[0_16px_32px_-20px_rgba(20,23,31,0.25)]"
    >
      <ImageSlot src={member.image} alt={`Portrait of ${member.name}, ${member.role[lang]}`} aspect="aspect-[4/5]" />

      <div className="pt-4">
        <h3 className="font-display text-[17px] font-semibold">{member.name}</h3>
        <p className="text-[13.5px] text-[var(--color-accent)]">{member.role[lang]}</p>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-muted)]">{member.description[lang]}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--color-line)] px-2 py-1 font-mono text-[11px] text-[var(--color-muted)] transition-colors group-hover:border-[var(--color-accent-soft)] group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
          <a
            href={member.github}
            aria-label={`${member.name} on GitHub`}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={member.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <FaLinkedin size={17} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
