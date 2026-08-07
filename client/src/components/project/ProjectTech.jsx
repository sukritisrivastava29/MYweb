import {
  Code2,
  Server,
  Database,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import Container from "../ui/Container";

const icons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  ai: Sparkles,
  authentication: ShieldCheck,
  visualization: BarChart3,
  deployment: Server,
  api: Server,
};

export default function ProjectTech({ project }) {
  const { techStack } = project;

  return (
    <section className="border-t border-neutral-200 bg-[#FAFAF8] py-28">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Technology Stack
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            Built with modern technologies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            FinanceOS combines a modern frontend, scalable backend,
            AI-powered features, and secure authentication to deliver
            a complete full-stack experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(techStack).map(([category, items]) => {
            if (!items.length) return null;

            const Icon = icons[category] || Code2;

            return (
              <div
                key={category}
                className="rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                  <Icon
                    size={26}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold capitalize text-neutral-900">
                  {category}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}