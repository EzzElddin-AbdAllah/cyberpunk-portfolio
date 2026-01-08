export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
  links?: { label: string; url: string }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Course {
  name: string;
  provider?: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}
