import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cable,
  CalendarCheck,
  CheckCircle2,
  Gauge,
  Headphones,
  Home,
  Phone,
  Power,
  Router as RouterIcon,
  Sparkles,
  Stethoscope,
  Wifi,
  WifiOff,
  Wrench,
} from "lucide-react";
import { CurveDivider, Eyebrow, NetworkPattern, Reveal } from "./primitives";
import { FaqAccordion } from "./guide";
import { HOME_FAQS } from "@/lib/faqs";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

const PHONE_HREF = "tel:+18335815253";

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

        <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-10 text-center sm:px-8 lg:pt-24">
          <Reveal className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/8 px-4 py-1.5 text-xs font-semibold text-cream/85 ring-1 ring-cream/15">
              <WifiOff className="size-4 text-coral" />
              Independent internet, Wi-Fi &amp; outage guidance
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-7 max-w-4xl font-display text-[2.1rem] leading-[1.06] font-extrabold sm:text-6xl lg:text-7xl">
              Internet down? Wi-Fi slow?
              <br className="hidden sm:block" /> Let&apos;s get you{" "}
              <span className="relative inline-block">
                <span className="aqua-text">back online.</span>
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
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Understand what&apos;s affecting your connection with practical Wi-Fi troubleshooting,
              router guidance and clear information about internet interruptions.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-aqua"
            >
              <Phone className="size-4" /> Call (833) 581-5253
            </a>
            <Link
              to="/internet"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream/10"
            >
              Explore support <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-cream/60">
              Bluepeak Wifi is an independent third-party assistance resource, not an internet
              service provider.{" "}
              <Link to="/disclaimer" className="underline underline-offset-2 hover:text-aqua">
                Read the full disclosure
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-12">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { img: IMG.routerDevice, label: "Router & Wi-Fi guidance", alt: "Home Wi-Fi router on a shelf", icon: Home },
                { img: IMG.networkGlobe, label: "Outage guidance", alt: "Illuminated global network lines", icon: AlertTriangle },
                { img: IMG.technician, label: "Setup & tuning tips", alt: "Technician working on networking equipment", icon: Wrench },
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
                    alt={c.alt}
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
    <section aria-hidden className="overflow-hidden py-10">
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
    copy: "A complete loss of connection usually comes from a short list of causes: modem or router faults, loose or disconnected cables, incorrect settings, or an interruption on the provider's side. Working through the equipment first helps narrow it down.",
    to: "/internet",
    hash: "no-internet",
    cta: "No-internet checklist",
  },
  {
    icon: Gauge,
    title: "Slow or unstable speeds",
    copy: "Speed depends on more than the plan. Network congestion, weak wireless signal, the number of connected devices, older equipment and service conditions can each slow things down or make the connection erratic.",
    to: "/internet",
    hash: "slow-internet",
    cta: "Why speeds drop",
  },
  {
    icon: Wifi,
    title: "Wi-Fi dead zones",
    copy: "Wireless signal weakens with distance and with every wall or floor it passes through. Interference from other devices and networks, and a router tucked in a corner or cabinet, make weak rooms more likely.",
    to: "/wifi",
    hash: "signal-weakens",
    cta: "Fix weak rooms",
  },
  {
    icon: AlertTriangle,
    title: "Suspected outages",
    copy: "If only one device struggles, the issue is probably at home. If every device is offline and your equipment looks normal, the wider service may be affected. Your provider's official channels can confirm.",
    to: "/internet",
    hash: "outages",
    cta: "Home issue or outage?",
  },
  {
    icon: RouterIcon,
    title: "Router & modem setup",
    copy: "The modem brings the service into your home; the router shares it with your devices over Wi-Fi and cables. When setting up, check power, the cable to the modem, the lights and your Wi-Fi name and password.",
    to: "/wifi",
    hash: "router-basics",
    cta: "Router and modem basics",
  },
  {
    icon: Activity,
    title: "Buffering & random drops",
    copy: "Streams that stall and connections that drop can come from unstable signal, wireless interference, a congested network, a struggling device or an issue on the streaming platform itself.",
    to: "/internet",
    hash: "buffering",
    cta: "Buffering explained",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Everyday connection problems</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            The connection problems most households run into
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a router that needs a restart to a dead zone behind a thick wall, here is what
            usually causes each problem and where to read more.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUE_CARDS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={(i % 3) * 80}
              className="soft-card lift group flex flex-col p-7"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-ink group-hover:text-aqua">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              <Link
                to={r.to}
                hash={r.hash}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-ink"
              >
                {r.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STEPS */

const STEPS = [
  {
    icon: Stethoscope,
    title: "Tell us the symptom",
    copy: "Describe what is happening. Is your connection completely offline, unusually slow or disconnecting repeatedly?",
  },
  {
    icon: Power,
    title: "Run basic checks",
    copy: "Check your connected devices, router indicators, cables and Wi-Fi connection to identify where the issue may be occurring.",
  },
  {
    icon: Wifi,
    title: "Find the source",
    copy: "Understand whether the problem appears to involve your home equipment, wireless network, individual device or service provider.",
  },
  {
    icon: Headphones,
    title: "Explore the next step",
    copy: "Use the available guidance to understand what to do next, including when to contact your actual internet provider.",
  },
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
            <p className="mt-4 text-cream/70">
              A simple way to narrow down a problem. Not every issue can be solved this way, but it
              shows you where to look next.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="relative">
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-6 left-16 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-aqua/50 to-transparent lg:block"
                  />
                )}
                <span className="relative grid size-12 place-items-center rounded-2xl bg-cream/10 text-aqua ring-1 ring-cream/15">
                  <s.icon className="size-5" />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-coral text-[11px] font-extrabold text-ink">
                    {i + 1}
                  </span>
                </span>
                <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-aqua uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- OUTAGE CHECK */

const CHECK_STEPS = [
  "Check whether only one device is affected, or every device in the home.",
  "Try other devices, on Wi-Fi and, if possible, on a cable.",
  "Look at the router and modem lights and compare them with your equipment's manual.",
  "Check your provider's official outage page or app, using mobile data if needed.",
  "See whether nearby households with the same provider are reporting problems.",
  "Contact your provider's support if the equipment looks normal but the internet is still down.",
];

export function OutageCheck() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-secondary/70 p-6 sm:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow>Outages</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                Is it your Wi-Fi, or is the whole area down?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Working through a few quick checks can show whether the problem is in your home or
                may involve the wider service.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-card p-6 ring-1 ring-border">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                    Home network issue
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                    If only one device is affected, the problem may involve its settings, Wi-Fi
                    connection or hardware.
                  </p>
                </div>
                <div className="rounded-3xl bg-ink p-6 text-cream">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] text-aqua uppercase">
                    Possible provider outage
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/80">
                    If multiple devices have lost connectivity and the equipment appears to be
                    functioning normally, the problem may involve the wider service.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                These are indicators, not definitive diagnoses. Only your provider can confirm an
                outage on their network.
              </p>

              <h3 className="mt-8 font-display text-lg font-bold">What to check, in order</h3>
              <ol className="mt-4 grid gap-3 text-sm">
                {CHECK_STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/12 text-[11px] font-extrabold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-foreground/80">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm text-muted-foreground">
                Bluepeak Wifi does not monitor provider networks or show live outage status. Outage
                repairs and restoration are handled by your internet provider.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/internet" hash="outages"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-primary"
                >
                  Read the outage guide
                  <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-ink ring-1 ring-ink/25 transition-colors hover:bg-card"
                >
                  <Phone className="size-4" /> Call (833) 581-5253
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <img
                src={IMG.serverRoom}
                alt="Racks of network equipment in a data room"
                loading="lazy"
                className="h-44 w-full rounded-[1.75rem] object-cover sm:h-60"
              />
              <img
                src={IMG.remoteWork}
                alt="Person working from home on a laptop"
                loading="lazy"
                className="h-44 w-full rounded-[1.75rem] object-cover sm:h-60"
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
    copy: "Indicator lights, a secure power supply, good ventilation and sensible placement all affect how well a router performs. If it is misbehaving, a basic restart (not a factory reset) is the safe first step.",
    points: ["Learn what the lights mean", "Keep vents clear and away from heat", "Restart: modem first, then router"],
    img: IMG.installer,
    alt: "Technician setting up a home router",
    to: "/internet",
    hash: "indicators",
    cta: "Reading router lights",
  },
  {
    icon: Boxes,
    title: "Mesh extenders",
    copy: "Mesh systems and extenders can widen coverage, but placement matters. Put them where they still get a strong signal from the router. An extender won't solve every problem, such as an unstable service.",
    points: ["Place about halfway to the weak area", "Mesh usually beats a basic extender", "Wired backhaul works best"],
    img: IMG.smartHome,
    alt: "Smart home devices connected over Wi-Fi",
    to: "/wifi",
    hash: "router-basics",
    cta: "Mesh and extender basics",
  },
  {
    icon: Cable,
    title: "Cables and connections",
    copy: "A loose power plug, a cable that is not fully seated or a damaged Ethernet lead can cause drops or slow speeds. Check that each connection is secure and the cable suits the equipment.",
    points: ["Reseat power, coax and Ethernet", "Look for kinks, cuts and bent pins", "Use the correct cable type"],
    img: IMG.dataDesk,
    alt: "Ethernet cables plugged into a network switch",
    to: "/internet",
    hash: "cables",
    cta: "Cable checks",
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
            Many connection problems start inside the home. These are the first places to look.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {GEAR.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 90}
              className="soft-card lift group flex flex-col overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <g.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/80">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={g.to}
                  hash={g.hash}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-ink"
                >
                  {g.cta} <ArrowRight className="size-4" />
                </Link>
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
        <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem]">
            <img
              src={IMG.supportTeam}
              alt="Support team members talking with a customer"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream sm:p-8">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Technical problems. Clear human guidance.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                Connectivity problems can be frustrating. Get clear explanations, discuss what you
                are experiencing and understand which steps may help you move forward.
              </p>
            </div>
          </Reveal>

          <div className="grid content-start gap-5">
            {[
              {
                icon: Headphones,
                t: "Talk it through",
                c: "Call or send a request and describe what is happening. We will help you make sense of the symptoms and suggest sensible checks to try.",
              },
              {
                icon: Gauge,
                t: "Speed and signal checks",
                c: "Learn how to test your connection properly, wired and wireless, and how to read the results. We explain; we do not guarantee speeds or outcomes.",
              },
              {
                icon: CalendarCheck,
                t: "Moving or upgrading?",
                c: "Get guidance on what to think about when setting up at a new address or choosing new networking equipment. Service availability and plans come from providers.",
              },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 90} className="soft-card lift flex items-start gap-5 p-6 sm:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-aqua">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
                </div>
              </Reveal>
            ))}
            <p className="px-2 text-xs leading-relaxed text-muted-foreground">
              Our team does not repair provider networks or physically fix your service, and cannot
              guarantee any technical outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

