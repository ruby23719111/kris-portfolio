import Link from "next/link";
import Gallery from "./Gallery";
import Icon from "./Icon";
import ProjectDetails from "./ProjectDetails";
export default function ProjectCard({ project, index, inline = false }) {
  const Heading = inline ? "h3" : "h2";
  return (
    <article
      className={`project-card ${inline ? "home-project-card" : ""}`}
      id={inline ? `project-${project.slug}` : undefined}
    >
      <Gallery
        images={project.gallery}
        title={project.title}
        tone={project.tone}
        compact
        priority={!inline && index < 2}
        expandable={inline}
      />
      <div className="project-card-body">
        <div className="eyebrow">
          <span>{project.category}</span>
          <span className="eyebrow-dot" />
          {project.status}
        </div>
        <Heading>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
            <Icon name="external" size={22} />
          </Link>
        </Heading>
        <p>{project.oneLiner}</p>
        <div className="card-role">
          <span>My role</span>
          {project.role}
        </div>
        <ul className="tags" aria-label="Technologies and skills">
          {project.tech.slice(0, 3).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="text-link case-link"
        >
          {inline ? "Standalone case study" : "View case study"}{" "}
          <Icon size={18} />
        </Link>
      </div>
      {inline && <ProjectDetails project={project} />}
    </article>
  );
}
