import { motion } from "framer-motion";

const projects = [
  {
    title: "FinanceOS",
    description:
      "A full-stack personal finance tracker with secure authentication, expense management, analytics dashboard, receipt scanning, and AI-powered financial insights.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/financeos.png",
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
  },
  {
    title: "Triply AI",
    description:
      "An AI-powered travel planner that creates personalized itineraries based on destination, budget, and travel preferences using the Gemini API.",
    tech: [
      "React",
      "Tailwind CSS",
      "Gemini API",
    ],
    image: "/projects/triply.png",
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides real-time weather conditions, forecasts, and location-based search using external APIs.",
    tech: [
      "React",
      "JavaScript",
      "OpenWeather API",
      "CSS",
    ],
    image: "/projects/weather.png",
    github: "YOUR_GITHUB_LINK",
    live: "YOUR_LIVE_LINK",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-16 bg-[#faf8f5]"
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
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2f241b] mt-3">
            Featured Projects
          </h2>

          <p className="mt-5 text-[#6b6258] max-w-2xl mx-auto leading-8">
            A collection of projects showcasing my expertise in full-stack
            development, AI integration, and creating modern web experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              
              <div className="h-56 bg-[#ece4dc] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

             
              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#2f241b]">
                  {project.title}
                </h3>

                <p className="text-[#6b6258] mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-[#f3ece4] text-[#5d4735]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl border border-[#8b6b4a] hover:bg-[#8b6b4a] hover:text-white transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-[#8b6b4a] text-white hover:bg-[#6e5438] transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;