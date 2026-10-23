"use client";

import Link from "next/link";
import { useRef } from "react";
import CaseContent from "./CaseContent";
import Icon from "./Icon";

export default function ProjectDetails({ project }) {
  const disclosure = useRef(null);
  const trigger = useRef(null);

  function collapse() {
    disclosure.current.open = false;
    requestAnimationFrame(() => {
      if (!trigger.current?.isConnected) return;
      trigger.current.focus({ preventScroll: true });
      trigger.current.scrollIntoView({ block: "center", behavior: "instant" });
    });
  }

  return (
    <details
      ref={disclosure}
      className="project-details"
      onToggle={(event) => {
        if (!event.currentTarget.open) {
          event.currentTarget.querySelectorAll("video").forEach((video) => video.pause());
        }
      }}
    >
      <summary ref={trigger}>
        <span className="details-label-closed">Explore project details</span>
        <span className="details-label-open">Hide project details</span>
        <span className="sr-only">: {project.title}</span>
        <Icon name="chevron" size={18} />
      </summary>
      <div className="project-details-body">
        <div className="inline-case-copy">
          <CaseContent project={project} inline />
          <div className="project-details-actions">
            <Link className="text-link" href={`/projects/${project.slug}`}>
              Standalone case study <Icon name="external" size={18} />
            </Link>
            <button className="button button-small button-outline" type="button" onClick={collapse}>
              Collapse details <span className="sr-only">for {project.title}</span>
              <Icon name="close" size={16} />
            </button>
          </div>
        </div>
      </div>
    </details>
  );
}
