import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "C++",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "AI Integration",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111111] flex items-center py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
      
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[6px] text-orange-500 text-sm mb-4">
              Skills
            </p>

            <h2
  className="text-5xl lg:text-7xl font-black leading-none"
  style={{ color: "#ffffff" }}
>
  Built on
  <br />
  Strong Foundations.
</h2>

            <div className="w-24 h-[2px] bg-orange-500 my-8"></div>

            <p className="text-gray-300 text-lg leading-9 max-w-xl">
              I enjoy building across the full stack while continuously
              strengthening my understanding of software engineering
              fundamentals. Every project expands both my technical depth
              and my ability to solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    border border-gray-700
                    rounded-full
                    px-5 py-3
                    text-center
                    text-gray-200
                    hover:border-orange-500
                    hover:text-orange-500
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <span className="absolute top-8 left-10 w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-orange-500"></span>

            <img
              src="/illustrations/skills.png"
              alt="Skills Illustration"
              className="w-full max-w-[520px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;