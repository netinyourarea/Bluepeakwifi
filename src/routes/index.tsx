import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  Equipment,
  Faq,
  FinalCta,
  Hero,
  OutageCheck,
  Steps,
  Support,
  Ticker,
  WhyUs,
} from "@/components/site/home-sections";

const title = "Bluepeak Wifi — Internet, Wi-Fi & Outage Help";
const description =
  "Independent help for internet that's down or slow, Wi-Fi dead zones, router setup and suspected outages. Plain-language, step-by-step support.";

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
      <Steps />
      <OutageCheck />
      <Equipment />
      <Support />
      <Faq />
      <FinalCta />
    </>
  );
}
