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
    slug: "gnosis",
    description:
      "A full-stack AI-powered startup validation platform, which allows users to validate their startup ideas and get feedback from AI. With a detailed analysis of the startup idea, the platform provides a score and a detailed flowchart, and a SCRUM board of the startup idea.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Groq",
      "OpenAI",
      "PayPal",
    ],
    githubUrl: "https://github.com/aditya04tripathi/saas-validator-ai",
    liveUrl: "https://gnosis.adityatripathi.dev/",
    imageUrl: "/images/projects/gnosis.png",
    keyFeatures: [
      "AI-powered startup idea validation and analysis",
      "Comprehensive startup scoring system",
      "Interactive flowchart generation for startup roadmap",
      "SCRUM board creation for project management",
      "Payment integration with PayPal",
      "Responsive design with Tailwind CSS and shadcn/ui",
      "Type-safe development with TypeScript",
      "Optimized performance and SEO",
    ],
    technicalHighlights: [
      {
        title: "AI Integration",
        description:
          "Leverages Groq and OpenAI APIs to provide intelligent startup validation and analysis. The platform uses advanced AI models to generate comprehensive feedback, scores, and actionable insights for startup ideas.",
      },
      {
        title: "Frontend Architecture",
        description:
          "Built with Next.js 15 and React, utilizing the App Router for optimal performance. The UI is crafted with Tailwind CSS and shadcn/ui components, ensuring a modern and accessible user experience across all devices.",
      },
      {
        title: "Payment Processing",
        description:
          "Integrated with PayPal for secure payment processing, enabling users to access premium features and services. The payment flow is seamless and user-friendly.",
      },
      {
        title: "Developer Experience",
        description:
          "Full TypeScript implementation provides type safety and enhanced developer productivity. The codebase follows best practices with proper error handling, loading states, and responsive design patterns.",
      },
    ],
  },
  {
    title: "Skilltree",
    slug: "skilltree",
    description:
      "Backend developer for a social platform enabling users to create skill-based communities. Implemented systems for progression trees, XP calculation, verification workflows, and ranking.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "React"],
    githubUrl: "https://github.com/Monash-FIT3170/2025W1-Skilltree",
    imageUrl: "/images/projects/skilltree.png",
    keyFeatures: [
      "Social platform for skill-based communities",
      "Progression trees and XP calculation system",
      "Verification workflows for skill validation",
      "Ranking and leaderboard systems",
      "REST APIs for community creation, tagging, submissions, and leaderboards",
      "Type-safe development with TypeScript",
      "Scalable backend architecture with NestJS",
    ],
    technicalHighlights: [
      {
        title: "Backend Architecture",
        description:
          "Built with NestJS and TypeScript, providing a scalable and maintainable backend architecture. Implemented REST APIs for community management, user progression, and ranking systems.",
      },
      {
        title: "Database Design",
        description:
          "Leveraged PostgreSQL for robust data storage and relationships. Designed efficient schemas for communities, users, skills, and progression tracking.",
      },
      {
        title: "Progression System",
        description:
          "Implemented complex progression trees and XP calculation algorithms to track user skill development and community engagement.",
      },
      {
        title: "Verification & Ranking",
        description:
          "Built verification workflows to validate user skills and implemented ranking systems to showcase top performers in each community.",
      },
    ],
  },
  {
    title: "Santorini Board Game",
    slug: "santorini",
    description:
      "Developed a full digital implementation of the Santorini strategy board game with GUI. Implemented unique god powers (Artemis, Demeter, Zeus), rule enforcement, and win logic.",
    technologies: ["Python", "Tkinter"],
    githubUrl: "https://github.com/arsh-bansal/Santorini-board-game",
    imageUrl: "/images/projects/santorini.png",
    keyFeatures: [
      "Full digital implementation of Santorini board game",
      "Interactive GUI with Tkinter",
      "Multiple god powers (Artemis, Demeter, Zeus)",
      "Complete rule enforcement and validation",
      "Win condition detection",
      "Object-oriented architecture",
      "Timer and hint system support",
    ],
    technicalHighlights: [
      {
        title: "Game Logic",
        description:
          "Implemented complete game mechanics including movement rules, building rules, and win conditions. Ensured all god powers work correctly with the base game rules.",
      },
      {
        title: "User Interface",
        description:
          "Created an intuitive GUI using Tkinter that allows players to interact with the game board, select moves, and view game state clearly.",
      },
      {
        title: "Architecture",
        description:
          "Designed a modular, object-oriented architecture that supports easy addition of new god powers and game features.",
      },
    ],
  },
  {
    title: "UNEXP",
    slug: "unexp",
    description:
      "Developed an iOS app for Monash students to browse and explore university units. Integrated Firebase for authentication, cloud sync, and real-time bookmarking across devices.",
    technologies: ["SwiftUI", "Firebase", "Core Data"],
    githubUrl: "https://github.com/arsh-bansal/UNEXP",
    imageUrl: "/images/projects/unexp.png",
    keyFeatures: [
      "Browse and explore Monash university units",
      "Firebase authentication for secure access",
      "Cloud sync across all devices",
      "Real-time bookmarking functionality",
      "Clean SwiftUI interfaces",
      "Smooth navigation and responsive layouts",
      "Offline support with Core Data",
    ],
    technicalHighlights: [
      {
        title: "Mobile Development",
        description:
          "Built a native iOS application using SwiftUI, providing a smooth and responsive user experience optimized for iOS devices.",
      },
      {
        title: "Cloud Integration",
        description:
          "Integrated Firebase for authentication and cloud storage, enabling seamless synchronization of bookmarks and preferences across multiple devices.",
      },
      {
        title: "Data Management",
        description:
          "Implemented Core Data for local storage and offline functionality, ensuring the app works even without an internet connection.",
      },
    ],
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
