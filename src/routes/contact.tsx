import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import { DisclaimerBlock } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Contact Us for Internet & Wi-Fi Help | Bluepeak Wifi";
const description =
  "Describe your internet, Wi-Fi or suspected outage problem and get step-by-step help from an independent support team.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ title, description, path: "/contact", breadcrumb: [{ name: "Contact", path: "/contact" }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what's going wrong"
        intro="Describe the problem — no internet, slow Wi-Fi, a suspected outage or a new router — and we'll get back to you with clear next steps."
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
            <DisclaimerBlock />
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Request help</h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              {[
                { name: "name", label: "Full name", type: "text" },
                { name: "email", label: "Email address", type: "email" },
                { name: "zip", label: "ZIP code", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    {f.label}
                  </span>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  What do you need help with?
                </span>
                <select
                  name="issue"
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                >
                  <option>No internet</option>
                  <option>Slow speeds</option>
                  <option>Wi-Fi dead zones</option>
                  <option>Possible outage</option>
                  <option>Router / modem setup</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  Describe the problem
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Send Request
              </button>
              {sent && (
                <p className="rounded-xl border border-accent/35 bg-accent/10 p-4 text-sm">
                  Thanks — we'll reach out shortly with next steps.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}