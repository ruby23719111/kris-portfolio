import test from "node:test";
import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { projects } from "../src/data/projects.js";
import { communityPhotos } from "../src/data/profile.js";
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

test("Every published case is reachable, identifiable and canonical", async () => {
  for (const project of projects) {
    const html = await readPage(`/projects/${project.slug}`);
    assert.ok(html.includes(`<title>${escapeHtml(project.title)}`), `${project.slug}: title`);
    const canonical = tags(html, "link").find((tag) => attribute(tag, "rel") === "canonical");
    assert.equal(attribute(canonical || "", "href"), `https://krishsu.vercel.app/projects/${project.slug}`);
    for (const section of ["overview", "project-gallery", "contribution", "decisions", "outcome"]) {
      assert.ok(html.includes(`id="${section}"`), `${project.slug}: ${section} readable without a client interaction`);
    }
  }
});

test("Homepage exposes all eight ordered projects and usable disclosure controls", async () => {
  const html = await readPage();
  let previousPosition = -1;
  for (const project of projects) {
    const position = html.indexOf(`id="project-${project.slug}"`);
    assert.ok(position > previousPosition, `${project.slug}: appears once in the agreed project order`);
    previousPosition = position;
    assert.ok(html.includes(`href="/projects/${project.slug}"`), `${project.slug}: independent shareable case link`);
    assert.ok(html.includes(escapeHtml(project.oneLiner)), `${project.slug}: purpose visible in page content`);
    assert.ok(html.includes(escapeHtml(project.role)), `${project.slug}: personal role visible in page content`);
  }

  const featured = projects.filter((project) => project.featured);
  const disclosures = tags(html, "details").filter((tag) => attribute(tag, "class")?.split(" ").includes("project-details"));
  assert.equal(disclosures.length, featured.length);
  assert.equal(featured.length, 3);
  assert.ok(disclosures.every((tag) => !/\sopen(?:\s|=|>)/.test(tag)), "Featured details start collapsed");
  assert.equal(tags(html, "summary").length, 3, "Featured disclosures have native keyboard-operable summaries");

  const compact = projects.filter((project) => !project.featured);
  assert.equal(compact.length, 5);
  for (const project of compact) {
    const trigger = tags(html, "button").find((tag) => attribute(tag, "id") === `project-trigger-${project.slug}`);
    assert.ok(trigger, `${project.slug}: native button trigger`);
    assert.equal(attribute(trigger, "aria-expanded"), "false", `${project.slug}: collapsed state announced`);
    const panelId = attribute(trigger, "aria-controls");
    assert.ok(panelId, `${project.slug}: trigger identifies its panel`);
    const panel = tags(html, "section").find((tag) => attribute(tag, "id") === panelId);
    assert.ok(panel && /\shidden(?:\s|=|>)/.test(panel), `${project.slug}: matching panel starts hidden`);
  }
});

test("Home navigation, professional context and contact are available without opening projects", async () => {
  const html = await readPage();
  assert.ok(html.includes('id="hero-title"'), "Introduction has an accessible heading");
  assert.ok(html.includes("Final-year Master of Information Technology student at QUT"));
  assert.ok(html.includes("graduate and junior software development roles"));
  for (const id of ["selected-work", "experience", "journey", "contact"]) {
    assert.ok(html.includes(`href="/#${id}"`), `${id}: navigation points to the homepage`);
    assert.ok(html.includes(`id="${id}"`), `${id}: anchor target exists`);
  }
  assert.ok(html.includes('id="about"'), "Previously shared About anchor remains compatible");
  assert.ok(html.includes("legal coordinator") && html.includes("Germany") && html.includes("Mexico"), "Personal journey is included");
  assert.ok(html.includes("Internship") && html.includes("Industry-linked capstone") && html.includes("Mentee"), "Work, capstone and mentee identities are distinct");
  assert.ok(html.includes("mailto:kriscchsu@gmail.com"));
  assert.equal(site.resume, null, "No unapproved resume is substituted");
  assert.ok(html.includes("Request résumé"));
  assert.ok(!html.includes("Under construction"));
});

