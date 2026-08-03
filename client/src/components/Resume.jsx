import { motion } from "framer-motion";

function Resume() {
  const highlights = [
    "MERN Stack Development",
    "AI-Powered Full Stack Projects",
    "100+ DSA Problems Solved",
    "Responsive UI & REST APIs",
  ];

  return (
    <section
      id="resume"
      className="py-24 px-6 lg:px-16 bg-[#fcfaf7]"
    >
      <div className="max-w-7xl mx-auto">

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-[#8b6b4a] font-semibold">
            Resume
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#2b2118]">
            Available for Software Engineering Internships
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[#6b6258] leading-8 text-lg">
            I'm passionate about building scalable full-stack applications,
            solving challenging problems, and creating products with clean,
            modern user experiences. My resume highlights my technical skills,
            projects, leadership experience, and achievements.
          </p>
        </motion.div>

   
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

     
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group block"
          >
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-[#e6ddd4]">

              <img
                src="/resume-preview.png"
                alt="Resume Preview"
                className="w-full transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="bg-[#f7f3ee] px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#2b2118]">
                    Resume Preview
                  </h3>

                  <p className="text-sm text-[#7a6c5f]">
                    Click to view the complete resume
                  </p>
                </div>

                <span className="text-[#8b6b4a] text-2xl">
                  ↗
                </span>
              </div>

            </div>
          </motion.a>

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#2b2118]">
              Why Work With Me?
            </h3>

            <p className="mt-6 text-[#6b6258] leading-8">
              I enjoy building scalable web applications with React, Node.js,
              Express, and MongoDB while continuously improving my problem
              solving skills through Data Structures & Algorithms. I'm always
              excited to learn new technologies and contribute to impactful
              products.
            </p>

            <div className="grid gap-4 mt-10">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-[#f5ede5] px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8b6b4a] text-white flex items-center justify-center text-lg">
                    ✓
                  </div>

                  <span className="text-[#4e4033] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#8b6b4a] text-white hover:bg-[#705236] transition duration-300"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-full border-2 border-[#8b6b4a] text-[#8b6b4a] hover:bg-[#8b6b4a] hover:text-white transition duration-300"
              >
                Download Resume
              </a>

            </div>

            <div className="mt-12 pt-8 border-t border-[#e8ddd1]">
              <p className="uppercase tracking-[4px] text-sm text-[#8b6b4a] font-semibold">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JavaScript",
                  "Tailwind CSS",
                  "Git",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-[#efe5db] text-[#5f5245]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Resume;