import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/cards";
import { ClosingCTA } from "@/components/closing-cta";
import { PageIntro, SectionHeading } from "@/components/ui";
import { audiences, services } from "@/lib/content";

export const metadata: Metadata = { title: "Therapy Services" };

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Therapy services"
        title="Support for your everyday life."
        description="For the things you can name, and the things you’re still making sense of. Explore care for children, teens, adults, and families."
      />
      <section className="section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="What brings you here?"
            title="There’s room to talk about it."
            description="Start with what feels most relevant. You don’t need to choose a category before you reach out."
          />
          <div className="service-list services-index-list">
            {services.map((service, index) => (
              <ServiceCard
                service={service}
                index={index}
                key={service.slug}
                variant="editorial"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section audience-section">
        <div className="site-container split-section">
          <SectionHeading
            eyebrow="Who we help"
            title="Care for your stage of life."
            description="The right starting point looks different for everyone."
          />
          <div className="services-index-list">
            {audiences.map((audience, index) => (
              <article
                className="service-index-item"
                id={audience.id}
                key={audience.id}
              >
                <Link
                  className="service-index-row"
                  href={`/services/${audience.serviceSlug}`}
                  aria-label={`Explore support for ${audience.title.toLowerCase()}`}
                >
                  <span className="service-index-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="service-index-copy">
                    <h3>{audience.title}</h3>
                    <p>{audience.detail}</p>
                  </span>
                  <span className="service-index-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
