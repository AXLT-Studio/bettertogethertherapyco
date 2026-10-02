import type { Metadata } from "next";
import { ClosingCTA } from "@/components/closing-cta";
import { TherapistPortrait } from "@/components/therapist-portrait";
import { Arrow, CTAButton, PageIntro, SectionHeading } from "@/components/ui";
import { samanthaSerbin, values } from "@/lib/content";
import styles from "./story.module.css";

export const metadata: Metadata = { title: "About Our Practice" };

const storyItems = [
  {
    title: "Rooted in education",
    body: (
      <>
        As a former teacher, Samantha experienced firsthand the need for{" "}
        <strong>mental health support within schools</strong> and for young
        people moving into adulthood.
      </>
    ),
    icon: "book",
  },
  {
    title: "Training & transition",
    body: (
      <>
        Raised in Arizona, she studied{" "}
        <strong>Secondary Education at Arizona State University</strong> before
        later earning a{" "}
        <strong>
          master’s in Clinical Psychology from Pepperdine University
        </strong>
        , with an emphasis in Marriage and Family Therapy.
      </>
    ),
    icon: "graduation",
  },
  {
    title: "Community-centered care",
    body: (
      <>
        Now based in the Greater Austin area, Samantha is{" "}
        <strong>licensed in Texas and Colorado</strong> and continues to support
        underserved communities through her volunteer work with{" "}
        <a
          className={styles.storyLink}
          href="https://cacaustin.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Capital Area Counseling
        </a>
        .
      </>
    ),
    icon: "community",
  },
] as const;

function StoryIcon({ icon }: { icon: (typeof storyItems)[number]["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icon === "book" && (
        <>
          <path d="M12 6C9 4 6 4 3 5v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Z" />
          <path d="M12 6v14" />
        </>
      )}
      {icon === "graduation" && (
        <>
          <path d="m2 9 10-5 10 5-10 5-10-5Z" />
          <path d="M6 11v5c3 3 9 3 12 0v-5M22 9v7" />
        </>
      )}
      {icon === "community" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-4-5.65" />
        </>
      )}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Better Together"
        title="People first. Care, together."
        description="A growing group practice offering in-person therapy in the Greater Austin Area and online therapy across Texas and Colorado. Children, teens, parents, and families are at its heart—with room for adults navigating their own next chapter."
      />
      <section className="section">
        <div className="site-container founder-grid">
          <TherapistPortrait therapist={samanthaSerbin} loading="eager" />
          <div className="content-block">
            <SectionHeading
              eyebrow="Where we began"
              title="An understanding of life beyond the therapy room."
            />
            <p>{samanthaSerbin.biography[0]}</p>
            <p>{samanthaSerbin.biography[1]}</p>
            <p>
              As the practice grows, our focus stays personal: understanding the
              person, the relationships, and the everyday experiences behind
              each conversation.
            </p>
            <div className="founder-signature">
              <h3>
                {samanthaSerbin.name}, {samanthaSerbin.credentials}
              </h3>
              <p>{samanthaSerbin.role}, Better Together Therapy</p>
            </div>
            <div className="button-group">
              <CTAButton
                href={`/therapists/${samanthaSerbin.slug}`}
                variant="secondary"
              >
                Meet Samantha
              </CTAButton>
              <CTAButton href="/therapists">Meet the Team</CTAButton>
            </div>
            <a
              className={`text-link ${styles.psychologyLink}`}
              href="https://www.psychologytoday.com/us/therapists/samantha-serbin-cedar-park-tx/1211636"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-link-label">
                View Samantha on Psychology Today
              </span>
              <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section
        className={`section ${styles.story}`}
        aria-labelledby="story-title"
      >
        <div className={`site-container ${styles.container}`}>
          <div className={styles.header}>
            <SectionHeading
              eyebrow="More of the Story"
              title="The path that shaped this practice."
              id="story-title"
            />
          </div>
          <div className={styles.grid}>
            {storyItems.map((item) => (
              <article className={styles.item} key={item.title}>
                <span className={styles.icon} aria-hidden="true">
                  <StoryIcon icon={item.icon} />
                </span>
                <div className={styles.copy}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <blockquote className={styles.quote}>
            <p>
              After years of teaching, starting a family, and moving to Austin,
              the shift into counseling became a natural extension of the work
              she felt called to do.
            </p>
          </blockquote>
        </div>
      </section>
      <section className="section values-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="What guides us"
            title="Care with intention."
          />
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
