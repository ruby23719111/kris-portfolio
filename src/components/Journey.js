import { journey, education } from "@/data/profile";

export default function Journey() {
  return (
    <section
      id="journey"
      className="journey-section shell"
      aria-labelledby="journey-title"
    >
      <span id="about" className="legacy-anchor" aria-hidden="true" />
      <div className="section-heading">
        <div>
          <span className="eyebrow">{journey.eyebrow}</span>
          <h2 id="journey-title">
            My journey<span className="blue">.</span>
          </h2>
        </div>
      </div>
      <div className="journey-layout">
        <div className="journey-copy">
          <h3>{journey.title}</h3>
          {journey.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="journey-education">
          <h3>Education across cultures</h3>
          <ol className="education-timeline">
            {education.map((item) => (
              <li
                className="education-item"
                key={`${item.institution}-${item.period}`}
              >
                <span className="education-period">{item.period}</span>
                <h4 className="education-qualification">{item.qualification}</h4>
                <p>{item.institution}</p>
                {item.detail && (
                  <p className="education-detail">{item.detail}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
