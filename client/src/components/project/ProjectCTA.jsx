import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ProjectCTA({ project }) {
  return (
    <section className="border-t border-neutral-200 bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            What's next?
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-neutral-900">
            Like what you see?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Explore the live project or browse the source code to see how it
            was built.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Project
            </Button>

            <Button
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              View Source Code
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}