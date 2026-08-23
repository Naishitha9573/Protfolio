import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";
import { FaCode, FaDocker, FaBrain, FaGithub, FaGraduationCap, FaPython, FaJava, FaRobot } from "react-icons/fa6";
import { SiFastapi, SiSpringboot, SiMysql, SiJavascript, SiNumpy, SiPandas, SiScikitlearn, SiGooglecloud, SiJupyter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const techIcons = {
  Python: FaPython,
  Java: FaJava,
  C: FaCode,
  "React.js": FaReact,
  "FastAPI": SiFastapi,
  "Spring Boot": SiSpringboot,
  HTML: FaCode,
  CSS: FaCode,
  JavaScript: SiJavascript,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  NLP: FaBrain,
  "TF-IDF": SiScikitlearn,
  SMOTE: SiScikitlearn,
  "Gemini API": FaRobot,
  "Generative AI": FaRobot,
  MySQL: SiMysql,
  SQL: SiMysql,
  JDBC: FaDatabase,
  Docker: FaDocker,
  "Google Cloud Platform": SiGooglecloud,
  Git: FaGithub,
  GitHub: FaGithub,
  "Data Structures & Algorithms": FaGraduationCap,
  OOP: FaGraduationCap,
  DBMS: FaDatabase,
  "Operating Systems": FaGraduationCap,
  "VS Code": VscVscode,
  "Jupyter Notebook": SiJupyter,
  "Google Colab": FaBrain,
};

const skillLevels = {
  "Programming Languages": 94,
  "Web Development": 92,
  "Machine Learning": 88,
  "AI & Generative AI": 86,
  "Databases": 90,
  "Cloud & DevOps": 87,
  "Core Subjects": 84,
  "Development Tools": 83,
};

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Grouped skill matrix"
          description="All skill groups are based on the resume and organized into a cleaner portfolio presentation."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className="glass-card group h-full p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-105">
                    <Icon className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">{group.title}</p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skillLevels[group.title] || 80}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const TechIcon = techIcons[item];

                    return (
                      <span key={item} className="skill-pill">
                        {TechIcon ? <TechIcon className="text-xs" /> : null}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;