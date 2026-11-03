import { h3, ol, p, quick, table, ul, type Insight } from "./types";

export const internetPlanGuidance: Insight = {
  slug: "internet-plan-guidance",
  metaTitle: "Home Internet Plans Guide: Speeds & Real Costs",
  metaDescription:
    "How to choose a home internet plan. Learn what speed you need, how fiber, cable and 5G differ and how to spot extra fees before you sign up.",
  ogTitle: "How to Choose the Right Home Internet Plan (USA Guide)",
  ogDescription:
    "A plain-English guide to internet speeds, connection types, real monthly costs and the questions to ask before signing up.",
  h1: "Home internet plans: a simple guide to choosing the right one",
  category: "Plans & speeds",
  excerpt:
    "What internet speed households actually need, how connection types differ and what to ask before you sign up.",
  readMinutes: 7,
  keywords: ["home internet plans", "internet speed requirements", "best internet speed for home", "affordable home internet"],
  image: "homeStudy",
  imageAlt: "Home office desk with a laptop",
  intro: [
    "Plans are sold by speed, price and promotions, which makes comparing them harder than it should be.",
    "Bluepeak Wifi does not sell internet plans, recommend providers or know what is offered at your address. This guide helps you understand the terms and ask better questions.",
  ],
  sections: [
    {
      id: "what-is-plan",
      h2: "What is a home internet plan?",
      blocks: [
        p("A plan is an agreement with a provider for a connection type and speed tier at a price, usually with terms about contracts, equipment and data."),
      ],
    },
    {
      id: "speed",
      h2: "How much internet speed do you need at home?",
      blocks: [
        h3("Download speed vs. upload speed"),
        p("Download speed is how fast data reaches you, such as streaming and web pages. Upload speed is how fast data leaves, which matters for video calls, backups and sharing large files."),
        h3("What does the FCC consider high-speed?"),
        p("The FCC publishes a benchmark for fixed broadband and has raised it over time. Look up the current figures on the FCC website instead of relying on an older number."),
        h3("Estimating by household"),
        p("There is no single right answer, but these questions help:"),
        ul(
          "How many people are online at the same time?",
          "Does anyone work from home or make frequent video calls?",
          "Do you stream in 4K, game online or back up large files?",
          "How many always-on devices, such as cameras and smart speakers, do you have?",
        ),
        p("Add up the busiest-hour activities using the FCC's Broadband Speed Guide as a rough reference. Then consider whether your Wi-Fi and router can actually deliver it."),
      ],
    },
    {
      id: "types",
      h2: "Types of home internet connections in the USA",
      blocks: [
        table(
          ["Type", "Worth knowing"],
          ["Fiber", "Often fast and steady; availability varies"],
          ["Cable", "Widely available; upload is typically lower"],
          ["DSL", "Speed depends on distance from provider equipment"],
          ["5G / fixed wireless", "Depends on signal where you live"],
          ["Satellite", "Reaches remote areas; latency is generally higher"],
        ),
        p("The FCC National Broadband Map and provider websites show what is offered at your address."),
      ],
    },
    {
      id: "cost",
      h2: "What affects the real cost of a plan?",
      blocks: [
        ul(
          "Promotional pricing that rises after a set period.",
          "Equipment rental fees for the modem or router.",
          "Installation or activation fees.",
          "Taxes and other fees.",
          "Data caps and overage charges.",
          "Contract length and early termination fees.",
        ),
        h3("How to read a broadband label"),
        p("Providers are required to display broadband labels showing prices, fees and typical speeds. Ask for the label for any plan you are considering and compare the monthly price including fees."),
      ],
    },
    {
      id: "affordable",
      h2: "Affordable home internet options",
      blocks: [
        p("Ask providers directly which discounted or low-income programs they offer and what eligibility they require. Programs and prices change, so we do not list specific offers."),
      ],
    },
    {
      id: "before-choosing",
      h2: "Questions to ask before choosing a plan",
      blocks: [
        ol(
          "Is this plan available at my exact address?",
          "What is the price after the promotion ends?",
          "What fees apply, including equipment and installation?",
          "What are the typical and stated upload speeds?",
          "Is there a data cap?",
          "What is the contract length and cancellation fee?",
          "Can I use my own modem or router?",
        ),
      ],
    },
    {
      id: "tips",
      h2: "Tips and recommendations",
      blocks: [
        ul(
          "Don't pay for more speed than your Wi-Fi can deliver. Check your router first.",
          "Keep your plan details and promotion end date somewhere safe.",
          "Test your wired speed after installation and keep the result.",
          "Review your plan when your household or work situation changes.",
        ),
      ],
    },
  ],
  faqs: [
    { q: "What internet speed do I need at home?", a: ["It depends on how many people and devices are online at once and what they do. Add up the busiest-hour activities and check the FCC's Broadband Speed Guide for rough minimums."] },
    { q: "Does upload speed matter?", a: ["Yes for video calls, backups, live streaming and sharing large files. Many plans offer much less upload than download, so check the stated upload speed."] },
    { q: "Is fiber always better than cable?", a: ["Not always. Fiber often offers steadier performance, but availability and price vary. The better choice depends on what is offered at your address."] },
    { q: "How do I find providers at my address?", a: ["Use the FCC National Broadband Map and then confirm plans and pricing on each provider's website."] },
    { q: "What fees should I watch for?", a: ["Promotional price increases, equipment rental, installation or activation fees, taxes, data cap overages and early termination fees."] },
    { q: "What is a broadband label?", a: ["A standardized label that providers display showing a plan's price, fees and typical speeds. Ask for it before you choose a plan."] },
    { q: "Can a faster plan fix my Wi-Fi problems?", a: ["Not necessarily. If the problem is router placement, interference or old equipment, a faster plan may not change what you experience."] },
    { q: "Does Bluepeak Wifi sell internet plans?", a: ["No. We are an independent information resource and do not sell plans, recommend providers or know availability at your address."] },
  ],
  related: ["broadband-connection-assistance", "internet-service-assistance", "wifi-setup-support"],
};

