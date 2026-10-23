"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site, resumeHref } from "@/data/site";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["selected-work", "experience", "journey", "contact"];
    const update = () => {
      let current = "";
      for (const id of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 160)
          current = id;
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
          {[["selected-work", "Work"], ["experience", "Experience"], ["journey", "My Journey"], ["contact", "Contact"]].map(([id, label]) => (
            <Link key={id} href={`/#${id}`} aria-current={(pathname === "/" && active === id) || (id === "selected-work" && pathname.startsWith("/projects")) ? "location" : undefined}>{label}</Link>
          ))}
          <a
            href={resumeHref}
            target={site.resume ? "_blank" : undefined}
            rel={site.resume ? "noopener noreferrer" : undefined}
          >
            {site.resume ? "Résumé" : "Request résumé"}
            <Icon name="external" size={16} />
          </a>

        </nav>
      </div>
    </header>
  );
}
