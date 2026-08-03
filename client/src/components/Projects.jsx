import { motion } from "framer-motion";

const projects = [
  {
    title: "FinanceOS",
    subtitle: "AI Powered Personal Finance Platform",
    description:
      "A full-stack finance management application that helps users track expenses, visualize spending habits, scan receipts using OCR, generate reports, and gain AI-powered financial insights.",
    image: "/financeos.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://github.com/yourusername/financeos",
    live: "https://financeos.vercel.app",
    dark: false,
  },
  {
    title: "Triply",
    subtitle: "AI Travel Planner",
    description:
      "An AI-powered travel planner that creates personalized itineraries, recommends destinations, and helps users organize memorable trips.",
    image: "/triply.png",
    technologies: [
      "React",
      "Tailwind",
      "Gemini API",
      "Firebase",
    ],
    github: "https://github.com/yourusername/triply",
    live: "https://triply.vercel.app",
    dark: true,
  },
  {
    title: "Weather Dashboard",
    subtitle: "Real-Time Weather Application",
    description:
      "A responsive weather dashboard providing current conditions, forecasts, and location-based weather updates through external APIs.",
    image: "/weather.png",
    technologies: [
      "React",
      "OpenWeather API",
      "Tailwind",
    ],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather.vercel.app",
    dark: false,
  },
];

function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.title}
          id={index === 0 ? "projects" : ""}
          className={`py-28 ${
            project.dark ? "bg-[#141414] text-white" : "bg-[#FAFAF8]"
          }`}
        >
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

            <div
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl border border-neutral-300 shadow-xl"
                />
              </motion.div>

              {/* Content */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="uppercase tracking-[5px] text-[#E66A1F] font-semibold">
                  Featured Project
                </p>

                <h2 className="text-5xl font-bold mt-5">
                  {project.title}
                </h2>

                <h3 className="text-xl mt-4 text-[#E66A1F]">
                  {project.subtitle}
                </h3>

                <p
                  className={`mt-8 leading-8 text-lg ${
                    project.dark ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 border rounded-full text-sm ${
                        project.dark
                          ? "border-neutral-600"
                          : "border-neutral-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 mt-12">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-[#E66A1F] transition"
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-[#E66A1F] transition"
                  >
                    GitHub →
                  </a>

                </div>

              </motion.div>
            </div>

          </div>
        </section>
      ))}
    </>
  );
}

export default Projects;