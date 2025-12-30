import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Projects</h1>
      <p style={{ marginTop: 12, lineHeight: 1.7, maxWidth: 720 }}>
        A curated selection of projects showcasing my work in React/Next.js and UX/UI. Each project includes links to demos,
        prototypes, and walkthroughs.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
