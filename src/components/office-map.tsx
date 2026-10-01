import { mapLinkAttributes, officeLocation } from "@/lib/location";
import { Arrow, SectionHeading } from "./ui";

export function OfficeMap() {
  return (
    <section className="section office-map-section" aria-label="Office location map">
      <div className="site-container">
        <SectionHeading
          eyebrow="Find us here"
          title="Our Location"
          description="We’re located in Leander, just outside of Austin."
        />
        <figure className="office-map-figure">
          <div className="office-map">
            <div
              className="office-map-streets"
              role="img"
              aria-label={`Map centered on ${officeLocation.address}`}
            />
            <a
              className="office-map-marker"
              href={officeLocation.directionsUrl}
              aria-label={`Get directions to ${officeLocation.address}`}
              {...mapLinkAttributes}
            >
              <svg viewBox="0 0 24 32" aria-hidden="true">
                <path d="M12 1C5.9 1 1 5.9 1 12c0 8 11 19 11 19s11-11 11-19C23 5.9 18.1 1 12 1Z" fill="currentColor" />
                <circle cx="12" cy="12" r="4" fill="var(--background)" />
              </svg>
            </a>
            <a
              className="office-map-attribution"
              href="https://www.openstreetmap.org/copyright"
              {...mapLinkAttributes}
            >
              © OpenStreetMap contributors
            </a>
          </div>
          <figcaption className="office-map-caption">
            <p className="eyebrow">In person</p>
            <address>
              1640 Highland Falls, Suite 802
              <br />
              Leander, TX 78641
            </address>
            <a
              className="button button--primary"
              href={officeLocation.directionsUrl}
              aria-label={`Get directions to ${officeLocation.address}`}
              {...mapLinkAttributes}
            >
              <span>Get Directions</span>
              <Arrow />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
