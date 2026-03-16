import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Kris Hsu | Portfolio",
  description: "Portfolio of Kris Hsu — React, Next.js, JavaScript, UX/UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: "20px 40px",
          }}
        >
          <div />

          <Link
            href="/"
            className="brand-name"
            style={{
              textDecoration: "none",
              color: "inherit",
              justifySelf: "center",
            }}
          >
            Kris Hsu
          </Link>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifySelf: "end",
            }}
          >
            <a
              href="https://github.com/ruby23719111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="nav-icon-link"
            >
              <img src="/github.svg" alt="GitHub" className="nav-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/kris-hsu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="nav-icon-link"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="nav-icon" />
            </a>
          </div>
        </header>

        <div>{children}</div>

        <footer
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            marginTop: 48,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              padding: "18px 20px",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            © {new Date().getFullYear()} Kris Hsu
          </div>
        </footer>
      </body>
    </html>
  );
}