test("Junior Ranger presents the final version and preserves the earlier prototype as evolution", async () => {
  const project = projects.find((item) => item.slug === "junior-ranger");
  const html = await readPage(`/projects/${project.slug}`);
  assert.equal(projects.length, 8, "Two phases do not become separate portfolio projects");
  assert.ok(html.includes("Final project version"));
  assert.ok(html.includes('id="evolution"'));
  assert.ok(html.includes("How the project evolved"));
  assert.equal(project.phases.length, 2);
  for (const phase of project.phases) {
    assert.ok(html.includes(escapeHtml(phase.title)), `${phase.id}: identified in the case`);
  }
  const early = project.phases.find((phase) => phase.id === "phase-1");
  assert.ok(early.gallery.length > 0 && early.evidence.length > 0, "Early visual evidence is retained");
  for (const link of early.evidence) assert.ok(html.includes(`href="${escapeHtml(link.href)}"`));
  assert.ok(project.gallery.every((image) => !early.gallery.some((previous) => previous.src === image.src)), "Primary screenshots are separate from the early prototype");
  assert.ok(!/<video(?:\s|>)/.test(html), "Video is not embedded before the user loads the player");
  const loadButton = tags(html, "button").find((tag) => attribute(tag, "aria-label")?.startsWith(`Load ${escapeHtml(project.video.title)}`));
  assert.ok(loadButton, "Final demo has an accessible load control");
  assert.ok(tags(html, "img").some((tag) => tag.includes(encodeURIComponent(project.video.poster))), "A real final-version poster is rendered before loading video");
  await assertLocalAsset(project.video.src, "Final demo");
  const videoResponse = await fetch(base + project.video.src, { method: "HEAD" });
  assert.equal(videoResponse.status, 200);
  assert.ok(videoResponse.headers.get("content-type")?.startsWith("video/mp4"));
  assert.ok(Number(videoResponse.headers.get("content-length")) > 0);
});

test("All published galleries and community photos have usable local assets and descriptions", async () => {
  const images = projects.flatMap((project) => [
    ...project.gallery,
    ...(project.phases || []).flatMap((phase) => phase.gallery || []),
  ]).concat(communityPhotos);
  for (const image of images) {
    assert.ok(image.alt?.trim(), `${image.src}: meaningful alternate text`);
    assert.ok(image.caption?.trim(), `${image.src}: context for the viewer`);
    assert.ok(Number.isInteger(image.width) && image.width > 0 && Number.isInteger(image.height) && image.height > 0, `${image.src}: intrinsic dimensions`);
    await assertLocalAsset(image.src, image.src);
  }
  const poster = projects.find((project) => project.video)?.video.poster;
  if (poster) await assertLocalAsset(poster, "Video poster");
  for (const image of communityPhotos) {
    assert.ok(image.sourceHref.startsWith("https://www.linkedin.com/"), `${image.src}: source attribution`);
  }
});

test("Legacy routes redirect and unknown cases return a formal 404", async () => {
  for (const [path, destination] of [["/about", "/#about"], ["/case-studies", "/projects"]]) {
    const response = await fetch(base + path, { redirect: "manual" });
    assert.equal(response.status, 308, path);
    assert.equal(response.headers.get("location"), destination);
  }
  assert.equal((await fetch(base + "/projects/this-project-does-not-exist")).status, 404);
});

test("Discovery endpoints include all canonical project URLs", async () => {
  const sitemap = await readPage("/sitemap.xml");
  for (const project of projects) assert.ok(sitemap.includes(`/projects/${project.slug}`));
  const robots = await readPage("/robots.txt");
  assert.ok(robots.includes("https://krishsu.vercel.app/sitemap.xml"));
  const image = await fetch(base + "/opengraph-image");
  assert.equal(image.status, 200);
  assert.ok(image.headers.get("content-type").startsWith("image/png"));
});
