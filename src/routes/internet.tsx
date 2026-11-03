import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaStrip } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/primitives";
import {
  Callout,
  DefinitionGrid,
  RelatedLinks,
  SectionIntro,
  TopicCard,
  TopicIndex,
  type Topic,
} from "@/components/site/guide";
import { IMG } from "@/lib/images";

const title = "Internet Not Working? Troubleshooting & Speed Guide | Bluepeak Wifi";
const description =
  "Internet not working or slow? Step-by-step checks for connection drops, router lights, cables and restarts, plus internet speed, buffering and factory reset explained.";

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

const TOPICS: Topic[] = [
  {
    id: "no-internet",
    title: "Internet not working",
    means:
      "Your devices connect to the router (or show Wi-Fi bars) but pages will not load, or nothing connects at all. The break could be anywhere between the device and the wider internet.",
    causes: [
      "Modem or router without power, or needing a restart",
      "Loose, disconnected or damaged cables",
      "Incorrect settings after a change or reset",
      "An interruption on the provider's side",
    ],
    checks: [
      "Confirm the modem and router are powered on with lights lit",
      "Reseat the power, coax or Ethernet cables at both ends",
      "Try several devices, on Wi-Fi and by cable",
      "Restart once, correctly (see the restart section below)",
    ],
    next:
      "If every device is offline and your equipment looks normal, check your provider's official outage page or contact their support. Note the lights and time the problem began.",
  },
  {
    id: "slow-internet",
    title: "Slow internet speeds",
    means:
      "Pages load slowly, downloads crawl or video quality drops. Slowness can be constant or only at certain times and places in the home.",
    causes: [
      "Weak Wi-Fi signal at the device",
      "Many devices or heavy uses sharing the connection",
      "Network congestion at busy times",
      "Older equipment that can't keep up with current speeds",
      "Service conditions, such as a line fault or provider-side congestion",
    ],
    checks: [
      "Run a speed test next to the router, over Wi-Fi and by cable",
      "Repeat in the slow room and at a different time of day",
      "Pause large downloads, backups and streams, then test again",
      "Restart the router and the slow device",
    ],
    next:
      "If a wired test is far below what you expect repeatedly, share your results and times with your provider. If Wi-Fi alone is slow, see the Wi-Fi Help page.",
  },
  {
    id: "frequent-drops",
    title: "Frequent connection drops",
    means:
      "The internet works, then cuts out for seconds or minutes, then returns. Calls freeze, downloads fail or devices show “connected, no internet”.",
    causes: [
      "Weak or unstable Wi-Fi signal and interference",
      "Overheating or ageing router or modem",
      "Loose or damaged cables or connectors",
      "Too many devices competing for the connection",
      "An intermittent provider-side or line fault",
    ],
    checks: [
      "Keep a short log: time, device, how long, what you were doing",
      "Check whether a wired device also drops",
      "Feel whether the router is very hot and check its ventilation",
      "Check the modem's online light for flickering at the moment of a drop",
    ],
    next:
      "If wired devices drop too, or the modem's online light changes when it happens, the issue is probably not Wi-Fi. Contact your provider with your log.",
  },
  {
    id: "cant-connect",
    title: "Devices unable to connect",
    means:
      "One or more devices can't join the network or can't get online, while others work fine.",
    causes: [
      "Wrong or outdated saved Wi-Fi password",
      "Device only supports 2.4 GHz, or has Wi-Fi switched off or in airplane mode",
      "Router device limit, MAC filtering or parental controls",
      "A stale connection record on the device",
      "Device too far from the router",
    ],
    checks: [
      "Toggle Wi-Fi off and on, then restart the device",
      "Forget the network and rejoin with the correct password",
      "Move the device closer to the router and test again",
      "Check whether the router has blocked or limited that device",
    ],
    next:
      "If other devices work, focus on the problem device's settings and hardware. If none can connect, check the router and modem lights and your provider's status.",
  },
  {
    id: "indicators",
    title: "Router and modem indicators",
    means:
      "Lights on the front of your equipment show power, the connection to the provider, the internet link and Wi-Fi activity. They are a quick clue to where a fault might be.",
    causes: [
      "Power light off: no power or a faulty adapter or outlet",
      "Online/internet light off, blinking or red: the modem may not be getting service",
      "Wi-Fi light off: wireless disabled or a router problem",
      "Lights that change when drops occur: an unstable line or failing equipment",
    ],
    checks: [
      "Find the light guide in your equipment's manual or the maker's support site",
      "Photograph the lights during a problem for your records",
      "Check that the power adapter is firmly plugged in at both ends",
    ],
    next:
      "Colors and patterns differ between makes, so rely on your equipment's guide. If the online light shows a fault after a restart, tell your provider exactly what you see.",
  },
  {
    id: "cables",
    title: "Checking network cables",
    means:
      "Cables carry the service into your home and between your devices. A poor connection at any point can mean no internet, drops or reduced speed.",
    causes: [
      "Loose coax, Ethernet or power connectors",
      "Kinked, pinched, chewed or cut cables",
      "Bent connector pins or damaged ports",
      "Old, low-quality or unsuitable cables",
      "Splitters or adapters that weaken the signal",
    ],
    checks: [
      "Push each connector in until it is firm; hand-tighten coax connectors",
      "Look along each cable for kinks, cuts or crushing",
      "Swap in a known-good Ethernet cable to test",
      "Make sure the cable is plugged into the correct port",
    ],
    next:
      "Do not attempt to repair lines outside your home or at a utility box. If you see damaged outdoor cabling, report it to your provider.",
  },
  {
    id: "restarting",
    title: "Restarting equipment correctly",
    means:
      "A restart (power cycle) turns your modem and router off and on to clear temporary glitches. It does not change your settings.",
    causes: [
      "Equipment stuck after running for a long time",
      "A temporary glitch after a power cut or a settings change",
      "Connection that didn't re-establish properly",
    ],
    checks: [
      "Unplug the router, then the modem (or the single combined unit)",
      "Wait about 60 seconds",
      "Plug in the modem and wait for its lights to settle, which can take several minutes",
      "Then plug in the router and wait for the Wi-Fi light",
    ],
    next:
      "Restart once and give it time. Repeated power cycling can delay reconnection. If the lights still show a fault, move on to checking the provider.",
  },
  {
    id: "testing",
    title: "Testing the connection",
    means:
      "A test helps you tell whether the problem is your Wi-Fi, your equipment or the service coming into the home.",
    causes: [
      "Results differ between Wi-Fi and cable because of signal and interference",
      "Results vary by time of day and by what else is running",
      "A single test can be affected by the device or website you use",
    ],
    checks: [
      "Connect a computer to the router with an Ethernet cable and run a test",
      "Run the same test over Wi-Fi close to the router, then in the problem room",
      "Close other apps and pause other downloads first",
      "Test two or three times and note the date, time and results",
    ],
    next:
      "Keep your results. They make a conversation with your provider far more productive if wired speeds are consistently low.",
  },
  {
    id: "provider-problems",
    title: "Understanding provider-side problems",
    means:
      "Sometimes the fault is outside your home, such as damaged lines, network equipment faults, maintenance or a local outage.",
    causes: [
      "Planned maintenance or upgrades",
      "Damaged or faulty lines or neighborhood equipment",
      "Wider outages caused by weather or power failures",
      "Account or service restrictions applied by the provider",
    ],
    checks: [
      "Confirm your own equipment is powered and cabled correctly",
      "Check whether all devices, wired and wireless, are offline",
      "Look at the provider's official outage page or app",
      "Ask nearby neighbors on the same provider if they are affected",
    ],
    next:
      "Only your provider can confirm and fix these. Read the Outages page for what to do while you wait.",
  },
  {
    id: "contact-provider",
    title: "When to contact your provider",
    means:
      "There is a point where home checks stop being useful and the provider needs to look at the service or account.",
    causes: [
      "Modem online light off, blinking or red after a proper restart",
      "A wired device is also offline",
      "The provider's outage page shows a problem in your area",
      "Repeated drops or slow speeds that continue over days",
      "Suspected damage to lines outside the home, or an account issue",
    ],
    checks: [
      "Have your account details ready",
      "Write down the light status, time of first failure and what you have tried",
      "Have your wired speed test results ready",
    ],
    next:
      "Contact your provider's official support, and ask for a ticket or reference number. We can help you prepare, but we cannot act on your account or service.",
  },
];

