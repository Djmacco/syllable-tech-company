import { motion } from "framer-motion";
import ImageSlot from "./ImageSlot";

const AREAS = [
  "Web development",
  "Mobile development",
  "Software engineering",
  "UI/UX design",
  "AI & machine learning",
  "Digital solutions",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
            We turn ideas into digital products.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[var(--color-muted)]">
            From a first sketch to something people rely on daily, we work
            across the full stack — design, engineering and infrastructure —
            so a product only has one team to answer to.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2.5 text-[14.5px] text-[var(--color-ink)]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {area}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <ImageSlot
            src="/images/team-1.jpg"
            alt="Member of the Syllable Tech team working at a desk"
            aspect="aspect-[3/4]"
            className="mt-8 group"
          />
          <ImageSlot
            src="/images/team-3.jpg"
            alt="Syllable Tech designer reviewing a product mockup"
            aspect="aspect-[3/4]"
            className="group"
          />
        </motion.div>
      </div>
    </section>
  );
}
