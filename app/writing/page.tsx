import type { Metadata } from "next";
import Link from "next/link";
import { listedPosts, formatPostDate } from "@/data/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Post-mortems and build notes on multi-cloud architecture, arm64 containers and infrastructure tooling.",
};

export default function WritingIndex() {
  return (
    <>
      <div className="shell">
        <header className="articlehead">
          <Link className="backlink" href="/">
            <span aria-hidden="true">←</span> Back
          </Link>
          <h1>Notes from the build</h1>
          <p className="band__note" style={{ marginTop: "18px" }}>
            Write-ups of things I got wrong first. Mostly infrastructure, occasionally models.
          </p>
        </header>
      </div>

      <section className="band band--tight">
        <div className="shell spine">
          <div className="rail">
            <b>Index</b>
            <span>{listedPosts.length} posts</span>
          </div>

          <div>
            {listedPosts.length === 0 ? (
              <p className="band__note">Nothing published yet. Drafts are in progress.</p>
            ) : (
              listedPosts.map((post) => (
                <Link className="post" href={`/writing/${post.slug}`} key={post.slug}>
                  <div className="post__meta">
                    <span>{formatPostDate(post.date)}</span>
                    <span>{post.readingMinutes} min</span>
                    {post.draft && <span style={{ color: "var(--brass)" }}>Draft</span>}
                  </div>
                  <h2 className="post__title">{post.title}</h2>
                  <p className="post__blurb">{post.blurb}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
