import Image from "next/image";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectList from "@/components/ProjectList";
import SmartLink from "@/components/SmartLink";
import { about, communityPhotos, glance, intro, skills } from "@/data/profile";
import { featuredProjects, otherProjects } from "@/data/projects";
import { resumeHref, site } from "@/data/site";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main">
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 id="hero-title">{intro.title}</h1>
            <p className="hero-lead">{intro.lead}</p>
            <div className="link-row hero-actions">
              <a className="button" href={resumeHref} target="_blank" rel="noopener noreferrer">
                Download résumé (PDF)
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <SmartLink href={site.linkedin}>LinkedIn</SmartLink>
              <SmartLink href={site.github}>GitHub</SmartLink>
            </div>
          </div>
          <figure className="hero-photo">
            <Image
              src={intro.photo.src}
              alt={intro.photo.alt}
              width={intro.photo.width}
              height={intro.photo.height}
              sizes="(max-width: 700px) 90vw, 280px"
              priority
            />
            <figcaption>{intro.photo.caption}</figcaption>
          </figure>
        </div>
        <dl className="glance" aria-label="At a glance">
          {glance.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="work" className="container section work" aria-labelledby="work-title">
        <span id="selected-work" className="anchor-alias" aria-hidden="true" />
        <h2 id="work-title">Selected work</h2>
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.slug} project={project} priority={index === 0} />
        ))}
      </section>

      <section className="container section" aria-labelledby="more-title">
        <h2 id="more-title">Other projects</h2>
        <ProjectList projects={otherProjects} />
      </section>

      <section id="skills" className="container section" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <dl className="skills">
          {skills.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Experience />

      <section id="about" className="container section" aria-labelledby="about-title">
        <span id="journey" className="anchor-alias" aria-hidden="true" />
        <div className="about">
          <div className="about-text">
            <h2 id="about-title">{about.title}</h2>
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="route">
              {about.route.map((stop, index) => (
                <span key={stop}>
                  {index > 0 && <span aria-hidden="true">—</span>}
                  {stop}
                </span>
              ))}
            </p>
          </div>
          <div className="about-photos">
            {communityPhotos.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 700px) 45vw, 212px" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
