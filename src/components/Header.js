"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { resumeHref, resumeLabel, site } from "@/data/site";

const sections = [
  ["work", "Work"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["about", "About"],
  ["contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => {
      let current = "";
      for (const [id] of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.type === "pointerdown" && !header.current?.contains(event.target)) setOpen(false);
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
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Kris Hsu
        </Link>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main"
          className={`main-nav${open ? " is-open" : ""}`}
          onClick={(event) => {
            if (event.target.closest("a")) setOpen(false);
          }}
        >
          {sections.map(([id, label]) => (
            <Link
              key={id}
              href={`/#${id}`}
              aria-current={
                (pathname === "/" && active === id) || (id === "work" && pathname.startsWith("/projects"))
                  ? "location"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
          <a
            className="nav-resume"
            href={resumeHref}
            target={site.resume ? "_blank" : undefined}
            rel={site.resume ? "noopener noreferrer" : undefined}
          >
            {resumeLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
