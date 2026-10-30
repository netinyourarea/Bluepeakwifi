import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/page-shell";

const title = "Privacy Policy | Bluepeak Wifi";
const description =
  "How Bluepeak Wifi collects, uses and protects personal information submitted through help requests and the contact form.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead({ title, description, path: "/privacy-policy", breadcrumb: [{ name: "Privacy Policy", path: "/privacy-policy" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your information, handled carefully"
        intro="What we collect when you request help with your internet or Wi-Fi, and exactly what happens to it afterwards."
      />
      <Prose>
        <h2>Information we collect</h2>
        <p>
          We collect the details you provide directly: name, contact information, ZIP code, and a
          description of the problem you need help with. We also collect
          basic analytics such as pages visited and approximate region.
        </p>
        <h2>How we use it</h2>
        <ul>
          <li>To understand your problem and respond with troubleshooting help.</li>
          <li>To follow up on a request you have asked us to handle.</li>
          <li>To provide support for your internet and Wi-Fi setup.</li>
          <li>To improve the accuracy of our guides.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          Details are shared with a third party only when you instruct us to, for example to pass
          on notes about your issue. We do not sell personal information.
        </p>
        <h2>Retention and your rights</h2>
        <p>
          Request records are retained for up to 24 months. You may ask us to access, correct or
          delete your information at any time by contacting us.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and privacy-respecting analytics to
          understand usage. You can disable non-essential cookies in your browser.
        </p>
      </Prose>
    </>
  );
}