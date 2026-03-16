export default function Home() {
  return (
    <div className="mondrian-bg">
      {/* Background blocks (ONLY ONE SET) */}
      <div
        className="mondrian-block mondrian-red"
        style={{
          top: 90,
          left: -120,
          width: 420,
          height: 240,
          borderRadius: 22,
        }}
      />

      <div
        className="mondrian-block mondrian-blue"
        style={{
          top: 160,
          right: -140,
          width: 520,
          height: 300,
          borderRadius: 22,
        }}
      />

      <div
        className="mondrian-block mondrian-yellow"
        style={{
          bottom: -120,
          left: 80,
          width: 340,
          height: 340,
          borderRadius: 26,
        }}
      />

      {/* Content */}
      <main
        className="mondrian-content"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "48px 20px",
        }}
      >
        {/* Hero */}
        <section style={{ padding: "18px 0 34px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              opacity: 0.7,
            }}
          >
            Hi, I'm Kris Hsu.
          </p>

          <h1
            style={{
              margin: "10px 0 0",
              fontSize: 46,
              lineHeight: 1.08,
              maxWidth: 760,
              letterSpacing: "-0.02em",
            }}
          >
            UX-driven builder exploring product, front-end, and intelligent
            systems.
          </h1>

          <p
            style={{
              margin: "18px 0 0",
              fontSize: 18,
              lineHeight: 1.65,
              maxWidth: 700,
              opacity: 0.85,
            }}
          >
            Designing and building interactive products across UX, code, and
            system thinking.
          </p>

          {/* CTA button */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 28,
            }}
          >
            <a
              href="/projects"
              style={{
                display: "inline-block",
                padding: "14px 26px",
                borderRadius: 12,
                border: "2px solid black",
                background: "black",
                color: "white",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              View Projects →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}