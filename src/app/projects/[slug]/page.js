import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import CaseContent from "@/components/CaseContent";
import Icon from "@/components/Icon";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Kris Hsu`,
      description: project.oneLiner,
      url: `/projects/${slug}`,
      images: [
        {
          url: project.gallery[0].src,
          width: project.gallery[0].width,
          height: project.gallery[0].height,
          alt: project.gallery[0].alt,
        },
      ],
    },
  };
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main" className="case-page shell">
      <Link href="/projects" className="text-link back-link">
        <span aria-hidden="true">←</span> All projects
      </Link>
      <header className="case-heading">
        <div className="eyebrow">
          {project.category}
          <span className="eyebrow-dot" />
          {project.status}
        </div>
        <h1>
          {project.title}
          <span className="blue">.</span>
        </h1>
        <p className="case-subtitle">{project.oneLiner}</p>
        <dl className="case-facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>
              {project.slug === "heyjarvis" || project.slug === "vcinity"
                ? "Focus"
                : "Project stack"}
            </dt>
            <dd>{project.tech.join(" / ")}</dd>
          </div>
          <div>
            <dt>Explore</dt>
            <dd>
              <a href="#project-gallery" className="text-link">
                Screenshots ↓
              </a>
            </dd>
          </div>
        </dl>
      </header>
      <div className="case-layout">
        <aside className="case-nav" aria-label="Case study contents">
          <span className="small-label">In this case</span>
          <nav>
            <a href="#overview">Overview</a>
            <a href="#project-gallery">The experience</a>
            <a href="#contribution">My contribution</a>
            <a href="#decisions">Design & decisions</a>
            {project.phases?.length > 0 && <a href="#evolution">Project evolution</a>}
            <a href="#outcome">Outcome & reflection</a>
          </nav>
          <span className="case-index">
            {String(index + 1).padStart(2, "0")} / 08
          </span>
        </aside>
        <div className="case-content">
          <CaseContent project={project} />
        </div>
      </div>
      <div className="next-project">
        <span className="eyebrow">Keep exploring</span>
        <Link href={`/projects/${next.slug}`}>
          <span>{next.title}</span>
          <Icon name="arrow" size={34} />
        </Link>
        <p>{next.oneLiner}</p>
      </div>
    </main>
  );
}
