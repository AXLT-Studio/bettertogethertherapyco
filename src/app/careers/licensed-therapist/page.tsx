import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { CTAButton } from "@/components/ui";
import careersStyles from "../careers.module.css";
import styles from "./position.module.css";

export const metadata: Metadata = {
  title: "Licensed Therapist | Careers",
  description:
    "Join Better Together Therapy as a Licensed Therapist in Leander, TX · Greater Austin Area. LPC, LMFT, or LMSW; 1099 contractor, part-time or full-time.",
};

const applicationDestination = "/contact";

function ApplyButton() {
  return <CTAButton href={applicationDestination} arrow>Apply for this role</CTAButton>;
}

type IconKind = "location" | "employment" | "schedule" | "availability" | "clients" | "hours" | "weekends";

function MetadataIcon({ kind }: { kind: IconKind }) {
  const paths: Record<IconKind, ReactNode> = {
    location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    employment: <><rect x="3" y="7" width="18" height="14" rx="1" /><path d="M8 7V3h8v4M3 12h18M10 12v3h4v-3" /></>,
    schedule: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    availability: <><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4M17 3v4M3 10h18M7 14h2M13 14h2M7 18h2" /></>,
    clients: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-4-5.65" /></>,
    hours: <><path d="M3 19h18M5 15a7 7 0 0 1 14 0M12 3v2M4 7l2 2M20 7l-2 2M2 14h2M20 14h2" /></>,
    weekends: <><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4M17 3v4M3 10h18M15 14h2M15 18h2" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

const glanceDetails: { label: string; value: ReactNode; icon: IconKind }[] = [
  { label: "Location", value: "Leander, TX · Greater Austin Area", icon: "location" },
  { label: "Employment", value: "1099 Contractor", icon: "employment" },
  { label: "Schedule", value: "Part-time or Full-time", icon: "schedule" },
  { label: "Preferred Availability", value: "3–4 days per week", icon: "availability" },
  { label: "Client Population", value: "Children, teens, adults, families", icon: "clients" },
  { label: "Client Hours", value: "Afternoons / early evenings preferred", icon: "hours" },
  { label: "Weekends", value: <>Not required<br />Optional if desired</>, icon: "weekends" },
];

const responsibilities = [
  "Provide individual and/or family therapy",
  "Build strong, trusting therapeutic relationships",
  "Develop individualized treatment plans based on each client’s needs",
  "Maintain timely and accurate EHR documentation",
  "Collaborate with the team when helpful while maintaining clinical independence",
  "Participate in practice growth or community outreach if interested",
];
const requirements = [
  "Active Texas license (LPC, LMFT, or LMSW)",
  "Master’s degree in Counseling, Psychology, or a related field",
  "Strong organizational skills and follow-through with documentation",
  "Commitment to ethical, evidence-based, client-centered care",
];
const preferences = [
  "Experience working with children and adolescents",
  "Interest in family systems work",
  "Comfort working across children, teens, adults, and families",
  "Appreciation for clinical autonomy and collaborative care",
  "Interest in growing with a thoughtful, evolving group practice",
];
const schedule = [
  "Part-time or full-time positions considered",
  "Preference for 3–4 days per week",
  "Afternoon and early evening availability preferred",
  "No weekend requirement; weekends are optional if desired",
];

function ContentList({ items }: { items: string[] }) {
  return <ul className={styles.list}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function LicensedTherapistPage() {
  return (
    <>
      <section className={`${careersStyles.hero} ${styles.hero}`} aria-labelledby="position-title">
        <div className={`${careersStyles.splitCopy} ${styles.heroCopy}`}>
          <div className={careersStyles.copyInner}>
            <p className="eyebrow">OPEN POSITION</p>
            <h1 id="position-title">Licensed Therapist</h1>
            <p className={styles.credentials}>LPC · LMFT · LMSW</p>
            <ul className={styles.heroMetadata} aria-label="Position details">
              {glanceDetails.slice(0, 3).map((detail) => (
                <li key={detail.label}><MetadataIcon kind={detail.icon} /><span>{detail.value}</span></li>
              ))}
            </ul>
            <p className={styles.summary}>Join a growing private practice serving children, teens, adults, and families, with flexibility to build a caseload around your clinical strengths and interests.</p>
            <ApplyButton />
          </div>
        </div>
        <div className={careersStyles.heroImage}>
          <Image src="/images/careers/office-role.webp" alt="Office armchair with a sage cushion beside a plant in natural light" fill loading="eager" unoptimized />
        </div>
      </section>

      <div className={styles.body}>
        <div className={`site-container ${styles.bodyGrid}`}>
          <aside className={styles.glance} aria-labelledby="glance-title">
            <h2 id="glance-title" className="eyebrow">AT A GLANCE</h2>
            <dl className={styles.glanceDetails}>
              {glanceDetails.map((detail) => (
                <div className={styles.glanceRow} key={detail.label}>
                  <MetadataIcon kind={detail.icon} />
                  <div><dt>{detail.label}</dt><dd>{detail.value}</dd></div>
                </div>
              ))}
            </dl>
            <ApplyButton />
          </aside>

          <article className={styles.article} aria-label="Licensed Therapist role description">
            <section className={styles.articleSection} aria-labelledby="about-role-title">
              <h2 id="about-role-title">About the Role</h2>
              <p>At Better Together Therapy, we believe in thoughtful, individualized care and genuine human connection. We’re building a practice where clinicians are supported, respected, and given the space to do their best work—without the pressure of high-volume care or a one-size-fits-all approach.</p>
              <p>As a therapist on our team, you’ll have the opportunity to build a caseload around your clinical strengths and interests, work with a diverse range of clients, and contribute to a growing practice that values both clinical independence and meaningful collaboration.</p>
            </section>
            <section className={styles.articleSection} aria-labelledby="responsibilities-title">
              <h2 id="responsibilities-title">What You’ll Do</h2>
              <ContentList items={responsibilities} />
            </section>
            <section className={styles.articleSection} aria-labelledby="requirements-title">
              <h2 id="requirements-title">Who We’re Looking For</h2>
              <ContentList items={requirements} />
            </section>
            <section className={styles.articleSection} aria-labelledby="preferences-title">
              <h2 id="preferences-title">Especially Valued</h2>
              <p>The following experience and interests are not required, but would be especially welcome:</p>
              <ContentList items={preferences} />
            </section>
            <section className={styles.articleSection} aria-labelledby="schedule-title">
              <h2 id="schedule-title">Schedule &amp; Caseload</h2>
              <p>We offer flexibility in both scheduling and caseload development, with opportunities to shape your work around your strengths, interests, and preferred client populations.</p>
              <ContentList items={schedule} />
            </section>
            <section className={styles.articleSection} aria-labelledby="compensation-title">
              <h2 id="compensation-title">Compensation</h2>
              <p className={styles.compensationLine}>Competitive 1099 contractor rate</p>
              <p>Compensation is discussed during the interview process and is based on experience, availability, and caseload fit.</p>
            </section>
          </article>
        </div>
      </div>

      <section className={styles.culture} aria-labelledby="role-culture-title">
        <div className={`site-container ${styles.cultureGrid}`}>
          <div>
            <p className="eyebrow">WHY BETTER TOGETHER</p>
            <h2 id="role-culture-title">Room to do meaningful work.</h2>
          </div>
          <div className={styles.cultureCopy}>
            <p>We’re intentional about creating a practice where clinicians have room to work thoughtfully and grow in a way that feels sustainable.</p>
            <ul className={styles.benefits}>
              <li>Clinical autonomy</li>
              <li>Flexible scheduling</li>
              <li>Office space</li>
              <li>EHR support</li>
              <li>Collaborative environment</li>
            </ul>
            <p>We value authenticity, clinical thoughtfulness, and connection over hierarchy or volume.</p>
            <ApplyButton />
          </div>
        </div>
      </section>
    </>
  );
}
