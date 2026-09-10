import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl bg-[var(--color-accent-deep)] px-8 py-16 text-center sm:px-16"
      >
        <h2 className="font-display text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
          {t.cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-white/70">
          {t.cta.body}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[var(--color-accent-deep)] transition-colors hover:bg-[var(--color-accent-soft)]"
        >
          {t.cta.button}
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
