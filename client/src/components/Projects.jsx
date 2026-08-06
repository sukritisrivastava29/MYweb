import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "financeos",
    number: "01",
    title: "FinanceOS",
    subtitle: "AI-Powered Personal Finance Platform",
    description:
      "A full-stack MERN finance platform featuring expense tracking, analytics, OCR receipt scanning, AI-powered insights, PDF reports, and secure authentication.",
    image: "/financeos.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Gemini",
    ],
    github: "https://github.com/yourusername/financeos",
    live: "https://financeos.vercel.app",
  },
  {
    id: "triply",
    number: "02",
    title: "Triply",
    subtitle: "AI Travel Planner",
    description:
      "Generate personalized travel itineraries using AI, discover destinations, and plan memorable journeys with an intuitive interface.",
    image: "/triply.png",
    technologies: ["React", "Tailwind", "Firebase", "Gemini API"],
    github: "https://github.com/yourusername/triply",
    live: "https://triply.vercel.app",
  },
  {
    id: "weather",
    number: "03",
    title: "Weather Dashboard",
    subtitle: "Real-Time Weather Application",
    description:
      "Responsive weather dashboard with live forecasts, location search, and beautiful visualizations powered by OpenWeather API.",
    image: "/weather.png",
    technologies: ["React", "Tailwind", "OpenWeather API"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-[#FAFAF8] text-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
      

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[6px] text-orange-500 text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight text-[#111111]">
  Projects that
  <br />
  solve real problems.
</h2>

          <div className="w-24 h-0.5 bg-orange-500 mt-8"></div>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-20 items-center mb-40 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            

            <div className="group">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            

            <div>
              <p className="text-7xl font-black text-neutral-200 mb-6">
                {project.number}
              </p>

              <h3 className="text-5xl font-bold">{project.title}</h3>

              <p className="mt-3 text-orange-500 text-xl">
                {project.subtitle}
              </p>

              <p className="mt-8 text-neutral-400 leading-8 text-lg">
                {project.description}
              </p>

             

              <div className="flex flex-wrap gap-3 mt-10">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-orange-500 hover:text-orange-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              

              <div className="flex flex-wrap items-center gap-5 mt-12">
                <Link
                  to={`/projects/${project.id}`}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition font-semibold"
                >
                  View Case Study
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}