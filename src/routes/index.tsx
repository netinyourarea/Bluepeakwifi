import { pageHead } from "@/lib/seo";
import { HOME_FAQS } from "@/lib/faqs";
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

const title = "Internet Down or Wi-Fi Slow? Troubleshooting Help | Bluepeak Wifi";
const description =
  "Internet not working or Wi-Fi slow? Independent troubleshooting guidance for connection drops, dead zones, router problems and suspected outages, with clear next steps.";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title, description, path: "/", faqs: HOME_FAQS }),
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
