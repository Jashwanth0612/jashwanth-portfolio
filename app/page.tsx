import Link from "next/link";
import { LaurelHalf } from "@/components/Laurel";
import ColumnRule from "@/components/ColumnRule";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { achievements } from "@/data/achievements";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative">
        <div className="flex items-center gap-6 mb-7">
          <LaurelHalf className="w-16 h-[84px]" />
          <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood">
            Portfolium
          </span>
          <LaurelHalf mirror className="w-16 h-[84px]" />
        </div>
        <h1 className="font-display text-engraved text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-[0.05em] text-ink">
          JASHWANTH
        </h1>
        <div className="mt-5 font-label uppercase tracking-[0.22em] text-[clamp(0.95rem,1.6vw,1.15rem)] font-semibold text-oxblood">
          ECE Student &middot; Computer Vision &amp; ML Engineer
        </div>
        <p className="mt-6 max-w-xl italic text-inksoft text-[1.15rem]">
          Third-year engineering student building intelligent vision systems,
          full-stack products, and the occasional hackathon prototype — with
          research roots at DRDO&ndash;IIT Hyderabad.
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-label uppercase tracking-[0.3em] text-[0.7rem] text-inksoft/70">
          Scroll &darr;
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 md:px-[6vw] py-24 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood block mb-2">
            Who I Am
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)]">
            The Chronicle
          </h2>
          <span className="font-decorative text-[0.85rem] text-bronze tracking-[0.3em] block mt-2">
            I
          </span>
        </div>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
          <Reveal>
            <div className="text-inksoft space-y-5 text-[1.08rem]">
              <p>
                I&rsquo;m a <strong className="text-ink font-semibold">third-year B.Tech student in Electronics &amp; Communication Engineering</strong> at VNRVJIET, Hyderabad — though my real interest has always sat closer to software: computer vision, machine learning, and building things people actually use, rather than circuits.
              </p>
              <p>
                Alongside coursework, I work as a <strong className="text-ink font-semibold">research intern at the DRDO Industry&ndash;Academia Centre of Excellence (DIA-CoE), IIT Hyderabad</strong>, on all-weather image enhancement and object detection. It&rsquo;s the deepest and most technically demanding thing I&rsquo;ve built — two filed patents and a paper under review have come out of it — but it&rsquo;s one part of a wider practice, not the whole of it.
              </p>
              <p>
                Outside the lab, I build full-stack products end to end: a live commercial website for my father&rsquo;s company, a desktop AI assistant for my own daily use, and multi-agent systems for hackathons. I&rsquo;ve also shipped IoT and biomedical signal-processing projects, and co-authored IEEE papers with teammates along the way.
              </p>
              <p>
                What I&rsquo;m working toward: strong campus placements, a master&rsquo;s abroad in data science or robotics, and eventually a research-track career built around computer vision.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-parchment border border-stoneline shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_40px_-22px_rgba(46,42,32,0.25)] p-8 plate-top">
              <ul className="divide-y divide-stoneline">
                {[
                  ["Institution", "VNRVJIET, Hyderabad"],
                  ["Discipline", "ECE · Class of 2027"],
                  ["CGPA", "7.9"],
                  ["Research Post", "Intern, DIA-CoE (IIT Hyderabad)"],
                  ["Research Focus", "All-Weather Detection"],
                  ["Patents Filed", "2"],
                  ["Papers", "1 under review"],
                  ["Best mAP@0.5", "0.97"],
                  ["Also Building", "Full-stack apps & AI agents"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between items-baseline py-3 gap-4">
                    <span className="font-label uppercase tracking-[0.08em] text-[0.85rem] text-inksoft whitespace-nowrap">
                      {label}
                    </span>
                    <span className="font-semibold text-oxblooddark text-right">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <ColumnRule />

      {/* ================= RES GESTAE ================= */}
      <section id="gestae" className="px-6 md:px-[6vw] py-24 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood block mb-2">
            Res Gestae
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)]">
            Things Achieved
          </h2>
          <span className="font-decorative text-[0.85rem] text-bronze tracking-[0.3em] block mt-2">
            II
          </span>
          <p className="text-inksoft max-w-xl mx-auto mt-4">
            The research record behind the DRDO internship — patents, a
            published paper, and the restoration pipeline that makes it all
            work in bad weather. Tap any entry for the full account.
          </p>
        </div>

        <ul className="divide-y divide-stoneline border-t border-b border-stoneline">
          {achievements.map((a) => (
            <li key={a.slug}>
              <Reveal>
                <Link
                  href={`/achievements/${a.slug}`}
                  className="grid grid-cols-[50px_1fr_auto] md:grid-cols-[90px_1fr_auto] gap-4 md:gap-7 py-8 items-center group hover:bg-parchment/60 transition-colors px-2 -mx-2"
                >
                  <span className="font-decorative text-[1.4rem] md:text-[1.5rem] text-bronze text-right">
                    {a.numeral}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.1rem] md:text-[1.25rem] mb-1 group-hover:text-oxblood transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-inksoft text-[0.98rem] md:text-[1.02rem] hidden sm:block">
                      {a.summary}
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className="font-label text-[0.72rem] uppercase tracking-[0.1em] text-verdigris border border-verdigris px-2 py-[2px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-label text-oxblood text-xl group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <ColumnRule />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-[6vw] py-24 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood block mb-2">
            Selected Works
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)]">
            The Forum of Projects
          </h2>
          <span className="font-decorative text-[0.85rem] text-bronze tracking-[0.3em] block mt-2">
            III
          </span>
          <p className="text-inksoft max-w-xl mx-auto mt-4">
            Tap any project for what I built, how I built it, where it&rsquo;s
            deployed, and the skills behind it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="block bg-parchment border border-stoneline p-7 shadow-[0_18px_40px_-28px_rgba(46,42,32,0.25)] hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-26px_rgba(46,42,32,0.25)] transition-all h-full"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px] mb-4 text-bronze">
                  <path d="M6 21h12M7 21V8h10v13M4 8h16L12 3z" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                <h3 className="font-display text-[1.18rem] mb-2">{p.title}</h3>
                <p className="text-inksoft text-[0.98rem] mb-4">{p.tagline}</p>
                <div className="font-label text-[0.78rem] uppercase tracking-[0.08em] text-oxblood">
                  {p.stack.slice(0, 3).join(" · ")}
                  {p.stack.length > 3 ? " …" : ""}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ColumnRule />

      {/* ================= SKILLS ================= */}
      <section id="skills" className="px-6 md:px-[6vw] py-24 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-oxblood block mb-2">
            Artes et Scientiae
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)]">
            The Skills Mosaic
          </h2>
          <span className="font-decorative text-[0.85rem] text-bronze tracking-[0.3em] block mt-2">
            IV
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stoneline border border-stoneline">
          {[
            {
              title: "Computer Vision & Detection",
              items: [
                "RT-DETRv2 & transformer detectors",
                "YOLOv11 family",
                "NAFNet image restoration",
                "Ensemble model design",
                "Ablation studies & benchmarking",
              ],
            },
            {
              title: "Deep Learning & ML",
              items: [
                "PyTorch",
                "Model training on CUDA",
                "Random Forest, SMOTE",
                "Signal & sensor data pipelines",
              ],
            },
            {
              title: "Systems & Full-Stack",
              items: [
                "FastAPI, React, Node.js",
                "Electron.js",
                "LangChain, ChromaDB",
                "SQLite",
              ],
            },
            {
              title: "Tools & Practice",
              items: [
                "Python",
                "Git & GitHub",
                "LaTeX / IEEE authoring",
                "Technical documentation",
              ],
            },
          ].map((tile) => (
            <Reveal key={tile.title} className="!transform-none">
              <div className="bg-parchment p-7 min-h-[190px] flex flex-col h-full">
                <h3 className="font-display text-[1.02rem] mb-3.5 text-oxblooddark">
                  {tile.title}
                </h3>
                <ul className="text-inksoft text-[0.95rem] space-y-1">
                  {tile.items.map((it) => (
                    <li key={it} className="before:content-['–_'] before:text-bronze">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
