export type Faq = { q: string; a: string[] };

export const HOME_FAQS: Faq[] = [
  {
    q: "How can I tell if it's an outage?",
    a: [
      "An outage is more likely when several devices lose internet at the same time, on both Wi-Fi and a cable, and the router and modem appear to be powered on and working normally. A restart that changes nothing points the same way.",
      "To check, look at your provider's official outage or service-status page (or app) and see whether nearby households using the same provider report problems. These are indicators, not a diagnosis. Only your provider can confirm an outage and repair it.",
    ],
  },
  {
    q: "Why is my Wi-Fi slower when the speed test looks fine?",
    a: [
      "A speed test measures one moment, usually from one device. It does not show signal strength in the room where you are struggling, interference from neighboring networks, or how many devices are busy at once.",
      "Test with a cable connected next to the router, then again over Wi-Fi in the slow room. A large gap suggests distance, walls, interference or router placement. Also note that high latency or jitter can make calls and games feel slow even when download speed looks good.",
    ],
  },
  {
    q: "Can you walk me through a reset?",
    a: [
      "Yes, and the first thing to know is that a restart and a factory reset are different. A restart (power-cycle) just turns equipment off and on and is safe. A factory reset erases the router's settings, including the Wi-Fi name and password, and should not be done casually.",
      "For a restart: unplug the modem and router, wait about 60 seconds, plug the modem in first, wait for its lights to settle, then power the router. Call us if you would like to talk through it step by step, or see the restart guide on the Internet Support page.",
    ],
  },
  {
    q: "Do I need a new router?",
    a: [
      "Not always. Many problems come from placement, crowded Wi-Fi channels, outdated firmware or a loose cable rather than the router itself.",
      "A replacement can make sense when the router is quite old, overheats, restarts by itself, cannot keep up with the number of devices at home, or does not support current Wi-Fi standards that your devices use. If your provider supplied the equipment, ask them about replacing it before buying your own.",
    ],
  },
  {
    q: "My internet is down. What should I try first?",
    a: [
      "Check that the modem and router have power and that cables are firmly connected. Then unplug both for about 60 seconds, power the modem first, wait for the lights to settle, then power the router.",
      "If the modem's online or internet light stays off, blinking or red after that, the issue may be on the line or with the provider rather than your Wi-Fi. That is the point to check your provider's outage page or contact their support.",
    ],
  },
  {
    q: "Can you fix an outage for me?",
    a: [
      "No. Bluepeak Wifi is an independent third-party assistance resource. We do not own or operate any network, cannot see your provider's systems and cannot repair or restore provider outages.",
      "What we can do is help you work out whether the problem looks like your home equipment or the wider service, explain what to tell your provider, and suggest ways to keep working in the meantime.",
    ],
  },
  {
    q: "Why does my internet disconnect at random times?",
    a: [
      "Random drops usually come from one of a few things: a weak Wi-Fi signal at the device, interference, an overheating or aging router, a loose or damaged cable, too many devices competing for the connection, or an intermittent fault with the service.",
      "Note when the drops happen, which devices are affected, and whether a wired device drops too. If a cable-connected computer also drops, the cause is less likely to be Wi-Fi and more likely to be the router, modem, cable or line. Share those notes with your provider if the problem keeps recurring.",
    ],
  },
  {
    q: "Why is Wi-Fi weak in one particular room?",
    a: [
      "Wi-Fi signal gets weaker with distance and with every obstacle between the router and the device. Thick walls, floors, mirrors, metal appliances, water pipes and aquariums all absorb or reflect signal. Neighboring networks can also add interference.",
      "Try moving the router to a more central, open and elevated spot first. If the room is still weak, a mesh system or a correctly placed extender may help, or running an Ethernet cable to that room for a wired connection or access point.",
    ],
  },
  {
    q: "Why do some devices connect while others do not?",
    a: [
      "Devices differ in their Wi-Fi hardware and settings. Older or smart-home devices often only support the 2.4 GHz band, a device may have the wrong saved password, or it may have a stale connection that needs the network to be forgotten and re-added.",
      "Other causes include the router's device limit, MAC filtering, parental controls or a device that is too far from the router. Restart the affected device, forget and rejoin the network, and check that it supports the band your network is broadcasting.",
    ],
  },
  {
    q: "How long can an internet outage last?",
    a: [
      "It varies. A brief outage might be resolved quickly, while damaged cables, equipment failures or severe weather can take much longer. Duration depends on the cause of the fault, how much infrastructure is affected, whether repairs need crews on site, and the provider's response.",
      "We do not publish typical restoration times because we cannot know them. Your provider's official status page, app or support line is the right place for any estimate, and estimates can change.",
    ],
  },
  {
    q: "Should I restart my modem and router?",
    a: [
      "Yes, a single, correct restart is a sensible first step and fixes many temporary glitches. Unplug both, wait about 60 seconds, power the modem first, wait for the lights to settle, then power the router.",
      "Avoid restarting repeatedly. Some providers' systems can take several minutes to re-establish the connection, and repeated power cycles can delay that. Do not press a recessed reset button unless you intend a factory reset.",
    ],
  },
  {
    q: "How can I check whether my provider has an outage?",
    a: [
      "Use the provider's own official channels: their service-status or outage page, their app, official notifications by text or email, or their support line. You may need mobile data to reach these while your home internet is down.",
      "You can also see whether other nearby customers of the same provider are reporting similar problems. Bluepeak Wifi does not monitor provider networks and does not show live outage status, so always rely on your provider for confirmation.",
    ],
  },
  {
    q: "Does the number of connected devices affect performance?",
    a: [
      "Yes. Every phone, TV, console, camera and smart speaker shares the same connection and the router's capacity. Streaming in 4K, large downloads, cloud backups and video calls use a lot, and many small devices add up.",
      "Symptoms include buffering, lag and slow pages when the household is busy. Try pausing large downloads, moving key devices to Ethernet, or checking whether your router can handle your device count. A faster plan does not always help if the router or Wi-Fi is the bottleneck.",
    ],
  },
  {
    q: "When should I contact my actual internet provider?",
    a: [
      "Contact them when basic checks haven't helped and the modem's online light is off, blinking or red, when their outage page confirms a problem, when a wired device is also offline, when you suspect damaged lines outside your home, or when the same problem keeps coming back.",
      "Have your account details, the lights' status, the time the problem started and what you have already tried ready. Ask for a ticket or reference number. Account, billing and service questions can only be handled by your provider.",
    ],
  },
];

