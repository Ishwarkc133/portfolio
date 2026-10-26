'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { achievements } from '@/content/achievements';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, BookOpen } from 'lucide-react';

const achievementIcons: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  lightbulb: Star,
  book: BookOpen,
  shield: Award,
  palette: Star,
};

export function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-secondary/20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Recognition</p>
          <h2 id="achievements-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Achievements & Awards
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            8 recognitions across hackathons, competitions, and academic excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.icon || 'trophy'] || Trophy;
            return (
              <motion.article
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary/20 hover:border-l-primary">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0 self-start">
                        {achievement.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}