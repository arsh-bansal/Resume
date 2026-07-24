export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  stack: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  context?: string;
  facts?: { label: string; value: string }[];
  body?: { heading: string; text: string }[];
};

/**
 * NOTE(arsh): every number in here needs to be one you can defend in an
 * interview. I've written what you told me; check the ones marked TODO
 * before this goes live.
 */
export const projects: Project[] = [
  {
    slug: "aussie-ecolens",
    title: "Aussie EcoLens",
    role: "ML lead, API secondary",
    year: "2025",
    featured: true,
    summary:
      "A wildlife observation platform split across two clouds on purpose: writes land on AWS, reads are served from Azure, with CQRS holding the seam together. MegaDetector v5a screens every upload before SpeciesNet classifies it.",
    stack: ["AWS", "Azure", "Python", "Terraform", "Docker", "Kubernetes", "MegaDetector", "SpeciesNet"],
    context: "Monash FIT5225 · four-person team",
    facts: [
      { label: "Role", value: "ML primary, API secondary" },
      { label: "Team", value: "4 engineers" },
      { label: "Accuracy", value: "100% top-1 on 26 ground-truth images" },
      { label: "Runtime", value: "Graviton2 (arm64)" },
    ],
    body: [
      {
        heading: "Why two clouds",
        text: "A single-cloud build would have been faster to ship and less interesting. Splitting the write path (AWS) from the read path (Azure) forced us to be explicit about where consistency actually mattered — which turned out to be a much smaller surface than we assumed going in. Uploads, detection and classification run as AWS Lambda behind API Gateway; the read model is projected into Azure and served from there.",
      },
      {
        heading: "The detection pipeline",
        text: "Every image passes through MegaDetector v5a first, which is cheap and only answers one question: is there an animal in this frame. Anything that clears the threshold goes to SpeciesNet for species-level classification. Running the cheap model first meant we weren't paying classification cost on empty frames, which is most of what a camera trap produces.",
      },
      {
        heading: "arm64, and what it cost",
        text: "The whole inference path is containerised and runs on Graviton2. Getting the model dependencies to build cleanly for arm64 was the least glamorous and most time-consuming part of the project — several of the vision libraries had no arm64 wheels, so they compiled from source in the image build. The payoff was a meaningful drop in per-invocation cost.",
      },
    ],
  },
  {
    slug: "ifrc-world-disaster-report",
    title: "IFRC World Disasters Report",
    role: "Web engineer, MOSAIC",
    year: "2026",
    featured: true,
    liveUrl: "https://wdr26.org",
    summary:
      "The public reading platform for the IFRC's flagship annual report — multilingual, heavily accessed, and read by people who are not on fast connections. Built and shipped through MOSAIC.",
    stack: ["React", "TypeScript", "i18n", "Accessibility", "CDN"],
    context: "MOSAIC · IFRC",
    facts: [
      { label: "Readers", value: "30,000+" },
      { label: "Languages", value: "7+" },
      { label: "Live at", value: "wdr26.org" },
    ],
    body: [
      {
        heading: "Constraints first",
        text: "The audience for a disaster report is not a tech audience on a desk connection. Language coverage and page weight were the two constraints everything else got designed around, which is a very different starting point from a typical product build.",
      },
    ],
  },
  {
    slug: "cloudeco",
    title: "CloudEco",
    role: "Infrastructure",
    year: "2025",
    featured: true,
    summary:
      "A Kubernetes deployment on GCP, provisioned end-to-end with Terraform and configured with Ansible. The point of the project was the boundary between the two — what belongs in state, and what belongs in configuration.",
    stack: ["GCP", "Kubernetes", "Terraform", "Ansible", "Docker"],
    context: "Monash FIT5225",
    facts: [
      { label: "Provisioning", value: "Terraform" },
      { label: "Configuration", value: "Ansible" },
      { label: "Orchestration", value: "GKE" },
    ],
  },
  {
    slug: "agriadapt-ai",
    title: "AgriAdapt AI",
    role: "Built in under three hours",
    year: "2025",
    featured: true,
    summary:
      "First place, sustainability track, at the Google DeepMind AI Sprint. A climate-adaptation tool for smallholder farmers, taken from blank repo to working demo inside the sprint window.",
    stack: ["Python", "Gemini", "React"],
    context: "GDG · Google DeepMind AI Sprint",
    facts: [
      { label: "Result", value: "1st place — Sustainability" },
      { label: "Build time", value: "Under 3 hours" },
    ],
  },
  {
    slug: "monash-deepneuron",
    title: "Monash DeepNeuron",
    role: "System developer",
    year: "2025",
    featured: true,
    summary:
      "Rebuild of the student engineering team's public platform. I owned architecture, the deployment pipeline and code quality across a team build — React Context for state, MUI-only styling, Netlify for hosting.",
    stack: ["React", "TypeScript", "MUI", "Netlify", "CI/CD"],
    context: "Monash DeepNeuron · FIT3170",
  },
  {
    slug: "unexp",
    title: "UNEXP",
    role: "iOS",
    year: "2024",
    featured: true,
    summary:
      "A native iOS app for browsing Monash units, with Firebase auth, cross-device bookmark sync and Core Data underneath so it still works on the tram.",
    stack: ["SwiftUI", "Firebase", "Core Data"],
    githubUrl: "https://github.com/arsh-bansal/UNEXP",
    imageUrl: "/images/projects/unexp.png",
  },
  {
    slug: "skilltree",
    title: "Skilltree",
    role: "Backend",
    year: "2025",
    summary:
      "Backend for a skill-community platform: progression trees, XP calculation, verification workflows and ranking, exposed over REST.",
    stack: ["NestJS", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/Monash-FIT3170/2025W1-Skilltree",
    imageUrl: "/images/projects/skilltree.png",
  },
  {
    slug: "santorini",
    title: "Santorini",
    role: "Solo",
    year: "2024",
    summary:
      "Full digital implementation of the Santorini board game, including the god powers (Artemis, Demeter, Zeus) and the rule interactions between them, which is where all the difficulty actually lives.",
    stack: ["Python", "Tkinter"],
    githubUrl: "https://github.com/arsh-bansal/Santorini-board-game",
    imageUrl: "/images/projects/santorini.png",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);
