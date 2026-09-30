import type { Metadata } from "next";
import { ClosingCTA } from "@/components/closing-cta";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageIntro, SectionHeading, TextLink } from "@/components/ui";
import { faqPageItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about insurance, therapy costs, in-person and online sessions, appointments, and finding a therapist at Better Together Therapy.",
};

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="A little more clarity."
        description="Starting therapy can come with a lot of questions. Find practical information about costs, appointments, locations, and what to expect."
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
          <FAQAccordion items={faqPageItems} />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
