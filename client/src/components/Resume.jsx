import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="resume"
      className="py-24 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-[#8b6b4a] font-medium">
            Resume
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#2f241b]">
            Let's Work Together
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#6b6258] leading-8">
            Interested in my work? Feel free to view or download my latest
            resume to learn more about my skills, projects, and experience.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-[#e6ddd4]"
          >
            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-full"
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#2f241b]">
              Software Engineer
            </h3>

            <p className="mt-6 text-[#6b6258] leading-8">
              My resume highlights my experience in MERN Stack development,
              AI-powered applications, Data Structures & Algorithms, and
              full-stack web development.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "MERN Stack",
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "Tailwind CSS",
                "DSA",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#f3ece4] text-[#5a4634]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-full bg-[#8b6b4a] text-white hover:bg-[#705236] transition"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-7 py-4 rounded-full border border-[#8b6b4a] hover:bg-[#8b6b4a] hover:text-white transition"
              >
                Download
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Resume;