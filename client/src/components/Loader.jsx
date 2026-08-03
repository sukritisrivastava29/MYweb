import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[#FAFAF8] flex items-center justify-center"
    >
      <div className="text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[8px] text-[#E66A1F] text-sm font-semibold"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-5 text-6xl md:text-8xl font-bold tracking-tight"
        >
          SUKRITI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="mt-5 text-neutral-500 tracking-[4px] uppercase text-sm"
        >
          Software Engineer
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="h-[2px] bg-[#E66A1F] mx-auto mt-10"
        />

      </div>
    </motion.div>
  );
}

export default Loader;