import { CTAButton } from "./ui";
import styles from "./recruitment-cta.module.css";

export function RecruitmentCTA() {
  return (
    <section className={styles.closing} aria-labelledby="apply-title">
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">JOIN OUR TEAM</p>
          <h2 id="apply-title">Interested in joining our team?</h2>
          <p className={styles.description}>We’re always interested in connecting with thoughtful, compassionate clinicians who value meaningful relationships, clinical autonomy, and collaborative care.</p>
        </div>
        <div className={styles.applyActions}>
          <CTAButton href="/careers" variant="secondary" arrow>Explore Careers</CTAButton>
        </div>
      </div>
    </section>
  );
}
