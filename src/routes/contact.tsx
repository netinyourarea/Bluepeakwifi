import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import { DisclaimerBlock } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Contact Bluepeak Wifi | Internet & Wi-Fi Questions";
const description =
  "Have questions about your internet, home Wi-Fi or a possible service interruption? Tell us what you're experiencing and explore the next steps with an independent assistance team.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title, description, path: "/contact", breadcrumb: [{ name: "Contact", path: "/contact" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your connection."
        intro="Have questions about your internet, home Wi-Fi or a possible service interruption? Tell us what you're experiencing and explore the next steps."
        image={IMG.installer}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <Eyebrow>Reach us</Eyebrow>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <Phone className="size-5 shrink-0 text-primary" />
                <a href="tel:+18335815253" className="min-w-0 truncate text-sm font-bold hover:text-primary">(833) 581-5253</a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <MapPin className="size-5 shrink-0 text-primary" />
                <address className="text-sm font-bold not-italic">
                  5908 Cecil Dr, Ozawkie, KS 66070, United States
                </address>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For account, billing or confirmed outage questions, you will need to contact your
              actual internet provider. We can help you understand the problem and prepare what to
              tell them.
            </p>
            <DisclaimerBlock />
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Call us to get help</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The quickest way to reach us is by phone. Tell us what you are experiencing, such as
              no internet, slow Wi-Fi or a suspected outage, and we will help you understand the
              issue and explore the next steps.
            </p>
            <a
              href="tel:+18335815253"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-aqua sm:w-auto"
            >
              <Phone className="size-5" /> Call (833) 581-5253
            </a>
            <h3 className="mt-8 text-sm font-bold">Have these ready when you call</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {[
                "What is happening and when it started",
                "Whether one device or all devices are affected",
                "The router and modem light colors",
                "What you have already tried",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}