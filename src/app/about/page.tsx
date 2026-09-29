import type { Metadata } from "next";
import { ClosingCTA } from "@/components/closing-cta";
import { TherapistPortrait } from "@/components/therapist-portrait";
import { CTAButton, PageIntro, SectionHeading } from "@/components/ui";
import { therapists, values } from "@/lib/content";

export const metadata: Metadata = { title: "About Our Practice" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Better Together"
        title="People first. Care, together."
        description="A growing group practice offering in-person therapy in Leander, TX and online therapy across Texas and Colorado. Children, teens, parents, and families are at its heart—with room for adults navigating their own next chapter."
      />
      <section className="section">
        <div className="site-container founder-grid">
          <TherapistPortrait therapist={therapists[0]} />
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
