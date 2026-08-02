import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Code2 size={28} />,
      title: "Frontend",
      desc: "Crafting responsive and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.",
    },
    {
      icon: <Database size={28} />,
      title: "Backend",
      desc: "Building scalable REST APIs with Node.js, Express, MongoDB, authentication, and cloud deployment.",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "Problem Solving",
      desc: "Passionate about DSA, clean architecture, and developing efficient solutions for real-world challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-sm text-[#8b6b4a] mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-[#2d2015]">
            Building software that is
            <span className="text-[#8b6b4a]"> useful, scalable, </span>
            and elegant.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#5d5248]">
            I'm <span className="font-semibold">Sukriti Srivastava</span>, a
            final-year Electronics & Communication Engineering student with a
            strong interest in Full Stack Development and AI-powered
            applications.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#5d5248]">
            I enjoy transforming ideas into polished digital experiences while
            writing clean, maintainable code. Whether it's developing MERN
            applications, solving DSA problems, or experimenting with AI, I
            constantly look for opportunities to learn and improve.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-white/70 backdrop-blur-lg border border-[#d9c8b6] rounded-xl px-5 py-4">
              <h3 className="text-3xl font-bold text-[#8b6b4a]">10+</h3>
              <p className="text-[#5d5248] text-sm mt-1">
                Projects Completed
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg border border-[#d9c8b6] rounded-xl px-5 py-4">
              <h3 className="text-3xl font-bold text-[#8b6b4a]">100+</h3>
              <p className="text-[#5d5248] text-sm mt-1">
                DSA Problems Solved
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-[#d9c8b6] bg-white/70 backdrop-blur-xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#8b6b4a] text-white mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#2d2015] mb-3">
                {card.title}
              </h3>

              <p className="text-[#5d5248] leading-7">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;