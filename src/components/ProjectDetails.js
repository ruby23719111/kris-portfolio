import Link from "next/link";
import EvidenceLinks from "./EvidenceLinks";
import Icon from "./Icon";

export default function ProjectDetails({ project }) {
  return (
    <details className="project-details">
      <summary>
        <span className="details-label-closed">Explore project details</span>
        <span className="details-label-open">Hide project details</span>
        <span className="sr-only">: {project.title}</span>
        <Icon name="chevron" size={18} />
      </summary>
      <div className="project-details-body">
        <div className="inline-case-copy">
          <section>
            <h4>Overview</h4>
            {project.overview.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
          <section>
            <h4>My contribution</h4>
            {project.contributions.map((item) => (
              <div key={item.title}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
          <section>
            <h4>Design & decisions</h4>
            {project.decisions.map((item) => (
              <div key={item.title}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
          <section>
            <h4>Outcome & reflection</h4>
            <p>{project.outcome}</p>
            <div className="reflection">
              <span className="small-label">What I take forward</span>
              <p>{project.takeaway}</p>
            </div>
            <h5>Context & next steps</h5>
            <p>{project.limitations}</p>
          </section>
          <EvidenceLinks links={project.evidence} detailed />
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Open standalone case study <Icon name="external" size={18} />
          </Link>
        </div>
      </div>
    </details>
  );
}
