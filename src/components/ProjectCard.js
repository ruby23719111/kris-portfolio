"use client";

import { useState } from "react";

const linkStyle = {
  fontSize: 13,
  padding: "6px 10px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.12)",
  textDecoration: "none",
  color: "black",
  background: "rgba(0,0,0,0.02)",
};

export default function ProjectCard({ project }) {
  const {
    title,
    oneLiner,
    role,
    tech = [],
    links = {},
    image,
    primaryLink,
  } = project;

  const [hovered, setHovered] = useState(false);

  const openPrimary = () => {
    if (!primaryLink) return;
    window.open(primaryLink, "_blank", "noreferrer");
  };

  const stop = (e) => e.stopPropagation();
  console.log(title, primaryLink, links);

  return (
    <article
      onClick={openPrimary}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!primaryLink) return;
        if (e.key === " ") e.preventDefault();
        if (e.key === "Enter" || e.key === " ") openPrimary();
      }}
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 16,
        padding: 18,
        background: "white",
        display: "flex",
        flexDirection: "column",
        cursor: primaryLink ? "pointer" : "default",

        transform: hovered && primaryLink ? "translateY(-6px)" : "translateY(0)",
        boxShadow:
          hovered && primaryLink
            ? "0 12px 28px rgba(0,0,0,0.12)"
            : "0 4px 10px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* ✅ Preview Image（hover 微放大） */}
      {image && (
        <div
          style={{
            overflow: "hidden",
            borderRadius: 12,
            marginBottom: 14,
            background: "#f5f5f5",
          }}
        >
          <img
            src={image}
            alt={`${title} preview`}
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.3s ease",
              display: "block",
            }}
          />
        </div>
      )}

      {/* ✅ 標題不要再包 <a>（整卡已可點） */}
      <h3 style={{ margin: 0, fontSize: 20 }}>{title}</h3>

      <p style={{ marginTop: 8, lineHeight: 1.6, opacity: 0.9 }}>{oneLiner}</p>

      <p style={{ marginTop: 10, marginBottom: 0, fontSize: 14, opacity: 0.85 }}>
        <strong>Role:</strong> {role}
      </p>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.12)",
              background: "rgba(0,0,0,0.02)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links（阻止冒泡） */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer" style={linkStyle} onClick={stop}>
            Live Demo
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer" style={linkStyle} onClick={stop}>
            GitHub
          </a>
        )}
        {links.youtube && (
          <a href={links.youtube} target="_blank" rel="noreferrer" style={linkStyle} onClick={stop}>
            Watch Walkthrough
          </a>
        )}
        {links.figma && (
          <a href={links.figma} target="_blank" rel="noreferrer" style={linkStyle} onClick={stop}>
            Figma
          </a>
        )}
        {links.article && (
          <a href={links.article} target="_blank" rel="noreferrer" style={linkStyle} onClick={stop}>
            LinkedIn Post
          </a>
        )}
      </div>
    </article>
  );
}
