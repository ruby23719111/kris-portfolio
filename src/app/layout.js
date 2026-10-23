import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { site } from "@/data/site";
import "./globals.css";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kris Hsu — Graduate Software Developer Portfolio",
    template: "%s | Kris Hsu",
  },
  description:
    "QUT Master of IT student seeking graduate and junior software roles in Australia. Explore mobile apps, web development and product design through real project cases.",
  openGraph: {
    title: "Kris Hsu — Software, made for people.",
    description:
      "Web, mobile and product work by a final-year QUT Master of IT student.",
    url: site.url,
    siteName: "Kris Hsu",
    locale: "en_AU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={geist.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Contact />
        <footer className="site-footer shell">
          <span>© {new Date().getFullYear()} Kris Hsu</span>
          <span>Thoughtfully designed. Always learning.</span>
          <a href="#main">Back to top ↑</a>
        </footer>
      </body>
    </html>
  );
}
