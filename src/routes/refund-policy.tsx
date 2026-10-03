import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Refund Policy | Bluepeak Wifi";
const description =
  "How refunds and cancellations work for assistance services provided by Bluepeak Wifi.";

export const Route = createFileRoute("/refund-policy")({
  head: () => pageHead({ title, description, path: "/refund-policy", breadcrumb: [{ name: "Refund Policy", path: "/refund-policy" }] }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Refund Policy"
        title="Cancellations and refunds"
        intro="Coverage checks and connection guidance are free. Where a paid assistance fee applies, these terms govern refunds."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Free services</h2>
        <p>
          Coverage checks, option comparisons and standard connection request assistance are
          provided at no cost, so no refund is applicable.
        </p>
        <h2>Paid assistance fees</h2>
        <p>
          If an optional paid setup or advisory fee has been agreed in writing, it may be refunded
          in full within 7 days of payment provided the work has not yet been performed.
        </p>
        <h2>Provider charges</h2>
        <p>
          Installation charges, equipment costs and subscription fees are billed by the provider
          you select. Refunds for those amounts are governed solely by that provider's policy and
          must be requested from them directly.
        </p>
        <h2>Cancellations</h2>
        <p>
          You may cancel a request or any agreed assistance service at any time before the work
          begins by calling us at (877) 579-4692. Cancelling a request to a provider after it has
          been submitted is subject to that provider's own terms.
        </p>
        <h2>Exchanges</h2>
        <p>
          We do not sell physical goods, so exchanges do not apply. Equipment supplied by a
          provider is exchanged or returned under that provider's warranty and return policy.
        </p>
        <h2>How to request a refund</h2>
        <p>
          Call us at (877) 579-4692 with your request reference. Approved refunds are issued to the
          original payment method within 5–10 business days.
        </p>
        <h2>Business information</h2>
        <p>
          Bluepeak Wifi, 5908 Cecil Dr, Ozawkie, KS 66070, United States. Phone: (877) 579-4692.
          Website: bluepeakwifi.com.
        </p>
      </Prose>
    </>
  );
}