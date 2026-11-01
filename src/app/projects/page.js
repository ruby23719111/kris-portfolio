import ProjectList from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "All eight projects: mobile and web apps, AI integration and UX work, each with my role and links to the evidence.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <main id="main" className="container projects-page">
      <h1>All projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}
