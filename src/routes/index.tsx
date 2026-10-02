import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bundle,
  CoverageMap,
  Equipment,
  Faq,
  FinalCta,
  Hero,
  InternetPlans,
  Steps,
  Support,
  Testimonials,
  Ticker,
  TvPackages,
  WhyUs,
} from "@/components/site/home-sections";

const title = "Bluepeak Wifi — Fiber Internet & Cable TV Plans";
const description =
  "Compare fiber internet speeds and cable TV channel packs available at your address, then let a specialist handle the order and installation.";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title, description, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhyUs />
      <InternetPlans />
      <Steps />
      <TvPackages />
      <Bundle />
      <Equipment />
      <CoverageMap />
      <Support />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
