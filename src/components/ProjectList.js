import Image from "next/image";
import Link from "next/link";
import SmartLink from "./SmartLink";

const thumbFor = (project) => project.thumb || project.cover?.[0] || project.gallery[0];

export default function ProjectList({ projects }) {
  return (
    <ul className="project-list">
      {projects.map((project) => {
        const thumb = thumbFor(project);
        const evidence = project.links.find((link) => link.href !== `/projects/${project.slug}`);
        return (
          <li key={project.slug} id={`project-${project.slug}`}>
            <Image
              className="project-thumb"
              src={thumb.src}
              alt=""
              width={thumb.width}
              height={thumb.height}
              sizes="132px"
              style={{ objectPosition: project.thumbPosition || "top" }}
            />
            <div className="project-list-main">
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary || project.oneLiner}</p>
            </div>
            <div className="project-list-side">
              <p>{project.listRole}</p>
              <p className="meta">{project.tech.join(", ")}</p>
            </div>
            <div className="project-list-link">
              {evidence && <SmartLink href={evidence.href}>{evidence.label}</SmartLink>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
