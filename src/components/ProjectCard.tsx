import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImageSlot from "./ImageSlot";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08, ease: "easeOut" }}
      className="group"
    >
      <ImageSlot
        src={project.image}
        alt={`Preview screen of the ${project.name} product`}
        aspect="aspect-[16/10]"
      />

      <div className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[19px] font-semibold">{project.name}</h3>
          <a
            href={project.link}
            aria-label={`View the ${project.name} project`}
            className="mt-1 shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]"
          >
            <ArrowUpRight size={19} />
          </a>
        </div>
        <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-muted)]">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[11.5px] text-[var(--color-faint)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
