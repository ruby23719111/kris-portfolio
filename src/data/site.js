export const site = {
  name: "Kris Hsu",
  url: "https://krishsu.vercel.app",
  email: "kriscchsu@gmail.com",
  github: "https://github.com/ruby23719111",
  linkedin: "https://www.linkedin.com/in/kris-hsu",
  // Set only after Kris supplies the Neil-reviewed résumé for publication.
  resume: null,
};
export const resumeHref =
  site.resume || `mailto:${site.email}?subject=R%C3%A9sum%C3%A9%20request`;
export const resumeLabel = site.resume ? "View résumé" : "Request résumé";
