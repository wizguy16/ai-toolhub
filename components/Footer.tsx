import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">ToolReviews</div>
            <p className="footer-text">
              © 2026 ToolReviews. Professional tool insights for modern
              builders.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <Link href="#" className="footer-link">
              About Us
            </Link>
            <Link href="#" className="footer-link">
              Reviews
            </Link>
            <Link href="#" className="footer-link">
              Newsletter
            </Link>
            <Link href="#" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-link">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
