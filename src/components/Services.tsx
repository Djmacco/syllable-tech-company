import { motion } from "framer-motion";
import { Globe, Smartphone, Cpu, BrainCircuit, PenTool, Layers } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [Globe, Smartphone, Cpu, BrainCircuit, PenTool, Layers];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="bg-[var(--color-surface)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-lg">
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
            {t.services.heading}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: "easeOut" }}
                className="group bg-[var(--color-bg)] p-7 transition-colors hover:bg-[var(--color-accent-soft)]"
              >
                <Icon size={22} className="text-[var(--color-accent)]" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-[17px] font-semibold">{service.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-muted)]">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
