import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButton, ImagePlaceholder, TextLink } from "@/components/ui";
import { therapists } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return therapists.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/therapists/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const therapist = therapists.find((person) => person.slug === slug);
  if (!therapist) notFound();
  return {
    title: `${therapist.name}${therapist.credentials ? `, ${therapist.credentials}` : ""}`,
  };
}

export default async function TherapistProfile({
  params,
}: PageProps<"/therapists/[slug]">) {
  const { slug } = await params;
  const therapist = therapists.find((person) => person.slug === slug);
  if (!therapist) notFound();

  return (
    <section className="section">
      <div className="site-container profile-grid">
        <ImagePlaceholder
          label={`${therapist.name} portrait`}
          initials={therapist.initials}
        />
        <div className="profile-copy">
          <TextLink href="/therapists">All Therapists</TextLink>
          <p className="eyebrow">{therapist.role} · Better Together Therapy</p>
          <h1>
            {therapist.name}
            {therapist.credentials && (
              <span className="credentials">, {therapist.credentials}</span>
            )}
          </h1>
          <p className="profile-role">
            {therapist.credentials
              ? "Licensed Professional Counselor"
              : "Credentials to be confirmed"}
          </p>
          <p>{therapist.biography}</p>
          <h2>Approach & areas of focus</h2>
          <p>{therapist.specialty}</p>
          <p className="placeholder-note">{therapist.note}</p>
          <h2>Working together</h2>
          <p>
            Explore whether this feels like the right fit for you or your
            family. Session formats, fees, and next steps will be confirmed
            before scheduling.
          </p>
          <div className="button-group">
            <CTAButton href="/contact#consultation">
              Book a Consultation
            </CTAButton>
            <TextLink href="/insurance-rates">Insurance & Rates</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
