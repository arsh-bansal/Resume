import {
  Skill,
  Experience,
  Project,
  SocialLink,
  Education,
  Certificate,
} from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "Swift", level: 75, category: "frontend" },
  { name: "SQL", level: 80, category: "backend" },
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 88, category: "frontend" },

  // Backend Frameworks
  { name: "NestJS", level: 85, category: "backend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 82, category: "backend" },

  // Databases & ORM
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Firebase Firestore", level: 82, category: "backend" },
  { name: "Prisma ORM", level: 80, category: "backend" },

  // Frontend & Mobile
  { name: "React", level: 90, category: "frontend" },
  { name: "SwiftUI", level: 78, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },

  // Cloud & DevOps
  { name: "Firebase Auth", level: 85, category: "tools" },
  { name: "Google Cloud Platform", level: 75, category: "tools" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub Actions", level: 75, category: "tools" },

  // Tools
  { name: "Postman", level: 85, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Jira", level: 80, category: "tools" },

  // Technologies
  { name: "REST APIs", level: 88, category: "backend" },
];

export const experiences: Experience[] = [
  {
    title: "Web Developer",
    company: "Jabsz Studios",
    location: "Remote",
    startDate: "2025-08",
    endDate: null,
    description: [
      "Developing and maintaining scalable web applications as part of a distributed development team",
      "Implementing backend logic, APIs, and integrations using Nest.js, TypeScript, and modern tooling",
      "Collaborating with designers and frontend developers to deliver polished user experiences",
    ],
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "React"],
  },
  {
    title: "Full Stack Intern ",
    company: "STUDY FLISS",
    location: "India",
    startDate: "2024-07",
    endDate: "2024-10",
    description: [
      "Contributed to end-to-end full-stack web development projects in an agile team setting",
      "Built scalable features with strong UI/UX considerations and clean, maintainable code",
      "Collaborated in sprints, participated in code reviews, and delivered high-quality features",
      "Received a Letter of Recognition for outstanding technical performance",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express.js",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Gnosis",
    description:
      "A full-stack AI-powered startup validation platform, allowing users to validate their startup ideas and receive feedback from AI. Provides a detailed analysis, score, flowchart, and SCRUM board for startup ideas.",
    technologies: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL", "React"],
    githubUrl: "https://github.com/arsh-bansal",
  },
  {
    title: "Skilltree",
    description:
      "Backend developer for a social platform enabling users to create skill-based communities. Implemented systems for progression trees, XP calculation, verification workflows, and ranking.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "React"],
    githubUrl: "https://github.com/arsh-bansal",
  },
  {
    title: "Santorini Board Game",
    description:
      "Developed a full digital implementation of the Santorini strategy board game with GUI. Implemented unique god powers (Artemis, Demeter, Zeus), rule enforcement, and win logic.",
    technologies: ["Python", "Tkinter"],
    githubUrl: "https://github.com/arsh-bansal",
  },
  {
    title: "UNEXP",
    description:
      "Developed an iOS app for Monash students to browse and explore university units. Integrated Firebase for authentication, cloud sync, and real-time bookmarking across devices.",
    technologies: ["SwiftUI", "Firebase", "Core Data"],
    githubUrl: "https://github.com/arsh-bansal",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering (Honours) – Software Engineering",
    institution: "Monash University",
    location: "Melbourne, Australia",
    startDate: "2024",
    endDate: "2026-12",
  },
  {
    degree: "Diploma – Bachelor of Information Technology",
    institution: "Amity University",
    location: "India",
    startDate: "2022",
    endDate: "2024",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Python for Everybody",
    issuer: "University of Michigan",
    year: "2024",
  },
  {
    name: "Artificial Intelligence Foundations: Machine Learning",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/arsh-bansal", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/arshbansal05",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:me@arshbansal.dev", icon: "mail" },
];