export const networkConnectionSupport: Insight = {
  slug: "network-connection-support",
  metaTitle: "Network Troubleshooting Guide: Fix Home Wi-Fi & LAN",
  metaDescription:
    "Internet not working? A step-by-step home network troubleshooting guide for Wi-Fi, Ethernet and connection problems, and how to set up a reliable network.",
  ogTitle: "Network Troubleshooting Made Simple: Fix Your Home Connection",
  ogDescription:
    "A plain-English guide to fixing Wi-Fi drops, slow internet and Ethernet problems, plus how to set up a reliable home network.",
  h1: "Network troubleshooting: how to fix home network and internet connection issues",
  category: "Home network",
  excerpt:
    "How a home network fits together and how to fix Wi-Fi, Ethernet, DNS and connection problems in a sensible order.",
  readMinutes: 8,
  keywords: ["network troubleshooting", "home network troubleshooting", "Ethernet connection troubleshooting", "network connection problems"],
  image: "circuit",
  imageAlt: "Close-up of network circuitry and connections",
  intro: [
    "Your home network is more than Wi-Fi. It includes the modem, router, cables and every device, and any of them can be the weak link.",
    "This guide explains how the pieces fit together and how to work through problems in a calm, logical order.",
  ],
  sections: [
    {
      id: "how-it-works",
      h2: "How your home network works",
      blocks: [
        p("The modem receives the service. The router distributes it to devices over Wi-Fi and Ethernet. Each device then uses that connection to reach the internet."),
        h3("Wireless network vs. LAN (Ethernet)"),
        p("A wireless connection uses radio and varies with signal and interference. A wired LAN connection uses a cable and is usually more stable."),
      ],
    },
    {
      id: "steps",
      h2: "How do I fix my network connection? Step by step",
      blocks: [
        quick("Check whether one device or all devices are affected, restart your equipment once, check cables, then compare Wi-Fi with Ethernet. If the modem has no signal, contact your provider."),
        ol(
          "Find out whether one device or all are affected.",
          "Check power, lights and cables.",
          "Restart the modem, then the router, after waiting about 30 to 60 seconds.",
          "Test with Ethernet and compare with Wi-Fi.",
          "Run a speed test.",
          "Check your provider's outage information.",
          "Contact your provider if the modem still has no signal.",
        ),
      ],
    },
    {
      id: "problems",
      h2: "Common network problems and solutions",
      blocks: [
        h3("Connected to Wi-Fi but no internet"),
        p("The router may not be reaching the internet. Restart the modem and router and check for an outage."),
        h3("Slow internet speeds"),
        p("Test by cable, pause large downloads and check the Wi-Fi signal."),
        h3("Wi-Fi keeps dropping"),
        p("Check signal strength, interference, firmware and whether wired devices drop too."),
        h3("One device can't connect"),
        p("Forget and rejoin the network, restart the device and check its Wi-Fi band support."),
        h3("Ethernet connection not working"),
        ul(
          "Try a different Ethernet cable and a different router port.",
          "Check the link lights on the port.",
          "Test another device on the same cable.",
        ),
        h3("\"No valid IP configuration\" or DNS errors"),
        p("These suggest the device isn't getting network settings or can't resolve names. Restart the device and router, reconnect, and if DNS errors continue, ask your provider or consult your router's documentation before changing DNS settings."),
      ],
    },
    {
      id: "reliable-network",
      h2: "How to set up a reliable home network",
      blocks: [
        h3("Choosing where to place your router"),
        ul(
          "Central, raised and out in the open.",
          "Away from microwaves, metal and thick walls.",
          "Near where the service enters, unless a mesh system covers the distance.",
        ),
        h3("Wired where it matters"),
        p("Use Ethernet for desktops, TVs, consoles and any mesh node that can be wired back to the router."),
      ],
    },
    {
      id: "security",
      h2: "How to secure your home wireless network",
      blocks: [
        ul(
          "Change the router's default admin password.",
          "Use WPA3 or WPA2 and a strong Wi-Fi password.",
          "Keep firmware updated.",
          "Use a guest network for visitors and smart devices.",
        ),
      ],
    },
    {
      id: "coverage",
      h2: "Improving coverage in a large home",
      blocks: [
        p("Place the router centrally first. Then consider mesh nodes or wired access points to cover distant rooms or extra floors."),
      ],
    },
  ],
  faqs: [
    { q: "Why is my internet not working even though Wi-Fi is connected?", a: ["Your device reaches the router but the router isn't reaching the internet. Restart the modem and router, check for outages and test a wired connection."] },
    { q: "How do I fix network connection problems at home?", a: ["Check whether one device or all are affected, restart equipment once, check cables, compare Wi-Fi and Ethernet and run a speed test. Contact your provider if the modem has no signal."] },
    { q: "How long should I unplug my router to reset it?", a: ["Around 30 to 60 seconds. Plug in the modem first, wait for its lights to settle, then the router."] },
    { q: "Is Ethernet faster than Wi-Fi?", a: ["Ethernet is usually more stable and often faster because walls, distance and interference don't affect it. Modern Wi-Fi can still be fast at close range."] },
    { q: "What is the difference between 2.4 GHz and 5 GHz?", a: ["2.4 GHz reaches farther but is slower and more crowded. 5 GHz is faster with shorter range."] },
    { q: "Do I need a new router to fix slow internet?", a: ["Not always. Try repositioning, Ethernet and a firmware update first. An older router may need replacing."] },
    { q: "How can I improve Wi-Fi coverage in a large home?", a: ["Place the router centrally, then add a mesh system or wired access points to cover distant rooms."] },
    { q: "How do I secure my home wireless network?", a: ["Change the admin password, use WPA3 or WPA2 with a strong Wi-Fi password, keep firmware updated and use a guest network for visitors."] },
  ],
  related: ["internet-troubleshooting", "wifi-setup-support", "router-setup-help"],
};
