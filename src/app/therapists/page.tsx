import type { Metadata } from "next";
import { TherapistCard } from "@/components/cards";
import { ClosingCTA } from "@/components/closing-cta";
import { RecruitmentCTA } from "@/components/recruitment-cta";
import { PageIntro, TextLink } from "@/components/ui";
import { practiceLinks, therapists } from "@/lib/content";

export const metadata: Metadata = { title: "Meet the Therapists" };

export default function TherapistsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our people"
        title="Find someone you can talk to."
        description="The relationship matters. Get to know our therapists, explore their perspectives, and find your next step."
      >
{/*         <TextLink href={practiceLinks.consultation}>
          Need help finding a fit?
        </TextLink> */}
      </PageIntro>
      <section className="section" aria-label="Our therapists">
        <div className="site-container">
          <div className="therapist-grid">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.slug} therapist={therapist} />
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA variant="split" />
      <RecruitmentCTA />
    </>
  );
}
