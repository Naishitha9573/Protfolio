import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";
import { personalInfo } from "../data/portfolioData";

const Education = lazy(() => import("../components/Education"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Certifications = lazy(() => import("../components/Certifications"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const sectionIds = ["home", "about", "education", "skills", "experience", "projects", "certifications", "contact"];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (!visibleSections.length) {
          return;
        }

        const highest = visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        setActiveSection(highest.target.id);
      },
      { threshold: [0.15, 0.3, 0.5, 0.7], rootMargin: "-18% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function useSeo() {
  useEffect(() => {
    document.title = `${personalInfo.name} | Portfolio`;

    const description = "Professional portfolio of Naishitha Kandukuri featuring software development, machine learning, full-stack development, and cloud technologies.";
    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const nextMeta = document.createElement("meta");
      nextMeta.name = "description";
      nextMeta.content = description;
      document.head.appendChild(nextMeta);
    }
  }, []);
}

function Home() {
  const activeSection = useActiveSection();
  useSeo();
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const pageMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
    }),
    [],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <AnimatePresence>{isLoading ? <LoadingScreen name={personalInfo.name} /> : null}</AnimatePresence>

      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={handleToggleTheme} />

      <motion.main
        initial={pageMotion.initial}
        animate={pageMotion.animate}
        exit={pageMotion.exit}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_bottom,_rgba(20,184,166,0.1),_transparent_28%)]" />
        <div className="pointer-events-none absolute left-10 top-24 -z-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute right-8 top-[36rem] -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse [animation-delay:1.5s]" />

        <Hero />
        <About />

        <Suspense fallback={<div className="section-shell" />}>
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </motion.main>
    </>
  );
}

export default Home;
