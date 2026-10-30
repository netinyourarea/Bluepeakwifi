import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Boxes,
  Cable,
  CalendarCheck,
  Gauge,
  Headphones,
  Home,
  Minus,
  Phone,
  Plus,
  Power,
  Radio,
  Router as RouterIcon,
  Sparkles,
  Stethoscope,
  Wifi,
  WifiOff,
  Wrench,
} from "lucide-react";
import { CurveDivider, Eyebrow, NetworkPattern, Reveal } from "./primitives";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- HERO */

export function Hero() {
  return (
    <section className="px-3 pt-4 sm:px-5">
      <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] text-cream">
        <img
          src={IMG.cityFiber}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="ring-grid absolute inset-0 opacity-40" />
        <span className="absolute -top-24 left-1/4 size-72 rounded-full bg-aqua/20 blur-3xl float-slow" />
        <span className="absolute right-8 bottom-0 size-80 rounded-full bg-coral/15 blur-3xl float-slower" />

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-10 text-center sm:px-8 lg:pt-24">
          <Reveal className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/8 px-4 py-1.5 text-xs font-semibold text-cream/80 ring-1 ring-cream/15">
              <WifiOff className="size-4 text-coral" />
              Internet, Wi-Fi &amp; outage help
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              Internet down? Wi-Fi slow?
              <br className="hidden sm:block" /> Let&apos;s get you{" "}
              <span className="relative inline-block">
                <span className="aqua-text">back online</span>
                <svg
                  viewBox="0 0 300 16"
                  aria-hidden
                  className="absolute -bottom-2 left-0 h-3 w-full text-coral"
                >
                  <path
                    d="M2 12 C 80 2, 220 2, 298 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Step-by-step help for dropped connections, slow speeds, Wi-Fi dead zones, router setup
              and suspected outages — explained in plain language, by a real person.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+18335815253"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-aqua"
            >
              <Phone className="size-4" /> Call (833) 581-5253
            </a>
          </Reveal>

          <Reveal delay={300} className="mt-12">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { img: IMG.routerDevice, label: "Router & Wi-Fi fixes", icon: Home },
                { img: IMG.fiberCables, label: "Outage guidance", icon: AlertTriangle },
                { img: IMG.technician, label: "Setup & tuning", icon: Wrench },
              ].map((c, i) => (
                <div
                  key={c.label}
                  className={cn(
                    "group relative h-40 overflow-hidden rounded-3xl ring-1 ring-cream/15 sm:h-52",
                    i === 1 && "sm:-mt-6",
                  )}
                >
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold">
                    <c.icon className="size-4 text-aqua" />
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- TICKER */

const TICKER = [
  "No internet",
  "Slow speeds",
  "Wi-Fi dead zones",
  "Outage guidance",
  "Router setup",
  "Buffering & drops",
  "Mesh Wi-Fi",
  "Smart-device pairing",
];

export function Ticker() {
  return (
    <section className="overflow-hidden py-10">
      <div className="flex w-max marquee-track gap-10 pr-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10">
            {TICKER.map((t) => (
              <span
                key={t + dup}
                className="flex items-center gap-3 font-display text-xl font-bold text-foreground/25 sm:text-2xl"
              >
                <Sparkles className="size-4 text-coral/60" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- COMMON ISSUES */

export const ISSUE_CARDS = [
  {
    icon: WifiOff,
    title: "No internet at all",
    copy: "Lights on but nothing loads? We walk through modem, router and cable checks to find where the connection breaks.",
  },
  {
    icon: Gauge,
    title: "Slow or unstable speeds",
    copy: "Pinpoint whether the slowdown is your Wi-Fi, your router, a busy device or the line itself.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi dead zones",
    copy: "Router placement, channel and band tuning, and where a mesh node will actually help.",
  },
  {
    icon: AlertTriangle,
    title: "Suspected outages",
    copy: "Learn how to tell a local fault from an area outage, and exactly what to tell your provider.",
  },
  {
    icon: RouterIcon,
    title: "Router & modem setup",
    copy: "First-time setup, replacing old gear, secure passwords, guest networks and firmware updates.",
  },
  {
    icon: Activity,
    title: "Buffering & random drops",
    copy: "Fix video calls that freeze, streams that stall and gaming lag caused by crowded Wi-Fi.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we help with</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            The everyday connection problems, solved
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a router that needs a reboot to a dead zone behind a thick wall, here is where most
            people need a hand.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUE_CARDS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} className="soft-card lift p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STEPS */

const STEPS = [
  { icon: Stethoscope, title: "Tell us the symptom", copy: "What's happening, on which devices, and since when." },
  { icon: Power, title: "Run quick checks", copy: "Power, cables, lights and a clean restart in the right order." },
  { icon: Wifi, title: "Fix and tune", copy: "Wi-Fi placement, settings and device tweaks that stick." },
  { icon: Headphones, title: "Escalate cleanly", copy: "If it's the line, we give you the notes to hand your provider." },
];

export function Steps() {
  return (
    <section className="px-3 sm:px-5">
      <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] py-16 text-cream lg:py-24">
        <NetworkPattern className="text-aqua/30" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">How it works</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Four steps from “it&apos;s down” to “it&apos;s working”
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="relative">
                <span className="absolute top-6 left-14 hidden h-px w-full bg-gradient-to-r from-aqua/40 to-transparent lg:block" />
                <span className="relative grid size-12 place-items-center rounded-2xl bg-cream/10 text-aqua ring-1 ring-cream/15">
                  <s.icon className="size-5" />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-coral text-[11px] font-extrabold text-ink">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- OUTAGE CHECK */

const OUTAGE_SIGNS = [
  "Several devices on both Wi-Fi and cable lose the internet at once.",
  "The modem's online or internet light is blinking, off or red.",
  "Neighbours or your provider's app report problems in your area.",
  "A restart and a cable check change nothing.",
];

export function OutageCheck() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-secondary/70 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Outages</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                Is it your Wi-Fi, or is the whole area down?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                These signs point to an outage on the provider&apos;s side rather than a problem in
                your home:
              </p>
              <ul className="mt-5 grid gap-3 text-sm">
                {OUTAGE_SIGNS.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Radio className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Area outages are fixed by your internet provider. We help you confirm it, report it
                properly and keep working in the meantime.
              </p>
              <a
                href="tel:+18335815253"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-primary"
              >
                Call about an outage
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMG.serverRoom}
                alt="Network equipment racks"
                loading="lazy"
                className="h-56 w-full rounded-[1.75rem] object-cover sm:h-72"
              />
              <img
                src={IMG.remoteWork}
                alt="Working from home during an internet problem"
                loading="lazy"
                className="mt-8 h-56 w-full rounded-[1.75rem] object-cover sm:h-72"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- EQUIPMENT */

const GEAR = [
  {
    icon: RouterIcon,
    title: "Router health",
    copy: "Reboots, firmware updates, channel selection and replacing gear that's past its prime.",
    img: IMG.routerDevice,
  },
  {
    icon: Boxes,
    title: "Mesh & extenders",
    copy: "Nodes placed where the signal actually drops, not guessed.",
    img: IMG.smartHome,
  },
  {
    icon: Cable,
    title: "Cables & connections",
    copy: "Loose coax, damaged Ethernet and splitters that quietly choke your speed.",
    img: IMG.dataDesk,
  },
];

export function Equipment() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Home network</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Fix the gear that sits between you and the web
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most &ldquo;internet problems&rdquo; live inside the home. We help you find and fix
            them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {GEAR.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="soft-card lift overflow-hidden">
              <img src={g.img} alt={g.title} loading="lazy" className="h-52 w-full object-cover" />
              <div className="p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <g.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- SUPPORT */

export function Support() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={IMG.supportTeam}
              alt="Support specialists on a call"
              loading="lazy"
              className="h-[30rem] w-full object-cover lg:h-[34rem]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                A real person, in plain language
              </h2>
              <p className="mt-3 max-w-md text-sm text-cream/70">
                No jargon and no scripts. Describe what you see and we&apos;ll talk you through it
                one step at a time.
              </p>
            </div>
          </Reveal>

          <div className="grid content-start gap-5">
            {[
              { icon: Headphones, t: "Talk it through", c: "Call or send a request and describe the problem." },
              { icon: Gauge, t: "Speed & signal checks", c: "Learn how to test properly, wired and wireless." },
              { icon: CalendarCheck, t: "Moving or upgrading?", c: "Get help setting up your network at a new address." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 90} className="soft-card lift flex items-start gap-5 p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-aqua">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

const FAQS = [
  {
    q: "My internet is down. What should I try first?",
    a: "Check that the modem and router have power, make sure cables are firmly connected, then unplug both for 60 seconds and restart the modem first, then the router. If the modem's online light stays off or blinking, the problem is likely on the line.",
  },
  {
    q: "How can I tell if it's an outage?",
    a: "If multiple devices lose connection at once, a restart doesn't help and your provider's app or outage page shows problems in your area, it is probably an outage. Only your provider can repair area outages.",
  },
  {
    q: "Why is my Wi-Fi slow when the speed test looks fine?",
    a: "Test with a cable next to the router, then again in the slow room. A big gap usually means distance, walls or interference, which better router placement or a mesh node can fix.",
  },
  {
    q: "Can you fix an outage for me?",
    a: "No. We are an independent help service and do not operate any network. We can help you confirm it is an outage, report it correctly to your provider and keep you connected meanwhile.",
  },
  {
    q: "Do I need a new router?",
    a: "Not always. Routers older than five years or that can't handle your device count may need replacing, but many problems are fixed with placement, settings and a firmware update.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Quick answers to common connection problems
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure about something? Ask us and we&apos;ll walk you through it.
            </p>
            <a
              href="tel:+18335815253"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
            >
              Ask a question
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <div className="grid gap-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left transition-colors",
                      isOpen ? "bg-ink text-cream" : "bg-card ring-1 ring-border hover:bg-secondary/60",
                    )}
                  >
                    <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full",
                        isOpen ? "bg-coral text-ink" : "bg-secondary text-primary",
                      )}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pt-4 pb-2 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FINAL CTA */

export function FinalCta() {
  return (
    <section className="px-3 pb-14 sm:px-5">
      <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] text-cream">
        <img
          src={IMG.fiberCables}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        <CurveDivider className="absolute inset-x-0 top-0 rotate-180 text-background" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow tone="light">Need a hand?</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
            Get your connection working again
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Tell us what&apos;s happening with your internet or Wi-Fi and we&apos;ll point you to the
            fastest fix.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+18335815253"
              className="rounded-full bg-coral px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-aqua"
            >
              Get help now
            </a>
            <a
              href="tel:+18335815253"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              <Phone className="size-4" /> (833) 581-5253
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
