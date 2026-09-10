import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="max-w-lg">
        <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[38px]">
          Selected work
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
