import Link from "next/link";
import { site } from "@/data/site";
import { featuredProjects, archiveProjects } from "@/data/projects";
import { experience, education, stack, certifications } from "@/data/experience";
import { listedPosts, formatPostDate } from "@/data/posts";
import { RegionPlot } from "@/components/site/RegionPlot";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="hero">
        <div className="shell">
          <div className="hero__grid">
            <div className="reveal">
              <p className="eyebrow">{site.availability}</p>

              <h1 className="hero__title" style={{ marginTop: "1.1rem" }}>
                I build the
                <br />
                infrastructure
                <br />
                <span className="soft">underneath.</span>
              </h1>

              <p className="hero__lede">
                Final-year software engineering student at <strong>Monash</strong>, working mostly on{" "}
                <strong>multi-cloud platforms</strong> — serverless pipelines, Terraform, Kubernetes,
                and the occasional vision model that has to run on all of it.
              </p>

              <div className="hero__actions">
                <a className="btn btn--solid" href={`mailto:${site.email}`}>
                  Get in touch
                </a>
                <a className="btn" href={site.resumeHref}>
                  Résumé (PDF)
                </a>
                <a
                  className="btn btn--ghost"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <RegionPlot />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- work */}
      <section className="band" id="work">
        <div className="shell spine">
          <div className="rail">
            <b>Work</b>
            <span>Selected</span>
            <span>2024—26</span>
          </div>

          <div>
            <h2 className="band__title">Things I&apos;ve shipped</h2>
            <p className="band__note">
              In rough order of how much I learned. Each one links to a longer write-up with the
              architecture and the parts that went wrong.
            </p>

            <div className="rows" style={{ marginTop: "34px" }}>
              {featuredProjects.map((p) => (
                <article className="row" key={p.slug}>
                  <div>
                    <div className="row__head">
                      <h3 className="row__title">
                        <Link href={`/work/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <span className="row__role">{p.role}</span>
                    </div>
                    <p className="row__desc">{p.summary}</p>
                    <div className="row__stack">
                      {p.stack.slice(0, 6).map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="row__meta">
                    <span>{p.year}</span>
                    <svg
                      className="row__arrow"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 9.5 9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </article>
              ))}
            </div>

            {archiveProjects.length > 0 && (
              <div style={{ marginTop: "26px" }}>
                <p className="eyebrow" style={{ marginBottom: "8px", color: "var(--fg-faint)" }}>
                  Also
                </p>
                <div className="rows">
                  {archiveProjects.map((p) => (
                    <article className="row" key={p.slug}>
                      <div>
                        <div className="row__head">
                          <h3 className="row__title" style={{ fontSize: "1.125rem" }}>
                            <Link href={`/work/${p.slug}`}>{p.title}</Link>
                          </h3>
                          <span className="row__role">{p.role}</span>
                        </div>
                        <p className="row__desc">{p.summary}</p>
                      </div>
                      <div className="row__meta">
                        <span>{p.year}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- experience */}
      <section className="band" id="experience">
        <div className="shell spine">
          <div className="rail">
            <b>Roles</b>
            <span>Paid + team</span>
          </div>

          <div>
            <h2 className="band__title">Where I&apos;ve worked</h2>

            <div style={{ marginTop: "30px" }}>
              {experience.map((s) => (
                <article className="stint" key={`${s.org}-${s.when}`}>
                  <div className="stint__when">
                    {s.when}
                    <br />
                    {s.where}
                  </div>
                  <div>
                    <h3 className="stint__role">
                      {s.role} <span className="stint__org">· {s.org}</span>
                    </h3>
                    <ul className="stint__points">
                      {s.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- stack */}
      <section className="band" id="stack">
        <div className="shell spine">
          <div className="rail">
            <b>Stack</b>
            <span>No % bars</span>
          </div>

          <div>
            <h2 className="band__title">What I reach for</h2>
            <p className="band__note">
              Grouped by what I&apos;d be comfortable being handed on day one, not scored out of a
              hundred.
            </p>

            <div className="stackgrid" style={{ marginTop: "30px" }}>
              {stack.map((g) => (
                <div className="stackgroup" key={g.group}>
                  <h3>{g.group}</h3>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- writing */}
      {listedPosts.length > 0 && (
        <section className="band" id="writing">
          <div className="shell spine">
            <div className="rail">
              <b>Writing</b>
              <span>Notes</span>
            </div>

            <div>
              <h2 className="band__title">Notes from the build</h2>
              <p className="band__note">
                Mostly post-mortems — the things I wish someone had written down before I started.
              </p>

              <div style={{ marginTop: "30px" }}>
                {listedPosts.slice(0, 3).map((post) => (
                  <Link className="post" href={`/writing/${post.slug}`} key={post.slug}>
                    <div className="post__meta">
                      <span>{formatPostDate(post.date)}</span>
                      <span>{post.readingMinutes} min</span>
                      {post.draft && <span style={{ color: "var(--brass)" }}>Draft</span>}
                    </div>
                    <h3 className="post__title">{post.title}</h3>
                    <p className="post__blurb">{post.blurb}</p>
                  </Link>
                ))}
              </div>

              <p style={{ marginTop: "24px" }}>
                <Link className="btn btn--ghost" href="/writing">
                  All writing ↗
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------------- about */}
      <section className="band" id="about">
        <div className="shell spine">
          <div className="rail">
            <b>About</b>
            <span>{site.base.split(",")[0]}</span>
          </div>

          <div>
            <h2 className="band__title">Short version</h2>
            <div style={{ maxWidth: "62ch", color: "var(--fg-dim)", lineHeight: 1.68 }}>
              <p style={{ marginBottom: "1em" }}>
                I&apos;m in the last year of a software engineering honours degree at Monash. Most of
                what I do sits below the interface: provisioning, pipelines, and making sure the
                thing still works once it&apos;s deployed somewhere other than a laptop.
              </p>
              <p style={{ marginBottom: "1em" }}>
                The project I&apos;d point at first is Aussie EcoLens — a wildlife platform split
                across AWS and Azure, which taught me more about consistency boundaries than any
                amount of reading. Before that, mostly web: React, NestJS, and a stint on the
                IFRC&apos;s public reading platform, which reaches readers in seven languages.
              </p>
              <p>
                Outside coursework I do hackathons. The last one was a first place in the
                sustainability track at Google DeepMind&apos;s AI Sprint, built in under three hours.
              </p>
            </div>

            <dl className="facts" style={{ marginTop: "34px", marginBottom: 0 }}>
              {education.map((e) => (
                <div className="fact" key={e.what}>
                  <dt>{e.when}</dt>
                  <dd>
                    {e.what}
                    <br />
                    <span style={{ color: "var(--fg-faint)", fontSize: "0.875rem" }}>{e.where}</span>
                  </dd>
                </div>
              ))}
              {certifications.map((c) => (
                <div className="fact" key={c.name}>
                  <dt>Certification · {c.year}</dt>
                  <dd>
                    {c.name}
                    <br />
                    <span style={{ color: "var(--fg-faint)", fontSize: "0.875rem" }}>{c.issuer}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- contact */}
      <section className="band band--tight" id="contact">
        <div className="shell spine">
          <div className="rail">
            <b>Contact</b>
            <span>Open</span>
          </div>

          <div className="contact">
            <a className="contact__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="contact__links">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={site.resumeHref}>Résumé</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