export const OUTAGE_FAQS: Faq[] = [
  {
    q: "Can Bluepeak Wifi tell me if there is an outage in my area?",
    a: [
      "No. We are an independent resource and do not operate or monitor any provider's network, so we cannot show live outage information or confirm an outage. Your provider's official status page, app or support line is the source to use.",
    ],
  },
  {
    q: "My internet is out but my neighbor's works. What does that mean?",
    a: [
      "It may be a problem local to your home, such as your router, modem, cable or a fault on your own line. It can also mean your neighbor uses a different provider or connection type. Run the basic checks, then report it to your provider if the equipment appears to be fine.",
    ],
  },
  {
    q: "Is it normal for internet to go out during storms?",
    a: [
      "Severe weather can damage cables and equipment or cause power interruptions, so outages are more likely. Local power loss will also switch off your modem and router. Check whether your home still has power and whether your equipment has restarted properly once power returns.",
    ],
  },
  {
    q: "Should I keep restarting my router during an outage?",
    a: [
      "No. One careful restart is reasonable to rule out a home equipment glitch. If the problem persists and the provider has confirmed an outage, repeated restarts will not help and can slow reconnection when service returns.",
    ],
  },
  {
    q: "Can I get a credit for an outage?",
    a: [
      "That depends entirely on your provider's policies and your agreement. Ask them directly, and keep the ticket number and the dates and times of the interruption. We cannot issue or arrange credits.",
    ],
  },
  {
    q: "My internet came back but it is still slow. Why?",
    a: [
      "Devices may be reconnecting and catching up on updates and backups at once, or the connection may still be settling. Wait a short while, then restart the device and run a wired speed test. If slowness continues, tell your provider.",
    ],
  },
  {
    q: "Who is responsible for fixing an outage?",
    a: [
      "Your internet provider is responsible for their network and its restoration. You are responsible for the equipment in your home unless the provider supplied it. If you are unsure which is at fault, your provider can often tell you what they see on their side.",
    ],
  },
];
