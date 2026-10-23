import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata = {
  title: "Projects",
  description:
    "Eight projects across mobile development, full-stack web applications, AI tools and UX design. See the product, my contribution and the evidence.",
  alternates: { canonical: "/projects" },
};
export default function Projects() {
  return (
    <main id="main" className="shell projects-page">
      <header className="page-heading">
        <span className="eyebrow">The project collection / 08</span>
        <h1>
          Ideas into
          <br />
          experiences<span className="blue">.</span>
        </h1>
        <p>
          Mobile apps, web applications and product explorations.
          <br />A closer look at what I worked on — and how I think.
        </p>
      </header>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
