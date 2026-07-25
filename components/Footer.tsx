import { LaurelFull } from "./Laurel";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-creamdeep px-6 md:px-[6vw] pt-24 pb-12 text-center">
      <LaurelFull className="w-[46px] h-[60px] mx-auto mb-6 opacity-85" />
      <span className="font-label uppercase tracking-[0.28em] text-[0.78rem] font-semibold text-bronzelight block mb-2">
        Get In Touch
      </span>
      <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] text-parchment mb-4">
        Let&rsquo;s Build Something
      </h2>
      <p className="text-stone max-w-md mx-auto mb-10">
        Open to research collaborations, internships, and interesting
        problems in computer vision. Send a message, or reach me directly.
      </p>

      <ContactForm />

      <div className="flex gap-6 justify-center flex-wrap mb-16">
        <a
          href="https://github.com/Jashwanth0612"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label tracking-[0.14em] uppercase text-[0.88rem] border border-bronze text-bronzelight px-6 py-3 hover:bg-bronze hover:text-ink transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto: jashwanthsai268@gmail.com"
          className="font-label tracking-[0.14em] uppercase text-[0.88rem] border border-bronze text-bronzelight px-6 py-3 hover:bg-bronze hover:text-ink transition-colors"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/jashwanth-sai-242a4428b/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label tracking-[0.14em] uppercase text-[0.88rem] border border-bronze text-bronzelight px-6 py-3 hover:bg-bronze hover:text-ink transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <div className="text-[0.78rem] text-creamdeep/40 tracking-wide">
        Crafted in the manner of the old inscriptions &middot; MMXXVI
      </div>
    </footer>
  );
}