const SPEED_TERMS = [
  {
    term: "Download speed",
    text: "How fast data comes to you, such as loading pages, streaming and downloading files. It is the number most plans and tests highlight.",
  },
  {
    term: "Upload speed",
    text: "How fast data leaves your device, which matters for video calls, sending large files, cloud backups and posting video.",
  },
  {
    term: "Latency",
    text: "The delay, in milliseconds, before data starts moving. Low latency feels responsive; high latency makes calls and games lag even when download speed is high.",
  },
  {
    term: "Jitter",
    text: "How much latency varies from moment to moment. High jitter causes choppy audio, frozen video and rubber-banding in games.",
  },
  {
    term: "Why speed tests differ",
    text: "Results change with the device, Wi-Fi signal, time of day, other devices in use, the test server and your browser. Compare tests under the same conditions.",
  },
  {
    term: "Good speed, unstable connection",
    text: "A single good result doesn't show stability. A connection can test fast yet still drop, spike in latency or lose packets, which is what people notice during calls and streams.",
  },
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet support"
        title="Internet not working? Start here"
        intro="Practical checks for the most common internet problems, so you can see where the issue may be before you spend an hour on hold. These are general guides; they cannot promise that every problem can be fixed at home."
        image={IMG.serverRoom}
      />

      <section className="pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="Troubleshooting topics" title="Find your problem, then work through it">
            <p>
              Each topic explains what the problem means, what commonly causes it, what you can
              check and what to do next.
            </p>
          </SectionIntro>
          <Reveal className="mt-6">
            <TopicIndex topics={TOPICS} />
          </Reveal>
          <div className="mt-10 grid gap-6">
            {TOPICS.map((t, i) => (
              <TopicCard key={t.id} topic={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="restart-vs-reset">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="Important difference" title="Router restart vs. factory reset">
            <p>
              They sound similar but do very different things. Choosing the wrong one can leave you
              without a working Wi-Fi network.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal className="soft-card p-7">
              <h3 className="font-display text-xl font-bold">Restart (power cycle)</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
                <li>Turns the equipment off and on, usually by unplugging power.</li>
                <li>Keeps all your settings, Wi-Fi name and password.</li>
                <li>Safe to try as a first step for many temporary problems.</li>
                <li>Done by unplugging, waiting about 60 seconds and plugging back in.</li>
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-[1.5rem] bg-ink p-7 text-cream">
              <h3 className="font-display text-xl font-bold">Factory reset</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-cream/80">
                <li>Usually done with a small recessed reset button held for several seconds.</li>
                <li>Erases your configuration, including Wi-Fi name, password and custom settings.</li>
                <li>Some providers' equipment must be set up again or reactivated afterward.</li>
                <li>Should not be done casually. Try it only after a restart hasn't helped and you know your setup details.</li>
              </ul>
            </Reveal>
          </div>
          <div className="mt-6">
            <Callout title="Before any factory reset">
              <p>
                Write down your Wi-Fi name, password and any special settings, and check your
                equipment maker's or provider's instructions. If the equipment belongs to your
                provider, ask them first.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-24" id="speed-explained">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="Internet speed explained" title="What the numbers really mean">
            <p>
              Speed tests are useful, but one number can't describe how a connection feels. These
              are the terms worth knowing.
            </p>
          </SectionIntro>
          <div className="mt-8">
            <DefinitionGrid items={SPEED_TERMS} />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Bluepeak Wifi does not guarantee connection speeds. The speeds available at your
            address depend on your provider and plan.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" id="buffering">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionIntro eyebrow="Buffering explained" title="Why videos stall and calls freeze" />
            <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-foreground/80">
              <li>
                <strong className="text-foreground">Network instability.</strong> Drops and spikes
                in latency interrupt the steady flow of data a stream needs.
              </li>
              <li>
                <strong className="text-foreground">Wi-Fi signal strength.</strong> A weak or noisy
                signal forces resending of data, causing stalls even if the plan is fast.
              </li>
              <li>
                <strong className="text-foreground">Streaming quality.</strong> 4K needs far more
                bandwidth than HD. Lowering quality is a quick test.
              </li>
              <li>
                <strong className="text-foreground">Device performance.</strong> Older phones, TVs
                and browsers with many tabs can struggle to decode video.
              </li>
              <li>
                <strong className="text-foreground">Platform-side issues.</strong> Sometimes the
                streaming service itself is overloaded. If other sites work fine, that may be the
                cause.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.livingRoomTv}
              alt="Family streaming a show on a living room TV"
              loading="lazy"
              className="h-[340px] w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal delay={100} className="order-2 lg:order-1">
            <img
              src={IMG.routerDevice}
              alt="Router and modem on a shelf"
              loading="lazy"
              className="h-[320px] w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionIntro eyebrow="Before you call your provider" title="Gather these details first">
              <p>Your provider can help faster when you can tell them what you have already tried.</p>
            </SectionIntro>
            <ul className="mt-6 grid gap-3 text-sm text-foreground/80">
              {[
                "Which devices are affected, wired or wireless",
                "Modem and router light colors and patterns",
                "When the problem started and how often it repeats",
                "Wired speed test results with the date and time",
                "What you have already tried, including restarts",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <RelatedLinks
                links={[
                  { to: "/outages", label: "Outage guide" },
                  { to: "/wifi", label: "Wi-Fi help" },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
