import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";

const workflow = [
  {
    number: "01",
    title: "User Input",
    description:
      "The user provides a question, request, or information through the application.",
  },
  {
    number: "02",
    title: "Context",
    description:
      "Relevant application data is collected and prepared to provide meaningful context.",
  },
  {
    number: "03",
    title: "AI Processing",
    description:
      "The request and context are sent to an AI model to generate an intelligent response.",
  },
  {
    number: "04",
    title: "Response",
    description:
      "The generated result is returned to the application and presented through the UI.",
  },
];

export default function AIWorkflow() {
  return (
    <Reveal>
      <div className="mt-24">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            AI Workflow
          </p>

          <h3 className="mt-4 text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            From user input to intelligent output.
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
            I connect AI models with real application data to create
            contextual and useful experiences.
          </p>
        </div>

        <div className="grid border-t border-neutral-300 md:grid-cols-4">
          {workflow.map((step, index) => (
            <div
              key={step.number}
              className="group relative border-b border-neutral-300 py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-wider text-neutral-400">
                  {step.number}
                </span>

                {index < workflow.length - 1 && (
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-neutral-300 transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </div>

              <h4 className="mt-8 text-xl font-medium tracking-tight text-neutral-900">
                {step.title}
              </h4>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}