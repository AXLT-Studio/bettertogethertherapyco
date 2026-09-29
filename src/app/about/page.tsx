import type { Metadata } from "next";
import { ClosingCTA } from "@/components/closing-cta";
import {
  CTAButton,
  ImagePlaceholder,
  PageIntro,
  SectionHeading,
} from "@/components/ui";
import { therapists, values } from "@/lib/content";

export const metadata: Metadata = { title: "About Our Practice" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Better Together"
        title="People first. Care, together."
        description="A growing group practice in Cedar Park, Texas, with children, teens, parents, and families at its heart—and room for adults navigating their own next chapter."
      />
      <section className="section">
        <div className="site-container founder-grid">
          <ImagePlaceholder label="Samantha Serbin portrait" initials="SS" />
          <div className="content-block">
            <SectionHeading
              eyebrow="Where we began"
              title="An understanding of life beyond the therapy room."
            />
            <p>{therapists[0].biography}</p>
            <p>
              As the practice grows, our focus stays personal: understanding the
              person, the relationships, and the everyday experiences behind
              each conversation.
            </p>
            <div className="founder-signature">
              <h3>Samantha Serbin, LPC</h3>
              <p>Founder, Better Together Therapy</p>
            </div>
            <div className="button-group">
              <CTAButton href="/therapists/samantha-serbin" variant="secondary">
                Meet Samantha
              </CTAButton>
              <CTAButton href="/therapists">Meet the Team</CTAButton>
            </div>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="What guides us"
            title="Care with intention."
          />
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
