import { motion } from "framer-motion";

function Resume() {
  return (
    <section
      id="resume"
      className="py-32 bg-[#FAFAF8]"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[5px] text-[#E66A1F] font-semibold">
              Resume
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-bold leading-none">
              Let's work
              <br />
              together.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600 max-w-xl">
              I'm actively looking for software engineering internships where I
              can contribute, grow, and build impactful products. My resume
              highlights my projects, technical skills, and problem-solving
              experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="secondary-btn"
              >
                Download PDF
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="bg-white border border-neutral-300 shadow-xl w-[340px] rounded-sm overflow-hidden">

              {/* Header */}

              <div className="bg-[#111111] h-12 flex items-center px-5">

                <div className="flex gap-2">

                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                </div>

              </div>

              {/* Resume Preview */}

              <img
                src="/resume-preview.png"
                alt="Resume Preview"
                className="w-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Resume;