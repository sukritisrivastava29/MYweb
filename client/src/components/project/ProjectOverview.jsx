import {
  Calendar,
  Clock3,
  User,
  CheckCircle2,
} from "lucide-react";

import Container from "../ui/Container";

export default function ProjectOverview({ project }) {
  const { hero, overview, techStack } = project;

  return (
    <section className="border-t border-neutral-200 bg-white py-28">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Overview
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
              {overview.heading}
            </h2>

            <div className="mt-10 space-y-7">
              {overview.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="sticky top-28 h-fit rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-8">
            <h3 className="text-xl font-bold text-neutral-900">
              Project Details
            </h3>

            <div className="mt-8 space-y-8">
              <div className="flex items-start gap-4">
                <Calendar
                  size={20}
                  className="mt-1 text-orange-500"
                />

                <div>
                  <p className="text-sm text-neutral-500">
                    Year
                  </p>

                  <p className="font-semibold text-neutral-900">
                    {hero.year}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock3
                  size={20}
                  className="mt-1 text-orange-500"
                />

                <div>
                  <p className="text-sm text-neutral-500">
                    Duration
                  </p>

                  <p className="font-semibold text-neutral-900">
                    {hero.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <User
                  size={20}
                  className="mt-1 text-orange-500"
                />

                <div>
                  <p className="text-sm text-neutral-500">
                    Role
                  </p>

                  <p className="font-semibold text-neutral-900">
                    {hero.role}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  size={20}
                  className="mt-1 text-orange-500"
                />

                <div>
                  <p className="text-sm text-neutral-500">
                    Status
                  </p>

                  <p className="font-semibold text-neutral-900">
                    {hero.status}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Tech Stack
              </p>

              <div className="mt-6 space-y-6">
                {Object.entries(techStack).map(([category, techs]) => {
                  if (!techs.length) return null;

                  return (
                    <div key={category}>
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700">
                        {category}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}