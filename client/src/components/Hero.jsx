import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">
            SOFTWARE ENGINEER
          </p>

          <h1 className="section-title">
            Building
            <br />
            digital
            <br />
            experiences.
          </h1>

          <p className="section-text">
            Hi, I'm <strong>Sukriti Srivastava</strong>, a Full Stack Developer
            passionate about building scalable web applications with the MERN
            stack while exploring AI-powered products and solving real-world
            problems through clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Resume
            </a>

          </div>

          <div className="flex gap-10 mt-16 text-sm uppercase tracking-[3px]">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:youremail@gmail.com">
              Email
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Accent circle */}

            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#E66A1F] rounded-full"></div>

            {/* Main illustration */}

            <div className="w-[420px] h-[420px] rounded-full border-2 border-[#111] bg-white flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl mb-4">
                  💻
                </div>

                <h3 className="font-bold text-xl">
                  YOUR
                </h3>

                <p className="uppercase tracking-[5px] text-sm mt-2">
                  Illustration
                </p>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;