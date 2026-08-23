import { motion } from "framer-motion";

function LoadingScreen({ name }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-10 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-white/10 border-t-cyan-300" />
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--text-muted)]">Loading portfolio</p>
          <h1 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{name}</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
