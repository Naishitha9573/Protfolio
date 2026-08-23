import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaChevronRight, FaEnvelope, FaXmark } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ activeSection, theme = "dark", onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const menuItems = useMemo(() => navigation, []);

  const handleNavigate = () => setMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface-strong)]/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent text-sm font-semibold text-[var(--text-primary)] shadow-[0_20px_60px_rgba(14,165,233,0.18)]">
            NK
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Portfolio</p>
            <h1 className="text-lg font-semibold text-[var(--text-primary)]">{personalInfo.name}</h1>
          </div>
        </a>

        <div className="hidden items-center gap-2 xl:flex">
          {menuItems.map((item) => (
              <a
              key={item.label}
              href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                className={`nav-link ${activeSection === item.href.slice(1) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3 py-2 text-xs text-[var(--text-muted)] lg:flex">
            <FaGithub className="text-[var(--text-primary)]" />
            <FaLinkedin className="text-[var(--text-primary)]" />
            <FaEnvelope className="text-[var(--text-primary)]" />
          </div>

          <button type="button" onClick={onToggleTheme} className="icon-button" aria-label="Toggle theme">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            className="icon-button xl:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[var(--border)] bg-[var(--surface-strong)]/95 px-4 py-4 backdrop-blur-2xl xl:hidden sm:px-6"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavigate}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                  className={`nav-link flex items-center justify-between ${activeSection === item.href.slice(1) ? "nav-link-active" : ""}`}
                >
                  <span>{item.label}</span>
                  <FaChevronRight className="text-xs" />
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;