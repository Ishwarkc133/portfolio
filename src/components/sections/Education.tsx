'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { education } from '@/content/education';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';

const educationIcons: Record<string, React.ElementType> = {
  'B.Sc. Computer Science': GraduationCap,
  'Higher Secondary': School,
  'Secondary Education': Award,
};

export function Education() {
  return (
    <section
      id="education"
      className="bg-secondary/20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Education</p>
          <h2 id="education-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Education
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Academic background in Computer Science with focus on Data Science and Machine Learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = educationIcons[edu.degree] || GraduationCap;
            return (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <School className="h-4 w-4" />
                        {edu.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>

                    {edu.description && (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {edu.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}