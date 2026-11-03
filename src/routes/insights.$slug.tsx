import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Phone } from "lucide-react";
import { pageHead, SITE_URL } from "@/lib/seo";
import { CtaStrip, DisclaimerBlock } from "@/components/site/page-shell";
import { Callout, FaqAccordion } from "@/components/site/guide";
import { Eyebrow } from "@/components/site/primitives";
import { getInsight, INSIGHTS, PUBLISHED, type Insight } from "@/lib/insights";
import type { Block } from "@/lib/insights/types";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return insight;
  },
  head: ({ loaderData }) => {
    const a = loaderData as Insight | undefined;
    if (!a) return {};
    const path = `/insights/${a.slug}`;
    const head = pageHead({
      title: `${a.metaTitle} | Bluepeak Wifi`,
      description: a.metaDescription,
      path,
      ogType: "article",
      breadcrumb: [
        { name: "Insights", path: "/insights" },
        { name: a.category, path },
      ],
      faqs: a.faqs,
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.h1,
          description: a.metaDescription,
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          keywords: a.keywords.join(", "),
          mainEntityOfPage: `${SITE_URL}${path}`,
          author: { "@type": "Organization", name: "Bluepeak Wifi", url: SITE_URL },
          publisher: { "@type": "Organization", name: "Bluepeak Wifi", url: SITE_URL },
        },
      ],
    });
    // Article-specific social titles from the SEO brief.
    head.meta = head.meta.map((m) =>
      "property" in m && m.property === "og:title"
        ? { ...m, content: a.ogTitle }
        : "property" in m && m.property === "og:description"
          ? { ...m, content: a.ogDescription }
          : m,
    );
    return head;
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-extrabold">Article not found</h1>
      <Link to="/insights" className="mt-6 inline-block font-bold text-primary">
        Back to all insights
      </Link>
    </div>
  ),
  component: ArticlePage,
});

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("p" in b)
          return (
            <p key={i} className="mt-4 leading-relaxed text-foreground/80">
              {b.p}
            </p>
          );
        if ("quick" in b)
          return (
            <div key={i} className="mt-4">
              <Callout title="Quick answer">
                <p>{b.quick}</p>
              </Callout>
            </div>
          );
        if ("h3" in b)
          return (
            <h3 key={i} className="mt-7 font-display text-xl font-bold">
              {b.h3}
            </h3>
          );
        if ("ul" in b)
          return (
            <ul key={i} className="mt-4 space-y-2">
              {b.ul.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-aqua" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          );
        if ("ol" in b)
          return (
            <ol key={i} className="mt-4 space-y-3">
              {b.ol.map((t, n) => (
                <li key={t} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-extrabold text-aqua">
                    {n + 1}
                  </span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ol>
          );
        return (
          <div key={i} className="mt-5 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="bg-secondary/70">
                <tr>
                  {b.table.head.map((h) => (
                    <th key={h} className="px-4 py-3 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.table.rows.map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    {r.map((c, ci) => (
                      <td
                        key={ci}
                        className={ci === 0 ? "px-4 py-3 font-semibold" : "px-4 py-3 text-foreground/80"}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

function ArticlePage() {
  const a = Route.useLoaderData() as Insight;
  const related = a.related
    .map((s) => INSIGHTS.find((i) => i.slug === s))
    .filter((x): x is Insight => Boolean(x));

  return (
    <>
      <section className="px-3 pt-4 sm:px-5">
        <div className="tide-bg relative isolate overflow-hidden rounded-[2.5rem] text-cream">
          <img
            src={IMG[a.image as keyof typeof IMG]}
            alt={a.imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-aqua hover:text-cream"
            >
              <ArrowLeft className="size-4" /> All insights
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Eyebrow tone="light">{a.category}</Eyebrow>
              <span className="inline-flex items-center gap-1.5 text-xs text-cream/70">
                <Clock className="size-3.5" /> {a.readMinutes} min read
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold sm:text-5xl">
              {a.h1}
            </h1>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_16rem]">
          <div className="min-w-0 max-w-3xl">
            {a.intro.map((t) => (
              <p key={t} className="mb-4 text-lg leading-relaxed text-foreground/85">
                {t}
              </p>
            ))}
            <div className="mt-6">
              <DisclaimerBlock />
            </div>

            {a.sections.map((s) => (
              <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{s.h2}</h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}

            <section id="faq" className="mt-14 scroll-mt-28">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6">
                <FaqAccordion items={a.faqs} />
              </div>
            </section>

            <section className="mt-14 rounded-3xl bg-secondary/70 p-7">
              <h2 className="font-display text-2xl font-extrabold">Need to talk it through?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us what you are experiencing and we will help you understand the issue and
                explore the next steps. We cannot repair provider networks or guarantee an outcome.
              </p>
              <a
                href="tel:+18335815253"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-aqua"
              >
                <Phone className="size-4" /> Call (833) 581-5253
              </a>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="In this article" className="soft-card p-5">
              <h2 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                In this article
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {a.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-foreground/75 hover:text-primary">
                      {s.h2}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="text-foreground/75 hover:text-primary">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
            <div className="soft-card mt-5 p-5 text-sm">
              <h2 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                Related help
              </h2>
              <ul className="mt-3 space-y-2">
                <li><Link to="/internet" className="text-foreground/75 hover:text-primary">Internet Support</Link></li>
                <li><Link to="/wifi" className="text-foreground/75 hover:text-primary">Wi-Fi Help</Link></li>
                <li><Link to="/outages" className="text-foreground/75 hover:text-primary">Outages</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-extrabold">Keep reading</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/insights/$slug"
                params={{ slug: r.slug }}
                className="soft-card lift group p-6"
              >
                <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                  {r.category}
                </span>
                <h3 className="mt-2 font-display text-lg leading-snug font-bold">{r.h1}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
