import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
        >

          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Full Stack Developer
          </p>

          <h1 className="text-6xl lg:text-8xl font-extrabold mt-6 leading-tight">
            Hi,
            <br />
            I'm
            <span className="gradient"> Sukriti.</span>
          </h1>

          <p className="mt-8 text-slate-400 text-xl leading-9 max-w-xl">
            I build scalable web applications using
            React, Node.js, Express and MongoDB while
            exploring AI-powered products and writing
            clean, maintainable code.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition"
            >
              Resume
            </a>

          </div>

          <div className="flex gap-8 mt-12 text-slate-400">

            <a href="https://github.com/yourusername">
              GitHub
            </a>

            <a href="https://linkedin.com/in/yourusername">
              LinkedIn
            </a>

            <a href="mailto:youremail@gmail.com">
              Email
            </a>

          </div>

        </motion.div>



        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.9 }}
        >

          <div className="glass rounded-3xl p-8 shadow-2xl">

            <div className="flex gap-2 mb-6">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <p className="text-slate-500 mb-6">
              developer.js
            </p>

<pre className="text-sm lg:text-base leading-9 overflow-x-auto">
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

  currentlyLearning: [
    "RAG",
    "System Design"
  ],

  leetcode: "50+ Problems",

  status: "Open to Internship"
};

developer.buildAmazingThings();`}
</pre>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;