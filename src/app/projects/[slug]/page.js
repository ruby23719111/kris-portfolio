import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import Gallery from "@/components/Gallery";
import EvidenceLinks from "@/components/EvidenceLinks";
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
            <a href="#outcome">Outcome & reflection</a>
          </nav>
          <span className="case-index">
            {String(index + 1).padStart(2, "0")} / 08
          </span>
        </aside>
        <div className="case-content">
          <section id="overview">
            <span className="eyebrow">01 / The context</span>
            <h2>The idea behind the work.</h2>
            {project.overview.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
          <section id="project-gallery">
            <div className="case-section-heading">
              <span className="eyebrow">02 / The experience</span>
              <h2>A closer look.</h2>
            </div>
            <Gallery
              images={project.gallery}
              title={project.title}
              tone={project.tone}
              expandable
              priority
            />
            <EvidenceLinks links={project.evidence} detailed />
          </section>
          <section id="contribution">
            <span className="eyebrow">03 / My contribution</span>
            <h2>Where I contributed.</h2>
            <div className="contribution-cards">
              {project.contributions.map((item, i) => (
                <div className="contribution-item" key={item.title}>
                  <span className="contribution-number">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="decisions">
            <span className="eyebrow">04 / Design & decisions</span>
            <h2>The thinking in the details.</h2>
            {project.decisions.map((item) => (
              <div className="decision" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
          <section id="outcome">
            <span className="eyebrow">05 / Outcome & reflection</span>
            <h2>What came out of it.</h2>
            <p>{project.outcome}</p>
            <div className="reflection">
              <span className="small-label">What I take forward</span>
              <p>{project.takeaway}</p>
            </div>
            <h3>Context & next steps</h3>
            <p>{project.limitations}</p>
          </section>
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
