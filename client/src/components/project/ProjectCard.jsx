import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Tag from "../ui/Tag";

export default function ProjectCard({
  project,
  reverse,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr] mb-40 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Browser Mockup */}
      <motion.div
        whileHover={{ y: -8 }}
        className="group"
      >
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div>
        <p className="text-[120px] font-black leading-none text-neutral-200">
          {project.number}
        </p>

        {project.featured && (
          <div className="mb-6">
            <Badge>Featured Project</Badge>
          </div>
        )}

        <h3 className="text-5xl font-black">
          {project.title}
        </h3>

        <p className="mt-3 text-xl text-orange-500">
          {project.subtitle}
        </p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          {project.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="border-l-2 border-orange-500 pl-3 text-sm text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button to={`/projects/${project.id}`}>
            View Case Study
            <ArrowUpRight className="ml-2" size={18} />
          </Button>

          <Button href={project.live} variant="secondary">
            Live Demo
          </Button>

          <Button href={project.github} variant="secondary">
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}