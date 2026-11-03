import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { PageHero, CtaStrip } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/primitives";
import { INSIGHTS } from "@/lib/insights";
import { IMG } from "@/lib/images";

const title = "Insights: Internet, Wi-Fi & Router Guides | Bluepeak Wifi";
const description =
  "Plain-English guides on home internet, Wi-Fi setup, routers, broadband, cable TV and network troubleshooting from an independent assistance resource.";

export const Route = createFileRoute("/insights/")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/insights",
      breadcrumb: [{ name: "Insights", path: "/insights" }],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Bluepeak Wifi Insights",
          url: "https://bluepeakwifi.com/insights",
          hasPart: INSIGHTS.map((i) => ({
            "@type": "Article",
            headline: i.h1,
            url: `https://bluepeakwifi.com/insights/${i.slug}`,
          })),
        },
      ],
    }),
  component: InsightsPage,
});

function InsightsPage() {
  const [featured, ...rest] = INSIGHTS;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides for a better connection"
        intro="Practical, plain-language articles on home internet, Wi-Fi, routers and troubleshooting. Written as general guidance, not as a replacement for your provider."
        image={IMG.circuit}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <Link
              to="/insights/$slug"
              params={{ slug: featured.slug }}
              className="soft-card lift group grid overflow-hidden md:grid-cols-2"
            >
              <img
                src={IMG[featured.image as keyof typeof IMG]}
                alt={featured.imageAlt}
                className="h-64 w-full object-cover md:h-[22rem]"
              />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                  Start here · {featured.category}
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  {featured.h1}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Read the guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 70} className="flex">
                <Link
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="soft-card lift group flex w-full flex-col overflow-hidden"
                >
                  <img
                    src={IMG[a.image as keyof typeof IMG]}
                    alt={a.imageAlt}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                      {a.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg leading-snug font-bold">{a.h1}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {a.excerpt}
                    </p>
                    <span className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {a.readMinutes} min read
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-primary">
                        Read <ArrowRight className="size-3.5" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Bluepeak Wifi is an independent third-party assistance resource, not an internet service
            provider. Articles are general information and may not apply to every provider or
            device.
          </p>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
