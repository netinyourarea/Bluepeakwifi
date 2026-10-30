import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Disclaimer | Bluepeak Wifi";
const description =
  "Bluepeak Wifi is an independent third-party service offering help with internet, Wi-Fi and connection troubleshooting.";

export const Route = createFileRoute("/disclaimer")({
  head: () => pageHead({ title, description, path: "/disclaimer", breadcrumb: [{ name: "Disclaimer", path: "/disclaimer" }] }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Independent third-party service"
        intro="Important information about our relationship with internet service providers and telecommunications companies."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>No affiliation</h2>
        <p>
          Any provider names, trademarks or logos referenced on this website are used for
          identification purposes only and remain the property of their respective owners. Their
          use does not imply any partnership, endorsement or agency relationship.
        </p>
        <h2>Information accuracy</h2>
        <p>
          Troubleshooting steps and outage guidance are general and may not apply to every router,
          modem or provider. Always follow your equipment maker's and provider's instructions.
        </p>
        <h2>No service guarantee</h2>
        <p>
          We do not operate any network, cannot see your provider's network status and cannot
          repair provider outages. We do not guarantee that any step will resolve a given problem;
          service availability, performance and restoration are determined by your provider.
        </p>
      </Prose>
    </>
  );
}