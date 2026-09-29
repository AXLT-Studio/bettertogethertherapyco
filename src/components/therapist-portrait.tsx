import Image from "next/image";
import type { Therapist } from "@/lib/content";
import { ImagePlaceholder } from "./ui";

export function TherapistPortrait({
  therapist,
  sizes = "(min-width: 1440px) 520px, (min-width: 900px) 40vw, 90vw",
  preload = false,
}: {
  therapist: Therapist;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div className="therapist-portrait">
      {therapist.portrait ? (
        <Image
          src={therapist.portrait.src}
          alt={`Portrait of ${therapist.name}`}
          fill
          sizes={sizes}
          preload={preload}
          style={{ objectPosition: therapist.portrait.position }}
        />
      ) : (
        <ImagePlaceholder
          label={`${therapist.name} portrait`}
          initials={therapist.initials}
        />
      )}
    </div>
  );
}
