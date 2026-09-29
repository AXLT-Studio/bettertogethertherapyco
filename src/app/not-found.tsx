import { CTAButton, PageIntro } from "@/components/ui";

export default function NotFound() {
  return (
    <PageIntro
      eyebrow="Page not found"
      title="Let’s find your way back."
      description="This page isn’t here, but your next step might be."
    >
      <div className="button-group">
        <CTAButton href="/">Back to Home</CTAButton>
        <CTAButton href="/therapists" variant="secondary">
          Meet the Therapists
        </CTAButton>
      </div>
    </PageIntro>
  );
}
