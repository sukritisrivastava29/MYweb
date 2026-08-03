import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#141414] text-white"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="uppercase tracking-[5px] text-[#E66A1F] font-semibold">
            Contact
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-none">
            Let's create
            <br />
            something meaningful.
          </h2>

          <p className="mt-10 max-w-2xl mx-auto text-lg leading-9 text-neutral-300">
            I'm currently looking for software engineering internships,
            freelance opportunities, and exciting collaborations.
            If you have an opportunity or simply want to connect,
            I'd love to hear from you.
          </p>

          <div className="mt-16 flex flex-col gap-8">

            <a
              href="mailto:yourmail@gmail.com"
              className="text-2xl md:text-3xl font-semibold hover:text-[#E66A1F] transition"
            >
              yourmail@gmail.com
            </a>

            <div className="flex justify-center gap-10 uppercase tracking-[3px] text-sm">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E66A1F] transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E66A1F] transition"
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E66A1F] transition"
              >
                Resume
              </a>

            </div>

          </div>

          <div className="mt-20 border-t border-neutral-700 pt-12">

            <p className="text-neutral-500 uppercase tracking-[4px] text-sm">
              Available for Internships • Open to Collaboration • Remote Friendly
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;