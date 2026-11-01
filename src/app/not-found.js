import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <h1>This page doesn’t exist.</h1>
      <p>
        <Link href="/projects">See all projects</Link> or <Link href="/">go to the homepage</Link>.
      </p>
    </main>
  );
}
