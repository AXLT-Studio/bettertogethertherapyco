import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { ClosingCTA } from "@/components/closing-cta";
import { PageIntro, SectionHeading, TextLink } from "@/components/ui";
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
          <div className="service-list">
            {services.map((service, index) => (
              <ServiceCard service={service} index={index} key={service.slug} />
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
          <div>
            {audiences.map((audience) => (
              <article
                className="audience-detail"
                id={audience.id}
                key={audience.id}
              >
                <h3>{audience.title}</h3>
                <p>{audience.detail}</p>
                <TextLink
                  href={`/services/${audience.serviceSlug}`}
                  label={`Explore support for ${audience.title.toLowerCase()}`}
                >
                  Explore support
                </TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
