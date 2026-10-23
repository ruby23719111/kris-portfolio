import Link from "next/link";
import Gallery from "@/components/Gallery";
import EvidenceLinks from "@/components/EvidenceLinks";
import Icon from "@/components/Icon";
import { featuredProjects } from "@/data/projects";
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
            <p className="intro-label">Hi, I’m Kris.</p>
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
              Australia.
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
            <span className="eyebrow">A few things I’ve worked on</span>
            <h2 id="work-title">
              Selected work<span className="blue">.</span>
            </h2>
          </div>
          <span className="section-side-note">
            Three projects.
            <br />
            Different ways to solve a problem.
          </span>
        </div>
        {featuredProjects.map((project, index) => (
          <article className="featured-project" key={project.slug}>
            <div className="featured-image">
              <Gallery
                images={project.gallery}
                title={project.title}
                tone={project.tone}
                priority={index === 0}
              />
            </div>
            <div className="featured-copy">
              <div className="project-index">
                0{index + 1}
                <span>
                  {project.category} /{" "}
                  {project.featured && project.slug === "heyjarvis"
                    ? "Product & UX"
                    : "Mobile development"}
                </span>
              </div>
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="project-subtitle">{project.subtitle}</p>
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
                <Link
                  className="button button-dark"
                  href={`/projects/${project.slug}`}
                >
                  Read case study
                  <Icon size={18} />
                </Link>
                <EvidenceLinks links={project.evidence} />
              </div>
            </div>
          </article>
        ))}
        <div className="all-work-row">
          <p>
            There’s more to explore — from full-stack applications to
            experiments with AI tools.
          </p>
          <Link className="button button-outline" href="/projects">
            View all 8 projects
            <Icon />
          </Link>
        </div>
      </section>
      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="shell about-grid">
          <div>
            <span className="eyebrow">A little about me</span>
            <h2 id="about-title">
              Curious about technology.
              <br />
              Focused on people.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Kris, a final-year Master of Information Technology student at
              Queensland University of Technology. I enjoy turning an idea into
              something people can see, use and give feedback on.
            </p>
            <p>
              My work spans mobile and web development, interface design and
              team projects. I’m looking for a graduate or junior role where I
              can contribute, keep learning and build useful software with
              others.
            </p>
            <div className="capability-list">
              <Link href="/projects/food-buddy">
                <span>01</span>
                <div>
                  <strong>Build the experience</strong>
                  <small>Mobile interfaces and connected user journeys</small>
                </div>
                <Icon name="external" />
              </Link>
              <Link href="/projects/ThaimeUp">
                <span>02</span>
                <div>
                  <strong>Connect the pieces</strong>
                  <small>Web interfaces, application logic and data</small>
                </div>
                <Icon name="external" />
              </Link>
              <Link href="/projects/heyjarvis">
                <span>03</span>
                <div>
                  <strong>Start with the person</strong>
                  <small>Product planning, interaction and UX/UI</small>
                </div>
                <Icon name="external" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
