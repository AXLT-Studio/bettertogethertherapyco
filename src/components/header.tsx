"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/content";

export function Wordmark() {
  return (
    <Link
      className="wordmark"
      href="/"
      aria-label="Better Together Therapy home"
    >
      <span>better together</span>
      <span className="wordmark-subtitle">Therapy</span>
    </Link>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return navigation.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      onClick={onNavigate}
      aria-current={pathname === href ? "page" : undefined}
      data-active={
        pathname === href || pathname.startsWith(`${href}/`) || undefined
      }
    >
      {label}
    </Link>
  ));
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function dismissOutside(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1100px)");
    function dismissOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismissOutside);
    desktop.addEventListener("change", dismissOnDesktop);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismissOutside);
      desktop.removeEventListener("change", dismissOnDesktop);
    };
  }, [open]);

  return (
    <div
      className="mobile-nav"
      ref={navRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <span className="menu-close" aria-hidden="true">
            ×
          </span>
        ) : (
          <span className="menu-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        )}
      </button>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <NavLinks onNavigate={() => setOpen(false)} />
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <p>
          In-person in Leander, TX
          <br />
          Online in Texas & Colorado
        </p>
      </nav>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Wordmark />
        <nav className="desktop-navigation" aria-label="Main navigation">
          <NavLinks />
        </nav>
        <Link className="header-cta" href="/contact#consultation">
          Book a Consultation<span aria-hidden="true">↗</span>
        </Link>
        <MobileNav key={pathname} />
      </div>
    </header>
  );
}
