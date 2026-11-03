import type { Faq } from "@/lib/faqs";

export type Block =
  | { p: string }
  | { quick: string }
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type Section = { id: string; h2: string; blocks: Block[] };

export type Insight = {
  slug: string;
  /** Used as <title> before the brand suffix. */
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  category: string;
  excerpt: string;
  readMinutes: number;
  keywords: string[];
  /** Key into IMG */
  image: string;
  imageAlt: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  related: string[];
};

export const p = (text: string): Block => ({ p: text });
export const quick = (text: string): Block => ({ quick: text });
export const h3 = (text: string): Block => ({ h3: text });
export const ul = (...items: string[]): Block => ({ ul: items });
export const ol = (...items: string[]): Block => ({ ol: items });
export const table = (head: string[], ...rows: string[][]): Block => ({
  table: { head, rows },
});
