export default function Home() {
    return (
      <main style={{ maxWidth: 980, margin: "0 auto", padding: "48px 20px" }}>
        {/* Hero */}
        <section style={{ padding: "18px 0 34px" }}>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>
            Hi, I’m Kris Hsu
          </p>

          <h1 style={{ margin: "10px 0 10px", fontSize: 44, lineHeight: 1.1 }}>
            UX + Front-end builder with a systems & security mindset.
          </h1>

          <p style={{ margin: "14px 0 0", fontSize: 18, lineHeight: 1.7, maxWidth: 720, opacity: 0.85 }}>
            I design and build clear, user-friendly interfaces — from clickable prototypes to working Next.js apps.
            Currently studying Master of IT at QUT and building projects in UX/HCD, web, and security.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
            <a
              href="/projects"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "black",
                color: "white",
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              View Projects →
            </a>

            <a
              href="https://www.linkedin.com/in/kris-hsu/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "white",
                color: "black",
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Contact / LinkedIn
            </a>
          </div>
        </section>

        {/* Optional quick highlights (simple + clean) */}
        <section style={{ marginTop: 18 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {[
              { title: "SafeMind", desc: "GenAI-powered OHS incident reporting prototype." },
              { title: "VCINITY", desc: "UX prototype exploring onboarding & engagement flows." },
              { title: "MCP Exploration", desc: "Tooling experiment with MCP and context-driven assistants." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: 16,
                  padding: 16,
                  background: "white",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700 }}>{item.title}</div>
                <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
