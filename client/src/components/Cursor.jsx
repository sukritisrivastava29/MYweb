import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (
        target.closest(
          "button, a, input, textarea, select, [data-cursor='hover']"
        )
      ) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    const leaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", leaveWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", leaveWindow);
    };
  }, []);

  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - (hover ? 22 : 16),
          y: position.y - (hover ? 22 : 16),
          width: hover ? 44 : 32,
          height: hover ? 44 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="fixed top-0 left-0 rounded-full border border-[#8b6b4a] pointer-events-none z-[9999]"
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#8b6b4a] pointer-events-none z-[9999]"
      />
    </>
  );
}

export default Cursor;