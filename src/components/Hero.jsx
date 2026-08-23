import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "Software Development Intern",
        "Backend Development",
        "Machine Learning",
        "Full-Stack Web Applications",
      ],
      typeSpeed: 36,
      backSpeed: 22,
      backDelay: 1100,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="space-y-7 lg:space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            Available for internships
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="space-y-5"
          >
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
              {personalInfo.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              {personalInfo.headline}
            </p>
            <p className="max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              {personalInfo.subtitle}
            </p>
            <p className="max-w-2xl text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/85">
              Building scalable, AI-enabled software experiences for internships and early-career engineering roles.
            </p>
          </motion.div>

          <div className="glass-card flex max-w-3xl flex-wrap items-center gap-4 p-4 sm:p-5">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <span ref={typingRef} />
            </span>
            <span className="rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm text-[var(--text-muted)]">
              Vizianagaram, Andhra Pradesh
            </span>
            <span className="rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm text-[var(--text-muted)]">
              CGPA 8.9/10.0
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href={personalInfo.resume} className="btn-primary" download>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`} target="_blank" rel="noreferrer" className="social-chip">
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-chip">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-chip">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>

          <a href="#about" className="inline-flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-primary)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-cyan-300">
              <FaArrowDown />
            </span>
            Scroll to explore the portfolio
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="glass-card-strong relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700" />

            <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_rgba(15,23,42,0.95))] shadow-[0_24px_70px_rgba(15,23,42,0.35)]">
                <div className="absolute inset-4 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(59,130,246,0.2))] text-5xl font-semibold text-white/90 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                    NK
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Professional tagline</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">Software Development Intern focused on AI-powered web applications and scalable backend systems.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="glass-card p-4">
                    <p className="text-sm text-[var(--text-muted)]">Email</p>
                    <p className="mt-2 break-all text-sm font-medium text-[var(--text-primary)]">{personalInfo.email}</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-sm text-[var(--text-muted)]">Phone</p>
                    <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Education", value: "B.Tech CSBS" },
                { label: "CGPA", value: "8.9/10.0" },
                { label: "Location", value: personalInfo.location },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;