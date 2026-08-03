import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-300 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p className="uppercase tracking-[5px] text-[#E66A1F] text-sm font-semibold">
            Thanks for visiting
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none">
            Let's build
            <br />
            something great.
          </h2>

          <p className="mt-8 max-w-xl text-lg text-neutral-600 leading-8">
            I'm always interested in internships, exciting projects,
            and opportunities where I can learn, collaborate,
            and build impactful software.
          </p>

          <div className="flex flex-wrap gap-8 mt-12 uppercase tracking-[3px] text-sm">

            <a
              href="mailto:sukriti.srivastava2903@gmail.com"
              className="hover:text-[#E66A1F] transition"
            >
              Email
            </a>

            <a
              href="https://github.com/sukritisrivastava29"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E66A1F] transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sukritisrivastava29"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E66A1F] transition"
            >
              LinkedIn
            </a>

          </div>

          <div className="divider my-16"></div>

          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-500">

            <p>
              © {year} Sukriti Srivastava
            </p>

            <p>
              Designed & Developed by Sukriti
            </p>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;