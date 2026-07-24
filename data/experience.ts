export type Stint = {
  role: string;
  org: string;
  where: string;
  when: string;
  points: string[];
};

/** TODO(arsh): verify the date ranges on DeepNeuron / MOSAIC before deploying. */
export const experience: Stint[] = [
  {
    role: "Web Developer",
    org: "Jabsz Studios",
    where: "Remote",
    when: "Aug 2025 — now",
    points: [
      "Backend services and integrations in NestJS and TypeScript for a distributed team",
      "Own features end to end, from API design through to the interface that consumes them",
    ],
  },
  {
    role: "Web Engineer",
    org: "MOSAIC",
    where: "Melbourne",
    when: "2025 — now",
    points: [
      "Build and maintain the public reading platform for the IFRC World Disasters Report",
      "Multilingual delivery across 7+ languages to an audience of 30,000+ readers",
    ],
  },
  {
    role: "System Developer",
    org: "Monash DeepNeuron",
    where: "Melbourne",
    when: "2025",
    points: [
      "Architecture, deployment pipeline and code quality for the platform rebuild",
      "Set the state-management and styling conventions the rest of the team built against",
    ],
  },
  {
    role: "Full Stack Intern",
    org: "Study Fliss",
    where: "India",
    when: "Jul — Oct 2024",
    points: [
      "Shipped features across the stack in two-week sprints with code review",
      "Received a Letter of Recognition for technical performance",
    ],
  },
];

export const education = [
  {
    what: "BEng (Honours), Software Engineering",
    where: "Monash University, Melbourne",
    when: "2024 — Dec 2026",
  },
  {
    what: "Diploma, Information Technology",
    where: "Amity University, India",
    when: "2022 — 2024",
  },
];

export const stack = [
  {
    group: "Cloud & infrastructure",
    items: ["AWS", "Azure", "GCP", "Terraform", "Ansible", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "Python", "C++", "Swift", "SQL"],
  },
  {
    group: "Backend",
    items: ["NestJS", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "REST"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "SwiftUI", "Tailwind", "MUI"],
  },
];

/**
 * TODO(arsh): I've left AWS SAA in because you were sitting it — DELETE the
 * line if the exam hasn't been passed yet. A cert claim you can't produce a
 * badge for is the single fastest way to lose a recruiter's trust.
 */
export const certifications = [
  { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2026" },
  { name: "Python for Everybody", issuer: "University of Michigan", year: "2024" },
];
