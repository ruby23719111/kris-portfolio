"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import Icon from "./Icon";

export default function Gallery({
  images,
  title,
  tone = "",
  expandable = false,
  priority = false,
  compact = false,
}) {
  const id = useId();
  const rail = useRef(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const previousOverflow = useRef("");
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(0);
  useEffect(() => {
    const modal = dialog.current;
    return () => {
      if (modal?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  const multiple = images.length > 1;
  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navigate = (index) => {
    const next = Math.min(Math.max(index, 0), images.length - 1);
    setActive(next);
    const target = rail.current?.children[next];
    if (target)
      rail.current.scrollTo({
        left: target.offsetLeft,
        behavior: reducedMotion() ? "instant" : "smooth",
      });
  };
  const sync = () => {
    if (!rail.current) return;
    const slides = Array.from(rail.current.children);
    const nearest = slides.reduce(
      (best, slide, i) =>
        Math.abs(slide.offsetLeft - rail.current.scrollLeft) <
        Math.abs(slides[best].offsetLeft - rail.current.scrollLeft)
          ? i
          : best,
      0,
    );
    setActive(nearest);
  };
  const open = (index, event) => {
    trigger.current = event.currentTarget;
    setExpanded(index);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
  };
  const restore = () => {
    document.body.style.overflow = previousOverflow.current;
    trigger.current?.focus();
  };
  const current = images[active];
  return (
    <div
      className={`gallery tone-${tone} ${compact ? "gallery-compact" : ""}`}
      role="region"
      aria-label={`${title} screenshots`}
    >
      <div
        className="gallery-rail"
        ref={rail}
        id={`${id}-slides`}
        onScroll={sync}
        tabIndex={multiple ? 0 : undefined}
        aria-label={
          multiple
            ? "Screenshots. Use left and right arrow keys to browse."
            : undefined
        }
        onKeyDown={(event) => {
          if (event.target !== rail.current) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            navigate(active + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
      >
        {images.map((item, index) => (
          <div
            className="gallery-slide"
            key={item.src}
            role="group"
            aria-label={`${index + 1} of ${images.length}: ${item.caption}`}
          >
            <div
              className={`gallery-image-wrap ${item.height > item.width ? "portrait" : ""}`}
            >
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                sizes={
                  compact
                    ? "(max-width: 767px) 90vw, 550px"
                    : "(max-width: 767px) 90vw, (max-width: 1200px) 60vw, 760px"
                }
                priority={priority && index === 0}
                className="gallery-image"
              />
              {expandable && (
                <button
                  type="button"
                  className="expand-button"
                  aria-label={`Enlarge screenshot ${index + 1}: ${item.caption}`}
                  tabIndex={index === active ? 0 : -1}
                  onClick={(event) => open(index, event)}
                >
                  <Icon name="expand" size={17} />
                  <span>Enlarge</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-caption">
        <div>
          <span className="image-kind">{current.kind}</span>
          <p>{current.caption}</p>
        </div>
        {multiple && (
          <div className="gallery-controls">
            <span
              className="gallery-count"
              aria-live="polite"
              aria-atomic="true"
            >
              {String(active + 1).padStart(2, "0")}{" "}
              <span>/ {String(images.length).padStart(2, "0")}</span>
            </span>
            <button
              type="button"
              className="icon-button previous"
              aria-label={`Previous ${title} screenshot`}
              aria-controls={`${id}-slides`}
              disabled={active === 0}
              onClick={() => navigate(active - 1)}
            >
              <Icon name="chevron" size={18} />
            </button>
            <button
              type="button"
              className="icon-button"
              aria-label={`Next ${title} screenshot`}
              aria-controls={`${id}-slides`}
              disabled={active === images.length - 1}
              onClick={() => navigate(active + 1)}
            >
              <Icon name="chevron" size={18} />
            </button>
          </div>
        )}
      </div>
      {multiple && (
        <div className="gallery-thumbnails" aria-label="Choose a screenshot">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={`thumbnail ${index === active ? "selected" : ""}`}
              aria-label={`Show screenshot ${index + 1}: ${item.caption}`}
              aria-pressed={index === active}
              onClick={() => navigate(index)}
            >
              <Image
                src={item.src}
                width={80}
                height={55}
                sizes="64px"
                alt=""
              />
            </button>
          ))}
        </div>
      )}
      {expandable && (
        <dialog
          ref={dialog}
          className="image-dialog"
          aria-label={`${title} enlarged screenshot`}
          onClose={restore}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              setExpanded((value) => Math.min(value + 1, images.length - 1));
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              setExpanded((value) => Math.max(value - 1, 0));
            }
          }}
          onClick={(event) => {
            if (event.target === dialog.current) dialog.current.close();
          }}
        >
          <div className="dialog-toolbar">
            <span>
              {title}{" "}
              <span className="muted">
                / {expanded + 1} of {images.length}
              </span>
            </span>
            <button
              type="button"
              className="icon-button"
              aria-label="Close enlarged screenshot"
              onClick={() => dialog.current.close()}
              autoFocus
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="dialog-image">
            <Image
              src={images[expanded].src}
              width={images[expanded].width}
              height={images[expanded].height}
              sizes="95vw"
              alt={images[expanded].alt}
            />
          </div>
          <p>{images[expanded].caption}</p>
          {multiple && (
            <div className="dialog-controls">
              <button
                className="button button-small button-outline"
                disabled={expanded === 0}
                onClick={() => setExpanded((value) => value - 1)}
              >
                Previous
              </button>
              <button
                className="button button-small button-outline"
                disabled={expanded === images.length - 1}
                onClick={() => setExpanded((value) => value + 1)}
              >
                Next
              </button>
            </div>
          )}
        </dialog>
      )}
    </div>
  );
}
