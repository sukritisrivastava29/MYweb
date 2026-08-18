import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AIAssistant from "../../ai/AIAssistant";

export default function AISection() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <section
      id="ai"
      className="bg-[#111111] py-28 !text-white"
    >
      <Container>

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              AI Integration
            </p>
          </div>

          <h2 className="!text-white max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            Building with AI,
            <br />
            not just talking about it.
          </h2>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-neutral-400">
            I integrate AI into full-stack applications to create smarter,
            more personalized, and more useful digital experiences.
          </p>
        </Reveal>

        {/* AI Assistant */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-orange-500 text-xl">✦</span>

                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                    Meet my AI
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold !text-white">
                  Curious about my work?
                </h3>

                <p className="mt-3 max-w-2xl text-neutral-400 leading-7">
                  Ask my AI assistant about my projects, technical skills,
                  experience, or how I built my applications.
                </p>
              </div>

              <button
                onClick={() => setIsAIOpen(true)}
                className="
                  shrink-0 inline-flex items-center justify-center gap-2
                  rounded-full bg-white px-7 py-4
                  text-sm font-medium text-neutral-950
                  transition-all duration-300
                  hover:bg-orange-500 hover:text-white
                "
              >
                Ask AI
                <ArrowUpRight size={17} />
              </button>

            </div>
          </div>
        </Reveal>

        {/* AI Capabilities */}
        <Reveal delay={0.25}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">

            <div className="bg-neutral-950 p-8">
              <p className="text-orange-500 text-sm mb-5">
                01
              </p>

              <h3 className="text-xl font-medium !text-white">
                AI-Powered Products
              </h3>

              <p className="mt-4 text-neutral-400 leading-7">
                Building applications where AI is part of the product
                experience rather than an isolated feature.
              </p>
            </div>

            <div className="bg-neutral-950 p-8">
              <p className="text-orange-500 text-sm mb-5">
                02
              </p>

              <h3 className="text-xl font-medium !text-white">
                Intelligent Interfaces
              </h3>

              <p className="mt-4 text-neutral-400 leading-7">
                Designing conversational and personalized interfaces that
                make applications easier to use.
              </p>
            </div>

            <div className="bg-neutral-950 p-8">
              <p className="text-orange-500 text-sm mb-5">
                03
              </p>

              <h3 className="text-xl font-medium !text-white">
                AI Integration
              </h3>

              <p className="mt-4 text-neutral-400 leading-7">
                Connecting AI APIs with React, Node.js and backend systems
                to turn ideas into working products.
              </p>
            </div>

          </div>
        </Reveal>

      </Container>

      <AIAssistant
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />
    </section>
  );
}