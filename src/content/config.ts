import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Ishwar KC',
  title: 'Ishwar KC | Data QA Engineer',
  description: 'Data QA Engineer specializing in US healthcare data validation, ETL testing, SQL/Python automation, and cloud data platforms.',
  url: 'https://ishwarkc.com',
  ogImage: '/og-default.png',
  links: {
    github: 'https://github.com/ishwarkc',
    linkedin: 'https://linkedin.com/in/ishwar-kc-6a3681245',
    email: 'mailto:ishwarkc1895@gmail.com',
    instagram: 'https://www.instagram.com/_ishwarkc_/',
    facebook: 'https://www.facebook.com/ishwar.kc.415419',
  },
  author: {
    name: 'Ishwar KC',
    role: 'Data QA Engineer',
    bio: 'Data QA Engineer based in Kathmandu with 3 years in US healthcare data at Cedar Gate Technologies. Designs ETL test cases, runs source-to-target validations using SQL and Python, and works with Redshift, HIVE, AWS S3, and CMS code sets (ICD-10, CPT-4, HCPCS, NDC, NPI). Co-authored a Springer LNNS 2024 paper on deep learning for natural disaster detection from tweets. B.Sc. Computer Science from Kathmandu University.',
    avatar: '/avatar.svg',
  },
};

export const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#publications', label: 'Publications' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export type SocialIconName =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'mail'
  | 'graduation-cap';

export const socialLinks: {
  name: string;
  href: string;
  icon: SocialIconName;
}[] = [
  { name: 'GitHub', href: siteConfig.links.github, icon: 'github' },
  { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: 'linkedin' },
  { name: 'Instagram', href: siteConfig.links.instagram, icon: 'instagram' },
  { name: 'Facebook', href: siteConfig.links.facebook, icon: 'facebook' },
  { name: 'Email', href: siteConfig.links.email, icon: 'mail' },
];