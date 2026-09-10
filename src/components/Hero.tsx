import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Bar heights (%) forming a syllable-waveform — the one bold, deliberate
// visual moment on the page, tied directly to the company name.
const BARS = [28, 52, 38, 74, 46, 100, 60, 84, 34, 66, 42, 56];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-[42px] font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-[54px] lg:text-[60px]">
            Build. Innovate.
            <br />
            Scale.
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[var(--color-muted)]">
            Syllable Tech is a team of developers, designers and technology
            enthusiasts building modern digital solutions for businesses and
            organizations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[var(--color-accent)]"
            >
              Explore Our Team
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3.5 text-[15px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        <div className="relative flex h-56 items-end justify-center gap-[6px] sm:h-64 lg:h-72" aria-hidden="true">
          {BARS.map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${h}%`, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.045, ease: "easeOut" }}
              className="w-[6%] rounded-full"
              style={{
                background: i === 5 ? "var(--color-accent)" : i % 3 === 0 ? "var(--color-accent-deep)" : "var(--color-accent-soft)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