export function Faq() {
  return (
    <section className="py-16 lg:py-24" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Connection problems FAQ</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Quick answers to common connection problems
            </h2>
            <p className="mt-4 text-muted-foreground">
              General information to help you understand what may be happening. Your equipment and
              provider may differ, so follow their instructions where they conflict with ours.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
            >
              <Phone className="size-4" /> Call (833) 581-5253
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <Reveal>
            <FaqAccordion items={HOME_FAQS} defaultOpen={HOME_FAQS[0].q} />
          </Reveal>
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
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
        />
        <span className="absolute inset-0 bg-ink/40" />
        <CurveDivider className="absolute inset-x-0 top-0 rotate-180 text-background" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <Eyebrow tone="light">Need a hand?</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
            Get your connection working again.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/85">
            Tell us what&apos;s happening with your internet or Wi-Fi. We&apos;ll help you
            understand the issue and explore the next steps.
          </p>
          <div className="mx-auto mt-9 max-w-xl rounded-3xl bg-cream/10 p-6 ring-1 ring-cream/25 backdrop-blur-sm">
            <p className="font-display text-lg font-bold">
              Problem not fixed? Our team will help.
            </p>
            <p className="mt-1 text-sm text-cream/80">
              If the steps above haven&apos;t solved it, call us and we&apos;ll talk it through with you.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-aqua"
            >
              <Phone className="size-5" /> Call (833) 581-5253
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-md text-xs text-cream/60">
            Independent assistance resource. We cannot guarantee restoration or resolution of any
            issue.
          </p>
        </div>
      </div>
    </section>
  );
}
