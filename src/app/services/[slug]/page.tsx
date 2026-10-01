import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCTA } from "@/components/closing-cta";
import { ServiceTopicAccordion } from "@/components/service-topic-accordion";
import { CTAButton, PageIntro, TextLink } from "@/components/ui";
import { services } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return { title: service.title, description: service.description };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro
        eyebrow="How we can help"
        title={service.title}
        description={service.description}
      >
        <TextLink href="/services">All Services</TextLink>
      </PageIntro>
      <section className="section">
        <div className="site-container content-grid">
          <div className="content-block">
            <h2>A place to begin.</h2>
            <p>{service.introduction}</p>
            <ServiceTopicAccordion items={service.topics} />
            <p className="placeholder-note">
              More about our approach, session options, and therapists who offer
              this service will be added here.
            </p>
          </div>
          <aside className="info-panel">
            <p className="eyebrow">Your next step</p>
            <h2>Let’s find your fit.</h2>
            <p>
              Get to know the team or explore the practical details before a
              first conversation.
            </p>
            <div className="button-group">
              <CTAButton href="/therapists">Find Your Therapist</CTAButton>
              <TextLink href="/insurance-rates">Insurance & Rates</TextLink>
            </div>
          </aside>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
