import { h3, ol, p, quick, table, ul, type Insight } from "./types";

export const internetServiceAssistance: Insight = {
  slug: "internet-service-assistance",
  metaTitle: "Internet Service Help: Fix Home Internet Issues",
  metaDescription:
    "Home internet not working? A step-by-step internet help guide for slow Wi-Fi, dropped connections and suspected outages, and when to call your provider.",
  ogTitle: "Internet Service Help: Fix Your Home Internet",
  ogDescription:
    "A plain-English guide to slow, dropping or dead home internet. Practical checks for cable, fiber, DSL and Wi-Fi households in the USA.",
  h1: "Internet service assistance: a practical guide to home internet help",
  category: "Internet basics",
  excerpt:
    "Work out whether your home internet problem sits with your device, your Wi-Fi, your equipment or your provider, and what to do about each.",
  readMinutes: 7,
  keywords: ["internet service help", "home internet", "internet not working", "fix internet connection"],
  image: "dataDesk",
  imageAlt: "Ethernet cables plugged into a home network switch",
  intro: [
    "Your internet stops at the worst moment. A work call freezes, a show buffers, and the router lights blink in a pattern nobody ever explained.",
    "This guide helps you find where the problem sits, try the fixes that are safe to do at home, and recognise when it belongs to your internet provider.",
  ],
  sections: [
    {
      id: "what-is-it",
      h2: "What is internet service assistance?",
      blocks: [
        p("Internet service assistance means getting help to understand and troubleshoot problems with your home internet, your equipment and your options. It is guidance, not a replacement for your provider."),
        p("Most problems land in one of three places:"),
        ul(
          "Equipment: a modem, router or device that has stalled or failed.",
          "Home network: weak Wi-Fi, interference or wrong settings.",
          "Provider: an outage, a line fault or an account issue.",
        ),
        p("Knowing which one you are dealing with saves time. It tells you whether to restart a box, move a router or pick up the phone."),
      ],
    },
    {
      id: "not-working",
      h2: "Why is my internet not working?",
      blocks: [
        quick("Home internet usually stops working because of an outage, a modem or router that needs a restart, a loose cable or a Wi-Fi problem inside the home. Start by checking whether every device is offline or just one."),
        h3("Is it the internet or just the Wi-Fi?"),
        p("Connect a laptop to the router with an Ethernet cable. If the wired connection works, the problem is your Wi-Fi. If it does not, look at the modem, the line or your provider."),
        h3("Is there an outage in my area?"),
        p("Use mobile data to open your provider's official outage page or app. If an outage is confirmed, home troubleshooting will not change it. Bluepeak Wifi cannot see provider outages, so rely on your provider's own information."),
      ],
    },
    {
      id: "step-by-step",
      h2: "How to fix your internet connection, step by step",
      blocks: [
        ol(
          "Check power and cables. Make sure the modem and router are on and every cable is firmly seated.",
          "Look at the lights. Note whether the power, online or internet light is off, blinking or a different colour than normal.",
          "Test another device. If only one device fails, focus on that device.",
          "Test with a cable. A wired computer that works points to Wi-Fi; one that does not points to the modem or line.",
          "Restart once. Unplug the router and modem, wait about 60 seconds, plug in the modem, let its lights settle, then plug in the router.",
          "Check your provider. Look for outage notices, then contact support if the modem still shows a fault.",
        ),
        p("Avoid restarting repeatedly. One careful restart is useful; many in a row can slow reconnection."),
      ],
    },
    {
      id: "common-problems",
      h2: "Common home internet problems and what to try",
      blocks: [
        h3("Internet is slow"),
        p("Pause large downloads, test next to the router and compare Wi-Fi with a cable. A big gap usually means signal, interference or placement rather than the plan."),
        h3("Wi-Fi keeps disconnecting"),
        p("Move the router to a more open, central spot, keep it ventilated and check for a firmware update. Note whether wired devices drop too."),
        h3("Connected but no internet"),
        p("The device reached the router but the router is not reaching the internet. Restart the modem and router, check the modem lights and look for an outage."),
        h3("Weak signal in some rooms"),
        p("Walls, floors and distance weaken Wi-Fi. Try repositioning the router, then consider a mesh system or a wired access point."),
        h3("One device will not connect"),
        p("Forget the network on that device and rejoin it, restart it, and check that it supports the band your router is broadcasting."),
      ],
    },
    {
      id: "speed",
      h2: "How much internet speed do you need?",
      blocks: [
        p("It depends on how many people and devices are active at the same time, not just on the plan name. The FCC publishes a Broadband Speed Guide with rough minimums per activity, and it describes them as guidelines. Check the current version on the FCC website."),
        p("A quick way to estimate: list what your household does at its busiest hour, such as a 4K stream, two video calls and a console update, and add the requirements together."),
        p("Upload speed and latency matter too. Video calls, cloud backups and live streaming depend on upload more than download."),
      ],
    },
    {
      id: "connection-types",
      h2: "Cable, fiber, DSL, fixed wireless and satellite",
      blocks: [
        table(
          ["Type", "How it connects", "Worth knowing"],
          ["Fiber", "Light through glass lines", "Often fast with strong upload, but not available everywhere"],
          ["Cable", "Coaxial TV lines", "Widely available; upload is usually lower than download"],
          ["DSL", "Telephone lines", "Speed can drop with distance from provider equipment"],
          ["Fixed wireless", "Radio signal from a nearby tower", "An option where wires don't reach; weather and line of sight can matter"],
          ["Satellite", "Dish to orbiting satellites", "Reaches remote places; latency is generally higher"],
        ),
        p("Each type has slightly different equipment. Fiber homes typically have an optical network terminal (ONT), cable homes a coaxial modem, and DSL homes a phone-line modem."),
      ],
    },
    {
      id: "contact-provider",
      h2: "When to contact your internet provider",
      blocks: [
        ul(
          "The modem's online light stays off, blinking or red after a proper restart.",
          "A wired device is offline too.",
          "Their outage page confirms a problem, or you suspect damaged lines outside.",
          "The same drops or slowdowns keep returning.",
          "Anything involving billing, your account or line repairs.",
        ),
        p("Keep notes of the times, light status and what you tried, and ask for a ticket number. Do not touch damaged outdoor lines; report them to your provider."),
      ],
    },
    {
      id: "tips",
      h2: "Tips to keep home internet running well",
      blocks: [
        ul(
          "Keep the router in an open, ventilated, central spot.",
          "Update router firmware when the maker releases updates.",
          "Use Ethernet for desktops, consoles and TVs where you can.",
          "Write down your Wi-Fi name, password and your provider's support details.",
          "Run a wired speed test occasionally so you know what normal looks like.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "Why is my home internet not working?", a: ["Common causes are a local outage, a modem or router that needs a restart, a loose cable or a Wi-Fi issue. Test a wired connection to see whether the problem is the line or the Wi-Fi."] },
    { q: "How do I fix my internet connection quickly?", a: ["Restart your modem and router once: unplug both, wait about 60 seconds, power the modem first, let its lights settle, then power the router. This clears many temporary faults."] },
    { q: "How do I know if there is an internet outage near me?", a: ["Check your provider's official app or outage page using mobile data, and see whether neighbors on the same provider are affected. Only your provider can confirm an outage."] },
    { q: "What speed do I need for 4K streaming?", a: ["The FCC's Broadband Speed Guide lists roughly 25 Mbps for one 4K stream. Several streams or other activity at once need more, so check the current guide and add up your household's busiest hour."] },
    { q: "Why is my Wi-Fi slow but my wired connection is fast?", a: ["Then the connection reaching your home is fine and the cause is inside the home network: distance, walls, interference or router placement."] },
    { q: "How can I check which providers serve my address?", a: ["Search your address on the FCC National Broadband Map, then confirm availability, plans and pricing on each provider's own website."] },
    { q: "Should I replace my router?", a: ["Consider it if the router is old, no longer gets updates, overheats or can't cover your home. If your provider rents it to you, ask them about a swap first."] },
    { q: "What if my provider doesn't fix the problem?", a: ["Keep a record of dates, speed tests and support ticket numbers, and escalate within your provider. If it stays unresolved, you can look into filing a complaint with the FCC."] },
  ],
  related: ["internet-troubleshooting", "router-setup-help", "network-connection-support"],
};

export const broadbandConnectionAssistance: Insight = {
  slug: "broadband-connection-assistance",
  metaTitle: "Broadband Connection Help: Setup & Troubleshooting",
  metaDescription:
    "Understand home broadband, set it up step by step, and troubleshoot slow speeds, drops and fiber issues. An independent guide for US households.",
  ogTitle: "Broadband Connection Help for Your Home",
  ogDescription:
    "How broadband works, what the connection types mean, and how to set up and troubleshoot your home connection.",
  h1: "Broadband connection help: a guide to home broadband setup and troubleshooting",
  category: "Broadband",
  excerpt:
    "What broadband is, how fiber, cable, DSL and wireless differ, and how to set up and troubleshoot a home connection.",
  readMinutes: 7,
  keywords: ["broadband connection help", "home broadband setup", "fiber internet connection help", "broadband not working"],
  image: "fiberCables",
  imageAlt: "Bundle of fiber optic cables with glowing light",
  intro: [
    "Broadband is simply the high-speed internet connection that reaches your home. When it works you barely notice it, and when it does not, everything stalls.",
    "This guide explains the main connection types, walks through a basic home setup and covers the problems people report most often.",
  ],
  sections: [
    {
      id: "what-is-broadband",
      h2: "What is broadband internet?",
      blocks: [
        quick("Broadband is the internet connection that comes into your home from a provider. Wi-Fi is different: it is the wireless network your router creates to share that connection with your devices."),
        p("That distinction matters when troubleshooting. A fast broadband line can still deliver poor Wi-Fi if the router is badly placed."),
        h3("What counts as high-speed internet?"),
        p("The FCC sets a benchmark for fixed broadband, and it has been raised over the years. Check the FCC's current figures rather than relying on a fixed number, since definitions change."),
      ],
    },
    {
      id: "types",
      h2: "Types of broadband connections in the US",
      blocks: [
        table(
          ["Type", "How it reaches you", "Things to know"],
          ["Fiber", "Fiber-optic line, usually to an ONT box", "Often steady and fast; availability varies by address"],
          ["Cable", "Coaxial line into a cable modem", "Widely available; busy-hour congestion is possible"],
          ["DSL", "Phone line into a DSL modem", "Distance from provider equipment affects speed"],
          ["Fixed wireless / 5G home internet", "Radio signal to a receiver", "Signal strength and location matter"],
          ["Satellite", "Dish to a satellite", "Useful in remote areas; weather and latency can matter"],
        ),
        p("Which are available depends on your exact address. The FCC National Broadband Map and each provider's own site are the places to check."),
      ],
    },
    {
      id: "choosing",
      h2: "Factors to consider before choosing a plan",
      blocks: [
        ul(
          "Availability at your address, confirmed with the provider.",
          "Your real usage: people, devices and busy-hour activities.",
          "Upload speed, which matters for calls, backups and streaming.",
          "Contract length, early termination fees and the price after promotions end.",
          "Data caps and equipment rental fees.",
        ),
        p("Bluepeak Wifi does not sell plans or know which services are offered where you live, so confirm everything with the provider."),
      ],
    },
    {
      id: "setup",
      h2: "Home broadband setup: step by step",
      blocks: [
        ol(
          "Place the modem where the line enters your home, or where your provider installed it.",
          "Connect the line: coaxial for cable, the fiber ONT's Ethernet port for fiber, or the phone line for DSL.",
          "Plug in the modem's power and wait for its lights to settle.",
          "Connect an Ethernet cable from the modem to your router's internet (WAN) port.",
          "Power the router and connect it with the maker's app or admin page.",
          "Set a Wi-Fi name and a strong password, using WPA3 or WPA2 security.",
          "Check for a firmware update, then test on a wired and a wireless device.",
        ),
        p("If you use a provider-supplied gateway, which combines modem and router, the steps are shorter. Your provider's activation steps may apply, so follow their instructions."),
      ],
    },
    {
      id: "troubleshooting",
      h2: "Broadband troubleshooting: common problems",
      blocks: [
        h3("Why is my broadband not working at all?"),
        p("Check power and cables, restart the modem and router once, and look at the modem's online light. If it stays off or blinking, check for an outage and contact your provider."),
        h3("Why is my internet slow?"),
        p("Test by cable next to the router. If that is slow too, note times and results for your provider. If only Wi-Fi is slow, look at placement and interference."),
        h3("Why does my Wi-Fi keep disconnecting?"),
        p("Weak signal, interference, overheating or outdated firmware are common. See whether a wired device also drops."),
        h3("Why is Wi-Fi weak in some rooms?"),
        p("Distance and walls reduce signal. Try a more central router position before adding equipment."),
        h3("Why is my upload speed so low?"),
        p("Many connection types, cable in particular, offer much lower upload than download by design. Check your plan's stated upload speed and test it by cable."),
      ],
    },
    {
      id: "fiber",
      h2: "Fiber internet connection help",
      blocks: [
        p("Fiber homes usually have an optical network terminal, or ONT, which converts the light signal for your router. It has its own lights, so read its manual."),
        ul(
          "Keep the fiber cable gently routed. Sharp bends and crushing can damage it.",
          "Never look into a fiber connector or open the ONT yourself.",
          "If the ONT shows a fault light after a restart, contact your provider.",
        ),
      ],
    },
    {
      id: "tips",
      h2: "Tips to get the most from your connection",
      blocks: [
        ul(
          "Use Ethernet for devices that stay put.",
          "Place the router centrally and out in the open.",
          "Keep firmware updated and use strong, unique passwords.",
          "Test your wired speed every so often and keep the results.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "What is the difference between broadband and Wi-Fi?", a: ["Broadband is the connection into your home from your provider. Wi-Fi is the wireless network your router creates to share it. You can have a fast broadband line and still get weak Wi-Fi."] },
    { q: "How do I know which providers are available at my address?", a: ["Use the FCC National Broadband Map, then check each provider's own website to confirm plans and pricing for your exact location."] },
    { q: "Why is my broadband not working after a storm?", a: ["Storms can cause power surges, damaged lines or local outages. Restart your equipment, look for outage notices and contact your provider if it continues. Never touch damaged outdoor lines."] },
    { q: "Is fiber better than cable?", a: ["Fiber often offers steadier performance and stronger upload, while cable is more widely available. Which is better depends on what is offered at your address and how you use the internet."] },
    { q: "How often should I restart my router?", a: ["There is no fixed rule. Restart when you notice slowdowns or drops. Some people restart every few weeks, and some routers can schedule it."] },
    { q: "Can I use my own modem and router?", a: ["Often yes, but a modem must be compatible with your provider's network. Check their approved device list before buying."] },
    { q: "Why is my speed lower than what I pay for?", a: ["Advertised speeds are usually \"up to\" figures. Wi-Fi limits, older devices and busy times can reduce real-world speed. Test with a cable to see what reaches your home."] },
    { q: "Do I need a mesh Wi-Fi system?", a: ["It can help in larger, multi-story or thick-walled homes where one router can't cover everything. In a small apartment, one well-placed router is often enough."] },
    { q: "What does a blinking light on my modem mean?", a: ["It varies by make and model. Often steady means normal, while blinking or red can mean it is trying to connect or has a fault. Check your device manual or provider's support page."] },
  ],
  related: ["internet-service-assistance", "internet-plan-guidance", "router-setup-help"],
};
