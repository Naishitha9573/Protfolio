import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description=""
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="glass-card-strong p-6 sm:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.5rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),rgba(59,130,246,0.12))] text-2xl font-semibold text-[var(--text-primary)] shadow-[0_20px_50px_rgba(37,99,235,0.14)]">
                SR
              </div>

              <div className="min-w-0">
                <p className="section-eyebrow">College</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{education.college}</h3>
                <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">{education.degree}</p>
              </div>
            </div>
          </motion.article>

          <div className="space-y-4">
            {["2024–2028", education.cgpa, "Machine Learning", "Full-Stack Development", "Cloud Technologies"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="glass-card flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Academic highlight</p>
                  <p className="mt-2 text-base font-semibold text-[var(--text-primary)]">{item}</p>
                </div>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10 sm:w-40">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width: `${72 + index * 5}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;