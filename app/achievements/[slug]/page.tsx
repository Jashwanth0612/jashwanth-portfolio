import Link from "next/link";
import { notFound } from "next/navigation";
import { achievements, getAchievement } from "@/data/achievements";
import ColumnRule from "@/components/ColumnRule";

export function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getAchievement(params.slug);
  return { title: a ? `${a.title} — Jashwanth` : "Achievement — Jashwanth" };
}

export default function AchievementPage({ params }: { params: { slug: string } }) {
  const a = getAchievement(params.slug);
  if (!a) return notFound();

  return (
    <article className="px-6 md:px-[6vw] pt-32 pb-28 max-w-3xl mx-auto">
      <Link
        href="/#gestae"
        className="font-label uppercase tracking-[0.14em] text-[0.85rem] text-oxblood hover:underline inline-flex items-center gap-2 mb-10"
      >
        &larr; Res Gestae
      </Link>

      <span className="font-decorative text-[1.1rem] text-bronze block mb-3">
        {a.numeral}
      </span>
      <h1 className="font-display text-[clamp(2.1rem,5vw,3.2rem)] mb-4">
        {a.title}
      </h1>
      <p className="text-inksoft text-[1.15rem] italic mb-6">{a.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {a.tags.map((t) => (
          <span
            key={t}
            className="font-label text-[0.72rem] uppercase tracking-[0.1em] text-verdigris border border-verdigris px-2 py-[2px]"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-inksoft text-[1.08rem] mb-14">{a.summary}</p>

      <ColumnRule />

      <section className="mb-14">
        <h2 className="font-display text-[1.5rem] mb-5">What I Did</h2>
        <ul className="space-y-3">
          {a.whatIDid.map((line, i) => (
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
          {a.howIDidIt.map((line, i) => (
            <li key={i} className="flex gap-3 text-inksoft">
              <span className="text-bronze font-decorative shrink-0">&mdash;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-[1.5rem] mb-5">Results</h2>
        <ul className="space-y-3">
          {a.results.map((line, i) => (
            <li key={i} className="flex gap-3 text-inksoft">
              <span className="text-oxblood font-decorative shrink-0">&mdash;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
