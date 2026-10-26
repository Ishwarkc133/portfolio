import type { ComponentType } from 'react';
import {
  Facebook,
  GraduationCap,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';
import type { SocialIconName } from '@/content/config';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  mail: Mail,
  'graduation-cap': GraduationCap,
} satisfies Record<SocialIconName, ComponentType<{ className?: string }>>;

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconName;
  className?: string;
}) {
  const Icon = socialIcons[name];
  return <Icon aria-hidden="true" className={className} />;
}
