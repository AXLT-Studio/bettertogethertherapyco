import { mapLinkAttributes, officeLocation } from "@/lib/location";
import { Arrow, SectionHeading } from "./ui";
import { InteractiveOfficeMap } from "./interactive-office-map";

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
          <InteractiveOfficeMap />
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
