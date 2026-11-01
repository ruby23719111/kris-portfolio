import Link from "next/link";
import ProjectCover from "./ProjectCover";
import SmartLink from "./SmartLink";

export default function FeaturedProject({ project, priority = false }) {
  const caseHref = `/projects/${project.slug}`;
  const links = project.links.filter((link) => link.href !== caseHref);
  return (
    <article className="featured" id={`project-${project.slug}`} aria-labelledby={`title-${project.slug}`}>
      <Link href={caseHref} className="cover-link" tabIndex={-1} aria-hidden="true">
        <ProjectCover project={project} priority={priority} />
      </Link>
      <div className="featured-text">
        <div className="featured-intro">
          <h3 id={`title-${project.slug}`}>
            <Link href={caseHref}>{project.title}</Link>
          </h3>
          <p className="meta">{project.meta}</p>
          <p className="featured-summary">{project.oneLiner}</p>
        </div>
        <div className="featured-detail">
          <ul className="highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="meta">{project.tech.join(" · ")}</p>
          <div className="link-row">
            <Link href={caseHref} className="link-primary">
              Case study
            </Link>
            {links.map((link) => (
              <SmartLink key={link.href} href={link.href}>
                {link.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
