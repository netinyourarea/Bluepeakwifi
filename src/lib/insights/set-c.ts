import { h3, ol, p, quick, table, ul, type Insight } from "./types";

export const internetTroubleshooting: Insight = {
  slug: "internet-troubleshooting",
  metaTitle: "Internet Troubleshooting: Fix Slow Internet & WiFi",
  metaDescription:
    "Slow internet or WiFi not working? Follow a step-by-step troubleshooting guide for connection problems, dropouts and slow speeds at home.",
  ogTitle: "Internet Troubleshooting: Fix Slow Internet & WiFi Problems",
  ogDescription:
    "Simple, step-by-step fixes for slow internet, WiFi not working and internet that keeps disconnecting.",
  h1: "Internet troubleshooting: how to fix slow internet, Wi-Fi and connection problems",
  category: "Troubleshooting",
  excerpt:
    "A logical way to find out why your internet is slow, offline or dropping, whatever kind of connection you have.",
  readMinutes: 8,
  keywords: ["internet troubleshooting", "slow internet", "internet keeps disconnecting", "no internet connection"],
  image: "technician",
  imageAlt: "Technician checking networking equipment",
  intro: [
    "Good troubleshooting is mostly about narrowing things down. Is it one device or all of them? Wi-Fi or cable? Your home or your provider?",
    "This guide gives you that order of checks, with notes for different connection types. It cannot promise to fix every problem, but it will show you where to look.",
  ],
  sections: [
    {
      id: "what-is-it",
      h2: "What is internet troubleshooting?",
      blocks: [
        p("It is the process of testing each part between your device and the internet to find where the connection breaks: the device, Wi-Fi, router, modem, line and provider."),
      ],
    },
    {
      id: "not-working",
      h2: "Why is my internet not working?",
      blocks: [
        h3("Is it an outage or a problem at home?"),
        p("If every device is offline and your equipment looks normal, the wider service may be affected. Check your provider's official outage page using mobile data. These are indicators, not proof."),
        h3("Is it one device or all devices?"),
        p("One device failing points to that device's settings, Wi-Fi connection or hardware. Several failing points toward the router, modem or service."),
      ],
    },
    {
      id: "slow",
      h2: "How to fix slow internet",
      blocks: [
        h3("Run a speed test the right way"),
        ul(
          "Connect a computer to the router by Ethernet.",
          "Close other apps and pause downloads.",
          "Test two or three times and note the date, time and results.",
          "Repeat over Wi-Fi next to the router, then in the slow room.",
        ),
        h3("Common causes of slow speeds"),
        ul(
          "Weak Wi-Fi signal or interference.",
          "Many devices or heavy uses at once.",
          "Busy-hour congestion.",
          "Old equipment that can't keep up.",
          "A fault on the line.",
        ),
        p("A wired test that is repeatedly far below your plan's stated speed is worth reporting to your provider with your notes."),
      ],
    },
    {
      id: "wifi-not-working",
      h2: "Why is my Wi-Fi not working?",
      blocks: [
        h3("Wi-Fi connected but no internet"),
        p("Your device reaches the router, but the router is not reaching the internet. Restart the modem and router, check the modem's lights and look for an outage."),
        h3("Weak Wi-Fi signal and dead zones"),
        p("Move the router to a central, open spot and test in the weak room. Mesh or a wired access point can help when placement is not enough."),
      ],
    },
    {
      id: "disconnecting",
      h2: "Why does my internet keep disconnecting?",
      blocks: [
        p("Possible causes include an overheating or outdated router, loose cables, wireless interference or an intermittent fault on the line."),
        ul(
          "Keep a log of when drops happen.",
          "See whether a wired device drops too.",
          "Check the router isn't very hot and has airflow.",
          "Watch the modem's online light at the moment of a drop.",
        ),
        p("If a wired device also drops, Wi-Fi is less likely the cause. Share your log with your provider and ask about a line test."),
      ],
    },
    {
      id: "step-by-step",
      h2: "Step-by-step guide to fix your connection",
      blocks: [
        ol(
          "Check power and cables.",
          "Note the lights on your modem and router.",
          "Test a second device.",
          "Test by Ethernet.",
          "Restart once: modem first, then the router.",
          "Run a wired speed test.",
          "Check your provider's outage page.",
          "Contact your provider with your notes.",
        ),
      ],
    },
    {
      id: "by-type",
      h2: "Troubleshooting tips by connection type",
      blocks: [
        table(
          ["Connection", "Check first"],
          ["Cable", "Coaxial connectors are tight; the modem's online light; whether TV is also affected"],
          ["Fiber", "The ONT's lights and power; that the fiber cable isn't bent sharply"],
          ["DSL", "Phone-line cable and filters; distance-related slowdowns"],
          ["Fixed wireless", "Receiver position and signal; weather conditions"],
          ["Satellite", "Dish view of the sky; weather; higher latency is common"],
        ),
        p("Never touch or repair damaged outdoor lines. Report them to your provider."),
      ],
    },
    {
      id: "tips",
      h2: "Keep your internet running smoothly",
      blocks: [
        ul(
          "Keep firmware updated.",
          "Leave space around the router for airflow.",
          "Wire the devices that stay in one place.",
          "Keep a note of normal wired speed results for comparison.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "Why is my internet so slow all of a sudden?", a: ["Too many devices, background downloads, Wi-Fi interference or area congestion are the usual causes. Restart the modem and router, then run a wired speed test."] },
    { q: "How do I fix my internet connection quickly?", a: ["Restart your modem and router once: unplug both, wait about 60 seconds, plug in the modem, let it settle, then the router. This solves many temporary glitches."] },
    { q: "Why is my WiFi connected but there's no internet?", a: ["Your device is connected to the router but the router isn't reaching the internet. Restart both, check the modem lights and look for an outage."] },
    { q: "Why does my internet keep disconnecting?", a: ["An overheating or outdated router, loose cables, interference or an intermittent line fault. If basic fixes don't help, ask your provider for a line test."] },
    { q: "How do I know if it's my router or my provider?", a: ["Connect a computer directly to the modem with Ethernet. If it works, the router or Wi-Fi is the likelier problem. If not, the modem or provider is."] },
    { q: "Does a WiFi extender fix slow internet?", a: ["It can improve coverage in far rooms, but it cannot increase the speed of your plan. For larger homes, mesh often gives more consistent coverage."] },
    { q: "When should I replace my modem or router?", a: ["If it is old, overheats, can't support your plan's speed or keeps dropping after troubleshooting. If your provider rents it, ask them first."] },
    { q: "Can bad weather affect my internet?", a: ["Yes. Satellite and fixed wireless can be affected by weather, and storms can damage outdoor lines for any type. Never touch damaged lines; report them."] },
  ],
  related: ["internet-service-assistance", "network-connection-support", "wifi-setup-support"],
};

export const routerSetupHelp: Insight = {
  slug: "router-setup-help",
  metaTitle: "Router Setup Guide: WiFi Router Setup & Fixes",
  metaDescription:
    "Easy WiFi router setup guide for US homes. Connect your modem and router, change your WiFi password and fix common router problems step by step.",
  ogTitle: "Router Setup Made Simple: Step-by-Step WiFi Guide",
  ogDescription:
    "Set up your modem and router, secure your WiFi and fix connection problems with this beginner-friendly guide.",
  h1: "Router setup help: a complete guide to WiFi router setup and troubleshooting",
  category: "Equipment",
  excerpt:
    "How a modem and router fit together, how to set up a router step by step, and what to check when it won't connect.",
  readMinutes: 7,
  keywords: ["router setup", "how to set up a router", "how to change WiFi password", "router not connecting to internet"],
  image: "routerDevice",
  imageAlt: "Home Wi-Fi router on a shelf",
  intro: [
    "A new router should take under an hour to set up, yet it often stumbles on one detail: a cable in the wrong port, a modem that isn't active, or a forgotten password.",
    "This guide covers the basics and the problems people run into most.",
  ],
  sections: [
    {
      id: "modem-vs-router",
      h2: "Modem vs. router: what is the difference?",
      blocks: [
        ul(
          "A modem connects your home to your provider's network.",
          "A router creates your Wi-Fi and shares the connection with devices.",
          "A gateway is a single unit that combines both.",
        ),
        p("If your provider gave you a gateway, you may not need a separate router, unless you want better coverage or more control."),
      ],
    },
    {
      id: "before-you-start",
      h2: "What you need before you start",
      blocks: [
        ul(
          "A modem that is active with your provider.",
          "The router, its power adapter and an Ethernet cable.",
          "The router's label or manual, which shows the default network name and admin details.",
          "A smartphone or computer for the setup app or admin page.",
        ),
      ],
    },
    {
      id: "steps",
      h2: "How to set up a router, step by step",
      blocks: [
        ol(
          "Turn off the modem. Disconnect power if you are replacing a router.",
          "Connect an Ethernet cable from the modem to the router's internet (WAN) port.",
          "Power on the modem and wait for the lights to settle.",
          "Power on the router.",
          "Connect to the router's default network or open its app.",
          "Follow the setup steps and create the network name and password.",
          "Choose WPA3 security if available, otherwise WPA2.",
          "Check for firmware updates and install them.",
          "Test the connection on several devices.",
        ),
        p("Most setups take 15 to 30 minutes. If your modem needs activation by your provider, it may take longer."),
      ],
    },
    {
      id: "password",
      h2: "How to change your Wi-Fi and router password",
      blocks: [
        ol(
          "Open the router's app or admin page, using the address on its label.",
          "Log in with the admin details.",
          "Find the wireless settings and set a new strong password.",
          "Change the admin password too, so the default doesn't remain.",
          "Reconnect your devices with the new password.",
        ),
        p("Change the Wi-Fi password if you suspect unwanted users, after sharing it widely or when you set up new equipment."),
      ],
    },
    {
      id: "problems",
      h2: "Router not connecting to internet? Common fixes",
      blocks: [
        h3("Modem troubleshooting"),
        p("Check that the modem's online light is steady. If it isn't, the issue may be with activation or the line, and your provider can help."),
        h3("Wi-Fi connected but no internet"),
        p("Confirm the Ethernet cable is in the router's internet port, not a LAN port, then restart the modem followed by the router."),
        h3("Slow Wi-Fi or dead zones"),
        p("Reposition the router and check the band in use. See our Wi-Fi guide for more."),
        h3("Forgot the router password"),
        p("Check the router's label for defaults. If you changed them, a factory reset may be the only way in, but it erases all settings, so use it as a last resort."),
        h3("Double NAT with a provider gateway"),
        p("Using your own router behind a provider gateway can create two layers of network address translation, which can affect some games and apps. Ask your provider about bridge mode or passthrough."),
      ],
    },
    {
      id: "placement",
      h2: "Router placement and performance tips",
      blocks: [
        ul(
          "Place it centrally and raised, in the open.",
          "Keep it away from microwaves, metal and thick walls.",
          "Leave room around it for ventilation.",
          "Keep the firmware up to date.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "How long does it take to set up a router?", a: ["Usually 15 to 30 minutes. If your modem needs activation or a firmware update, it may take longer."] },
    { q: "Do I need both a modem and a router?", a: ["Yes, unless you have a gateway that combines both. The modem connects to your provider and the router shares that connection over Wi-Fi."] },
    { q: "Can I set up a router without a computer?", a: ["Yes. Many routers are set up with a smartphone app, and others can be configured from a phone browser using the router's admin address."] },
    { q: "What is the default IP address for most routers?", a: ["Common ones include 192.168.0.1, 192.168.1.1 and 10.0.0.1, but check the label or manual for your router."] },
    { q: "Why is my router not connecting to the internet?", a: ["Common causes are an inactive modem, a loose cable, the cable in the wrong port or an outage. Restart the modem first, then the router, and check connections."] },
    { q: "How often should I change my WiFi password?", a: ["When you suspect unwanted users, after sharing it widely or when setting up a new router. A strong, unique password doesn't need frequent changes otherwise."] },
    { q: "Will a new router make my internet faster?", a: ["It can improve Wi-Fi speed, coverage and device handling, but it can't exceed the speed of your internet plan."] },
    { q: "What happens if I factory reset my router?", a: ["It erases your settings, including the Wi-Fi name, password and admin login, and returns it to defaults. You will need to set it up again."] },
    { q: "Can I use my own router with my provider's equipment?", a: ["Often yes. With a provider gateway you may need bridge mode or passthrough to avoid double NAT. Check with your provider first."] },
  ],
  related: ["wifi-setup-support", "broadband-connection-assistance", "network-connection-support"],
};
