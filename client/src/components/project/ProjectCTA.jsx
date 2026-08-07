import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ProjectCTA() {
  return (
    <section className="py-24 border-t border-neutral-200">
      <Container>
        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-12 text-center">
          <h2 className="text-4xl font-black">
            Like what you see?
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Explore the live project or browse the source code.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button href="#">Live Demo</Button>
            <Button variant="secondary" href="#">
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}