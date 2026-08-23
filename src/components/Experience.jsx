import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/portfolioData";
import { FaCode, FaCloud, FaRobot, FaShieldHalved, FaDatabase } from "react-icons/fa6";

const achievementBadges = [
  { label: "Full-stack delivery", icon: FaCode },
  { label: "Containerized workflows", icon: FaCloud },
  { label: "AI-assisted development", icon: FaRobot },
  { label: "Secure authentication", icon: FaShieldHalved },
  { label: "Data-backed systems", icon: FaDatabase },
];

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internship timeline"
          description="Each internship card preserves the companies, roles, duration, responsibilities, and technologies from the resume."
        />

        <div className="relative mt-12 space-y-6">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-sky-500/30 to-transparent lg:block" />
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="relative grid gap-5 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:grid-cols-[auto_1fr] lg:p-8"
            >
              <div className="flex items-start gap-4 lg:pr-4">
                <div className="mt-1 hidden h-5 w-5 rounded-full border-4 border-[var(--bg)] bg-cyan-300 lg:block" />
                <div className="glass-card flex min-w-0 items-center gap-4 p-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-lg font-semibold text-cyan-200">
                    {experience.company.split(" ").map((word) => word[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">{experience.duration}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">{experience.company}</h3>
                    <p className="mt-2 text-base text-cyan-200">{experience.role}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <ul className="grid gap-3 text-[var(--text-secondary)]">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {achievementBadges.slice(0, index === 0 ? 4 : 3).map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <span key={badge.label} className="skill-pill">
                        <Icon className="text-[0.7rem]" />
                        {badge.label}
                      </span>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="skill-pill">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;