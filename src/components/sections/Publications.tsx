'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText, BookOpen, Award } from 'lucide-react';

const publications = [
  {
    id: '1',
    title: 'Harnessing the Tweet Stream: Deep Learning for Natural Disaster Detection',
    authors: 'Joshi, A., Subedi, N., Bista, H., & Ishwar, K.C.',
    venue: 'Springer LNNS vol. 1131, EAIT 2024',
    year: '2024',
    doi: '10.1007/978-981-97-7532-3_7',
    url: 'https://doi.org/10.1007/978-981-97-7532-3_7',
    description: 'Deep learning models detecting natural disasters in real time from Twitter streams. Achieved 92% F1-score on disaster classification using BERT embeddings and LSTM classifiers.',
    tags: ['NLP', 'Deep Learning', 'BERT', 'LSTM', 'Disaster Detection', 'Twitter'],
  },
];

export function Publications() {
  return (
    <section
      id="publications"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Research</p>
          <h2 id="publications-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Publications & Research
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Peer-reviewed research contributions in natural language processing and deep learning.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/60">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent" />
                <CardHeader className="pb-3 pl-7">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 shadow-inner shadow-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">{pub.title}</h3>
                      <p className="text-muted-foreground text-sm">{pub.authors}</p>
                    </div>
                    <Badge variant="secondary" className="mt-1 flex-shrink-0 border border-primary/20 bg-primary/10 text-primary">
                      {pub.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pl-7">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {pub.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      DOI: {pub.doi}
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                    <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
                    <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] px-5 py-4 text-center sm:min-w-36">
                      <div className="text-3xl font-bold tracking-tight text-primary">92%</div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">F1-score</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        View Paper
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        BibTeX
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            More research projects and collaborations coming soon...
          </p>
          <Button variant="outline" asChild>
            <a href="https://orcid.org/0009-0008-6823-5128" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View ORCID Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}