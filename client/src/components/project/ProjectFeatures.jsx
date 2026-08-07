import {
  ScanLine,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  FileText,
  Wallet,
} from "lucide-react";

import Container from "../ui/Container";

const icons = {
  "OCR Receipt Scanner": ScanLine,
  "AI Financial Insights": BrainCircuit,
  "Interactive Analytics": BarChart3,
  "Secure Authentication": ShieldCheck,
  "PDF Reports": FileText,
  "Expense Management": Wallet,
};

export default function ProjectFeatures({ project }) {
  const { features } = project;

  return (
    <section className="border-t border-neutral-200 bg-white py-28">
      <Container>
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Key Features
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            Designed for real-world usability
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Every feature in {project.hero.title} was designed to solve a
            practical problem while keeping the experience fast, intuitive,
            and accessible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = icons[feature.title] || Wallet;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">
                  <Icon
                    size={30}
                    className="text-orange-500 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-neutral-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}