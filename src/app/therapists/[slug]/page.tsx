import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButton, TextLink } from "@/components/ui";
import { TherapistPortrait } from "@/components/therapist-portrait";
import { practiceLinks, therapists } from "@/lib/content";

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
    description: therapist.metaDescription,
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
        <TherapistPortrait therapist={therapist} preload />
        <div className="profile-copy">
          <TextLink href="/therapists">All Therapists</TextLink>
          <p className="eyebrow">{therapist.role} · Better Together Therapy</p>
          <h1>
            {therapist.name}
            {therapist.credentials && (
              <span className="credentials">, {therapist.credentials}</span>
            )}
          </h1>
          <p className="profile-role">{therapist.professionalTitle}</p>
          <div className="profile-prose">
            {therapist.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section className="profile-prose" aria-labelledby="approach-title">
            <h2 id="approach-title">Approach & areas of focus</h2>
            <p>
              <strong>{therapist.approach.summary}</strong>
            </p>
            <p>{therapist.approach.introduction}</p>
            <ul className="profile-list">
              {therapist.approach.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p>{therapist.approach.description}</p>
          </section>
          <section className="profile-prose" aria-labelledby="background-title">
            <h2 id="background-title">Background</h2>
            {therapist.background.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          {therapist.therapeuticApproach && (
            <section className="profile-prose" aria-labelledby="methods-title">
              <h2 id="methods-title">Therapeutic approach</h2>
              <p>{therapist.therapeuticApproach.introduction}</p>
              <p>Her work may incorporate:</p>
              <ul className="profile-list">
                {therapist.therapeuticApproach.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
              <p>{therapist.therapeuticApproach.conclusion}</p>
            </section>
          )}
          <section className="profile-prose" aria-labelledby="working-title">
            <h2 id="working-title">Working together</h2>
            {therapist.workingTogether.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          {therapist.sessionLocations && (
            <dl className="profile-locations">
              <div>
                <dt>In-person:</dt>
                <dd>{therapist.sessionLocations.inPerson}</dd>
              </div>
              <div>
                <dt>Online:</dt>
                <dd>{therapist.sessionLocations.online}</dd>
              </div>
            </dl>
          )}
          <div className="button-group">
            <CTAButton href={practiceLinks.consultation}>
              Book a Consultation
            </CTAButton>
            <TextLink href="/insurance-rates">Insurance & Rates</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
