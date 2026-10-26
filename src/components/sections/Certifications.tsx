'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { certifications } from '@/content/certifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const platformColors: Record<string, string> = {
  Coursera: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Udemy: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Credentials</p>
          <h2 id="certifications-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Certifications
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            10 professional certifications from IBM, Google, and Udemy demonstrating continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={cn(
                        'flex-shrink-0 text-xs',
                        platformColors[cert.platform] || 'bg-muted text-muted-foreground'
                      )}
                    >
                      {cert.platform}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Verified
                    </span>
                  </div>
                  {cert.url && (
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        View Credential
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}