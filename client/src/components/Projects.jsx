import { projects } from "../data/projects";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";

import ProjectCard from "./project/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#FAFAF8] py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="Featured Work"
          title={
            <>
              Projects that
              <br />
              solve real problems.
            </>
          }
        />

        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.1}
          >
            <ProjectCard
              project={project}
              reverse={index % 2 !== 0}
            />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}