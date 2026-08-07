import { ArrowLeft, Calendar, Clock3, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectHero({ project }) {
  return (
    <section className="pt-32 pb-20 bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-black"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mt-12 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              Project
            </p>

            <h1 className="mt-4 text-6xl font-black tracking-tight text-neutral-900">
              {project.title}
            </h1>

            <p className="mt-4 text-2xl font-medium text-orange-500">
              {project.subtitle}
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{project.year}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                <span>{project.duration}</span>
              </div>

              <div>
                <span className="font-medium">{project.role}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Live Demo
                <ExternalLink size={18} className="ml-2" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="group">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}