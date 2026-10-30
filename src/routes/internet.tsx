import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Cable, Gauge, MonitorPlay, RefreshCw, ShieldCheck, Upload, WifiOff } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Internet Troubleshooting & Support | Bluepeak Wifi";
const description =
  "Fix no internet, slow speeds and random disconnects with clear step-by-step checks for your modem, router and devices.";

export const Route = createFileRoute("/internet")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/internet",
      breadcrumb: [{ name: "Internet Support", path: "/internet" }],
    }),
  component: InternetPage,
});

const CHECKS = [
  ["1. Check power & cables", "Modem and router powered on; coax, Ethernet and phone lines firmly seated and undamaged."],
  ["2. Restart in order", "Unplug both for 60 seconds. Power the modem first, wait for it to settle, then the router."],
  ["3. Test with a cable", "Plug a computer straight into the router. If it works, the issue is Wi-Fi; if not, it's the modem or line."],
  ["4. Read the lights", "A blinking or red online light usually means the line or provider, not your home network."],
  ["5. Try another device", "If one device fails on Wi-Fi, forget the network and reconnect, or update its network drivers."],
];

const SPEED = [
  ["Light use", "Up to 100 Mbps", "Browsing, HD streaming, 1–4 devices"],
  ["Busy household", "200 – 500 Mbps", "4K streams, gaming, video calls, smart home"],
  ["Power users & offices", "500 Mbps+", "Large uploads, VPNs, 20+ devices, backups"],
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet support"
        title="Get a dropped or slow connection working again"
        intro="Clear, ordered checks for the most common internet problems — so you can tell what's wrong before you spend an hour on hold."
        image={IMG.serverRoom}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Eyebrow>Troubleshooting checklist</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Work through it in this order</h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {CHECKS.map(([step, copy], i) => (
              <div
                key={step}
                className={`grid gap-2 p-6 sm:grid-cols-[14rem_1fr] sm:items-center ${i ? "border-t border-border" : ""}`}
              >
                <p className="font-bold">{step}</p>
                <p className="text-sm text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Speed guide</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">How much speed do you actually need?</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {SPEED.map(([who, speed, what], i) => (
              <div
                key={who}
                className={`grid gap-2 p-6 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center ${i ? "border-t border-border" : ""}`}
              >
                <p className="font-bold">{who}</p>
                <p className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Gauge className="size-4" /> {speed}
                </p>
                <p className="text-sm text-muted-foreground">{what}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            If your results are well below the plan you pay for on a wired test, contact your
            provider with the results.
          </p>
        </div>
      </section>

      <FeatureGrid
        items={[
          { icon: WifiOff, title: "No connection", copy: "Isolate whether the modem, router, cable or line is at fault." },
          { icon: Gauge, title: "Slow speeds", copy: "Wired vs wireless testing to find where the speed disappears." },
          { icon: RefreshCw, title: "Random disconnects", copy: "Spot overheating gear, bad cables, channel clashes and failing hardware." },
          { icon: MonitorPlay, title: "Buffering & lag", copy: "Prioritise calls, streams and games on a busy network." },
          { icon: Upload, title: "Poor upload / video calls", copy: "Stop calls from stalling when others are online." },
          { icon: ShieldCheck, title: "Safe settings", copy: "Strong passwords, guest networks and firmware updates." },
        ]}
      />

      <section className="bg-background pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Before you call your provider</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Gather these details first</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Your provider can help faster when you can tell them what you&apos;ve already tried.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-foreground/80">
              {[
                "Which devices are affected, wired or wireless",
                "Modem light colours and patterns",
                "When the problem started and how often it repeats",
                "Wired speed test results",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Cable className="size-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.routerDevice}
              alt="Router and modem on a shelf"
              loading="lazy"
              className="h-[320px] w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
