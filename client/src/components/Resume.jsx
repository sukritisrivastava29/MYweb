import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";

function Resume() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs",
    "DSA",
    "Git",
    "AI",
  ];

  return (
    <section
      id="resume"
      className="min-h-screen bg-white flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[6px] text-orange-500 text-sm mb-4">
              Resume
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-none text-black">
              Engineering
              <br />
              Journey.
            </h2>

            <div className="w-24 h-[2px] bg-orange-500 my-8"></div>

            <p className="text-gray-600 text-lg leading-9 max-w-xl">
              I enjoy turning ideas into thoughtful digital products through
              clean engineering and purposeful design. My work reflects a
              commitment to continuous learning across full-stack development,
              AI-powered applications, and problem solving, while building
              software that is scalable, maintainable, and intuitive.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition duration-300"
                >
                  {skill}
                </span>
              ))}

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-black px-8 py-4 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FiExternalLink size={18} />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 border border-black px-8 py-4 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FiDownload size={18} />
                Download
              </a>

            </div>

          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >

            

            <span className="absolute top-10 left-8 w-3 h-3 rounded-full bg-orange-500"></span>

            <span className="absolute top-1/3 right-4 w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="absolute bottom-12 left-14 w-2 h-2 rounded-full bg-orange-500"></span>

            <span className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-orange-500"></span>

            <img
              src="/illustrations/resume.png"
              alt="Resume Illustration"
              className="w-full max-w-[520px] object-contain"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Resume;