import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const aboutParagraphs = [
  "Computer Science and Business Systems undergraduate with strong foundations in Machine Learning, Full-Stack Development, and Cloud Technologies.",
  "Experienced in building AI-powered web applications using React.js, FastAPI, Spring Boot, MySQL, Docker, and Generative AI.",
  "Seeking a Software Development, Backend Development, or Machine Learning internship where I can apply my technical skills to build scalable and impactful software solutions.",
];

const highlightedTerms = ["Machine Learning", "Full-Stack Development", "Cloud Technologies", "React.js", "FastAPI", "Spring Boot", "MySQL", "Docker", "Generative AI", "Software Development", "Backend Development"];

function highlightText(text, terms = highlightedTerms) {
  if (text == null || typeof text !== "string") {
    return text;
  }

  if (!terms.length) {
    return text;
  }

  const escapedTerms = terms
    .filter((term) => typeof term === "string" && term.trim())
    .sort((left, right) => right.length - left.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (!escapedTerms.length) {
    return text;
  }

  const matcher = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  const parts = text.split(matcher);

  return parts.map((part, index) => {
    const isHighlighted = highlightedTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase(),
    );

    if (isHighlighted) {
      return (
        <strong key={`${part}-${index}`} className="text-[var(--text-primary)]">
          {part}
        </strong>
      );
    }

    return part;
  });
}

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Career objective"
          description="Professional introduction based on the resume."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="glass-card-strong p-6 sm:p-8"
          >
            <div className="space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg sm:leading-9">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{highlightText(paragraph)}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "AI-powered web applications",
              "Full-stack engineering",
              "Scalable backend systems",
              "Internship-ready portfolio",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="glass-card p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">Focus</p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;