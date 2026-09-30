import Link from "next/link";
import {
  getPracticeLinkAttributes,
  navigation,
  practiceLinks,
} from "@/lib/content";
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
              <Link
                key={href}
                href={href}
                {...getPracticeLinkAttributes(href)}
                className={
                  href === practiceLinks.clientPortal
                    ? "button button--secondary client-portal-link"
                    : undefined
                }
              >
                {label}
                {href === practiceLinks.clientPortal}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-contact">
            <p className="eyebrow">Let’s connect</p>
            <p>Greater Austin Area</p>
            <div className="footer-office">
              <p className="small-copy">In-person office</p>
              <address>
                1640 Highland Falls, Suite 802
                <br />
                Leander, TX 78641
              </address>
            </div>
            <p className="small-copy">Online in Texas & Colorado</p>
            <p className="small-copy">
              Phone · <a href="tel:+15125980312">(512) 598-0312</a>
              <br />
              Email ·{" "}
              <a href="mailto:info@bettertogethertherapy.co">
                info@bettertogethertherapy.co
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Better Together Therapy</p>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
