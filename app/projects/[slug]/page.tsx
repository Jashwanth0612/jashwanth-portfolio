import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import ColumnRule from "@/components/ColumnRule";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return { title: project ? `${project.title} — Jashwanth` : "Project — Jashwanth" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <article className="px-6 md:px-[6vw] pt-32 pb-28 max-w-3xl mx-auto">
      <Link
        href="/#projects"
        className="font-label uppercase tracking-[0.14em] text-[0.85rem] text-oxblood hover:underline inline-flex items-center gap-2 mb-10"
      >
        &larr; All Works
      </Link>

      <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood block mb-3">
        {project.category}
      </span>
      <h1 className="font-display text-[clamp(2.1rem,5vw,3.2rem)] mb-4">
        {project.title}
      </h1>
      <p className="text-inksoft text-[1.15rem] italic mb-8">{project.tagline}</p>

      <div className="bg-parchment border border-stoneline p-6 mb-12 grid sm:grid-cols-2 gap-6">
        <div>
          <span className="font-label uppercase tracking-[0.1em] text-[0.78rem] text-inksoft block mb-1">
            Status
          </span>
          <span className="font-semibold text-oxblooddark">{project.status}</span>
        </div>
        <div>
          <span className="font-label uppercase tracking-[0.1em] text-[0.78rem] text-inksoft block mb-1">
            Deployment
          </span>
          <span className="text-ink">{project.deployment}</span>
        </div>
      </div>

      <p className="text-inksoft text-[1.08rem] mb-14">{project.summary}</p>

      <ColumnRule />

      <section className="mb-14">
        <h2 className="font-display text-[1.5rem] mb-5">What I Did</h2>
        <ul className="space-y-3">
          {project.whatIDid.map((line, i) => (
            <li key={i} className="flex gap-3 text-inksoft">
              <span className="text-bronze font-decorative shrink-0">&mdash;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="font-display text-[1.5rem] mb-5">How I Did It</h2>
        <ul className="space-y-3">
          {project.howIDidIt.map((line, i) => (
            <li key={i} className="flex gap-3 text-inksoft">
              <span className="text-bronze font-decorative shrink-0">&mdash;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-[1.5rem] mb-5">Skills Applied</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <span
              key={s}
              className="font-label text-[0.78rem] uppercase tracking-[0.08em] text-verdigris border border-verdigris px-3 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3 mt-14">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-label text-[0.78rem] uppercase tracking-[0.08em] text-oxblood bg-parchment border border-stoneline px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
