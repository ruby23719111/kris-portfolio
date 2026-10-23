import Link from "next/link";
import Gallery from "@/components/Gallery";
import EvidenceLinks from "@/components/EvidenceLinks";
import Icon from "@/components/Icon";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectGrid from "@/components/ProjectGrid";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import { projects, featuredProjects } from "@/data/projects";
import { site, resumeHref, resumeLabel } from "@/data/site";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span className="availability">
            <span />
            Open to graduate & junior opportunities
          </span>
          <span className="hero-location">Australia / QUT Master of IT</span>
        </div>
        <div className="hero-grid">
          <div>
            <p className="intro-label">Hi, I’m Kris Hsu.</p>
            <h1 id="hero-title">
              Software,
              <br />
              made for{" "}
              <span className="hero-emphasis">
                people<span className="blue">.</span>
              </span>
            </h1>
          </div>
          <div className="hero-description">
            <p>
              I build useful web and mobile experiences, with an eye for the
              person on the other side of the screen.
            </p>
            <p className="hero-subtext">
              Final-year Master of Information Technology student at QUT,
              seeking graduate and junior software development roles in
              Australia. Currently an AI App Developer Intern at Pixelz360.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#selected-work">
                Explore my work <Icon />
              </a>
              <a
                className="text-link"
                href={resumeHref}
                target={site.resume ? "_blank" : undefined}
                rel={site.resume ? "noopener noreferrer" : undefined}
              >
                {resumeLabel}
                <Icon name="external" size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>Development × design × curiosity</span>
          <a href="#selected-work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section
        id="selected-work"
        className="selected-work shell"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              Eight projects / development & design
            </span>
            <h2 id="work-title">
              Selected work<span className="blue">.</span>
            </h2>
          </div>
          <span className="section-side-note">
            Start with three selected projects.
            <br />
            Keep scrolling for the full collection.
          </span>
        </div>
        {featuredProjects.map((project, index) => (
          <article
            className="featured-project"
            key={project.slug}
            id={`project-${project.slug}`}
          >
            <div className="featured-image">
              {project.video && <span className="featured-version">Final project version · Phase 2</span>}
              <Gallery
                images={project.gallery.slice(0, 5)}
                title={project.title}
                tone={project.tone}
                priority={index === 0}
                expandable
              />
            </div>
            <div className="featured-copy">
              <div className="project-index">
                0{index + 1}
                <span>
                  {project.category}
                </span>
              </div>
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="featured-role">{project.role}</p>
              <p className="project-summary">{project.oneLiner}</p>
              <div className="contribution-block">
                <span className="small-label">My contribution</span>
                <ul>
                  {project.contributionSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ul className="tags" aria-label="Technologies and skills">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="featured-actions">
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  Standalone case study
                  <Icon size={18} />
                </Link>
                <EvidenceLinks links={project.evidence} />
              </div>
            </div>
            <ProjectDetails project={project} />
          </article>
        ))}
      </section>
      <section
        id="more-work"
        className="more-work shell"
        aria-labelledby="more-work-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">Keep exploring / 04–08</span>
            <h2 id="more-work-title">
              More work<span className="blue">.</span>
            </h2>
          </div>
          <p className="section-side-note">
            Open any project’s details
            <br />
            without leaving this page.
          </p>
        </div>
        <ProjectGrid projects={projects.filter((project) => !project.featured)} />
      </section>
      <Experience />
      <Journey />
    </main>
  );
}
