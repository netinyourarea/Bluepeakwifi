import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, ClipboardList, Laptop, PhoneCall, Smartphone, Zap } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Internet Outage Help: What to Check & Who to Call | Bluepeak Wifi";
const description =
  "Not sure if your internet is out in your area? Use our outage checklist, report it to your provider properly and stay online in the meantime.";

export const Route = createFileRoute("/outages")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/outages",
      breadcrumb: [{ name: "Outages", path: "/outages" }],
    }),
  component: OutagesPage,
});

const STEPS = [
  ["Rule out your home", "Restart modem and router, check cables, and test one device by cable."],
  ["Check for area problems", "Open your provider's app or outage page, and ask neighbours or check local community groups."],
  ["Read the modem lights", "Online or internet light off, blinking or red after a restart points to the line."],
  ["Report it to your provider", "Use their app or support line, and ask for a ticket number and estimated restore time."],
  ["Stay connected meanwhile", "Use a phone hotspot for essentials and avoid repeatedly rebooting the modem."],
];

function OutagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Outages"
        title="Internet out? Here's what to do"
        intro="Work out whether it's your home network or a wider outage, report it properly, and keep working while it's repaired."
        image={IMG.fiberCables}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <Eyebrow>Outage checklist</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Five steps, in order</h2>
          </Reveal>
          <ol className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {STEPS.map(([t, c], i) => (
              <li
                key={t}
                className={`grid gap-2 p-6 sm:grid-cols-[16rem_1fr] sm:items-center ${i ? "border-t border-border" : ""}`}
              >
                <p className="font-bold">
                  <span className="mr-2 text-primary">{i + 1}.</span>
                  {t}
                </p>
                <p className="text-sm text-muted-foreground">{c}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-2xl bg-primary/6 p-5 text-sm leading-relaxed text-foreground/80 ring-1 ring-primary/15">
            <strong>Good to know:</strong> We don&apos;t operate any network and can&apos;t see or
            repair your provider&apos;s outages. Area outages are restored by your internet provider
            only. We help you confirm the cause and prepare what to tell them.
          </p>
        </div>
      </section>

      <FeatureGrid
        items={[
          { icon: ClipboardList, title: "What to tell your provider", copy: "Light colours, affected devices, start time and steps already tried." },
          { icon: PhoneCall, title: "Ask for a ticket number", copy: "Keep a reference so you can follow up and request credits." },
          { icon: Smartphone, title: "Phone hotspot backup", copy: "Share mobile data for calls and essential work." },
          { icon: Laptop, title: "Work-offline tips", copy: "Save documents locally and queue uploads for when service returns." },
          { icon: BatteryCharging, title: "Power-cut check", copy: "After a power cut, restart modem then router and wait for lights to settle." },
          { icon: Zap, title: "Protect your gear", copy: "Use a surge protector to avoid damage when power returns." },
        ]}
      />

      <CtaStrip />
    </>
  );
}
