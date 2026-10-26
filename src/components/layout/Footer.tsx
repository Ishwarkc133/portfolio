'use client';

import Link from 'next/link';
import { socialLinks, siteConfig } from '@/content/config';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';
import { SocialIcon } from '@/components/ui/social-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#publications', label: 'Publications' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];
  const footerLinkGroups = [
    { title: 'Explore', links: footerLinks.slice(0, 4) },
    { title: 'More', links: footerLinks.slice(4) },
  ];

  return (
    <footer className="border-t border-border/80 bg-background/70" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold" aria-label="Ishwar KC - Home">
              <span className="text-primary">IK</span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Data QA Engineer specializing in healthcare data validation, ETL testing, and building reliable data pipelines.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel={social.icon === 'mail' ? undefined : 'noopener noreferrer'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} footer navigation`}>
              <h3 className="mb-4 font-semibold">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-7 opacity-70" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.author.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-primary"
            >
              <ArrowUp className="h-5 w-5" />
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}