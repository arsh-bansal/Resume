import Link from "next/link";

export default function NotFound() {
  return (
    <section className="band" style={{ borderTop: 0 }}>
      <div className="shell spine">
        <div className="rail">
          <b>404</b>
          <span>No route</span>
        </div>
        <div>
          <h1 className="band__title">This page doesn&apos;t exist.</h1>
          <p className="band__note">
            The link is either wrong or something moved. The work index is probably what you wanted.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--solid" href="/">
              Home
            </Link>
            <Link className="btn" href="/#work">
              Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
