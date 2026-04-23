import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">MyStackTools</div>
            <p className="footer-text">
              © 2026 MyStackTools. Professional tool insights for modern
              builders.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/posts" className="footer-link">
              Articles
            </Link>
            <Link href="/affiliate-disclosure" className="footer-link">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
