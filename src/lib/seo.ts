export const SITE_URL = "https://bluepeakwifi.com";
export const SITE_NAME = "Bluepeak Wifi";

type HeadOptions = {
  title: string;
  description: string;
  /** Clean, trailing-slash-free path, e.g. "/internet" or "/" */
  path: string;
  ogType?: "website" | "article";
  /** Breadcrumb trail after Home, in order. */
  breadcrumb?: { name: string; path: string }[];
  /** Visible FAQ content, emitted as FAQPage structured data. */
  faqs?: { q: string; a: string[] }[];
  /** Extra JSON-LD objects, e.g. Article. */
  schemas?: object[];
};

export function pageHead({
  title,
  description,
  path,
  ogType = "website",
  breadcrumb = [],
  faqs = [],
  schemas = [],
}: HeadOptions) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  const faqScripts = faqs.length
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
            })),
          }),
        },
      ]
    : [];

  const scripts = breadcrumb.length
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              ...breadcrumb.map((b, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: b.name,
                item: `${SITE_URL}${b.path}`,
              })),
            ],
          }),
        },
      ]
    : [];
  scripts.push(...faqScripts);
  for (const schema of schemas) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(schema) });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: ogType },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
