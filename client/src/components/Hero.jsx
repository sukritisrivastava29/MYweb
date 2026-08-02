import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-16 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[5px] text-[#8B6B4A] font-medium">
            Full Stack Developer
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-tight text-[#2F241B]">
            Building
            <br />
            Digital
            <span className="text-[#8B6B4A]"> Experiences.</span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-[#5B4A3A] h-10">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "AI Enthusiast",
                2000,
                "Open to Opportunities",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#6D6258]">
            Hi, I'm <span className="font-semibold">Sukriti Srivastava</span>.
            I build scalable full-stack applications using React, Node.js,
            Express, and MongoDB while exploring AI-powered products and clean,
            modern UI design.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-[#8B6B4A] text-white hover:bg-[#715437] transition"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-full border border-[#8B6B4A] hover:bg-[#8B6B4A] hover:text-white transition"
            >
              Resume
            </a>

          </div>

          <div className="flex gap-8 mt-10 text-[#6D6258]">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:youremail@gmail.com">
              Email
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-[#E8DED4] overflow-hidden">

            <div className="flex items-center gap-2 px-5 py-4 border-b bg-[#FAF7F4]">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>

              <span className="ml-4 text-sm text-gray-500">
                developer.js
              </span>
            </div>

            <div className="p-8 font-mono text-sm leading-8 text-[#3E3329]">
{`const developer = {
  name: "Sukriti",
  role: "MERN Developer",
  skills: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript"
  ],
  passion: "Building impactful products",
  currentlyLearning: "AI + RAG"
};

developer.buildAmazingThings();`}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;