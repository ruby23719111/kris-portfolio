import { site, resumeHref, resumeLabel } from "@/data/site";
import Icon from "./Icon";
export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell contact-inner">
        <div>
          <span className="eyebrow">What’s next</span>
          <h2 id="contact-title">
            Good work starts
            <br />
            with a conversation<span className="blue">.</span>
          </h2>
          <p>
            I’m looking for graduate and junior software development
            opportunities in Australia. I’d love to hear about your team.
          </p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
            <Icon name="external" />
          </a>
        </div>
        <div className="contact-links">
          <a
            href={resumeHref}
            target={site.resume ? "_blank" : undefined}
            rel={site.resume ? "noopener noreferrer" : undefined}
          >
            {resumeLabel}
            <Icon name="external" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <Icon name="external" />
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
            <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  );
}
