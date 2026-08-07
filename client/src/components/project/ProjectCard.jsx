import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Tag from "../ui/Tag";

export default function ProjectCard({ project, reverse }) {
  const technologies = [
    ...(project.techStack?.frontend || []),
    ...(project.techStack?.backend || []),
    ...(project.techStack?.database || []),
    ...(project.techStack?.ai || []),
    ...(project.techStack?.authentication || []),
    ...(project.techStack?.visualization || []),
    ...(project.techStack?.api || []),
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
   
      <motion.div
        whileHover={{ y: -8, scale: 1.015 }}
        transition={{ duration: 0.35 }}
        className="group"
      >
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <img
            src={project.hero.coverImage}
            alt={project.hero.title}
            className="h-[380px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="relative">
        <span className="absolute -top-10 left-0 -z-10 select-none text-[120px] font-black leading-none text-neutral-100">
          {project.hero.number}
        </span>

        {project.hero.featured && (
          <div className="mb-5">
            <Badge>Featured Project</Badge>
          </div>
        )}

        <h3 className="text-5xl font-black tracking-tight">
          {project.hero.title}
        </h3>

        <p className="mt-3 text-xl font-medium text-orange-500">
          {project.hero.subtitle}
        </p>

        <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
          {project.hero.description}
        </p>

        {project.features?.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-neutral-700">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button to={`/projects/${project.id}`}>
            View Case Study
            <ArrowUpRight size={18} className="ml-2" />
          </Button>

          <Button
            href={project.links.live}
            variant="secondary"
          >
            Live Demo
          </Button>

          <Button
            href={project.links.github}
            variant="secondary"
          >
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  );
}