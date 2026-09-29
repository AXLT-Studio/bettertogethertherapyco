import { AudienceCard, ServiceCard, TherapistCard } from "@/components/cards";
import { ClosingCTA } from "@/components/closing-cta";
import { FAQAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { InsuranceStrip } from "@/components/insurance-strip";
import { TherapistPortrait } from "@/components/therapist-portrait";
import { CTAButton, SectionHeading, TextLink } from "@/components/ui";
import {
  audiences,
  faqs,
  recognitionStatements,
  services,
  therapists,
  values,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <InsuranceStrip />
      <section
        className="section recognition-section"
        aria-labelledby="recognition-title"
      >
        <div className="site-container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="You might be here because…"
              title={
                <>
                  Some things have
                  <br />
                  felt harder lately.
                </>
              }
              id="recognition-title"
            />
            <p className="section-aside">
              You don’t need a diagnosis, a perfect explanation, or all the
              answers to start a conversation.
            </p>
          </div>
          <div className="recognition-grid">
            {recognitionStatements.map((statement, index) => (
              <article className="recognition-card" key={statement}>
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{statement}</h3>
              </article>
            ))}
          </div>
          <p className="section-footnote">
            Whatever brought you here, we can begin there.
          </p>
        </div>
      </section>
      <section
        className="section audience-section"
        aria-labelledby="audience-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="Who we help"
            title="For every stage of growing."
            description="Different ages. Different experiences. Care that meets you where you are."
            id="audience-title"
          />
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <AudienceCard
                key={audience.id}
                audience={audience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="services-title">
        <div className="site-container split-section">
          <div>
            <SectionHeading
              eyebrow="How we can help"
              title="Support for what’s on your mind."
              description="A place to understand what’s happening and explore a way forward, together."
              id="services-title"
            />
            <TextLink href="/services">Explore All Services</TextLink>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="section founder-section"
        aria-labelledby="founder-title"
      >
        <div className="site-container founder-grid">
          <TherapistPortrait therapist={therapists[0]} />
          <div className="founder-copy">
            <SectionHeading
              eyebrow="The story behind Better Together"
              title="Built on an understanding of real life."
              id="founder-title"
            />
            <p>
              Before becoming a therapist, Samantha worked in education, where
              she saw firsthand how emotional health, family dynamics, school
              pressure, and everyday life can intersect.
            </p>
            <p>
              That perspective is part of the foundation of Better Together
              Therapy: a growing practice with children, teens, and families at
              its heart.
            </p>
            <div className="founder-signature">
              <h3>Samantha Serbin, LPC</h3>
              <p>Founder, Better Together Therapy</p>
            </div>
            <div className="button-group">
              <CTAButton href="/therapists/samantha-serbin" variant="secondary">
                Meet Samantha
              </CTAButton>
              <TextLink href="/therapists">Meet the Team</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="team-title">
        <div className="site-container">
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Meet the therapists"
              title="Good care starts with connection."
              description="Get to know the people behind Better Together. Find an approach that feels right for you."
              id="team-title"
            />
            <TextLink href="/therapists">Meet the Team</TextLink>
          </div>
          <div className="therapist-grid">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.slug} therapist={therapist} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="section values-section"
        aria-labelledby="values-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Better Together"
            title="Thoughtful in the ways that matter."
            id="values-title"
          />
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value.title}>
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="faq-title">
        <div className="site-container split-section">
          <div>
            <SectionHeading
              eyebrow="A little clarity"
              title="Questions are a good place to start."
              description="A few things you might be wondering before reaching out."
              id="faq-title"
            />
            <TextLink href="/faq">View All FAQs</TextLink>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
