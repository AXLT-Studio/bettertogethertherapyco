import type { Metadata } from "next";
import {
  CTAButton,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import {
  insuranceNames,
  pendingInsuranceNames,
  practiceLinks,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Insurance & Rates",
  description:
    "Explore insurance options, private-pay rates, and appointment policies for Better Together Therapy in the Greater Austin Area and online across Texas and Colorado.",
};

export default function InsurancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Insurance & rates"
        title="Clarity before you begin."
        description="Understanding the financial side of therapy is part of finding care that fits. Explore insurance options, private-pay rates, and important details to know before scheduling."
      />
      <section className="section" id="coverage">
        <div className="site-container content-grid">
          <div className="content-block">
            <SectionHeading
              eyebrow="Insurance"
              title="Let’s start with your coverage."
            />
            <p>
              Better Together Therapy works with several major insurance plans
              through Headway and Alma, which help manage eligibility, billing,
              and insurance paperwork. Coverage can vary by therapist, state,
              and individual plan, so we recommend confirming your benefits
              before your first appointment.
            </p>
            <ul className="detail-list insurance-plan-list">
              {insuranceNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <div className="pending-plans">
              <p className="eyebrow">Pending plans</p>
              <ul className="detail-list">
                {pendingInsuranceNames.map((name) => (
                  <li key={name}>
                    <span>{name}</span>
                    <span className="small-copy">
                      Credentialing / availability to be confirmed
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="small-copy coverage-note">
              Insurance participation may vary by therapist, location, and plan.
              Please confirm your coverage before scheduling.
            </p>
            <TextLink href={practiceLinks.consultation}>
              Ask About Coverage
            </TextLink>
          </div>
          <aside className="info-panel">
            <p className="eyebrow">Before your appointment</p>
            <h2>Details to confirm</h2>
            <ul className="detail-list">
              <li>Whether your therapist participates in your specific plan</li>
              <li>Your copay, deductible, or coinsurance</li>
              <li>
                Whether your deductible must be met before coverage begins
              </li>
              <li>Coverage for your appointment type</li>
              <li>
                Whether telehealth and in-person sessions are covered
                differently
              </li>
            </ul>
            <p className="small-copy">
              Benefits and eligibility are determined by your insurance plan and
              should be confirmed before your first appointment.
            </p>
          </aside>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="Private pay"
            title="Know what to expect."
            description="Prefer not to use insurance? Private pay offers greater flexibility and keeps decisions about your care between you and your therapist."
          />
          <div>
            <dl className="rate-list">
              <div>
                <dt>Initial Intake &amp; Individual Therapy</dt>
                <dd>$150 / 53 minutes</dd>
              </div>
              <div>
                <dt>Family &amp; Couples Therapy</dt>
                <dd>$175 / 53 minutes</dd>
              </div>
              <div>
                <dt>Complimentary Consultation</dt>
                <dd>15 minutes</dd>
              </div>
            </dl>
            <div className="private-pay-benefits">
              <h3>Why some clients choose private pay</h3>
              <ul className="detail-list">
                <li>Greater flexibility in choosing a therapist</li>
                <li>Care is not limited by insurance session authorization</li>
                <li>
                  Insurance billing requirements do not determine the course of
                  treatment
                </li>
                <li>No insurance claim is submitted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container content-grid">
          <SectionHeading
            eyebrow="Appointment policy"
            title="When plans change."
          />
          <div className="content-block">
            <p>
              We understand that life happens. If you need to change an
              appointment, please provide at least 24 hours&apos; notice
              whenever possible.
            </p>
            <p>
              Missed appointments and cancellations made with less than 24
              hours&apos; notice may be subject to a late cancellation / no-show
              fee.
            </p>
            <p>
              Better Together Therapy currently allows one late cancellation /
              no-show fee to be waived during a six-month period.
            </p>
          </div>
        </div>
      </section>
      <section
        className="closing-cta section"
        aria-labelledby="insurance-cta-title"
      >
        <div className="site-container closing-inner">
          <div>
            <p className="eyebrow">A clear next step</p>
            <h2 id="insurance-cta-title">Questions before you begin?</h2>
            <p>
              Not sure about coverage, cost, or which therapist may be the right
              fit? Start with a complimentary 15-minute consultation.
            </p>
          </div>
          <div className="button-group">
            <CTAButton href={practiceLinks.consultation} arrow={false}>
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
