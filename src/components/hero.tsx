import Image from "next/image";
import therapyRoomHero from "../../public/images/therapy-room-hero.png";
import { CTAButton } from "./ui";

export function Hero() {
  return (
    <section className="hero site-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="location-dot" aria-hidden="true" />
          In-person in the Greater Austin Area · Online in Texas & Colorado
        </p>
        <h1 id="hero-title">
          Helping kids, teens, and families feel <em>more like themselves</em>{" "}
          again.
        </h1>
        <p className="hero-description">
          Thoughtful, evidence-based therapy for anxiety, depression, family
          conflict, life transitions, and the challenges that can make everyday
          life feel harder than it should.
        </p>
        <div className="button-group">
          <CTAButton href="/therapists">Find Your Therapist</CTAButton>
          <CTAButton href="/insurance-rates" variant="secondary">
            Insurance & Rates
          </CTAButton>
        </div>
        <p className="hero-footnote">
          For children. For teens. For you. For your family.
        </p>
      </div>
      <div className="hero-visual">
        <Image
          className="hero-artwork"
          src={therapyRoomHero}
          alt="Warm and welcoming Better Together Therapy office"
          sizes="(min-width: 768px) min(50vw, 740px), (min-width: 576px) 560px, calc(100vw - 16px)"
          preload
        />
      </div>
    </section>
  );
}
