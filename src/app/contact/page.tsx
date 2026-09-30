import type { Metadata } from "next";
import { practiceLinks } from "@/lib/content";
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
            <h2>Request a consultation.</h2>
            <p>
              Use our Sessions Health request form to tell us what you’re
              looking for and take the next step.
            </p>
            <div className="button-group">
              <CTAButton href={practiceLinks.consultation}>
                Book a Consultation
              </CTAButton>
              <TextLink href="/faq">Read the FAQs</TextLink>
            </div>
          </aside>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="Our location"
            title="Rooted in the Greater Austin Area. Connected across two states."
            description="In-person therapy in the Greater Austin Area, and online therapy for clients throughout Texas and Colorado."
          />
          <dl className="contact-details">
            <div>
              <dt>Office</dt>
              <dd>Greater Austin Area · Street address to be added</dd>
            </div>
            <div>
              <dt>Online therapy</dt>
              <dd>Available in Texas and Colorado</dd>
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
