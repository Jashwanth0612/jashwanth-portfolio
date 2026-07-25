"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#gestae", label: "Res Gestae" },
  { href: "/#projects", label: "Works" },
  { href: "/#skills", label: "Artes" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-cream/90 backdrop-blur-sm border-b border-stoneline">
      <div className="flex items-center justify-between px-6 md:px-[6vw] py-4">
        <Link
          href="/"
          className="font-display font-bold text-[1.05rem] tracking-[0.12em] uppercase text-oxblooddark"
        >
          Jashwanth
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-label text-[0.92rem] font-semibold tracking-[0.14em] uppercase text-inksoft hover:text-oxblood transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-oxblood transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col items-center gap-5 pb-8 pt-2 border-t border-stoneline">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-label text-[0.95rem] font-semibold tracking-[0.14em] uppercase text-inksoft hover:text-oxblood"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
