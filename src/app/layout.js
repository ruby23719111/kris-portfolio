import localFont from "next/font/local";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

// Self-hosted (SIL Open Font License) so builds don't depend on Google Fonts.
const sans = localFont({
  src: "./fonts/schibsted-grotesk-latin-wght-normal.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-sans",
});
const mono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500" },
  ],
  display: "swap",
  variable: "--font-mono",
});

const description =
  "IT graduate in Brisbane (QUT Master of IT, December 2026). Full-stack web and mobile development, AI integration and requirements. Full work rights on a 485 visa.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kris Hsu — IT graduate, Brisbane",
    template: "%s | Kris Hsu",
  },
  description,
  openGraph: {
    title: "Kris Hsu — IT graduate who turns what clients need into working software",
    description,
    url: site.url,
    siteName: "Kris Hsu",
    locale: "en_AU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <footer className="container site-footer">
          <span>© {new Date().getFullYear()} Kris Hsu</span>
          <a href="#main">Back to top</a>
        </footer>
      </body>
    </html>
  );
}
