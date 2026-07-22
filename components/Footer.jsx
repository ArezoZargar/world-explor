import Link from "next/link";
import { Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-box">
            <Globe size={35} />
          </div>

          <div>
            <h2>World Explorer</h2>
            <p>
              Explore countries, cultures and discover the beauty of our world.
            </p>
          </div>
        </div>

        <nav className="footer-links">
          <Link href="/">Home</Link>

          <Link href="/countries">Countries</Link>

          <Link href="/search">Search</Link>

          <Link href="/about">About</Link>
        </nav>

        <a
          href="https://github.com/ArezoZargar"
          target="_blank"
          className="github-btn"
        >
          View on GitHub
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 World Explorer</p>

        <p>Made with ❤️ by Arezo Zargar</p>
      </div>
    </footer>
  );
}
