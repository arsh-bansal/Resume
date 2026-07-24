import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, formatPostDate, type Block } from "@/data/posts";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.blurb,
    openGraph: {
      title: post.title,
      description: post.blurb,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/writing/${post.slug}`,
    },
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "h3":
      return <h3 key={i}>{b.text}</h3>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre key={i}>
          <code>{b.text}</code>
        </pre>
      );
    case "quote":
      return <blockquote key={i}>{b.text}</blockquote>;
    default:
      return <p key={i}>{b.text}</p>;
  }
}

export default function Article({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <div className="shell">
        <header className="articlehead">
          <Link className="backlink" href="/writing">
            <span aria-hidden="true">←</span> Writing
          </Link>
          <h1>{post.title}</h1>
          <div className="post__meta" style={{ marginTop: "20px" }}>
            <span>{formatPostDate(post.date)}</span>
            <span>{post.readingMinutes} min read</span>
            {post.draft && <span style={{ color: "var(--brass)" }}>Draft</span>}
          </div>
          <div className="row__stack" style={{ marginTop: "14px" }}>
            {post.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </header>
      </div>

      <article className="band band--tight">
        <div className="shell spine">
          <div className="rail">
            <b>{post.tags[0]}</b>
            <span>{post.readingMinutes} min</span>
          </div>

          <div className="prose">{post.body.map(renderBlock)}</div>
        </div>
      </article>

      <section className="band band--tight">
        <div className="shell spine">
          <div className="rail">
            <b>Reply</b>
          </div>
          <div className="contact">
            <a className="contact__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="contact__links">
              <Link href="/writing">All writing</Link>
              <Link href="/">Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
