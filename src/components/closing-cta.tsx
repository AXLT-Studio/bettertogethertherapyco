import { practiceLinks } from "@/lib/content";
import { CTAButton } from "./ui";

export function ClosingCTA() {
  return (
    <section className="closing-cta section" aria-labelledby="closing-title">
      <div className="site-container closing-inner">
        <div>
          <p className="eyebrow">A next step, together</p>
          <h2 id="closing-title">
            You don’t have to figure out
            <br className="desktop-break" /> the next step alone.
          </h2>
          <p>
            Find a therapist who feels like the right fit for you or your
            family.
          </p>
        </div>
        <div className="button-group">
          <CTAButton href="/therapists" variant="secondary">
            Find Your Therapist
          </CTAButton>
          <CTAButton href={practiceLinks.consultation}>
            Book a Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
