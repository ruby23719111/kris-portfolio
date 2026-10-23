import Image from "next/image";
import Link from "next/link";
import {
  developmentExperience,
  communityExperience,
  mentorshipExperience,
  communityPhotos,
} from "@/data/profile";
import { site } from "@/data/site";
import Icon from "./Icon";

function ExperienceCard({ experience, community = false }) {
  const external = experience.href?.startsWith("http");

  return (
    <article
      className={`experience-card${community ? " community-card" : ""}`}
      aria-labelledby={`experience-${experience.id}`}
    >
      <div className="experience-card-top">
        <span className="experience-type">{experience.type}</span>
        {experience.period && (
          <span className="experience-period">{experience.period}</span>
        )}
      </div>
      <h4 id={`experience-${experience.id}`}>{experience.role}</h4>
      <p className="experience-organisation">{experience.organisation}</p>
      <p className="experience-card-summary">{experience.summary}</p>
      {experience.contributions?.length > 0 && (
        <ul className="experience-contributions">
          {experience.contributions.slice(0, 2).map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      )}
      {experience.href && (
        <Link
          className="text-link experience-card-link"
          href={experience.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {external ? "View on LinkedIn" : "Explore the project"}
          <Icon name={external ? "external" : "arrow"} size={17} />
        </Link>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section shell"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">Learning, contributing & connecting</span>
          <h2 id="experience-title">
            Experience & community<span className="blue">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Full experience on LinkedIn
          <Icon name="external" size={17} />
        </a>
      </div>

      <div className="experience-groups">
        <div className="experience-group">
          <div className="experience-group-heading">
            <h3>Development experience</h3>
            <p>Practical development through an internship and an industry capstone.</p>
          </div>
          <div className="development-cards">
            {developmentExperience.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>

        <div className="experience-group">
          <div className="experience-group-heading">
            <h3>Community & leadership</h3>
            <p>Contributing to the communities I’m learning alongside.</p>
          </div>
          <div className="community-cards">
            {communityExperience.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                community
              />
            ))}
          </div>
          {mentorshipExperience.length > 0 && (
            <div className="mentorship-note">
              <h4>Learning from industry mentors</h4>
              <ul>
                {mentorshipExperience.map((experience) => (
                  <li key={experience.id}>
                    <strong>{experience.organisation}</strong>
                    <span> — {experience.role}</span>
                    {experience.summary && <p>{experience.summary}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {communityPhotos.length > 0 && (
        <div className="community-photos" aria-label="Community moments">
          {communityPhotos.slice(0, 3).map((photo) => (
            <figure className="community-photo" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 45vw, 360px"
              />
              <figcaption>
                <p>{photo.caption}</p>
                {photo.sourceHref && (
                  <a
                    href={photo.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {photo.sourceLabel || "View the LinkedIn post"}
                    <Icon name="external" size={15} />
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
