import Image from "next/image";
import Link from "next/link";
import { experience } from "@/data/profile";
import { site } from "@/data/site";
import SmartLink from "./SmartLink";

export default function Experience() {
  return (
    <section id="experience" className="container section" aria-labelledby="experience-title">
      <div className="section-head">
        <h2 id="experience-title">Experience</h2>
        <SmartLink href={site.linkedin}>Full history on LinkedIn</SmartLink>
      </div>
      {experience.map((group, index) => (
        <div className={`cv-group${index === 0 ? " is-first" : ""}`} key={group.group}>
          <h3>{group.group}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.id}>
                <span className="cv-period">{item.period}</span>
                <div className="cv-body">
                  <p>
                    <strong>{item.role}</strong>
                    {item.organisation && <>, {item.organisation}</>}
                  </p>
                  {item.detail && <p className="muted">{item.detail}</p>}
                  {item.summary && <p className="muted">{item.summary}</p>}
                  {item.href && (
                    <p>
                      <Link href={item.href}>See the Junior Ranger case study</Link>
                    </p>
                  )}
                  {item.photo && (
                    <figure className="cv-photo">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        width={item.photo.width}
                        height={item.photo.height}
                        sizes="(max-width: 700px) 90vw, 560px"
                      />
                      <figcaption>{item.photo.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
