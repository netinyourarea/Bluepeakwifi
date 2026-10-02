import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Boxes,
  CalendarCheck,
  Clapperboard,
  Cloud,
  Gamepad2,
  Gauge,
  Headphones,
  Home,
  Laptop,
  MapPin,
  Minus,
  MonitorPlay,
  Plus,
  Radio,
  Router as RouterIcon,
  ShieldCheck,
  Signal,
  Sparkles,
  Star,
  Trophy,
  Tv,
  Users,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { CoverageFinder } from "./coverage-finder";
import { Counter, CurveDivider, Eyebrow, NetworkPattern, Reveal, SignalBars } from "./primitives";
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
              <SignalBars className="h-4" />
              Live network availability in 4,200+ neighbourhoods
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-7 max-w-4xl font-display text-4xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              The internet and TV
              <br className="hidden sm:block" /> your street{" "}
              <span className="relative inline-block">
                <span className="aqua-text">actually has</span>
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
              We check every fiber, cable and wireless line wired to your address, compare what they
              really deliver, and book the install for you — all in one conversation.
            </p>
          </Reveal>

          <Reveal delay={220} className="mx-auto mt-9 max-w-2xl">
            <CoverageFinder />
          </Reveal>

          <Reveal delay={300} className="mt-12">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { img: IMG.routerDevice, label: "Whole-home Wi-Fi", icon: Home },
                { img: IMG.livingRoomTv, label: "Live sports & 4K TV", icon: Trophy },
                { img: IMG.technician, label: "Same-week installs", icon: Wrench },
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
  "Fiber to the home",
  "2 Gbps peak speeds",
  "260+ TV channels",
  "Free coverage check",
  "Wi-Fi 6E mesh",
  "No hold music",
  "Same-week install",
  "Sports & 4K packs",
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

/* ------------------------------------------------------ INTERNET PLANS */

const TIERS = [
  {
    name: "Starter Stream",
    speed: 300,
    meter: 22,
    icon: Laptop,
    best: "Couples, small apartments",
    points: ["HD & 4K streaming", "Up to 8 devices", "Wi-Fi router included"],
  },
  {
    name: "Family Flow",
    speed: 1000,
    meter: 62,
    icon: Users,
    best: "Busy households",
    points: ["Multi-room 4K", "Up to 20 devices", "Mesh Wi-Fi extender"],
    featured: true,
  },
  {
    name: "Pro Current",
    speed: 2000,
    meter: 100,
    icon: Gamepad2,
    best: "Creators, gamers, offices",
    points: ["Symmetric uploads", "Low-latency routing", "Priority support"],
  },
];

export function InternetPlans() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Internet tiers</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Pick the speed, we&apos;ll find the line
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every tier is matched against the networks physically available at your address, so you
            never sign up for speed your street can&apos;t carry.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] p-8 lift",
                t.featured
                  ? "tide-bg text-cream ring-1 ring-aqua/25"
                  : "soft-card",
              )}
            >
              {t.featured && <NetworkPattern className="text-aqua/25" />}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl",
                      t.featured ? "bg-cream/10 text-aqua" : "bg-primary/10 text-primary",
                    )}
                  >
                    <t.icon className="size-5" />
                  </span>
                  {t.featured && (
                    <span className="rounded-full bg-coral px-3 py-1 text-[11px] font-bold text-ink uppercase">
                      Most requested
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">{t.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    t.featured ? "text-cream/60" : "text-muted-foreground",
                  )}
                >
                  {t.best}
                </p>

                <p className="mt-6 flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight">
                    <Counter to={t.speed} />
                  </span>
                  <span className="pb-2 text-sm font-bold text-coral">Mbps</span>
                </p>

                <div
                  className={cn(
                    "mt-4 h-1.5 w-full overflow-hidden rounded-full",
                    t.featured ? "bg-cream/12" : "bg-secondary",
                  )}
                >
                  <span
                    style={{ width: `${t.meter}%` }}
                    className="block h-full rounded-full bg-gradient-to-r from-teal to-aqua transition-all duration-1000"
                  />
                </div>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Zap
                        className={cn("size-4", t.featured ? "text-aqua" : "text-primary")}
                      />
                      <span className={t.featured ? "text-cream/80" : "text-foreground/80"}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors",
                    t.featured
                      ? "bg-coral text-ink hover:bg-aqua"
                      : "bg-ink text-cream hover:bg-primary",
                  )}
                >
                  Check availability
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- TV PACKAGES */

const PACKS = [
  {
    name: "Essentials",
    channels: "120+ channels",
    copy: "News, local networks and family favourites in crisp HD.",
    img: IMG.familyTv,
    icon: Tv,
  },
  {
    name: "Sports Arena",
    channels: "180+ channels",
    copy: "Every league, regional coverage and multi-game viewing.",
    img: IMG.sportsTv,
    icon: Trophy,
  },
  {
    name: "Cinema Club",
    channels: "210+ channels",
    copy: "Premium movie networks with on-demand libraries in 4K.",
    img: IMG.cinema,
    icon: Clapperboard,
  },
  {
    name: "Everything",
    channels: "260+ channels",
    copy: "The full lineup plus streaming apps on one set-top box.",
    img: IMG.streaming,
    icon: MonitorPlay,
  },
];

