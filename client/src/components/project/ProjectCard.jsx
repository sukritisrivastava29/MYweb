import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Tag from "../ui/Tag";

export default function ProjectCard({ project, reverse }) {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`grid lg:grid-cols-[1.15fr_0.85fr] gap-24 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.015,
          }}
          transition={{
            duration: 0.35,
          }}
          className="group"
        >
          <div className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
          

            <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        

        <div className="relative">

         

          <span className="absolute -top-12 left-0 text-[140px] font-black leading-none text-neutral-100 -z-10 select-none">
            {project.number}
          </span>

          {project.featured && (
            <div className="mb-5">
              <Badge>Featured Project</Badge>
            </div>
          )}

          <h3 className="text-5xl font-black tracking-tight text-neutral-900">
            {project.title}
          </h3>

          <p className="mt-3 text-xl text-orange-500 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-8 text-lg leading-9 text-neutral-600 max-w-xl">
            {project.description}
          </p>

        

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-neutral-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

        

          <div className="mt-10 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          

          <div className="mt-12 flex flex-wrap items-center gap-4">

            <Button to={`/projects/${project.id}`}>
              View Case Study
              <ArrowUpRight
                size={18}
                className="ml-2"
              />
            </Button>

            <Button
              href={project.live}
              variant="secondary"
            >
              Live Demo
            </Button>

            <Button
              href={project.github}
              variant="secondary"
            >
              GitHub
            </Button>

          </div>
        </div>
      </motion.div>


      <div className="mt-24 border-b border-neutral-200" />
    </section>
  );
}