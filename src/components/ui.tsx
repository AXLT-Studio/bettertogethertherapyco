import Link from "next/link";
import type { ReactNode } from "react";
import { getPracticeLinkAttributes } from "@/lib/content";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
}) {
  const linkAttributes = getPracticeLinkAttributes(href);
  return (
    <Link
      href={href}
      className={`button button--${variant}`}
      {...linkAttributes}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  label,
  arrow,
}: {
  href: string;
  children: ReactNode;
  label?: string;
  arrow?: boolean;
}) {
  const linkAttributes = getPracticeLinkAttributes(href);
  return (
    <Link
      className="text-link"
      href={href}
      aria-label={label}
      {...linkAttributes}
    >
      <span className="text-link-label">{children}</span>
      {arrow !== false && <Arrow />}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro section">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {children}
      </div>
    </section>
  );
}

export function ImagePlaceholder({
  label,
  initials,
  variant = "portrait",
}: {
  label: string;
  initials?: string;
  variant?: "portrait" | "hero";
}) {
  return (
    <div
      className={`image-placeholder image-placeholder--${variant}`}
      role="img"
      aria-label={`${label} — image placeholder`}
    >
      <span className="placeholder-corner" aria-hidden="true">
        {variant === "hero"
          ? "Better together, from the beginning."
          : "Better Together Therapy"}
      </span>
      <span className="placeholder-center" aria-hidden="true">
        {initials || (
          <>
            A place
            <br />
            to begin.
          </>
        )}
      </span>
      <span className="placeholder-label" aria-hidden="true">
        {label}
        <span>Image placeholder</span>
      </span>
    </div>
  );
}
