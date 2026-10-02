import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow, CTAButton, SectionHeading } from "@/components/ui";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore joining the team at Better Together Therapy.",
};

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
    title: "Clinical autonomy",
    description: "Have flexibility in your schedule and clinical approach, with room to make thoughtful decisions based on the needs of each client.",
    icon: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-4-5.65" /></>,
  },
  {
    title: "Real collaboration",
    description: "Work independently while knowing support and collaboration are available when you need them.",
    icon: <><path d="M12 21v-9M12 16C5 16 3 12 3 5c7 0 9 4 9 11ZM12 12c0-6 3-9 9-9 0 6-3 9-9 9Z" /></>,
  },
  {
    title: "A practice you can help shape",
    description: "Join a growing practice where your perspective matters and meaningful relationships come before volume.",
    icon: <><path d="M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z" /></>,
  },
];

export default function CareersPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="careers-title">
        <div className={styles.splitCopy}>
          <div className={styles.copyInner}>
            <p className="eyebrow">CAREERS AT BETTER TOGETHER</p>
            <h1 id="careers-title">Do meaningful work, together.</h1>
            <p className={styles.splitDescription}>
              Better Together Therapy is a growing group practice built around
              thoughtful care, genuine connection, and collaboration—for our
              clients and for the clinicians who support them.
            </p>
            <CTAButton href="#open-positions">View Open Positions <span aria-hidden="true">↓</span></CTAButton>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/images/careers/office-hero.webp" alt="Illustrative office seating beside a sunlit window and leafy plants" fill loading="eager" unoptimized />
        </div>
      </section>

      <section className={styles.spaciousSection} aria-labelledby="culture-title">
        <div className="site-container">
          <div className={styles.intro}>
            <SectionHeading eyebrow="WHY BETTER TOGETHER" title="A supportive space to do your best work." id="culture-title" />
            <p>We’re intentional about the kind of practice we’re building. Care here isn’t high-volume or one-size-fits-all. We value clinicians who think thoughtfully, stay grounded in evidence-based care, and adapt treatment to the person in front of them.</p>
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
          <SectionHeading eyebrow="WHO WE WORK WITH" title="A diverse and meaningful caseload." id="audience-title" />
          <div>
            <p>Caseloads can be shaped around your strengths, interests, and areas of expertise, with opportunities to work across different ages and family needs.</p>
            <ul className={styles.chips} aria-label="People we support">
              {["Children", "Teens", "Adults", "Families"].map((audience) => <li key={audience}>{audience}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.spaciousSection} id="open-positions" aria-labelledby="positions-title">
        <div className="site-container">
          <div className={`${styles.intro} ${styles.positionsIntro}`}>
            <SectionHeading eyebrow="OPEN POSITIONS" title="Current opportunities." id="positions-title" />
            <p>We’re looking for thoughtful clinicians who value connection, clinical independence, and being part of a practice that is still growing with intention.</p>
          </div>
          <a className={styles.job} href="/careers/licensed-therapist" aria-label="View Licensed Therapist role details">
            <div className={styles.jobCopy}>
              <p className="eyebrow">LICENSED THERAPIST</p>
              <h3>Licensed Therapist</h3>
              <p className="small-copy">LPC · LMFT · LMSW</p>
              <ul className={styles.metadata}>
                <li><OutlineIcon><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></OutlineIcon><span>Leander, TX · Greater Austin Area</span></li>
                <li><OutlineIcon><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M8 7V3h8v4M3 12h18M10 12v3h4v-3" /></OutlineIcon><span>1099 Contractor</span></li>
                <li><OutlineIcon><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></OutlineIcon><span>Part-time or Full-time</span></li>
              </ul>
              <p>Join a growing private practice serving children, teens, adults, and families, with flexibility to build a caseload around your clinical strengths and interests.</p>
            </div>
            <div className={styles.jobImage}>
              <Image src="/images/careers/office-role.webp" alt="Illustrative office armchair with a sage cushion and a small plant" fill unoptimized />
            </div>
            <span className={styles.jobAction}><span>View role</span><Arrow /></span>
          </a>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="recruitment-title">
        <div className={styles.closingImage}>
          <Image src="/images/careers/office-botanical.webp" alt="Illustrative leafy plant and soft daylight against a sage wall" fill unoptimized />
        </div>
        <div className={styles.splitCopy}>
          <div className={styles.copyInner}>
            <p className="eyebrow">GROW WITH US</p>
            <h2 id="recruitment-title">Let’s do meaningful work, together.</h2>
            <p className={styles.splitDescription}>We’re building Better Together with intention. We’re interested in clinicians who care about real relationships, thoughtful clinical work, and being part of shaping the practice they belong to.</p>
            <p className={styles.splitDescription}>Even if the right role isn’t listed today, we’re always glad to connect with thoughtful, values-aligned clinicians.</p>
            <CTAButton href="/contact" arrow>Get in Touch About Future Opportunities</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