export function TvPackages() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Cable TV</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Channel packs built around what you actually watch
            </h2>
          </div>
          <Link
            to="/cable-tv"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-cream"
          >
            Browse all packs
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={cn("group relative overflow-hidden rounded-[2rem] lift", i % 2 ? "lg:mt-8" : "")}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <span className="grid size-10 place-items-center rounded-xl bg-cream/12 text-aqua backdrop-blur">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-xs font-bold tracking-[0.14em] text-coral uppercase">
                  {p.channels}
                </p>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- WHYUS */

const REASONS = [
  {
    icon: Signal,
    title: "Address-level truth",
    copy: "We pull the real serviceability data for your building, not a national marketing map.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure, ever",
    copy: "Independent guidance across every carrier that reaches you — we don't push one brand.",
  },
  {
    icon: Headphones,
    title: "One human, start to finish",
    copy: "The specialist who checks your coverage also books the install and follows up after.",
  },
  {
    icon: CalendarCheck,
    title: "Install windows that fit",
    copy: "Evening and weekend slots, confirmed by text, with a reminder the day before.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src={IMG.installer}
                alt="Technician installing a home fiber connection"
                loading="lazy"
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 -bottom-8 w-56 rounded-3xl bg-card p-5 shadow-[var(--shadow-lift)] ring-1 ring-border sm:right-8">
              <div className="flex items-center gap-3">
                <SignalBars />
                <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  Line status
                </span>
              </div>
              <p className="mt-3 font-display text-3xl font-extrabold">
                <Counter to={99.9} decimals={1} suffix="%" />
              </p>
              <p className="text-xs text-muted-foreground">Average uptime reported by customers</p>
            </div>
            <span className="absolute -top-6 -left-4 hidden size-24 rounded-full bg-coral/20 blur-2xl lg:block" />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Why people choose us</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Connectivity advice without the sales script
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 80} className="soft-card lift p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STEPS */

const STEPS = [
  { icon: MapPin, title: "Share your address", copy: "One ZIP code starts the coverage scan." },
  { icon: Activity, title: "We compare the lines", copy: "Fiber, cable and wireless, side by side." },
  { icon: CalendarCheck, title: "Book your window", copy: "Pick an install slot that suits you." },
  { icon: Wifi, title: "Get connected", copy: "Technician sets up, tests and tunes the Wi-Fi." },
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
              Four steps from question to connection
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

/* ------------------------------------------------------------- BUNDLE */

export function Bundle() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-secondary/70 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Bundle it</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                One line, one visit, one point of contact
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Internet and cable delivered on the same install appointment, with a single account
                to manage and one specialist who knows your setup.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { n: 18, s: " min", l: "Avg. call length" },
                  { n: 4200, s: "+", l: "Areas covered" },
                  { n: 96, s: "%", l: "Would recommend" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                      <Counter to={m.n} suffix={m.s} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{m.l}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-primary"
              >
                Bundle my address
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMG.remoteWork}
                alt="Working from home on a fast connection"
                loading="lazy"
                className="h-56 w-full rounded-[1.75rem] object-cover sm:h-72"
              />
              <img
                src={IMG.livingRoomTv}
                alt="Cable TV in a modern living room"
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

/* -------------------------------------------------------- COVERAGE MAP */

const CITIES = ["Austin", "Dallas", "Houston", "Phoenix", "Denver", "Atlanta", "Tampa", "Seattle"];

export function CoverageMap() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-cream">
            <div className="dot-grid absolute inset-0 opacity-30" />
            <div className="relative aspect-square">
              <img
                src={IMG.networkGlobe}
                alt="Network coverage across the country"
                loading="lazy"
                className="h-full w-full rounded-[2rem] object-cover opacity-70"
              />
              <span className="absolute top-1/3 left-1/3 grid place-items-center">
                <span className="absolute size-16 rounded-full bg-aqua/40 pulse-ring" />
                <span className="size-4 rounded-full bg-coral ring-4 ring-coral/25" />
              </span>
              <span className="absolute right-1/4 bottom-1/4 grid place-items-center">
                <span className="absolute size-16 rounded-full bg-aqua/40 pulse-ring" />
                <span className="size-3 rounded-full bg-aqua ring-4 ring-aqua/25" />
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Wired into the neighbourhoods we serve
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our specialists track build-outs street by street, so we know when a new fiber run
                lands near you — often before the carrier updates its own map.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-8 flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold ring-1 ring-border"
                >
                  <MapPin className="size-3.5 text-primary" />
                  {c}
                </span>
              ))}
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <CoverageFinder tone="light" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- EQUIPMENT */

const GEAR = [
  {
    icon: RouterIcon,
    title: "Wi-Fi 6E gateway",
    copy: "Tri-band router tuned for dense homes and dozens of devices.",
    img: IMG.routerDevice,
  },
  {
    icon: Boxes,
    title: "Mesh nodes",
    copy: "Extra points placed where the signal actually drops, not guessed.",
    img: IMG.smartHome,
  },
  {
    icon: Radio,
    title: "4K set-top box",
    copy: "Cable channels and your streaming apps on a single remote.",
    img: IMG.remoteControl,
  },
];

