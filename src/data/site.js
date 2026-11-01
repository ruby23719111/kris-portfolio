export const site = {
  name: "Kris Hsu",
  url: "https://krishsu.vercel.app",
  email: "kriscchsu@gmail.com",
  github: "https://github.com/ruby23719111",
  linkedin: "https://www.linkedin.com/in/kris-hsu",
  // Résumé supplied by Kris on 2026-10-23 (email updated, ATS-readable fonts).
  resume: "/resume.pdf",
};

export const resumeHref =
  site.resume || `mailto:${site.email}?subject=R%C3%A9sum%C3%A9%20request`;
export const resumeLabel = site.resume ? "Résumé (PDF)" : "Request résumé";
