import test from "node:test";
import assert from "node:assert/strict";
import { projects, featuredProjects } from "../src/data/projects.js";
import { access } from "node:fs/promises";
const base = process.env.TEST_BASE_URL || "http://localhost:4173";

test("Every published case is reachable, identifiable and canonical", async () => {
  for (const project of projects) {
    const response = await fetch(`${base}/projects/${project.slug}`);
    assert.equal(response.status, 200, project.slug);
    const html = await response.text();
    assert.ok(
      html.includes(`<title>${project.title}`),
      project.slug + " title",
    );
    assert.ok(
      html.includes(`https://krishsu.vercel.app/projects/${project.slug}`),
      project.slug + " canonical",
    );
    assert.ok(
      html.includes('id="contribution"'),
      project.slug + " contribution",
    );
    assert.ok(html.includes('id="project-gallery"'), project.slug + " gallery");
    for (const image of project.gallery)
      await access(new URL(`../public${image.src}`, import.meta.url));
  }
});
test("Homepage exposes selected projects and working contact paths", async () => {
  const html = await (await fetch(base)).text();
  for (const project of featuredProjects)
    assert.ok(html.includes(`href="/projects/${project.slug}"`));
  assert.ok(html.includes("mailto:kriscchsu@gmail.com"));
  assert.ok(html.includes('id="about"'));
  assert.ok(html.includes('id="contact"'));
  assert.ok(!html.includes("Under construction"));
});
test("Legacy routes redirect and unknown cases return 404", async () => {
  for (const [path, destination] of [
    ["/about", "/#about"],
    ["/case-studies", "/projects"],
  ]) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 308, path);
    assert.equal(response.headers.get("location"), destination);
  }
  assert.equal(
    (await fetch(base + "/projects/this-project-does-not-exist")).status,
    404,
  );
});
test("Discovery endpoints include all canonical project URLs", async () => {
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  for (const p of projects) assert.ok(sitemap.includes(`/projects/${p.slug}`));
  const robots = await (await fetch(base + "/robots.txt")).text();
  assert.ok(robots.includes("https://krishsu.vercel.app/sitemap.xml"));
  const image = await fetch(base + "/opengraph-image");
  assert.equal(image.status, 200);
  assert.ok(image.headers.get("content-type").startsWith("image/png"));
});
