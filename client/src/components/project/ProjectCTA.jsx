import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ProjectCTA({ project }) {
  return (
    <section className="border-t border-neutral-200 bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black tracking-tight text-neutral-900">
            Like what you see?
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Explore the live application or dive into the source code to see
            how the project was built.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>

            <Button
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}