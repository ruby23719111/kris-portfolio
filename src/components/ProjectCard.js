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
  const { title, oneLiner, role, tech, links, image } = project;

  return (
    <article
      style={{
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 16,
        padding: 18,
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ Preview Image */}
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          style={{
            width: "100%",
            height: 160,
            objectFit: "cover",
            borderRadius: 12,
            marginBottom: 14,
            background: "#f5f5f5",
          }}
        />
      )}

      <h3 style={{ margin: 0, fontSize: 20 }}>{title}</h3>
      <p style={{ marginTop: 8, lineHeight: 1.6, opacity: 0.9 }}>
        {oneLiner}
      </p>

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

      {/* Links */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer" style={linkStyle}>
            Live Demo
          </a>
        )}

        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer" style={linkStyle}>
            GitHub
          </a>
        )}

        {links.youtube && (
          <a
            href={links.youtube}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            Watch Walkthrough
          </a>
        )}

        {links.figma && (
          <a href={links.figma} target="_blank" rel="noreferrer" style={linkStyle}>
            Figma
          </a>
        )}

        {links.article && (
          <a
            href={links.article}
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            LinkedIn Post
          </a>
        )}
      </div>
    </article>
  );
}
