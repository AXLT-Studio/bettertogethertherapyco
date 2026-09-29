import { insuranceNames } from "@/lib/content";
import { TextLink } from "./ui";

export function InsuranceStrip() {
  return (
    <section
      className="insurance-strip"
      aria-labelledby="insurance-strip-title"
    >
      <div className="site-container">
        <div className="insurance-strip-content">
          <h2 id="insurance-strip-title">
            Let’s talk
            <br className="desktop-break" /> about coverage.
          </h2>
          <ul
            className="insurance-names"
            aria-label="Example insurance carriers, not yet confirmed"
          >
            {insuranceNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <TextLink href="/insurance-rates#coverage">Check Coverage</TextLink>
        </div>
        <p className="insurance-note">
          Insurance names are placeholders. Participation and plan coverage to
          be confirmed.
        </p>
      </div>
    </section>
  );
}
