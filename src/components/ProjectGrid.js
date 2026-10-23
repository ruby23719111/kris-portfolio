"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import CaseContent from "./CaseContent";
import Icon from "./Icon";
import ProjectCard from "./ProjectCard";

const desktopQuery = "(min-width: 768px)";
const getDesktopSnapshot = () => window.matchMedia(desktopQuery).matches;
const getServerSnapshot = () => false;
export default function ProjectGrid({ projects }) {
  const grid = useRef(null);
  const focusBeforeResize = useRef(null);
  const subscribeToViewport = useCallback((listener) => {
    const query = window.matchMedia(desktopQuery);
    const update = () => {
      focusBeforeResize.current = grid.current?.contains(document.activeElement)
        ? document.activeElement
        : null;
      listener();
    };
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const desktop = useSyncExternalStore(subscribeToViewport, getDesktopSnapshot, getServerSnapshot);
  const [opened, setOpened] = useState(() => new Set());
  const triggers = useRef(new Map());
  const pendingFocus = useRef(null);

  useLayoutEffect(() => {
    if (!pendingFocus.current) return;
    const trigger = triggers.current.get(pendingFocus.current);
    pendingFocus.current = null;
    if (!trigger?.isConnected) return;
    trigger.focus({ preventScroll: true });
    trigger.scrollIntoView({ block: "center", behavior: "instant" });
  }, [opened]);

  useLayoutEffect(() => {
    if (focusBeforeResize.current?.isConnected) {
      focusBeforeResize.current.focus({ preventScroll: true });
    }
    focusBeforeResize.current = null;
  }, [desktop]);

  function toggle(slug) {
    setOpened((previous) => {
      const next = new Set(previous);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function collapse(slug) {
    pendingFocus.current = slug;
    setOpened((previous) => {
      const next = new Set(previous);
      next.delete(slug);
      return next;
    });
  }

  function card(project, index) {
    const open = opened.has(project.slug);
    return (
      <ProjectCard
        key={`card-${project.slug}`}
        project={project}
        index={index}
        inline
        compact
        detailsAction={
          <button
            type="button"
            id={`project-trigger-${project.slug}`}
            className="project-disclosure-trigger"
            ref={(node) => {
              if (node) triggers.current.set(project.slug, node);
              else triggers.current.delete(project.slug);
            }}
            aria-expanded={open}
            aria-controls={`project-panel-${project.slug}`}
            onClick={() => toggle(project.slug)}
          >
            <span>{open ? "Hide project details" : "Explore project details"}</span>
            <span className="sr-only">: {project.title}</span>
            <Icon name="chevron" size={18} />
          </button>
        }
      />
    );
  }

  function panel(project) {
    return (
      <section
        key={`panel-${project.slug}`}
        id={`project-panel-${project.slug}`}
        className="project-grid-panel"
        aria-labelledby={`project-panel-title-${project.slug}`}
        hidden={!opened.has(project.slug)}
      >
        {opened.has(project.slug) && (
          <>
            <div className="project-panel-heading">
              <h3 id={`project-panel-title-${project.slug}`}>{project.title}</h3>
              <button
                type="button"
                className="button button-small button-outline"
                onClick={() => collapse(project.slug)}
              >
                Collapse details <span className="sr-only">for {project.title}</span>
                <Icon name="close" size={16} />
              </button>
            </div>
            <div className="project-details-body">
              <div className="inline-case-copy">
                <CaseContent project={project} inline />
                <div className="project-details-actions">
                  <Link href={`/projects/${project.slug}`} className="text-link">
                    Standalone case study <Icon name="external" size={18} />
                  </Link>
                  <button
                    type="button"
                    className="button button-small button-outline"
                    onClick={() => collapse(project.slug)}
                  >
                    Collapse details <span className="sr-only">for {project.title}</span>
                    <Icon name="close" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    );
  }

  const rows = [];
  for (let index = 0; index < projects.length; index += 2) {
    const pair = projects.slice(index, index + 2);
    // Keep keyboard and screen-reader order aligned with each responsive layout.
    const children = desktop
      ? [...pair.map((project, offset) => card(project, index + offset)), ...pair.map(panel)]
      : pair.flatMap((project, offset) => [card(project, index + offset), panel(project)]);
    rows.push(<div className="project-grid-row" key={pair[0].slug}>{children}</div>);
  }

  return <div className="compact-project-grid" ref={grid}>{rows}</div>;
}
