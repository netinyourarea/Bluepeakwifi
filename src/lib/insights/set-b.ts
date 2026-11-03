import { h3, ol, p, quick, table, ul, type Insight } from "./types";

export const wifiSetupSupport: Insight = {
  slug: "wifi-setup-support",
  metaTitle: "WiFi Setup & Troubleshooting: Fix WiFi Problems",
  metaDescription:
    "WiFi not working or keeps disconnecting? Learn how to set up WiFi at home, fix common problems and improve your wireless signal, step by step.",
  ogTitle: "WiFi Setup & Troubleshooting: A Practical Home Guide",
  ogDescription:
    "Step-by-step help to set up home WiFi, fix connection drops and get a stronger, more reliable wireless network.",
  h1: "WiFi setup and troubleshooting: a practical home guide",
  category: "Wi-Fi",
  excerpt:
    "Set up home Wi-Fi properly, work out why it drops or fades, and improve the signal in the rooms you actually use.",
  readMinutes: 8,
  keywords: ["WiFi troubleshooting", "WiFi setup", "WiFi keeps disconnecting", "how to improve WiFi signal"],
  image: "remoteWork",
  imageAlt: "Person working on a laptop at home over Wi-Fi",
  intro: [
    "Wi-Fi is the part of your internet you use every minute, and the part most likely to annoy you. Rooms with no signal, devices that drop and slow video calls are all common.",
    "Most of these problems have a simple cause. This guide covers setup, troubleshooting and the changes that usually improve coverage.",
  ],
  sections: [
    {
      id: "how-wifi-works",
      h2: "How home Wi-Fi works",
      blocks: [
        p("Your modem brings the internet into the home. Your router shares it with phones, laptops and TVs using radio signals. Some homes have one box that does both."),
        p("Wi-Fi covers only the last hop between the router and your device, so a problem there is different from a problem with the service itself."),
      ],
    },
    {
      id: "setup",
      h2: "How to set up Wi-Fi at home",
      blocks: [
        ol(
          "Connect the modem to the internet line and power it on.",
          "Connect the router to the modem with an Ethernet cable in the router's internet port.",
          "Power the router and open the maker's app or admin page.",
          "Create a network name and a strong, unique password.",
          "Choose WPA3 security if available, otherwise WPA2.",
          "Check for a firmware update.",
          "Connect your devices and test from the rooms you use most.",
        ),
      ],
    },
    {
      id: "not-working",
      h2: "Why is my Wi-Fi not working?",
      blocks: [
        quick("Wi-Fi usually stops working because of a temporary router or modem glitch, an outage, a loose cable or a problem with one device. Restart the equipment once, then check whether one device or all of them are affected."),
        h3("Is it the Wi-Fi or the internet?"),
        p("Connect a computer to the router by Ethernet. If the internet works by cable but not by Wi-Fi, the problem is wireless. If it fails on both, look at the modem, line or provider."),
      ],
    },
    {
      id: "disconnecting",
      h2: "Why does my Wi-Fi keep disconnecting?",
      blocks: [
        ul(
          "Weak signal because of distance or walls.",
          "Interference from neighboring networks or appliances.",
          "Outdated router firmware.",
          "An overheating or aging router.",
          "Too many devices competing for capacity.",
        ),
        p("Try moving the router, updating firmware and keeping its vents clear. Note whether the drops happen at certain times or in certain rooms."),
      ],
    },
    {
      id: "improve-signal",
      h2: "How to improve your Wi-Fi signal",
      blocks: [
        ul(
          "Place the router centrally, raised and out in the open.",
          "Keep it away from microwaves, cordless phone bases, large metal objects and thick walls.",
          "Use 5 GHz near the router and 2.4 GHz for distant rooms or older devices.",
          "Connect fixed devices by Ethernet to free up wireless capacity.",
          "Add mesh nodes or wired access points for large or multi-story homes.",
        ),
        p("Change one thing at a time and retest in the same room with the same device, so you can see what helped."),
      ],
    },
    {
      id: "bands",
      h2: "2.4 GHz or 5 GHz Wi-Fi?",
      blocks: [
        table(
          ["Band", "Strength", "Trade-off"],
          ["2.4 GHz", "Reaches farther and passes through walls better", "Slower and more crowded"],
          ["5 GHz", "Faster at short range, less crowded", "Shorter range, weaker through walls"],
        ),
        p("Many smart-home devices only support 2.4 GHz. If one will not join, check its manual."),
      ],
    },
    {
      id: "mesh",
      h2: "Mesh Wi-Fi vs. extenders",
      blocks: [
        p("A mesh system uses several units that work together under one network name. An extender repeats the signal from your router and is a lower-cost fix for one or two weak spots."),
        p("Place either one about halfway between the router and the weak area, where it still gets a good signal. Neither can fix an unstable internet service."),
      ],
    },
    {
      id: "security",
      h2: "Keep your Wi-Fi secure",
      blocks: [
        ul(
          "Change the default admin password.",
          "Use WPA3 or WPA2 with a strong, unique Wi-Fi password.",
          "Keep firmware updated.",
          "Use a guest network for visitors.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "Why is my WiFi not working?", a: ["Usually a temporary router or modem glitch, an outage, loose cables or a device-specific issue. Restart your equipment once, then check whether it affects one device or all of them."] },
    { q: "How do I set up WiFi at home?", a: ["Connect the modem to the internet line, connect the router to the modem, open the router's app or admin page, set a network name and strong password, choose WPA3 or WPA2 and update the firmware."] },
    { q: "Why does my WiFi keep disconnecting?", a: ["Weak signal, interference, outdated firmware or an aging router are the usual causes. Moving the router and updating firmware fixes many cases."] },
    { q: "How can I improve my WiFi signal?", a: ["Put the router in a central, raised, open spot, keep it away from appliances and update its firmware. For large homes, a mesh system often gives more consistent coverage."] },
    { q: "What is the difference between a modem and a router?", a: ["A modem connects your home to your provider. A router creates your Wi-Fi and shares that connection with your devices. A gateway combines both in one unit."] },
    { q: "Is mesh WiFi better than an extender?", a: ["Mesh is generally better for larger or multi-story homes because its units act as one network. An extender is a cheaper fix for one or two weak spots."] },
    { q: "Should I use 2.4 GHz or 5 GHz?", a: ["5 GHz suits speed-sensitive tasks near the router. 2.4 GHz suits longer range and older or smart-home devices."] },
    { q: "When should I replace my router?", a: ["If it no longer gets firmware updates, can't keep up with your devices, lacks current security options or keeps disconnecting after troubleshooting."] },
  ],
  related: ["router-setup-help", "network-connection-support", "internet-troubleshooting"],
};

export const cableTvServices: Insight = {
  slug: "cable-tv-services",
  metaTitle: "Cable TV Not Working? Fix Signal & Connection Problems",
  metaDescription:
    "Cable TV not working? Try simple fixes for no signal, pixelation, cable box errors and loose connections before you call your provider.",
  ogTitle: "Cable TV Not Working? A Simple Guide to Fixing It",
  ogDescription:
    "Step-by-step help for no signal, frozen cable boxes, missing channels and loose cable connections.",
  h1: "Cable TV problems? A guide to checking your cable TV and connection",
  category: "Cable TV",
  excerpt:
    "What to check when your cable TV shows no signal, pixelates or freezes, and when the fault belongs to your provider.",
  readMinutes: 6,
  keywords: ["cable TV not working", "cable TV troubleshooting", "no signal on TV", "cable box troubleshooting"],
  image: "livingRoomTv",
  imageAlt: "Living room television in a home",
  intro: [
    "A black screen or a blocky picture is frustrating, especially when you cannot tell whether the fault is the TV, the cable box or the line.",
    "Bluepeak Wifi does not provide TV service. This guide helps you run basic checks at home and describes when your cable provider needs to step in.",
  ],
  sections: [
    {
      id: "no-signal",
      h2: "Cable TV not working: where to start",
      blocks: [
        quick("Start with the simplest checks: confirm the TV is on the right input, the cable box has power, and every cable is firmly connected. Then restart the cable box once."),
        ol(
          "Check the TV input. Make sure it matches the cable box connection, such as HDMI 1.",
          "Check power. The cable box and TV should be on, with the box's lights lit.",
          "Check connections. Reseat the coaxial and HDMI cables at both ends.",
          "Restart the box. Unplug it, wait about a minute, plug it back in and give it time to start.",
          "Try another input or TV, if you can, to see whether the TV is the problem.",
        ),
      ],
    },
    {
      id: "pixelation",
      h2: "Pixelation, freezing and a poor picture",
      blocks: [
        p("A blocky or freezing picture often points to a weak or interrupted signal."),
        ul(
          "A loose, kinked or damaged coaxial cable.",
          "A splitter or adapter that weakens the signal.",
          "Equipment that needs a restart.",
          "A problem with the signal on the provider's line.",
        ),
        p("Check each connection, remove any unneeded splitters and try a known-good cable. If several channels are affected, tell your provider."),
      ],
    },
    {
      id: "cable-box",
      h2: "Cable box not responding",
      blocks: [
        ul(
          "Replace the remote's batteries and make sure nothing blocks the box's sensor.",
          "Press the power button on the box itself to test it.",
          "Restart the box, then wait several minutes for it to finish starting.",
          "Note any error code on the screen for your provider.",
        ),
        p("Do not factory reset or open the box. Cable boxes are usually the provider's property, so ask them about swaps and activation."),
      ],
    },
    {
      id: "missing-channels",
      h2: "Missing channels or error messages",
      blocks: [
        p("Channels can disappear because a box needs a signal refresh, a package changed or the account is restricted. A refresh or activation is something only your provider can do, so contact them with the channels affected and any error code."),
      ],
    },
    {
      id: "shared-line",
      h2: "When cable TV and internet share a line",
      blocks: [
        p("Many cable providers deliver TV and internet over the same coaxial line. If both are failing, the shared line, a loose connector or an area problem becomes more likely. Check the connectors first, then your provider's outage information."),
      ],
    },
    {
      id: "contact-provider",
      h2: "When to contact your cable provider",
      blocks: [
        ul(
          "Several channels or all channels are affected after a restart.",
          "The box shows an error that does not clear.",
          "You suspect damaged outdoor cabling. Don't touch it; report it.",
          "Any account, package or activation question.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "Why does my cable TV say no signal?", a: ["Common causes are the wrong TV input, a loose cable, a cable box that needs a restart or an interruption on the provider's line. Check input and cables, restart the box, then contact your provider."] },
    { q: "How do I fix pixelation on cable TV?", a: ["Reseat the coaxial cable, remove unneeded splitters, try a different cable and restart the box. If it continues, the signal may be the cause and your provider can check."] },
    { q: "How do I reset my cable box?", a: ["Unplug it, wait about a minute and plug it back in. Avoid a factory reset unless your provider asks you to."] },
    { q: "Why are some channels missing?", a: ["A package change, an account restriction or a box that needs a refresh can cause this. Your provider is the one who can check and refresh."] },
    { q: "Can a loose cable cause TV problems?", a: ["Yes. A loose, kinked or damaged cable can cause no signal or a poor picture. Tighten connectors by hand and replace damaged cables."] },
    { q: "Does Bluepeak Wifi provide cable TV?", a: ["No. We are an independent information resource and do not provide TV or internet service."] },
  ],
  related: ["internet-service-assistance", "network-connection-support", "internet-troubleshooting"],
};
