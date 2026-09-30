import type { Metadata } from "next";
import {
  CTAButton,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { insuranceNames, practiceLinks } from "@/lib/content";

export const metadata: Metadata = { title: "Insurance & Rates" };

export default function InsurancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Insurance & rates"
        title="Clarity before you begin."
        description="Understanding costs is part of finding care that fits. This is where you’ll find coverage information, session fees, and questions to ask before booking."
      />
      <section className="section" id="coverage">
        <div className="site-container content-grid">
          <div className="content-block">
            <SectionHeading
              eyebrow="Insurance"
              title="Let’s start with your coverage."
            />
            <p>
              Carrier names below are examples for this website outline. They do
              not indicate confirmed participation. Accepted plans,
              participating therapists, and coverage details will be added once
              verified.
            </p>
            <ul className="detail-list">
              {insuranceNames.map((name) => (
                <li key={name}>
                  {name}
                  <span className="small-copy"> · To be confirmed</span>
                </li>
              ))}
            </ul>
            <TextLink href={practiceLinks.consultation}>
              Ask About Coverage
            </TextLink>
          </div>
          <aside className="info-panel">
            <p className="eyebrow">Before your appointment</p>
            <h2>Details to confirm</h2>
            <ul className="detail-list">
              <li>Whether your therapist participates in your specific plan</li>
              <li>Any copay, deductible, or other out-of-pocket cost</li>
              <li>Coverage for your appointment type and session format</li>
            </ul>
            <p className="small-copy">
              These details need to be confirmed for your individual plan.
            </p>
          </aside>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="Session fees"
            title="Know what to expect."
            description="Fees, session lengths, and payment policies will be published here once confirmed."
          />
          <div>
            <dl className="rate-list">
              <div>
                <dt>Individual therapy</dt>
                <dd>Rate to be confirmed</dd>
              </div>
              <div>
                <dt>Child & adolescent therapy</dt>
                <dd>Rate to be confirmed</dd>
              </div>
              <div>
                <dt>Family therapy</dt>
                <dd>Rate to be confirmed</dd>
              </div>
              <div>
                <dt>Consultation</dt>
                <dd>Details to be confirmed</dd>
              </div>
            </dl>
            <div className="button-group">
              <CTAButton href={practiceLinks.consultation}>
                Discuss Your Options
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
