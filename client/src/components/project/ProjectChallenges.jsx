import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ProjectChallenges({ project }) {
  if (!project.challenges || project.challenges.length === 0) return null;

  return (
    <section className="border-t border-neutral-200 bg-white py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Challenges
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            Engineering Challenges
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every feature introduced unique technical problems. These are some
            of the key challenges encountered during development and the
            solutions implemented to overcome them.
          </p>
        </div>

        <div className="space-y-10">
          {project.challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-10 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-3xl font-black text-neutral-900">
                  {challenge.title}
                </h3>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-red-500">
                    Challenge
                  </h4>

                  <p className="leading-8 text-neutral-600">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-bold text-green-600">
                    Solution
                  </h4>

                  <p className="leading-8 text-neutral-600">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}