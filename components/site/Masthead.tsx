import Link from "next/link";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Masthead() {
  return (
    <header className="masthead">
      <div className="shell">
        <div className="masthead__in">
          <Link href="/" className="wordmark" aria-label={`${site.name} — home`}>
            {site.name}
            <em>{site.base.split(",")[0]}</em>
          </Link>

          <nav className="navset" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="navlink">
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
