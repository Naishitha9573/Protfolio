import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-5 w-5 rounded-full border border-cyan-300/70 bg-cyan-300/20 shadow-[0_0_24px_rgba(34,211,238,0.45)] lg:block"
      animate={{ x: position.x - 10, y: position.y - 10, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.25 }}
    />
  );
}

export default CustomCursor;
