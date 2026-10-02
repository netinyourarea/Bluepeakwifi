import { Link } from "@tanstack/react-router";
import { Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./header";
import { NetworkPattern } from "./primitives";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home", to: "/" },
      { label: "Internet Plans", to: "/internet" },
      { label: "Cable TV", to: "/cable-tv" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

export const DISCLAIMER_TEXT =
  "Bluepeak Wifi operates as an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company. All brand names, logos and trademarks referenced remain the property of their respective owners.";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] text-cream">
        <NetworkPattern className="text-aqua/40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-sm">
              <Logo tone="light" />
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                An independent connectivity concierge — we map which broadband and cable services
                actually reach your address, then handle the paperwork and installation booking.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/75">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-aqua" />
                  <a href="tel:+18775794692" className="hover:text-aqua">(877) 579-4692</a>
                </li>
              </ul>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold tracking-[0.2em] text-aqua uppercase">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-cream/6 p-6 ring-1 ring-cream/12">
            <h4 className="text-sm font-bold text-coral">Independent Service Disclaimer</h4>
            <p className="mt-2 text-xs leading-relaxed text-cream/60">{DISCLAIMER_TEXT}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Bluepeak Wifi. All rights reserved.</p>
            <p>Independent third-party connection assistance service.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
