import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
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
          Have an idea? Let's build it.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-white/70">
          Tell us what you're building and let's create something meaningful
          together.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[var(--color-accent-deep)] transition-colors hover:bg-[var(--color-accent-soft)]"
        >
          Start a Conversation
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
