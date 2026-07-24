import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, url: `${site.url}/work/${p.slug}` },
  };
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <div className="shell">
        <header className="articlehead">
          <Link className="backlink" href="/#work">
            <span aria-hidden="true">←</span> Work
          </Link>
          <h1>{p.title}</h1>
          <p className="hero__lede" style={{ marginTop: "20px" }}>
            {p.summary}
          </p>

          <div className="row__stack" style={{ marginTop: "20px" }}>
            {p.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          {(p.githubUrl || p.liveUrl) && (
            <div className="hero__actions" style={{ marginTop: "24px" }}>
              {p.liveUrl && (
                <a className="btn btn--solid" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit site ↗
                </a>
              )}
              {p.githubUrl && (
                <a className="btn" href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                  Source ↗
                </a>
              )}
            </div>
          )}
        </header>
      </div>

      <section className="band band--tight">
        <div className="shell spine">
          <div className="rail">
            <b>{p.year}</b>
            <span>{p.context ?? p.role}</span>
          </div>

          <div>
            {p.facts && p.facts.length > 0 && (
              <dl className="facts" style={{ marginTop: 0 }}>
                {p.facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {p.imageUrl && (
              <div className="shot" style={{ marginBottom: "36px" }}>
                <Image
                  src={p.imageUrl}
                  alt={`${p.title} screenshot`}
                  width={1400}
                  height={900}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}

            {p.body && p.body.length > 0 ? (
              <div className="prose">
                {p.body.map((s) => (
                  <div key={s.heading}>
                    <h2>{s.heading}</h2>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="band__note">
                Write-up in progress. In the meantime the source is linked above.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="band band--tight">
        <div className="shell spine">
          <div className="rail">
            <b>Next</b>
          </div>
          <div className="rows" style={{ borderTop: 0 }}>
            {others.map((o) => (
              <article className="row" key={o.slug}>
                <div>
                  <div className="row__head">
                    <h3 className="row__title" style={{ fontSize: "1.125rem" }}>
                      <Link href={`/work/${o.slug}`}>{o.title}</Link>
                    </h3>
                    <span className="row__role">{o.role}</span>
                  </div>
                </div>
                <div className="row__meta">
                  <span>{o.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
