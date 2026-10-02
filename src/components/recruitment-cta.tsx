import { CTAButton, TextLink } from "./ui";
import styles from "./recruitment-cta.module.css";

export function RecruitmentCTA() {
  return (
    <section className={styles.closing} aria-labelledby="apply-title">
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">INTERESTED?</p>
          <h2 id="apply-title">Think we might be a good fit?</h2>
          <p className={styles.description}>If this role sounds aligned with the way you want to practice, we’d love to hear from you.</p>
        </div>
        <div className={styles.applyActions}>
          <CTAButton href="/contact" arrow>Apply for this role</CTAButton>
          <TextLink href="/careers">View all careers</TextLink>
        </div>
      </div>
    </section>
  );
}
