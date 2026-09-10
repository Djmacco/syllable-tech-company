import { motion } from "framer-motion";
import { technologies } from "../data/technologies";
import { techIcons } from "../data/techIcons";
import { useLanguage } from "../i18n/LanguageContext";

export default function TechStack() {
  const { lang, t } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="max-w-lg">
        <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
          {t.techStack.heading}
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-muted)]">
          {t.techStack.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, i) => (
          <motion.div
            key={group.category.en}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: "easeOut" }}
          >
            <h3 className="text-[13.5px] font-medium text-[var(--color-muted)]">{group.category[lang]}</h3>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = techIcons[item];
                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-[13.5px] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {Icon && <Icon size={14} />}
                    {item}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
