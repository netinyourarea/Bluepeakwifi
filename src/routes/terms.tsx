import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Terms & Conditions | Bluepeak Wifi";
const description =
  "The terms governing use of Bluepeak Wifi's independent internet, Wi-Fi and outage help service.";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ title, description, path: "/terms", breadcrumb: [{ name: "Terms & Conditions", path: "/terms" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms of using our service"
        intro="Please read these terms carefully before using our tools or requesting help."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Nature of the service</h2>
        <p>
          We provide guidance and troubleshooting assistance for internet, Wi-Fi and suspected
          outages. We do not own, operate or control any network, and we do not deliver internet or
          television service or restore provider outages ourselves.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          Troubleshooting advice is general and offered in good faith. Speeds, service status,
          pricing and repair timelines are set by your provider and may change without notice.
        </p>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate contact details and a clear description of the problem.</li>
          <li>Back up important data and follow equipment instructions when changing settings.</li>
          <li>Use the site lawfully and without attempting to disrupt it.</li>
        </ul>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for provider delays, service
          interruptions, outages, equipment faults or any indirect losses arising from third-party
          service delivery or from following general troubleshooting advice.
        </p>
        <h2>Changes</h2>
        <p>These terms may be updated periodically; continued use constitutes acceptance.</p>
      </Prose>
    </>
  );
}