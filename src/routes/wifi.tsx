import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaStrip } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/primitives";
import {
  Callout,
  RelatedLinks,
  SectionIntro,
  TopicCard,
  TopicIndex,
  type Topic,
} from "@/components/site/guide";
import { Equipment } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Home Wi-Fi Help: Weak Signal, Dead Zones & Disconnects | Bluepeak Wifi";
const description =
  "Why does Wi-Fi keep disconnecting or fade in some rooms? Plain-English guide to router placement, 2.4 vs 5 GHz, interference, mesh systems and Ethernet.";

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

const TOPICS: Topic[] = [
  {
    id: "how-wifi-works",
    title: "How home Wi-Fi works",
    means:
      "Your modem receives the internet service. Your router shares it with phones, laptops, TVs and other devices using radio signals (Wi-Fi) and Ethernet cables. Many homes use a single box that does both jobs.",
    causes: [
      "Problems can be in the service itself, the modem, the router, the wireless signal or the device",
      "Wi-Fi only covers the final hop between the router and your device",
    ],
    checks: [
      "Find your modem and router (they may be one unit)",
      "Check whether a cable-connected device works while Wi-Fi doesn't",
    ],
    next:
      "If wired works and wireless doesn't, concentrate on Wi-Fi. If both are down, see the Internet Support page.",
  },
  {
    id: "signal-weakens",
    title: "Why Wi-Fi signals weaken",
    means:
      "Wi-Fi signal fades with distance and loses strength as it passes through objects. Some rooms end up with weak or no coverage, often called dead zones.",
    causes: [
      "Distance from the router",
      "Thick walls, floors, brick, concrete and plaster with metal mesh",
      "Mirrors, metal appliances, water pipes and aquariums",
      "A router placed in a corner, cabinet or basement",
      "Interference from other devices and networks",
    ],
    checks: [
      "Check signal in several rooms, at the same height, with the same device",
      "Note which walls or objects sit between the router and the weak room",
      "Try the device closer to the router to confirm it is signal rather than service",
    ],
    next:
      "Start with router placement. If that isn't enough, consider a mesh system, a correctly placed extender or a wired connection.",
  },
  {
    id: "placement",
    title: "Router placement",
    means:
      "Where the router sits can matter more than the router's price. A good position gives the signal a clearer path to the rooms you use.",
    causes: [
      "Router on the floor, behind a TV or inside a cabinet",
      "Router at one end of the home, far from where devices are used",
      "Metal objects and electronics around the router",
    ],
    checks: [
      "Place it centrally, in the open and raised, such as on a shelf",
      "Keep it away from microwaves, cordless phone bases and metal surfaces",
      "Point any adjustable antennas in different directions, e.g. one up and one sideways",
      "Keep air flowing around it to avoid overheating",
    ],
    next:
      "Move it, then test again in the problem room. If the service enters your home at one fixed spot, a mesh node or access point may be easier than moving the modem.",
  },
  {
    id: "bands",
    title: "Understanding 2.4 GHz and 5 GHz",
    means:
      "Most routers broadcast on two radio bands. They trade range against speed, and some routers add a newer 6 GHz band.",
    causes: [
      "2.4 GHz travels farther and passes through walls better, but is slower and more crowded",
      "5 GHz is faster and less crowded, but has shorter range and is weakened more by walls",
      "Some smart-home devices only work on 2.4 GHz",
    ],
    checks: [
      "Check which network names your router broadcasts, or whether it combines both",
      "Connect nearby, high-demand devices such as TVs and laptops to 5 GHz",
      "Use 2.4 GHz for distant rooms and simple smart devices",
    ],
    next:
      "If a device won't join, it may only support 2.4 GHz. Your router's settings page or manual explains how to separate or combine the bands.",
  },
  {
    id: "interference",
    title: "Wi-Fi interference",
    means:
      "Other radio signals and neighboring networks can overlap yours, causing slowdowns, drops and unstable connections.",
    causes: [
      "Many neighboring networks on the same channel, common in apartments",
      "Microwaves, cordless phones, baby monitors and Bluetooth devices on 2.4 GHz",
      "Poorly shielded electronics near the router",
    ],
    checks: [
      "Notice whether problems occur only at certain times, such as when a microwave runs",
      "Try 5 GHz if your devices support it",
      "Look in your router settings for automatic channel selection",
    ],
    next:
      "If interference remains a problem, changing channel or band can help. Reduce clutter around the router.",
  },
  {
    id: "many-devices",
    title: "Multiple connected devices",
    means:
      "Every connected device shares the same wireless capacity and your internet connection. Busy households can run into limits even when each device uses a modest amount.",
    causes: [
      "Several people streaming, gaming or on video calls at once",
      "Cloud backups, large downloads and updates running in the background",
      "Many always-on smart-home devices and cameras",
      "A router that isn't designed for the number of devices",
    ],
    checks: [
      "Count your connected devices, including TVs, speakers and cameras",
      "Pause big downloads and updates, then retest",
      "Connect fixed devices, like TVs and desktop computers, by Ethernet if possible",
    ],
    next:
      "If problems appear mainly when the household is busy, wiring key devices or upgrading the router may help. Plan speed upgrades come from your provider.",
  },
  {
    id: "router-basics",
    title: "Router and mesh system basics",
    means:
      "A single router covers a limited area. A mesh system uses a main router plus extra nodes that work together under one network name to cover more of the home.",
    causes: [
      "Large or multi-story homes often exceed one router's reach",
      "Basic range extenders repeat a signal, often halving the speed on the extended network",
      "Poor node placement can make a mesh system perform poorly",
    ],
    checks: [
      "Identify how many rooms or floors lack coverage",
      "Place a node about halfway between the router and the weak area, where it still has a good signal",
      "Connect nodes by Ethernet where possible for the best performance",
    ],
    next:
      "When setting up equipment, check power, the cable from the modem, the lights, and your Wi-Fi name and password, and follow the maker's setup steps or app. Mesh nodes are usually added through the maker's app.",
  },
  {
    id: "improving-coverage",
    title: "Improving Wi-Fi coverage",
    means:
      "Good coverage means a strong, steady signal in the rooms where you actually use devices.",
    causes: [
      "Router position, building materials and home layout",
      "Out-of-date router software",
      "Equipment that doesn't support current standards",
    ],
    checks: [
      "Move the router to a central, open position",
      "Update the router's firmware following the maker's instructions",
      "Move to 5 GHz close by and 2.4 GHz at range",
      "Consider mesh nodes or an access point for far rooms",
    ],
    next:
      "Make one change at a time and retest in the same room with the same device, so you can see what actually helped.",
  },
  {
    id: "ethernet",
    title: "Ethernet versus wireless connections",
    means:
      "Ethernet uses a physical cable. Wireless uses radio. Both can connect to the same router.",
    causes: [
      "Ethernet is generally more stable, with lower latency and no wireless interference",
      "Wireless is more convenient but varies with signal and congestion",
    ],
    checks: [
      "Test a computer on Ethernet next to the router and compare with Wi-Fi",
      "Use Ethernet for desktop PCs, gaming consoles, TVs and work-from-home setups",
      "Use a good quality cable that is firmly seated at both ends",
    ],
    next:
      "If wired is fine and Wi-Fi isn't, the problem is wireless. If both are poor, look at the router, modem or service.",
  },
  {
    id: "extra-equipment",
    title: "When additional networking equipment may be useful",
    means:
      "Extra equipment can help when placement and settings alone can't reach the whole home, but it isn't always the answer.",
    causes: [
      "Large homes, multiple floors or thick walls",
      "Outbuildings, garages or home offices far from the router",
      "Older routers that struggle with many devices",
    ],
    checks: [
      "Confirm the problem is Wi-Fi coverage and not a service problem",
      "Compare mesh systems, access points and powerline adapters for your home",
      "Check compatibility and return policies before buying",
    ],
    next:
      "If your equipment was supplied by your provider, ask them about what they allow or recommend. Extra equipment cannot fix an outage or an unstable service.",
  },
];

