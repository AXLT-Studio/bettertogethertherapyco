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
            <div className="footer-contact-groups">
              <div className="footer-contact-group">
                <p className="footer-contact-label">In person</p>
                <address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1640%20Highland%20Falls%2C%20Suite%20802%2C%20Leander%2C%20TX%2078641"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View our location on Google Maps"
                  >
                    1640 Highland Falls, Suite 802
                    <br />
                    Leander, TX 78641
                  </a>
                </address>
              </div>
              <div className="footer-contact-group">
                <p className="footer-contact-label">Online</p>
                <p className="footer-contact-detail">Texas &amp; Colorado</p>
              </div>
              <div className="footer-contact-group">
                <p className="footer-contact-label">Contact</p>
                <div className="footer-contact-links">
                  <a href="tel:+15125980312">(512) 598-0312</a>
                  <a href="mailto:info@bettertogethertherapy.co">
                    info@bettertogethertherapy.co
                  </a>
                </div>
              </div>
            </div>
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
