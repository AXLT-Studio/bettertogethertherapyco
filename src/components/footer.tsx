import Link from "next/link";
import { mapLinkAttributes, officeLocation } from "@/lib/location";
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
            <div className="footer-navigation-links">
              {navigation
                .filter(({ href }) => href !== practiceLinks.clientPortal)
                .map(({ label, href }) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              <Link href="/contact">Contact</Link>
              <Link href="/careers">Careers</Link>
              <Link
                href={practiceLinks.clientPortal}
                {...getPracticeLinkAttributes(practiceLinks.clientPortal)}
                className="button button--secondary client-portal-link"
              >
                Client Portal
              </Link>
            </div>
          </nav>
          <div className="footer-contact">
            <p className="eyebrow">Let’s connect</p>
            <div className="footer-contact-groups">
              <div className="footer-contact-group">
                <p className="footer-contact-label">In person</p>
                <address>
                  <a
                    href={officeLocation.mapUrl}
                    {...mapLinkAttributes}
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
          <div className="footer-policy-links">
            {/* <Link href="/privacy">Privacy Policy</Link> */}
            <Link href="/patient-rights">Patient Rights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
