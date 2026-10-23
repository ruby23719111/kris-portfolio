import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <span className="eyebrow">404 / A little off track</span>
      <h1>
        Let’s find your
        <br />
        way back<span className="blue">.</span>
      </h1>
      <p>This page doesn’t exist. There’s plenty of work to explore, though.</p>
      <Link href="/projects" className="button button-primary">
        Explore projects →
      </Link>
    </main>
  );
}
