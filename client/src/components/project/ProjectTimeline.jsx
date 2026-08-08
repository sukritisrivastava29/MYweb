import {
  Lightbulb,
  Palette,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

import Container from "../ui/Container";

const icons = [
  Lightbulb,
  Palette,
  Code2,
  Bug,
  Rocket,
];

export default function ProjectTimeline({ project }) {
  const timeline = [
    {
      title: "Planning",
      description:
        "Defined project requirements, user flow, database structure, and application architecture before development began.",
    },
    {
      title: "Design",
      description:
        "Designed a clean and responsive interface focused on usability and clear financial insights.",
    },
    {
      title: "Development",
      description:
        "Built the frontend, backend APIs, authentication system, database integration, AI features, and OCR pipeline.",
    },
    {
      title: "Testing & Optimization",
      description:
        "Debugged edge cases, improved responsiveness, optimized API calls, and refined the overall user experience.",
    },
    {
      title: "Deployment",
      description:
        "Deployed the frontend and backend, configured environment variables, and performed final production testing.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Development Journey
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            From idea to production
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Every project follows a structured development process,
            from planning and design to deployment and refinement.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-6 top-0 h-full w-px bg-neutral-300" />

          <div className="space-y-12">
            {timeline.map((step, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={step.title}
                  className="relative flex items-start gap-8"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1 rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}