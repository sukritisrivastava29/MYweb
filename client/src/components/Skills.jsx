import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#141414] text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[5px] text-[#E66A1F] font-semibold">
            Skills
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none">
            Technologies
            <br />
            I work with.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            I enjoy building modern, scalable web applications using the MERN
            stack while continuously learning new technologies and best
            practices.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-neutral-700 p-8"
            >
              <h3 className="text-3xl font-bold mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-600 px-5 py-2 text-sm uppercase tracking-wider hover:bg-[#E66A1F] hover:border-[#E66A1F] transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;