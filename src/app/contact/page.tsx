import type { Metadata } from "next";
import {
  CTAButton,
  PageIntro,
  SectionHeading,
  TextLink,
} from "@/components/ui";

export const metadata: Metadata = { title: "Contact & Consultations" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Let’s connect"
        title="Start with a conversation."
        description="You don’t have to know exactly what you need yet. A first conversation can help you explore the next step for yourself or your family."
      />
      <section className="section" id="consultation">
        <div className="site-container content-grid">
          <div>
            <SectionHeading
              eyebrow="Book a consultation"
              title="Here’s where we’ll begin."
            />
            <ol className="steps">
              <li>
                <div>
                  <h3>Tell us what you’re looking for.</h3>
                  <p>
                    A little about who needs support and what’s bringing you
                    here.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Explore the right fit.</h3>
                  <p>
                    Talk about therapist options, session formats, and any
                    questions you have.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Make a plan for the next step.</h3>
                  <p>
                    Confirm availability, costs, and what to expect before an
                    appointment.
                  </p>
                </div>
              </li>
            </ol>
            <CTAButton href="/therapists" variant="secondary">
              Get to Know the Team
            </CTAButton>
          </div>
          <aside className="info-panel">
            <p className="eyebrow">Consultation booking</p>
            <h2>Scheduling details coming soon.</h2>
            <p>
              Online booking is not available in this initial website outline.
              Confirmed phone, email, and consultation scheduling details will
              appear here.
            </p>
            <p className="placeholder-note">
              No appointment requests are being collected through this page.
            </p>
            <TextLink href="/faq">Read the FAQs</TextLink>
          </aside>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="Our location"
            title="Rooted in Cedar Park."
            description="Cedar Park, Texas. In-person and online options will be confirmed by therapist."
          />
          <dl className="contact-details">
            <div>
              <dt>Office</dt>
              <dd>Cedar Park, Texas · Street address to be added</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>To be added</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>To be added</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Appointment hours to be confirmed</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
