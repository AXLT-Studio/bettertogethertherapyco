import type { Metadata } from "next";
import { PageIntro, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This page is reserved for Better Together Therapy’s privacy policy."
      />
      <section className="section">
        <div className="site-container content-block">
          <h2>Policy to be added.</h2>
          <p>
            The practice’s approved website privacy policy and any relevant
            notices will be published here.
          </p>
          <p className="placeholder-note">
            This placeholder is not a privacy policy or a notice of privacy
            practices.
          </p>
          <TextLink href="/contact">Contact details</TextLink>
        </div>
      </section>
    </>
  );
}
