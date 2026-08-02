import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Programming",
    skills: [
      "C++",
      "Python",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "OOP",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
      "Render",
      "Vercel",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-[#8b6b4a] font-medium">
            Expertise
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2f241b]">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#6b6258] leading-8">
            I enjoy building scalable web applications using modern technologies,
            writing clean code, and continuously learning new tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="bg-[#faf8f5] rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-[#2f241b] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#ede4db] text-[#5b4634] text-sm font-medium hover:bg-[#8b6b4a] hover:text-white transition"
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