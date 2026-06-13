"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 20px" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Projects</h1>

      <p style={{ marginTop: 12, lineHeight: 1.7, maxWidth: 720 }}>
        Click any project card to view the live demo, prototype, or walkthrough.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 24,
          flexWrap: "wrap",
        }}
      >
        {["All", "Academic", "Personal", "Hackathon"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid #ddd",
              cursor: "pointer",
              background: selectedCategory === category ? "#111" : "white",
              color: selectedCategory === category ? "white" : "black",
              fontSize: 14,
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 320px))",
          gap: 16,
          marginTop: 24,
          justifyContent: "start",
        }}
      >
        {filteredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}