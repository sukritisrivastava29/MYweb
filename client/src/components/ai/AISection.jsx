import { Sparkles, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import AIWorkflow from "./AIWorkflow";

const aiFeatures = [
  {
    number: "01",
    title: "AI Assistants",
    description:
      "Building conversational experiences that allow users to interact with applications using natural language.",
    technologies: ["Gemini API", "Node.js", "REST APIs"],
  },
  {
    number: "02",
    title: "AI-Powered Products",
    description:
      "Integrating AI into real-world applications to create smarter and more personalized user experiences.",
    technologies: ["React", "AI APIs", "Express"],
  },
  {
    number: "03",
    title: "Intelligent Automation",
    description:
      "Using AI and automation to process information, extract insights, and reduce repetitive tasks.",
    technologies: ["OCR", "AI APIs", "Node.js"],
  },
];

const aiProjects = [
  {
    title: "FinanceOS AI",
    description:
      "An AI-powered financial assistant that allows users to interact with their financial data through natural language.",
    technologies: ["Gemini", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Triply",
    description:
      "An AI-powered travel planner that generates personalized travel plans based on user preferences.",
    technologies: ["Gemini", "React", "Tailwind CSS"],
  },
];

export default function AISection() {
  return (
    <section id="ai" className="bg-[#FAFAF8] py-28">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              AI Integration
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 max-w-4xl">
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900 md:text-6xl">
              Building with AI,
              <br />
              not just talking about it.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              I integrate AI into full-stack applications to create
              smarter, more personalized, and more useful digital
              experiences.
            </p>
          </div>
        </Reveal>

        {/* AI Features */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {aiFeatures.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.1}>
              <div className="group border-t border-neutral-300 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    {feature.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-tight text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-neutral-600">
                  {feature.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {feature.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Workflow */}
        <AIWorkflow />

        {/* AI Projects */}
        <Reveal delay={0.2}>
          <div className="mt-28 border-t border-neutral-300 pt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              AI in my projects
            </p>

            <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h3 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                Real applications. Real use cases.
              </h3>

              <Sparkles
                size={28}
                strokeWidth={1.2}
                className="text-neutral-400"
              />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {aiProjects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-2xl font-medium tracking-tight text-neutral-900">
                      {project.title}
                    </h4>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-4 max-w-lg leading-7 text-neutral-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}