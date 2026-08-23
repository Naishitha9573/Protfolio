import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="max-w-3xl text-base sm:text-lg text-[var(--text-muted)] leading-8">{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
