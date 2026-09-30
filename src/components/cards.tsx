import type { Service, Therapist } from "@/lib/content";
import { CTAButton, TextLink } from "./ui";
import { TherapistPortrait } from "./therapist-portrait";

export function AudienceCard({
  audience,
  index,
}: {
  audience: { id: string; title: string; description: string };
  index: number;
}) {
  return (
    <article className="audience-card">
      <span className="card-index" aria-hidden="true">
        0{index + 1}
      </span>
      <h3>{audience.title}</h3>
      <p>{audience.description}</p>
      <TextLink
        href={`/services#${audience.id}`}
        label={`Learn more about therapy for ${audience.title.toLowerCase()}`}
        arrow={false}
      >
        Learn more
      </TextLink>
    </article>
  );
}

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article className="service-card">
      <span className="card-index" aria-hidden="true">
        0{index + 1}
      </span>
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <TextLink
        href={`/services/${service.slug}`}
        label={`Explore ${service.title.toLowerCase()}`}
      >
        <span className="service-link-label">Explore</span>
      </TextLink>
    </article>
  );
}

export function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <article className="therapist-card">
      <TherapistPortrait
        therapist={therapist}
        sizes="(min-width: 1440px) 616px, (min-width: 600px) 45vw, 90vw"
      />
      <div className="therapist-card-content">
        <p className="eyebrow">{therapist.role}</p>
        <h3>
          {therapist.name}
          {therapist.credentials && (
            <span className="credentials">, {therapist.credentials}</span>
          )}
        </h3>
        <p className="small-copy">{therapist.professionalTitle}</p>
        <p>{therapist.specialty}</p>
        <CTAButton href={`/therapists/${therapist.slug}`} variant="secondary">
          <span>
            View Profile<span className="sr-only">: {therapist.name}</span>
          </span>
        </CTAButton>
      </div>
    </article>
  );
}
