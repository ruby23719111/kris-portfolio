import Link from "next/link";
import Gallery from "./Gallery";
import Icon from "./Icon";
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <Gallery
        images={project.gallery}
        title={project.title}
        tone={project.tone}
        compact
        priority={index < 2}
      />
      <div className="project-card-body">
        <div className="eyebrow">
          <span>{project.category}</span>
          <span className="eyebrow-dot" />
          {project.status}
        </div>
        <h2>
          <Link href={`/projects/${project.slug}`}>
            {project.title}
            <Icon name="external" size={22} />
          </Link>
        </h2>
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
          View case study <Icon size={18} />
        </Link>
      </div>
    </article>
  );
}