export function Equipment() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Hardware</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Kit that earns its place on the shelf
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every install ships with hardware matched to your floor plan and device count.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {GEAR.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="soft-card lift overflow-hidden">
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
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
                Support that stays after the van leaves
              </h2>
              <p className="mt-3 max-w-md text-sm text-cream/70">
                Speed issues, channel changes, a router that needs re-placing — the same team picks
                up, no ticket queue.
              </p>
            </div>
          </Reveal>

          <div className="grid content-start gap-5">
            {[
              { icon: Headphones, t: "Real people, 7 days", c: "Average pickup under 40 seconds." },
              { icon: Gauge, t: "Speed health checks", c: "We re-test your line 14 days after install." },
              { icon: Cloud, t: "Move-day handling", c: "We transfer service to your new address." },
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

/* -------------------------------------------------------- TESTIMONIALS */

const QUOTES = [
  {
    name: "Marisa Trent",
    role: "Homeowner, Austin",
    img: IMG.people1,
    metric: "Fiber live in 6 days",
    quote:
      "They found a fiber line my building had for months and nobody advertised. Installed the following Tuesday.",
  },
  {
    name: "Devon Clarke",
    role: "Studio owner, Denver",
    img: IMG.people2,
    metric: "12x faster uploads",
    quote:
      "Uploads went from painful to instant. The follow-up call two weeks later actually fixed a dead spot.",
  },
  {
    name: "Priya Raman",
    role: "Remote lead, Seattle",
    img: IMG.people3,
    metric: "One call, both services",
    quote:
      "One conversation covered internet, TV and the install window. No transfers, no upsell script.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % QUOTES.length), 7000);
    return () => clearInterval(id);
  }, []);

  const q = QUOTES[active]!;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] p-8 text-cream sm:p-12">
            <NetworkPattern className="text-aqua/30" />
            <div className="relative">
              <Eyebrow>Customer stories</Eyebrow>
              <div className="mt-6 flex gap-1 text-coral">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote
                key={q.name}
                className="reveal mt-6 font-display text-2xl leading-snug font-extrabold sm:text-3xl"
                data-visible="true"
              >
                “{q.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-cream/15 pt-6">
                <img
                  src={q.img}
                  alt={`${q.name}, Bluepeak Wifi customer`}
                  loading="lazy"
                  className="size-14 rounded-full object-cover ring-2 ring-aqua/50"
                />
                <div>
                  <p className="font-bold">{q.name}</p>
                  <p className="text-sm text-cream/60">{q.role}</p>
                </div>
                <span className="ml-auto hidden rounded-full bg-aqua/15 px-4 py-2 text-xs font-bold text-aqua sm:block">
                  {q.metric}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Connected, and staying that way
            </h2>
            <p className="pb-2 text-muted-foreground">
              Real households and businesses we matched with a network that actually reaches them.
            </p>
            {QUOTES.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all",
                  i === active
                    ? "border-primary/40 bg-secondary shadow-halo"
                    : "border-border bg-card hover:border-primary/30",
                )}
              >
                <img
                  src={item.img}
                  alt={`${item.name} profile photo`}
                  loading="lazy"
                  className="size-12 shrink-0 rounded-full object-cover"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold">{item.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {item.metric} · {item.role}
                  </span>
                </span>
                <span
                  className={cn(
                    "ml-auto h-8 w-1 shrink-0 rounded-full transition-colors",
                    i === active ? "bg-primary" : "bg-border",
                  )}
                />
              </button>
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
    q: "Does checking coverage cost anything?",
    a: "No. The address check and the comparison of available networks are completely free, with no obligation to proceed.",
  },
  {
    q: "How fast can I be connected?",
    a: "Where the line already reaches your building, most installs are scheduled within the same week. New runs can take longer, and we tell you upfront.",
  },
  {
    q: "Can I keep my current equipment?",
    a: "Often yes. We check compatibility during the call and only recommend new hardware when it genuinely improves coverage.",
  },
  {
    q: "Do you handle both internet and cable TV?",
    a: "Yes — both can be arranged on a single install visit with one point of contact for the whole setup.",
  },
  {
    q: "What happens if I move?",
    a: "Tell us the new address and we re-run the coverage check, then coordinate the transfer or a fresh install.",
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
              Everything people ask before they call
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure about something? A specialist can answer in a two-minute call.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
            >
              Ask a specialist
              <ArrowUpRight className="size-4" />
            </Link>
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
          <Eyebrow tone="light">Let&apos;s get you online</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
            Your address, checked in under a minute
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Share a ZIP code and we&apos;ll come back with every internet and cable option that
            genuinely reaches you.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-coral px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-aqua"
            >
              Check my coverage
            </Link>
            <Link
              to="/cable-tv"
              className="rounded-full px-8 py-4 text-sm font-bold text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              See TV packs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
