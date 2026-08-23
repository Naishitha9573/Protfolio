import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-transparent" style={{ scaleX }}>
      <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700" />
    </motion.div>
  );
}

export default ScrollProgress;
