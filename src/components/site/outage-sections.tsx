import {
  BatteryCharging,
  CloudLightning,
  Hammer,
  PlugZap,
  Router as RouterIcon,
  Cable,
  Wrench,
  AlertOctagon,
} from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { Callout, FaqAccordion, RelatedLinks, SectionIntro } from "@/components/site/guide";
import { OUTAGE_FAQS } from "@/lib/faqs";
import { IMG } from "@/lib/images";

const LEVELS = [
  {
    t: "Individual home issue",
    c: "The problem is with your own equipment, wiring, Wi-Fi or a single device. Neighbors on the same provider are usually fine.",
  },
  {
    t: "Localized network issue",
    c: "A fault affecting a street, building or small neighborhood, such as a damaged line or local equipment. Several nearby customers may be affected.",
  },
  {
    t: "Wider provider outage",
    c: "A larger interruption affecting many customers across an area, often caused by major equipment failure, severe weather or a power problem.",
  },
];

const CAUSES = [
  { icon: Cable, t: "Fibre or cable damage", c: "Lines can be cut by construction, damaged by accidents or worn by age and weather." },
  { icon: RouterIcon, t: "Network equipment failure", c: "Hardware in the provider's network can fail, interrupting service for customers connected to it." },
  { icon: Wrench, t: "Planned maintenance", c: "Providers sometimes take service down for upgrades and repairs. Notices are often, though not always, given in advance." },
  { icon: PlugZap, t: "Power interruptions", c: "Network equipment and your own modem and router need electricity. Power cuts can interrupt service even when nothing is broken." },
  { icon: CloudLightning, t: "Severe weather", c: "Storms, flooding, ice, wind and extreme heat can damage lines and equipment or cause power failures." },
  { icon: AlertOctagon, t: "Technical network faults", c: "Software or configuration errors and congestion in a provider's systems can cause service problems." },
  { icon: Hammer, t: "Unexpected infrastructure problems", c: "Fires, vehicle accidents, vandalism or other incidents can damage infrastructure without warning." },
];

const CHECKS = [
  ["Check the provider's official service-status page", "Most providers publish outage or service-status information on their website or app. Use mobile data if your home internet is down. Always use the provider's own official channels."],
  ["Look for official outage notifications", "Check text messages, emails or app notifications from your provider about outages or maintenance."],
  ["Contact provider support", "Their support line can often tell you whether they can see a problem affecting your address and give you a reference number."],
  ["See whether nearby customers on the same provider are affected", "Ask neighbors who use the same provider whether they've lost service. If they use a different provider, their situation tells you little."],
];

const WAITING = [
  "Check official provider updates for notes and changes.",
  "Keep important devices charged, especially phones and laptops.",
  "Use a mobile hotspot if you need to get something done. Check your data allowance first.",
  "Avoid repeatedly restarting equipment. One proper restart is enough.",
  "Save important work and download what you need while you still can.",
  "Follow the provider's instructions, including any steps they ask you to take.",
];

const CONTACT_WHEN = [
  ["Persistent interruptions", "The service stays down after a proper restart and your equipment looks normal."],
  ["Suspected line damage", "You see cut, hanging, or damaged cables or a damaged box outside your home. Do not touch them."],
  ["Account restrictions", "Your provider may have suspended or restricted service, for example over billing, and only they can tell you."],
  ["Recurring connectivity issues", "The same drops or outages keep returning over days or weeks. Share your notes and dates."],
];

export function OutageSections() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <Callout title="About outage information">
          <p>
            Bluepeak Wifi does not monitor provider networks and does not show live outage status.
            Nothing here is a status update. Your provider is the only source that can
            confirm an outage in your area.
          </p>
        </Callout>
      </div>

      <section className="py-16 lg:py-24" id="outages">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="A" title="What is an internet outage?">
            <p>
              An outage means your internet service has stopped working. The cause can be close to
              you or far away, and it helps to know which.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {LEVELS.map((l, i) => (
              <Reveal key={l.t} delay={i * 80} className="soft-card lift p-7">
                <span className="grid size-10 place-items-center rounded-full bg-ink font-display text-sm font-extrabold text-aqua">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{l.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.c}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Signs aren't proof. A single missing light or one offline device doesn't mean the
            provider has an outage, and several offline devices don't prove one either.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24" id="why-outages">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="B" title="Why do internet outages happen?">
            <p>Outages have many possible causes. Your provider can tell you which applies.</p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAUSES.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 70} className="soft-card lift p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="check-area">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionIntro eyebrow="C" title="How to check whether your area is affected">
              <p>Rule out your home equipment first, then use these official sources.</p>
            </SectionIntro>
            <ol className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
              {CHECKS.map(([t, c], i) => (
                <li
                  key={t}
                  className={`grid gap-2 p-6 sm:grid-cols-[15rem_1fr] ${i ? "border-t border-border" : ""}`}
                >
                  <p className="font-bold">
                    <span className="mr-2 text-primary">{i + 1}.</span>
                    {t}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                </li>
              ))}
            </ol>
          </div>
          <Reveal delay={100}>
            <img
              src={IMG.cityFiber}
              alt="City skyline with fibre light trails representing network infrastructure"
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover lg:h-[28rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24" id="how-long">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionIntro eyebrow="D" title="How long does an internet outage last?">
            <p>
              There's no single answer. Restoration time depends on:
            </p>
          </SectionIntro>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "The type of fault",
              "How much infrastructure is affected",
              "What repairs are needed and whether crews must travel",
              "Weather and safety conditions",
              "The provider's response and priorities",
            ].map((t) => (
              <li key={t} className="rounded-2xl bg-card px-5 py-4 text-sm ring-1 ring-border">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Callout title="No promised times">
              <p>
                We do not publish average restoration times and cannot say when your service will
                return. Provider estimates can change as more information emerges, so check their
                official updates.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="while-waiting">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="E" title="What should you do while waiting?" />
            <ul className="mt-6 grid gap-3">
              {WAITING.map((w, i) => (
                <Reveal as="li" key={w} delay={i * 50} className="flex items-start gap-3 text-sm">
                  <BatteryCharging className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground/80">{w}</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              After power returns, wait a few minutes for lights to settle. Use a surge protector
              to guard equipment from power spikes.
            </p>
          </div>
          <Reveal delay={100}>
            <img
              src={IMG.remoteWork}
              alt="Person working on a laptop at home"
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24" id="contact-provider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="F" title="When should you contact your provider?">
            <p>
              Ask for a ticket or reference number, and have the time the problem started and the
              lights' status ready.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {CONTACT_WHEN.map(([t, c], i) => (
              <Reveal key={t} delay={(i % 2) * 70} className="soft-card p-6">
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <RelatedLinks
              links={[
                { to: "/wifi", label: "Wi-Fi help" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="outage-faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionIntro eyebrow="G" title="Outage FAQ" />
          <Reveal className="mt-8">
            <FaqAccordion items={OUTAGE_FAQS} defaultOpen={OUTAGE_FAQS[0].q} />
          </Reveal>
        </div>
      </section>

    </>
  );
}
