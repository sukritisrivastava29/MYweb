import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FAFAF8] flex items-center justify-center">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          SUKRITI.
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.6 }}
          className="h-[2px] bg-[#E66A1F] mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="mt-6 uppercase tracking-[6px] text-sm text-neutral-500"
        >
          Loading Portfolio
        </motion.p>

      </div>

    </div>
  );
}

export default Loader;