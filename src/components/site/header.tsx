import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Internet", to: "/internet" },
  { label: "Cable TV", to: "/cable-tv" },
  { label: "Contact", to: "/contact" },
] as const;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Bluepeak Wifi logo" className={className}>
      {/* wifi arcs radiating above the peak */}
      <path d="M13 17a15 15 0 0 1 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path d="M17.5 21.5a9 9 0 0 1 13 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* mountain peak */}
      <path d="M6 40 20 22l6 7 4-5 12 16Z" fill="currentColor" />
      <circle cx="24" cy="12.5" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-3">
      <span className="relative grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-teal to-ink text-aqua shadow-halo transition-transform group-hover:-rotate-6">
        <LogoMark className="size-7" />
      </span>
      <span
        className={cn(
          "font-display text-[19px] leading-none font-extrabold tracking-tight",
          tone === "light" ? "text-cream" : "text-foreground",
        )}
      >
        Bluepeak
        <span className={tone === "light" ? "text-aqua" : "text-primary"}>Wifi</span>
        <span className="text-coral">.</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <header
        className={cn(
          "mx-auto max-w-6xl rounded-full border border-border bg-card/80 backdrop-blur-xl transition-all duration-300",
          scrolled ? "shadow-[0_20px_50px_-38px_rgba(10,25,40,0.7)]" : "shadow-none",
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full bg-secondary/70 p-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-card text-primary shadow-sm" }}
                className="rounded-full px-5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground/80 xl:flex">
              <a href="tel:+18775794692" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="size-4 text-primary" /> (877) 579-4692
              </a>
            </span>
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-primary sm:inline-flex"
            >
              Check my address
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border px-4 pt-3 pb-4 lg:hidden">
            <nav className="grid gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-cream"
            >
              Check my address
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
