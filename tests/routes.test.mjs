import test from "node:test";
import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { projects } from "../src/data/projects.js";
import { communityPhotos, experience, glance, intro } from "../src/data/profile.js";
import { site } from "../src/data/site.js";

const base = process.env.TEST_BASE_URL || "http://localhost:4173";
const escapeHtml = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "g")) || [];
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];

async function readPage(path = "") {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, `${path || "/"} is available`);
  return response.text();
}

async function assertLocalAsset(src, description) {
  assert.ok(src.startsWith("/"), `${description}: local URL`);
  const file = await stat(new URL(`../public${src}`, import.meta.url));
  assert.ok(file.isFile() && file.size > 0, `${description}: non-empty file`);
}

test("Every case page is reachable, identifiable and canonical", async () => {
  for (const project of projects) {
    const html = await readPage(`/projects/${project.slug}`);
    assert.ok(html.includes(`<title>${escapeHtml(project.title)}`), `${project.slug}: title`);
    const canonical = tags(html, "link").find((tag) => attribute(tag, "rel") === "canonical");
    assert.equal(attribute(canonical || "", "href"), `${site.url}/projects/${project.slug}`);
    assert.ok(html.includes(escapeHtml(project.role)), `${project.slug}: personal role is stated`);
    for (const section of ["overview", "contribution", "decisions", "outcome", "screens"]) {
      assert.ok(html.includes(`id="${section}"`), `${project.slug}: ${section} renders without a client interaction`);
    }
  }
});

test("Homepage lists all eight projects in order, each with a case link", async () => {
  const html = await readPage();
  let previous = -1;
  for (const project of projects) {
    const position = html.indexOf(`id="project-${project.slug}"`);
    assert.ok(position > previous, `${project.slug}: appears in the agreed order`);
    previous = position;
    assert.ok(html.includes(`href="/projects/${project.slug}"`), `${project.slug}: shareable case link`);
  }
  const featured = projects.filter((project) => project.featured);
  assert.deepEqual(featured.map((project) => project.slug), ["junior-ranger", "ThaimeUp", "food-buddy"]);
  for (const project of featured) {
    for (const item of project.highlights) assert.ok(html.includes(escapeHtml(item)), `${project.slug}: highlight visible`);
  }
});

test("Recruiter essentials are on the first screen of the homepage", async () => {
  const html = await readPage();
  assert.ok(html.includes(escapeHtml(intro.title)), "Headline");
  for (const item of glance) {
    assert.ok(html.includes(`<dt>${escapeHtml(item.label)}</dt>`), `${item.label}: at a glance`);
    assert.ok(html.includes(escapeHtml(item.value)), `${item.label}: value`);
  }
  assert.ok(html.indexOf('aria-label="At a glance"') < html.indexOf('id="work"'), "At a glance comes before the work");
  assert.equal(site.resume, "/resume.pdf");
  assert.ok(html.includes('href="/resume.pdf"'), "Résumé is one click away");
  assert.ok(html.includes(`mailto:${site.email}`));
  assert.ok(!html.includes("ruby23719111@gmail.com"), "Only the job-search email is published");
});

test("Navigation targets and legacy anchors exist", async () => {
  const html = await readPage();
  for (const id of ["work", "skills", "experience", "about", "contact"]) {
    assert.ok(html.includes(`href="/#${id}"`), `${id}: navigation link`);
    assert.ok(html.includes(`id="${id}"`), `${id}: anchor target`);
  }
  for (const legacy of ["selected-work", "journey"]) assert.ok(html.includes(`id="${legacy}"`), `${legacy}: old shared links still land`);
  for (const group of experience) assert.ok(html.includes(`>${group.group}</h3>`), `${group.group}: experience group`);
});

test("Junior Ranger shows the final version, architecture and the Phase 1 to Phase 2 story", async () => {
  const project = projects.find((item) => item.slug === "junior-ranger");
  const html = await readPage(`/projects/${project.slug}`);
  for (const id of ["architecture", "demo", "phases"]) assert.ok(html.includes(`id="${id}"`), `${id} section`);
  for (const [label] of project.phases.rows) assert.ok(html.includes(`<th scope="row">${escapeHtml(label)}</th>`), `${label}: comparison row`);
  assert.ok(html.includes(`href="${project.phases.walkthrough}"`), "Phase 1 walkthrough link");
  assert.ok(!/<video(?:\s|>)/.test(html), "Video only loads when asked for");
  assert.ok(tags(html, "button").some((tag) => attribute(tag, "aria-label")?.startsWith(`Play ${project.video.title}`)), "Accessible play control");
  await assertLocalAsset(project.video.src, "Final demo");
  const video = await fetch(base + project.video.src, { method: "HEAD" });
  assert.equal(video.status, 200);
  assert.ok(video.headers.get("content-type")?.startsWith("video/mp4"));
});

test("Every image used on the site is a real local file with dimensions", async () => {
  const described = [
    ...projects.flatMap((project) => [...project.gallery, ...(project.cover || []), ...(project.phases ? [project.phases.image] : [])]),
    ...communityPhotos,
    intro.photo,
    ...experience.flatMap((group) => group.items.map((item) => item.photo).filter(Boolean)),
  ];
  for (const image of described) {
    assert.ok(image.alt?.trim(), `${image.src}: alt text`);
    assert.ok(Number.isInteger(image.width) && Number.isInteger(image.height), `${image.src}: dimensions`);
    await assertLocalAsset(image.src, image.src);
  }
  for (const project of projects.filter((item) => item.thumb)) await assertLocalAsset(project.thumb.src, `${project.slug} thumbnail`);
  await assertLocalAsset(projects.find((item) => item.video).video.poster, "Video poster");
});

test("Résumé PDF is served", async () => {
  const response = await fetch(base + site.resume, { method: "HEAD" });
  assert.equal(response.status, 200);
  assert.ok(response.headers.get("content-type")?.startsWith("application/pdf"));
});

test("Legacy routes redirect and unknown cases return a 404", async () => {
  for (const [path, destination] of [["/about", "/#about"], ["/case-studies", "/projects"]]) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 308, path);
    assert.equal(response.headers.get("location"), destination);
  }
  assert.equal((await fetch(base + "/projects/this-project-does-not-exist")).status, 404);
});

test("Discovery endpoints include every project", async () => {
  const sitemap = await readPage("/sitemap.xml");
  for (const project of projects) assert.ok(sitemap.includes(`/projects/${project.slug}`));
  const robots = await readPage("/robots.txt");
  assert.ok(robots.includes(`${site.url}/sitemap.xml`));
  const image = await fetch(base + "/opengraph-image");
  assert.equal(image.status, 200);
  assert.ok(image.headers.get("content-type").startsWith("image/png"));
});
