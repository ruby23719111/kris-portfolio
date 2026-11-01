import { resumeHref, resumeLabel, site } from "@/data/site";
import SmartLink from "./SmartLink";

export default function Contact() {
  return (
    <section id="contact" className="container section contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="label-heading">
        Contact
      </h2>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <p className="contact-note">
        Available full-time from December 2026 for graduate roles in software development, business analysis or IT
        consulting.
      </p>
      <div className="link-row">
        <a className="link-primary" href={resumeHref} target="_blank" rel="noopener noreferrer">
          {resumeLabel}
        </a>
        <SmartLink href={site.linkedin}>LinkedIn</SmartLink>
        <SmartLink href={site.github}>GitHub</SmartLink>
      </div>
    </section>
  );
}
