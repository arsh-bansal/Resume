export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "code"; lang?: string; text: string }
  | { t: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  blurb: string;
  date: string; // ISO
  readingMinutes: number;
  tags: string[];
  draft?: boolean;
  body: Block[];
};

/* ==========================================================================
   READ THIS BEFORE YOU DEPLOY
   --------------------------------------------------------------------------
   These three posts are DRAFTS. The structure, the arguments and the
   technical detail come from your own projects, but the sentences are mine.
   The whole point of adding writing to the site is that it's the one part
   an AI can't fake for you — a recruiter who reads two paragraphs of
   generic prose will trust the rest of the site less, not more.

   Rewrite each one in your own voice before publishing. Concretely:
     - put back the specific numbers, error messages and dead ends
     - cut anything you couldn't defend in a follow-up question
     - keep `draft: true` on anything you haven't rewritten yet;
       drafts are hidden in production (see app/writing/page.tsx)
   ========================================================================== */

export const posts: Post[] = [
  {
    slug: "two-clouds-one-platform",
    title: "Splitting one platform across two clouds, and what it actually cost",
    blurb:
      "CQRS across AWS and Azure sounds like a diagram exercise until you have to reconcile a read model that lives in a different vendor's network.",
    date: "2026-05-18",
    readingMinutes: 7,
    tags: ["AWS", "Azure", "CQRS", "Architecture"],
    draft: true,
    body: [
      {
        t: "p",
        text: "Aussie EcoLens writes to AWS and reads from Azure. Not because a client asked for it, and not because it's cheaper — it isn't. The constraint was set for us, and working inside it turned out to teach more about consistency boundaries than any single-cloud version of the same system would have.",
      },
      { t: "h2", text: "What CQRS forces you to admit" },
      {
        t: "p",
        text: "The moment the read side lives in another vendor's network, you can no longer hand-wave about eventual consistency. Every projection has a measurable lag, and you have to decide, per feature, whether that lag is acceptable. We found the honest answer was that almost none of the read paths needed to be current. A wildlife observation that appears in the feed eleven seconds after upload is fine. A user who uploads an image and doesn't see it in their own list is not.",
      },
      {
        t: "p",
        text: "So the exception got special handling and everything else got the cheap path. That split — one narrow strongly-consistent case, everything else projected — is the whole design.",
      },
      { t: "h2", text: "The write side" },
      {
        t: "p",
        text: "Uploads hit API Gateway, land in S3, and fire a Lambda. Detection runs first, classification second, and the result is appended to the write store before an event goes out to the projector.",
      },
      {
        t: "code",
        lang: "text",
        text: "client → API Gateway → S3 (raw)\n                 ↓\n            Lambda: MegaDetector v5a   (is there an animal?)\n                 ↓ (if yes)\n            Lambda: SpeciesNet          (which animal?)\n                 ↓\n            write store → event → Azure projector → read model",
      },
      {
        t: "p",
        text: "Running the cheap model first is the single highest-leverage decision in the pipeline. A camera trap produces overwhelmingly empty frames — wind on a branch, a passing shadow. MegaDetector answers one binary question quickly, and only what survives that filter pays for classification.",
      },
      { t: "h2", text: "Where it hurt" },
      {
        t: "ul",
        items: [
          "Two IAM models. AWS roles and Azure RBAC do not think about identity the same way, and the mapping between them is manual.",
          "Two sets of logs, in two formats, in two consoles. Correlating a single request across the seam needs a trace ID you propagate yourself, because nothing does it for you.",
          "Egress. Data leaving one cloud to be projected into another is billed, and the bill is the argument against ever doing this without a reason.",
        ],
      },
      { t: "h2", text: "Would I do it again" },
      {
        t: "p",
        text: "For a product, no — not without a regulatory or commercial reason forcing it. For learning where a system's consistency boundaries genuinely are, it was the fastest teacher I've had, because the architecture stopped being a diagram and started being something with a latency number attached to it.",
      },
    ],
  },
  {
    slug: "megadetector-on-graviton2",
    title: "Getting a vision model to build for arm64 when nobody ships wheels",
    blurb:
      "Graviton2 is cheaper per invocation. Getting the dependencies to compile is where that saving gets spent back.",
    date: "2026-04-02",
    readingMinutes: 6,
    tags: ["arm64", "Docker", "Lambda", "ML"],
    draft: true,
    body: [
      {
        t: "p",
        text: "The inference path for EcoLens runs on Graviton2. The cost case is easy to make on a spreadsheet. The build is where the project actually spends its time.",
      },
      { t: "h2", text: "The problem in one sentence" },
      {
        t: "p",
        text: "Several of the vision libraries in the dependency tree publish x86_64 wheels and nothing else, so on arm64 pip falls back to building from source inside the image — which means the image build now needs a compiler toolchain, and the build time goes from seconds to minutes.",
      },
      { t: "h3", text: "What worked" },
      {
        t: "ul",
        items: [
          "A multi-stage build: compile in a stage that has the toolchain, copy only the built artefacts into the runtime stage.",
          "Pinning every version. On arm64, 'latest' is a coin flip about whether a wheel exists this week.",
          "Building natively on arm64 rather than emulating. Cross-building under emulation worked but was slow enough to break the feedback loop.",
        ],
      },
      { t: "h3", text: "What didn't" },
      {
        t: "p",
        text: "Trying to keep one Dockerfile that produced both architectures cleanly. It's possible, and for a team that ships to both it's probably correct, but for a project that only ever runs on arm64 it added conditional logic that made the build harder to reason about for no benefit.",
      },
      { t: "h2", text: "The number that matters" },
      {
        t: "p",
        text: "TODO(arsh): put your real before/after here — image size, cold start, and cost per thousand invocations. This is the paragraph a hiring manager will actually read.",
      },
    ],
  },
  {
    slug: "terraform-and-ansible",
    title: "Terraform and Ansible are not competing tools",
    blurb:
      "A short argument about where the line sits between provisioning and configuration, learned by putting it in the wrong place first.",
    date: "2026-02-11",
    readingMinutes: 5,
    tags: ["Terraform", "Ansible", "GCP", "Kubernetes"],
    draft: true,
    body: [
      {
        t: "p",
        text: "On CloudEco I started by trying to do everything in Terraform, because state files are satisfying and it felt cleaner to have one tool. That worked right up until the first change that wasn't about creating or destroying a resource.",
      },
      { t: "h2", text: "The distinction" },
      {
        t: "p",
        text: "Terraform is good at answering 'does this thing exist, and does its shape match the declaration.' Ansible is good at answering 'given that this thing exists, is it in the state I want.' Those sound similar and they are not. The first is a question about infrastructure; the second is a question about what's running on it.",
      },
      {
        t: "quote",
        text: "If a change would show up in a terraform plan as a destroy-and-recreate, and that's obviously the wrong outcome, the change probably doesn't belong in Terraform.",
      },
      { t: "h2", text: "How it ended up on CloudEco" },
      {
        t: "ul",
        items: [
          "Terraform: the GKE cluster, the networking, the service accounts, the buckets — anything with a lifecycle.",
          "Ansible: node-level configuration and the things that need to converge rather than be replaced.",
          "Neither: application deployment, which belongs to the cluster and its manifests.",
        ],
      },
      {
        t: "p",
        text: "The third line took the longest to accept. There's a strong pull toward driving Kubernetes deployments from Terraform because it keeps everything in one place, and it works, and then your infrastructure state file starts churning every time someone ships a new image tag.",
      },
    ],
  },
];

export const publishedPosts = posts.filter((p) => !p.draft);

/**
 * What actually gets listed on the site.
 *
 * Drafts show up in `npm run dev` so you can read and edit them, and are
 * filtered out of the production build. To publish one, delete its
 * `draft: true` line — that's the whole switch.
 */
export const listedPosts =
  process.env.NODE_ENV === "development" ? posts : publishedPosts;

export function formatPostDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
