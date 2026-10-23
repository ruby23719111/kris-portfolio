import EvidenceLinks from "./EvidenceLinks";
import Gallery from "./Gallery";
import ProjectVideo from "./ProjectVideo";

export default function CaseContent({ project, inline = false }) {
  const Heading = inline ? "h4" : "h2";
  const Subheading = inline ? "h5" : "h3";
  const PhaseHeading = inline ? "h6" : "h4";
  const sectionId = (name) => inline ? `${project.slug}-details-${name}` : name;

  return (
    <>
      <section id={sectionId("overview")}>
        {!inline && <span className="eyebrow">01 / The context</span>}
        <Heading>{inline ? "Overview" : "The idea behind the work."}</Heading>
        {project.overview.map((text) => <p key={text}>{text}</p>)}
      </section>

      {(!inline || project.video || project.evidence?.length > 0) && (
        <section id={sectionId("project-gallery")} className="case-media-section">
          {!inline && (
            <div className="case-section-heading">
              <span className="eyebrow">02 / The experience</span>
              <Heading>A closer look.</Heading>
            </div>
          )}
          {!inline && (
            <Gallery images={project.gallery} title={project.title} tone={project.tone} expandable priority />
          )}
          {project.video && <ProjectVideo video={project.video} />}
          <EvidenceLinks links={project.evidence} detailed />
        </section>
      )}

      <section id={sectionId("contribution")}>
        {!inline && <span className="eyebrow">03 / My contribution</span>}
        <Heading>{inline ? "My contribution" : "Where I contributed."}</Heading>
        <div className={inline ? "inline-contributions" : "contribution-cards"}>
          {project.contributions.map((item, index) => (
            <div className={inline ? "inline-contribution" : "contribution-item"} key={item.title}>
              {!inline && <span className="contribution-number">{String(index + 1).padStart(2, "0")}</span>}
              <Subheading>{item.title}</Subheading>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id={sectionId("decisions")}>
        {!inline && <span className="eyebrow">04 / Design & decisions</span>}
        <Heading>{inline ? "Design & decisions" : "The thinking in the details."}</Heading>
        {project.decisions.map((item) => (
          <div className="decision" key={item.title}>
            <Subheading>{item.title}</Subheading>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {project.phases?.length > 0 && (
        <section id={sectionId("evolution")} className="project-evolution">
          <Heading>{project.evolution?.title || "How the project evolved"}</Heading>
          {project.evolution?.intro && <p>{project.evolution.intro}</p>}
          {project.evolution?.changes?.map((change) => (
            <div className="evolution-change" key={change.title}>
              <Subheading>{change.title}</Subheading>
              <p>{change.text}</p>
            </div>
          ))}
          {project.phases.map((phase) => (
            <section className="project-phase" key={phase.id} aria-labelledby={`${sectionId("phase")}-${phase.id}`}>
              {phase.label && <span className="eyebrow">{phase.label}</span>}
              <Subheading id={`${sectionId("phase")}-${phase.id}`}>{phase.title}</Subheading>
              <p>{phase.summary}</p>
              {(phase.role || phase.tech?.length > 0) && (
                <dl className="phase-facts">
                  {phase.role && <div><dt>My role</dt><dd>{phase.role}</dd></div>}
                  {phase.tech?.length > 0 && <div><dt>Confirmed stack</dt><dd>{phase.tech.join(" / ")}</dd></div>}
                </dl>
              )}
              {phase.gallery?.length > 0 && (
                <div className="phase-gallery">
                  <Gallery images={phase.gallery} title={`${project.title}: ${phase.title}`} tone={project.tone} expandable compact />
                </div>
              )}
              {phase.contributions?.map((item) => (
                <div key={item.title}><PhaseHeading>{item.title}</PhaseHeading><p>{item.text}</p></div>
              ))}
              {phase.decisions?.map((item) => (
                <div key={item.title}><PhaseHeading>{item.title}</PhaseHeading><p>{item.text}</p></div>
              ))}
              {phase.outcome && <p>{phase.outcome}</p>}
              {phase.verification && phase.verification !== phase.outcome && <p>{phase.verification}</p>}
              {phase.limitations && <p className="phase-limitation">{phase.limitations}</p>}
              <EvidenceLinks links={phase.evidence} detailed />
            </section>
          ))}
        </section>
      )}

      <section id={sectionId("outcome")}>
        {!inline && <span className="eyebrow">05 / Outcome & reflection</span>}
        <Heading>{inline ? "Outcome & reflection" : "What came out of it."}</Heading>
        <p>{project.outcome}</p>
        {project.takeaway && (
          <div className="reflection"><span className="small-label">What I take forward</span><p>{project.takeaway}</p></div>
        )}
        <Subheading>Context & next steps</Subheading>
        <p>{project.limitations}</p>
      </section>
    </>
  );
}
