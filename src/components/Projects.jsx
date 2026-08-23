import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const uniqueTech = new Set();
    projects.forEach((project) => project.technologies.forEach((tech) => uniqueTech.add(tech)));
    return ["All", ...Array.from(uniqueTech)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected project highlights"
          description="Projects are organized with filtering so the strongest technologies are easy to scan."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`nav-link ${activeFilter === filter ? "nav-link-active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card-strong overflow-hidden p-0"
            >
              <div className="grid min-h-full gap-0">
                <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(135deg,rgba(34,211,238,0.28),rgba(59,130,246,0.16),rgba(15,23,42,0.85))] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%)]" />
                  <div className="relative flex h-full items-end justify-between">
                    <div className="max-w-[72%] rounded-3xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/80">Project preview</p>
                      <p className="mt-2 text-lg font-semibold text-white">{project.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/75">{project.summary}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white/90">
                      <FaArrowUpRightFromSquare />
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-6 sm:p-7">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                    <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">{project.summary}</p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">Key features</p>
                    <ul className="mt-4 space-y-3 text-[var(--text-secondary)]">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3 leading-7">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="skill-pill">
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github || project.demo ? (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="btn-secondary"
                        >
                          <FaGithub />
                          View on GitHub
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary">
                          <FaArrowUpRightFromSquare />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  ) : project.githubPlaceholder ? (
                    <span className="skill-pill mt-2" title="Add the project repository URL in portfolioData.js">
                      <FaGithub />
                      {project.githubPlaceholder}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;