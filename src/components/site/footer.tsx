import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./header";
import { NetworkPattern } from "./primitives";

const COLUMNS: { title: string; links: { label: string; to: string; hash?: string }[] }[] = [
  {
    title: "Navigate",
    links: [
      { label: "Home", to: "/" },
      { label: "Internet Support", to: "/internet" },
      { label: "Wi-Fi Help", to: "/wifi" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Popular guides",
    links: [
      { label: "Internet not working", to: "/internet", hash: "no-internet" },
      { label: "Restart vs. factory reset", to: "/internet", hash: "restart-vs-reset" },
      { label: "Wi-Fi dead zones", to: "/wifi", hash: "signal-weakens" },
      { label: "How long outages last", to: "/internet", hash: "how-long" },
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
  "Bluepeak Wifi is an independent third-party assistance resource. It is not an internet service provider or telecommunications carrier and does not own or operate network infrastructure. Internet service availability, network maintenance, outage restoration and service performance are determined by the relevant provider. We are not affiliated with, endorsed by or representing any internet service provider, and any brand names or trademarks referenced remain the property of their respective owners.";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] text-cream">
        <NetworkPattern className="text-aqua/40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="max-w-sm">
              <Logo tone="light" />
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                An independent third-party resource for understanding internet, Wi-Fi and outage
                problems, with practical troubleshooting guidance and clear next steps. Not an
                internet service provider.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cream/75">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-aqua" />
                  <a href="tel:+18335815253" className="hover:text-aqua">(833) 581-5253</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-aqua" />
                  <address className="not-italic">
                    5908 Cecil Dr, Ozawkie, KS 66070, United States
                  </address>
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
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        hash={l.hash}
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
            <p>Independent third-party assistance resource. Not an internet service provider.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
