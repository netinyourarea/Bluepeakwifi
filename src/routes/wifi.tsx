import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Lock, Radio, Router, Signal, Smartphone, Wifi, Zap } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { Equipment } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Wi-Fi Help: Dead Zones, Router & Mesh Setup | Bluepeak Wifi";
const description =
  "Fix weak Wi-Fi, dead zones and dropped devices. Router placement, band and channel tuning, mesh setup and smart-device pairing explained.";

export const Route = createFileRoute("/wifi")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/wifi",
      breadcrumb: [{ name: "Wi-Fi Help", path: "/wifi" }],
    }),
  component: WifiPage,
});

const TIPS = [
  ["Place it centrally and high", IMG.routerDevice, "Keep the router out in the open, off the floor and away from metal and microwaves."],
  ["Pick the right band", IMG.smartHome, "5 GHz is faster at close range; 2.4 GHz reaches further through walls."],
  ["Add mesh where it drops", IMG.homeStudy, "Put a node about halfway to the dead zone, not inside it."],
];

function WifiPage() {
  return (
    <>
      <PageHero
        eyebrow="Wi-Fi help"
        title="Wi-Fi that reaches every room"
        intro="Weak signal, dead zones and devices that keep dropping are almost always fixable at home. Here's how."
        image={IMG.smartHome}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Three quick wins</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Start with these</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TIPS.map(([name, img, copy], i) => (
              <Reveal key={name} delay={i * 80} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={img} alt={name} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={[
          { icon: Signal, title: "Dead-zone mapping", copy: "Walk-through tests to see where the signal really falls off." },
          { icon: Radio, title: "Channel & interference", copy: "Move off crowded channels shared with neighbouring networks." },
          { icon: Boxes, title: "Mesh & extenders", copy: "When a mesh system beats a repeater, and where to put it." },
          { icon: Router, title: "Router setup & replacement", copy: "Choosing and configuring a router that fits your home." },
          { icon: Smartphone, title: "Device pairing", copy: "Reconnect phones, TVs, printers and smart-home devices." },
          { icon: Lock, title: "Secure your network", copy: "Strong passwords, WPA3 where supported and guest networks." },
        ]}
      />

      <Equipment />

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Wifi className="mx-auto size-6 text-gold" />
          <h2 className="mt-4 text-3xl font-extrabold">Smart devices won&apos;t stay connected?</h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/70">
            Many smart plugs, cameras and speakers only join 2.4 GHz networks. Separate the bands
            temporarily, pair the device, then merge them again.
          </p>
          <Zap className="mx-auto mt-6 size-5 text-gold" />
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
