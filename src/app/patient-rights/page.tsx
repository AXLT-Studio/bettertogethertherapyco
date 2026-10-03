import type { Metadata } from "next";
import { Arrow, TextLink } from "@/components/ui";
import styles from "./patient-rights.module.css";

export const metadata: Metadata = {
  title: "Patient Rights",
  description:
    "Information about accessing your health care records and contacting Texas regulatory agencies.",
};

const bhecContactUrl = "https://bhec.texas.gov/tbhec/contact-us/";
const consumerComplaintUrl =
  "https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint";

export default function PatientRightsPage() {
  return (
    <div className={`site-container ${styles.page}`}>
      <header className={styles.introduction}>
        <p className="eyebrow">PATIENT RESOURCES</p>
        <h1>Patient Rights</h1>
        <p className={styles.subtitle}>Texas Regulatory Notice</p>
        <p className={styles.introCopy}>
          Information about accessing your health care records and contacting Texas regulatory agencies.
        </p>
      </header>

      <div className={styles.contentGrid}>
        <aside className={styles.sidebar}>
          <nav aria-labelledby="patient-navigation-title">
            <h2 id="patient-navigation-title" className={`eyebrow ${styles.navigationTitle}`}>ON THIS PAGE</h2>
            <ul className={styles.navigation}>
              <li><a href="#health-care-records">Health care records</a></li>
              <li><a href="#texas-bhec">Texas BHEC</a></li>
              <li><a href="#consumer-complaints">Consumer complaints</a></li>
            </ul>
          </nav>
          <div className={styles.help}>
            <h3>Need help?</h3>
            <p>Your clinician can guide you through the records request process.</p>
            <TextLink href="/contact">Contact us</TextLink>
          </div>
        </aside>

        <div className={styles.sections}>
          <section id="health-care-records" className={styles.resourceSection} aria-labelledby="records-title">
            <span className={styles.number} aria-hidden="true">01</span>
            <div className={styles.sectionCopy}>
              <h2 id="records-title">Request your health care records</h2>
              <p>Submit a written request to your clinician by email or mail. If you need help, your clinician can guide you through the process. Records are provided in accordance with Texas law and professional standards.</p>
              <p className={styles.supportingLine}>Written requests · Email or mail</p>
            </div>
          </section>

          <section id="texas-bhec" className={styles.resourceSection} aria-labelledby="bhec-title">
            <span className={styles.number} aria-hidden="true">02</span>
            <div className={styles.sectionCopy}>
              <h2 id="bhec-title">Contact the Texas BHEC</h2>
              <p>For questions, concerns, or general information about licensed mental health professionals, contact the Texas Behavioral Health Executive Council.</p>
              <a href={bhecContactUrl} className="button button--secondary" target="_blank" rel="noopener noreferrer" aria-label="Visit BHEC contact page (opens in a new tab)">
                Visit BHEC contact page <Arrow diagonal />
              </a>
            </div>
          </section>

          <section id="consumer-complaints" className={styles.resourceSection} aria-labelledby="complaints-title">
            <span className={styles.number} aria-hidden="true">03</span>
            <div className={styles.sectionCopy}>
              <h2 id="complaints-title">File a consumer complaint</h2>
              <p>You may file a consumer complaint with the Texas Office of the Attorney General’s Consumer Protection Division.</p>
              <a href={consumerComplaintUrl} className="button button--secondary" target="_blank" rel="noopener noreferrer" aria-label="File a consumer complaint (opens in a new tab)">
                File a consumer complaint <Arrow diagonal />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
