export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}
