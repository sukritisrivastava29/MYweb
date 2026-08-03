import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = (e) => {
      const element = e.target.closest(
        "a, button, input, textarea"
      );

      setHover(!!element);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <>
     

      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: hover ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="fixed top-0 left-0 z-[9999] w-8 h-8 border border-[#E66A1F] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

     
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 40,
        }}
        className="fixed top-0 left-0 z-[9999] w-2.5 h-2.5 bg-[#E66A1F] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}

export default Cursor;