import type { Service, Therapist } from "@/lib/content";
import { CTAButton, TextLink } from "./ui";
import { TherapistPortrait } from "./therapist-portrait";

const audienceShapes = [
  {
    color: "#C8D1C2",
    path: "M92 -18 C137 -12 190 -5 228 19 C257 37 273 59 269 83 C265 108 239 126 211 137 C181 149 159 165 124 163 C93 161 67 147 55 125 C42 102 44 77 55 54 C67 30 75 2 92 -18 Z",
  },
  {
    color: "#E3C7BC",
    path: "M145 -16 C177 -12 220 2 250 27 C271 45 277 65 265 82 C250 104 221 111 198 126 C170 145 145 164 112 158 C82 153 61 133 59 107 C57 82 73 61 91 45 C111 27 119 1 145 -16 Z",
  },
  {
    color: "#BAC6B4",
    path: "M119 -17 C159 -15 209 -2 242 23 C267 42 276 65 265 88 C252 116 218 136 183 148 C151 159 116 158 95 140 C77 124 77 104 91 84 C103 67 106 54 97 39 C87 21 91 0 119 -17 Z",
  },
  {
    color: "#E7DCC8",
    path: "M151 -15 C189 -12 229 0 255 24 C276 43 282 65 270 85 C258 105 235 117 215 132 C191 151 171 169 137 167 C106 165 81 152 72 130 C63 109 69 89 85 70 C101 51 111 38 111 19 C112 1 127 -13 151 -15 Z",
  },
];

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
      <svg
        className="audience-shape"
        viewBox="0 0 260 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ color: audienceShapes[index].color }}
      >
        <path fill="currentColor" d={audienceShapes[index].path} />
      </svg>
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
