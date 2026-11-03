import { Phone } from "lucide-react";

/** Floating call button, visible on every page. */
export function StickyCall() {
  return (
    <a
      href="tel:+18335815253"
      aria-label="Call (833) 581-5253"
      className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-coral py-3.5 pr-6 pl-4 text-sm font-bold text-ink shadow-[0_18px_40px_-12px_rgba(10,25,40,0.55)] transition-colors hover:bg-aqua focus-visible:ring-4 focus-visible:ring-ring focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <span className="relative grid size-8 place-items-center rounded-full bg-ink text-aqua">
        <span aria-hidden className="pulse-ring absolute inset-0 rounded-full bg-ink/40" />
        <Phone className="relative size-4" />
      </span>
      Call (833) 581-5253
    </a>
  );
}
