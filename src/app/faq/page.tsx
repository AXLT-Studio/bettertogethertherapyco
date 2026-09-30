import type { Metadata } from "next";
import { ClosingCTA } from "@/components/closing-cta";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageIntro, SectionHeading, TextLink } from "@/components/ui";
import { faqs, practiceLinks } from "@/lib/content";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="A little more clarity."
        description="Starting therapy can come with a lot of questions. Here’s a place to begin. Practice-specific details will be updated as they are confirmed."
      />
      <section className="section">
        <div className="site-container split-section">
          <div>
            <SectionHeading
              eyebrow="Before we meet"
              title="What would you like to know?"
            />
            <TextLink href="/contact">Get in Touch</TextLink>
          </div>
          <FAQAccordion
            items={[
              ...faqs,
              {
                question: "How are parents involved in therapy?",
                answer:
                  "Parent involvement will be discussed with your child’s therapist. Details about communication, parent sessions, and the intake process will be added here.",
              },
              {
                question: "How do I book a consultation?",
                answer:
                  "Use our Sessions Health request form to request a consultation. If you’re already a client, use the Client Portal link in the navigation or footer to sign in.",
                href: practiceLinks.consultation,
                linkLabel: "Request a consultation",
              },
            ]}
          />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
