import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow, CTAButton, SectionHeading } from "@/components/ui";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore joining the team at Better Together Therapy.",
};

const recruitmentEmail =
  "mailto:info@bettertogethertherapy.co?subject=Careers%20at%20Better%20Together";
const roleEmail =
  "mailto:info@bettertogethertherapy.co?subject=Therapist%20role%20inquiry";

function OutlineIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const values = [
  {
    title: "Care that connects",
    description: "Space for thoughtful work and meaningful relationships with the people we support.",
    icon: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-4-5.65" /></>,
  },
  {
    title: "Room to grow",
    description: "A place to share perspectives, keep learning, and develop your approach to care.",
    icon: <><path d="M12 21v-9M12 16C5 16 3 12 3 5c7 0 9 4 9 11ZM12 12c0-6 3-9 9-9 0 6-3 9-9 9Z" /></>,
  },
  {
    title: "Better, together",
    description: "A shared commitment to listening, collaboration, and supporting one another.",
    icon: <><path d="M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z" /></>,
  },
];

// Temporary recruitment copy and imagery; role details will be supplied later.
export default function CareersPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="careers-title">
        <div className={styles.splitCopy}>
          <div className={styles.copyInner}>
            <p className="eyebrow">Careers at Better Together</p>
            <h1 id="careers-title">A place to do meaningful work.</h1>
            <p className={styles.splitDescription}>
              Join a practice built around people, connection, and thoughtful care.
              Explore what working together could look like.
            </p>
            <CTAButton href="#open-positions" arrow>Explore Opportunities</CTAButton>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/images/careers/office-hero.webp" alt="Illustrative office seating beside a sunlit window and leafy plants" fill loading="eager" unoptimized />
        </div>
      </section>

      <section className={styles.spaciousSection} aria-labelledby="culture-title">
        <div className="site-container">
          <div className={styles.intro}>
            <SectionHeading eyebrow="Why Better Together" title="Good work starts with good company." id="culture-title" />
            <p>A thoughtful setting for your next chapter. Here’s a glimpse of the values that guide how we work together.</p>
          </div>
          <div className={styles.values}>
            {values.map((value) => (
              <article className={styles.value} key={value.title}>
                <span className={styles.valueIcon}><OutlineIcon>{value.icon}</OutlineIcon></span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.audienceSection} aria-labelledby="audience-title">
        <div className={`site-container ${styles.intro}`}>
          <SectionHeading eyebrow="Who we work with" title="People at every stage of life." id="audience-title" />
          <div>
            <p>Our work makes room for different experiences, relationships, and seasons of life.</p>
            <ul className={styles.chips} aria-label="People we support">
              {["Children", "Teens", "Adults", "Families"].map((audience) => <li key={audience}>{audience}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.spaciousSection} id="open-positions" aria-labelledby="positions-title">
        <div className="site-container">
          <div className={`${styles.intro} ${styles.positionsIntro}`}>
            <SectionHeading eyebrow="Open positions" title="Find your next chapter." id="positions-title" />
            <p>This sample listing shows where future opportunities will appear. Role details will be added here.</p>
          </div>
          <a className={styles.job} href={roleEmail} aria-label="Email us about the sample therapist role">
            <div className={styles.jobCopy}>
              <p className="eyebrow">Sample opportunity</p>
              <h3>Therapist</h3>
              <ul className={styles.metadata}>
                <li><OutlineIcon><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></OutlineIcon><span>Leander, Texas</span></li>
                <li><OutlineIcon><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M8 7V3h8v4M3 12h18M10 12v3h4v-3" /></OutlineIcon><span>Employment type to be confirmed</span></li>
                <li><OutlineIcon><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></OutlineIcon><span>Schedule to be confirmed</span></li>
              </ul>
              <p>Additional role information will go here, including the work, qualifications, and next steps.</p>
            </div>
            <div className={styles.jobImage}>
              <Image src="/images/careers/office-role.webp" alt="Illustrative office armchair with a sage cushion and a small plant" fill unoptimized />
            </div>
            <span className={styles.jobAction}><span>Ask about role</span><Arrow /></span>
          </a>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="recruitment-title">
        <div className={styles.closingImage}>
          <Image src="/images/careers/office-botanical.webp" alt="Illustrative leafy plant and soft daylight against a sage wall" fill unoptimized />
        </div>
        <div className={styles.splitCopy}>
          <div className={styles.copyInner}>
            <p className="eyebrow">Let’s work together</p>
            <h2 id="recruitment-title">Your next chapter could begin here.</h2>
            <p className={styles.splitDescription}>Interested in joining the practice? Start a conversation with us about future opportunities.</p>
            <CTAButton href={recruitmentEmail} arrow>Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
