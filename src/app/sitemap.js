import { projects } from "@/data/projects";
import { site } from "@/data/site";
export default function sitemap() {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/projects`, priority: 0.9 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