function WifiPage() {
  return (
    <>
      <PageHero
        eyebrow="Wi-Fi help"
        title="Understand your home Wi-Fi"
        intro="Weak signal, dead zones and devices that keep dropping often have a simple cause. This guide explains how home Wi-Fi works and how to improve it, in plain language."
        image={IMG.smartHome}
      />

      <section className="pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionIntro eyebrow="Wi-Fi guide" title="Why does my Wi-Fi keep disconnecting or fade?">
            <p>
              Find your question below. Every topic covers what it means, likely causes, what to
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

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMG.homeStudy}
              alt="Home office desk with a laptop connected to Wi-Fi"
              loading="lazy"
              className="h-[340px] w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionIntro
              eyebrow="Smart devices"
              title="Smart devices won't stay connected?"
            >
              <p>
                Many smart plugs, cameras and speakers only join 2.4 GHz networks. If a device
                will not pair, check the device's instructions: some setups need the phone on
                2.4 GHz during pairing. Your router may let you separate the bands temporarily;
                follow its manual.
              </p>
            </SectionIntro>
          </Reveal>
        </div>
      </section>

      <Equipment />

      <section className="bg-secondary/60 py-16 lg:py-24" id="moving-upgrading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionIntro eyebrow="Moving or upgrading" title="Thinking about a move or new equipment?">
            <p>
              A little planning makes a new setup smoother. We can talk through your questions, but
              we do not know which providers or plans are available at any address.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal className="soft-card p-7">
              <h3 className="font-display text-lg font-bold">Moving to a new address</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
                <li>Ask providers directly which services they offer at the new address.</li>
                <li>Find out whether you need to return, keep or buy equipment.</li>
                <li>Check whether your current modem works with the new service.</li>
                <li>Think about where the service enters the home and where you will work.</li>
                <li>Allow time for installation or activation appointments.</li>
              </ul>
            </Reveal>
            <Reveal delay={80} className="soft-card p-7">
              <h3 className="font-display text-lg font-bold">Upgrading equipment</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/80">
                <li>Confirm the problem is the equipment, not placement or the service.</li>
                <li>Check compatibility with your provider before buying a modem or router.</li>
                <li>Match coverage needs to your home size and device count.</li>
                <li>Check security support and how updates are delivered.</li>
                <li>Save your Wi-Fi details first so devices can reconnect easily.</li>
              </ul>
            </Reveal>
          </div>
          <div className="mt-6">
            <Callout title="Note">
              <p>
                Bluepeak Wifi does not sell internet plans or equipment and does not know which
                services are available where you live. Your provider can confirm availability.
              </p>
            </Callout>
          </div>
          <div className="mt-6">
            <RelatedLinks
              links={[
                { to: "/internet", label: "Internet troubleshooting" },
                { to: "/outages", label: "Outage guide" },
                { to: "/contact", label: "Contact us" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
