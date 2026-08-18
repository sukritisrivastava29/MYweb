import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);

    if (!desktop) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const element = e.target.closest(
        "a, button, input, textarea, [role='button']"
      );

      setHover(!!element);
    };

    const handleClick = () => {
      setClick((prev) => prev + 1);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main splash */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: hover ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
        w-9 h-9 rounded-full
        border border-[#E66A1F]"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Orange core */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: hover ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 35,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
        w-2.5 h-2.5 rounded-full bg-[#E66A1F]"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Splash particles */}
      <AnimatePresence>
        {[...Array(7)].map((_, i) => {
          const angle = (i / 7) * Math.PI * 2;
          const distance = 28 + (i % 3) * 10;

          return (
            <motion.span
              key={`${click}-${i}`}
              initial={{
                x: position.x,
                y: position.y,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: position.x + Math.cos(angle) * distance,
                y: position.y + Math.sin(angle) * distance,
                scale: 1,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="fixed top-0 left-0 z-[9998]
              pointer-events-none
              w-1.5 h-1.5 rounded-full bg-[#E66A1F]"
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          );
        })}
      </AnimatePresence>
    </>
  );
}

export default Cursor;