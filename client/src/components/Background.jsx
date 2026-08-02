import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f7f3ee]">
      {/* Top Blob */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#d6b89d]/40 blur-3xl"
      />

      {/* Right Blob */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 -right-28 h-[420px] w-[420px] rounded-full bg-[#b08968]/20 blur-3xl"
      />

      {/* Bottom Blob */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#e6d5c3]/40 blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:70px_70px]" />
    </div>
  );
}

export default Background;