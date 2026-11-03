import { Link } from "@tanstack/react-router";
import { Minus, Plus, Info } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./primitives";
import type { Faq } from "@/lib/faqs";
import { cn } from "@/lib/utils";

/** Accessible FAQ accordion (Radix: aria-expanded/controls, keyboard support). */
export function FaqAccordion({ items, defaultOpen }: { items: Faq[]; defaultOpen?: string }) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpen}
      className="grid gap-3"
    >
      {items.map((f) => (
        <AccordionPrimitive.Item
          key={f.q}
          value={f.q}
          className="group overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-colors data-[state=open]:bg-card data-[state=open]:ring-primary/40"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset sm:px-6 [&[data-state=open]_.faq-plus]:hidden [&[data-state=closed]_.faq-minus]:hidden">
              <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary group-data-[state=open]:bg-ink group-data-[state=open]:text-aqua">
                <Plus className="faq-plus size-4" />
                <Minus className="faq-minus size-4" />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="space-y-3 px-5 pb-6 text-[15px] leading-relaxed text-muted-foreground sm:px-6">
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export type Topic = {
  id: string;
  title: string;
  means: string;
  causes: string[];
  checks: string[];
  next: string;
};

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase">{label}</h4>
      <div className="mt-2 text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-aqua" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/** Jump links to each topic, shown above a long guide. */
export function TopicIndex({ topics }: { topics: { id: string; title: string }[] }) {
  return (
    <nav aria-label="Topics on this page" className="flex flex-wrap gap-2">
      {topics.map((t, i) => (
        <a
          key={t.id}
          href={`#${t.id}`}
          className="rounded-full bg-card px-4 py-2 text-xs font-semibold text-foreground/80 ring-1 ring-border transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span className="mr-1.5 text-primary/70">{String(i + 1).padStart(2, "0")}</span>
          {t.title}
        </a>
      ))}
    </nav>
  );
}

/** One troubleshooting topic: what it means, causes, checks, next step. */
export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return (
    <Reveal as="article" id={topic.id} className="soft-card scroll-mt-28 p-6 sm:p-8">
      <header className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink font-display text-sm font-extrabold text-aqua">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="pt-1.5 font-display text-xl font-extrabold sm:text-2xl">{topic.title}</h3>
      </header>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Block label="What it means">
          <p>{topic.means}</p>
        </Block>
        <Block label="Common possible causes">
          <Bullets items={topic.causes} />
        </Block>
        <Block label="What you can check">
          <Bullets items={topic.checks} />
        </Block>
        <Block label="What to do next">
          <p>{topic.next}</p>
        </Block>
      </div>
    </Reveal>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 leading-relaxed text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-primary/6 p-5 text-sm leading-relaxed text-foreground/80 ring-1 ring-primary/15 sm:p-6">
      <Info className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <strong className="block text-foreground">{title}</strong>
        <div className="mt-1.5 space-y-2">{children}</div>
      </div>
    </div>
  );
}

/** Simple term / explanation list used for glossaries and comparisons. */
export function DefinitionGrid({ items }: { items: { term: string; text: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((d, i) => (
        <Reveal key={d.term} delay={(i % 2) * 70} className="soft-card p-6">
          <h3 className="font-display text-lg font-bold">{d.term}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function RelatedLinks({ links }: { links: { to: string; label: string; hash?: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <Link
          key={l.label}
          to={l.to}
          hash={l.hash}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-primary"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
