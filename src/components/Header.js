"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, resumeHref } from "@/data/site";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (
        event.type === "pointerdown" &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Kris Hsu — home"
        >
          <span className="brand-mark" aria-hidden="true">
            k<span>.</span>
          </span>
          <span>Kris Hsu</span>
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          onClick={(event) => {
            if (event.target.closest("a")) setOpen(false);
          }}
        >
          <Link href="/#selected-work">Work</Link>
          <Link href="/#about">About</Link>
          <a
            href={resumeHref}
            target={site.resume ? "_blank" : undefined}
            rel={site.resume ? "noopener noreferrer" : undefined}
          >
            {site.resume ? "Résumé" : "Request résumé"}
            <Icon name="external" size={16} />
          </a>
          <Link href="/#contact" className="nav-contact">
            Contact <Icon name="arrow" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
