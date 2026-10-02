import Image from "next/image";
import { CTAButton, TextLink } from "./ui";
import careersStyles from "@/app/careers/careers.module.css";
import styles from "./recruitment-cta.module.css";

export function RecruitmentCTA() {
  return (
    <section className={`${careersStyles.closing} ${styles.closing}`} aria-labelledby="apply-title">
      <div className={careersStyles.closingImage}>
        <Image src="/images/careers/office-botanical.webp" alt="Leafy plant in a ceramic pot with soft daylight across a sage wall" fill unoptimized />
      </div>
      <div className={`${careersStyles.splitCopy} ${styles.closingCopy}`}>
        <div className={careersStyles.copyInner}>
          <p className="eyebrow">INTERESTED?</p>
          <h2 id="apply-title">Think we might be a good fit?</h2>
          <p className={careersStyles.splitDescription}>If this role sounds aligned with the way you want to practice, we’d love to hear from you.</p>
          <div className={styles.applyActions}>
            <CTAButton href="/contact" arrow>Apply for this role</CTAButton>
            <TextLink href="/careers">View all careers</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
