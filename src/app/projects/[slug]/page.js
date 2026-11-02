import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVideo from "@/components/ProjectVideo";
import SmartLink from "@/components/SmartLink";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const image = project.gallery[0];
  return {
    title: project.title,
    description: project.oneLiner,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Kris Hsu`,
      description: project.oneLiner,
      url: `/projects/${slug}`,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
  };
}

function Section({ id, title, children, wide = false }) {
  return (
    <section id={id} className="case-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className={`case-body${wide ? " is-wide" : ""}`}>{children}</div>
    </section>
  );
}

function Points({ items }) {
  return items.map((item) => (
    <p key={item.title}>
      <strong>{item.title}</strong> {item.text}
    </p>
  ));
}

function Gallery({ project }) {
  const isPhone = (image) => image.height / image.width > 1.6;
  const portrait = project.gallery.every(isPhone);
  if (portrait) {
    return (
      <section id="screens" className="case-gallery" aria-label={`Screens from ${project.title}`} style={{ "--tone": project.panel.tone }}>
        <div className="screen-row" tabIndex={0}>
          {project.gallery.map((image) => (
            <figure key={image.src}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="176px" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }
  return (
    <section id="screens" className="container case-wide-gallery" aria-label={`Screens from ${project.title}`}>
      {project.gallery.map((image, index) => (
        <figure key={image.src} className={isPhone(image) ? "is-portrait" : image.height / image.width > 0.9 ? "is-tall" : undefined}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={isPhone(image) ? "320px" : "(max-width: 1264px) 92vw, 1136px"}
            priority={index === 0}
          />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}

function Architecture({ architecture }) {
  return (
    <Section id="architecture" title="How it fits together" wide>
      <div className="arch" role="img" aria-label="React Native / Expo app connects to a Python / Flask backend, with Vertex AI wildlife recognition and Gemini narration">
        {architecture.steps.map((step) => (
          <div key={step.title} className={`arch-box${step.highlight ? " is-highlight" : ""}`}>
            <strong>{step.title}</strong>
            <span className="meta">{step.tech}</span>
            {step.note && <span className="arch-note">{step.note}</span>}
          </div>
        )).flatMap((box, index) =>
          index === 0 ? [box] : [<span key={`arrow-${index}`} className="arch-arrow" aria-hidden="true">→</span>, box],
        )}
        <span className="arch-arrow" aria-hidden="true">→</span>
        <div className="arch-services">
          {architecture.services.map((service) => (
            <div key={service.title} className="arch-service">
              <strong>{service.title}</strong> <span className="muted">{service.note}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="case-text">{architecture.text}</p>
    </Section>
  );
}

function Phases({ phases }) {
  return (
    <Section id="phases" title="Where it started" wide>
      <p className="case-text">{phases.intro}</p>
      <figure className="phase-image">
        <Image src={phases.image.src} alt={phases.image.alt} width={phases.image.width} height={phases.image.height} sizes="(max-width: 900px) 92vw, 760px" />
        <figcaption>
          {phases.image.caption}{" "}
          <SmartLink href={phases.walkthrough}>Watch the walkthrough</SmartLink>
        </figcaption>
      </figure>
      <div className="table-scroll" tabIndex={0}>
        <table className="phase-table">
          <caption>What changed</caption>
          <thead>
            <tr>
              <td />
              <th scope="col">Phase 1 · MVP</th>
              <th scope="col">Phase 2 · final</th>
            </tr>
          </thead>
          <tbody>
            {phases.rows.map(([label, before, after]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td data-label="Phase 1">{before}</td>
                <td data-label="Phase 2">{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="case-text">
        <h3>Why we changed it</h3>
        <Points items={phases.why} />
      </div>
      <div className="case-text my-part">
        <h3>My part in each phase</h3>
        {phases.myPart.map(([phase, text]) => (
          <p key={phase}>
            <strong>{phase}:</strong> {text}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const links = project.links.filter((link) => link.href !== `/projects/${slug}`);

  return (
    <main id="main" className="case">
      <header className="container case-header">
        <Link href="/#work" className="back-link">
          ← All work
        </Link>
        <p className="meta">{project.caseMeta}</p>
        <h1>{project.title}</h1>
        <p className="case-lede">{project.oneLiner}</p>
        <dl className="facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          {project.facts?.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
          <div>
            <dt>Built with</dt>
            <dd>{project.tech.join(", ")}</dd>
          </div>
          <div>
            <dt>See it</dt>
            <dd className="facts-links">
              {project.video && <a href="#demo">Final demo, {project.video.duration}</a>}
              {project.architecture && <a href="#architecture">Architecture</a>}
              {project.phases && <a href="#phases">Phase 1 → Phase 2</a>}
              {links
                .filter((link) => !link.href.includes("#demo"))
                .map((link) => (
                  <SmartLink key={link.href} href={link.href}>
                    {link.label}
                  </SmartLink>
                ))}
              {!project.video && !links.length && <a href="#screens">Screens</a>}
            </dd>
          </div>
        </dl>
      </header>

      <Gallery project={project} />

      <div className="container">
        <Section id="overview" title="The brief">
          {project.brief.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Section>
        <Section id="contribution" title="What I did">
          <Points items={project.contributions} />
        </Section>
        {project.architecture && <Architecture architecture={project.architecture} />}
        <Section id="decisions" title={project.decisions.length === 1 ? "A decision" : "Decisions"}>
          <Points items={project.decisions} />
        </Section>
      </div>

      {project.video && (
        <section id="demo" className="container case-demo" aria-label="Final demo">
          <ProjectVideo video={project.video} />
        </section>
      )}

      <div className="container">
        <Section id="outcome" title="Where it ended up">
          {project.outcome.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Section>
        {project.phases && <Phases phases={project.phases} />}
      </div>

      <nav className="container" aria-label="More projects">
        <div className="next-project">
          <Link href="/projects">All projects</Link>
          <Link href={`/projects/${next.slug}`} className="next-link">
            Next: {next.title} →
          </Link>
        </div>
      </nav>
    </main>
  );
}
