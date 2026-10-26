export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    instagram: string;
    facebook: string;
  };
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'data' | 'healthcare' | 'cloud' | 'programming' | 'qa' | 'collaboration' | 'frontend' | 'backend' | 'tools' | 'design' | 'ml' | 'soft' | 'other';
  icon?: string;
  proficiency?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
  description?: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  platform: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  icon?: string;
}