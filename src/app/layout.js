import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Kris Hsu | Portfolio",
  description: "Portfolio of Kris Hsu — React, Next.js, JavaScript, UX/UI.",
};

const navLinkStyle = {
  textDecoration: "none",
  color: "inherit",
  padding: "8px 10px",
  borderRadius: 10,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            background: "white",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <Link href="/" style={{ ...navLinkStyle, fontWeight: 700 }}>
              Kris Hsu
            </Link>

            <nav style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <Link href="/projects" style={navLinkStyle}>
                Projects
              </Link>
              <Link href="/case-studies" style={navLinkStyle}>
                Case Studies
              </Link>
              <Link href="/about" style={navLinkStyle}>
                About
              </Link>
            </nav>
          </div>
        </header>

        <div>{children}</div>

        <footer
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            marginTop: 48,
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "18px 20px", fontSize: 14, opacity: 0.8 }}>
            © {new Date().getFullYear()} Kris Hsu
          </div>
        </footer>
      </body>
    </html>
  );
}
