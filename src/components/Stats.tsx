import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 10, suffix: "+", label: "Team members" },
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Passion for technology" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="text-center"
          >
            <div className="font-display text-[34px] font-semibold text-[var(--color-ink)] sm:text-[40px]">
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-[13.5px] text-[var(--color-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
