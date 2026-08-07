import { projects } from "../data/projects";

import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectTech from "../components/project/ProjectTech";
import ProjectFeatures from "../components/project/ProjectFeatures";
import ProjectChallenges from "../components/project/ProjectChallenges";
import ProjectTimeline from "../components/project/ProjectTimeline";
import ProjectCTA from "../components/project/ProjectCTA";

export default function Weather() {
  const project = projects.find((p) => p.id === "weather");

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Project not found.</h1>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectGallery project={project} />

      <ProjectTech project={project} />

      <ProjectFeatures project={project} />

      <ProjectChallenges project={project} />

      <ProjectTimeline project={project} />

      <ProjectCTA project={project} />
    </main>
  );
}