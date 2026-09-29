import Link from "next/link";
import { navigation } from "@/lib/content";
import { Wordmark } from "./header";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Wordmark />
            <p>
              Thoughtful care.
              <br />
              For all the ways we grow.
            </p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {navigation.map(({ label, href }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-contact">
            <p className="eyebrow">Let’s connect</p>
            <p>Cedar Park, Texas</p>
            <p className="small-copy">
              Phone · To be added
              <br />
              Email · To be added
            </p>
            <p className="small-copy">Social links · Coming soon</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Better Together Therapy</p>
          <Link href="/privacy">Privacy Policy</Link>
          <p>Cedar Park, TX · In-person & online options</p>
        </div>
      </div>
    </footer>
  );
}
