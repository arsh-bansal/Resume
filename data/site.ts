export const site = {
  name: "Arsh Bansal",
  initials: "AB",
  role: "Software engineer",
  base: "Melbourne, Australia",
  coords: "-37.8136, 144.9631",
  url: "https://arshbansal.dev",
  email: "me@arshbansal.dev",
  // TODO(arsh): confirm before deploying — this shows in the hero.
  availability: "Graduating Dec 2026 · open to grad + intern roles",
  github: "https://github.com/arsh-bansal",
  linkedin: "https://linkedin.com/in/arshbansal05",
  /**
   * TODO(arsh): this file does not exist yet — drop your CV at
   * public/Arsh-Bansal-CV.pdf or the button 404s. Given you keep three
   * tailored variants, use the general one here.
   */
  resumeHref: "/Arsh-Bansal-CV.pdf",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/#about" },
] as const;

/**
 * Regions plotted in the hero. These are the actual regions the projects
 * below deploy into — the graphic is a real thing, not an ornament.
 * x/y are percentages inside the plot frame.
 */
export type Region = {
  id: string;
  label: string;
  note: string;
  x: number;
  y: number;
  home?: boolean;
};

export const regions: Region[] = [
  { id: "MEL", label: "Melbourne", note: "base", x: 30, y: 74, home: true },
  { id: "ap-southeast-2", label: "AWS Sydney", note: "EcoLens · write", x: 66, y: 62 },
  { id: "australiaeast", label: "Azure Sydney", note: "EcoLens · read", x: 79, y: 40 },
  { id: "australia-southeast1", label: "GCP Sydney", note: "CloudEco", x: 52, y: 24 },
];

export const colophon = {
  typefaces: "Archivo · Instrument Sans · IBM Plex Mono · Newsreader",
  stack: "Next.js · TypeScript · hand-written CSS",
  // TODO(arsh): update when you redeploy
  updated: "July 2026",
};
