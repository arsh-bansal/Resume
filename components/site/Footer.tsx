import Link from "next/link";
import { colophon, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__col">
            <strong>Elsewhere</strong>
            <a href={site.github} rel="me noopener noreferrer" target="_blank">
              GitHub
            </a>
            <br />
            <a href={site.linkedin} rel="me noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            <br />
            <a href={`mailto:${site.email}`}>Email</a>
          </div>

          <div className="footer__col">
            <strong>Pages</strong>
            <Link href="/#work">Work</Link>
            <br />
            <Link href="/writing">Writing</Link>
            <br />
            <Link href="/#about">About</Link>
          </div>

          <div className="footer__col">
            <strong>Set in</strong>
            {colophon.typefaces}
          </div>

          <div className="footer__col">
            <strong>Built with</strong>
            {colophon.stack}
            <br />
            Updated {colophon.updated}
          </div>
        </div>

        <div className="footer__base">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            {site.base} · {site.coords}
          </p>
        </div>
      </div>
    </footer>
  );
}
