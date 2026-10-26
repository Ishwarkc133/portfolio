'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { experiences } from '@/content/experience';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-secondary/20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
          <h2 id="experience-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            3 years of progressive experience in data quality engineering at Cedar Gate Technologies, working with US healthcare data.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-border lg:block" />

          <div className="space-y-6 lg:space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className="relative lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[9px] top-7 z-10 hidden h-2.5 w-2.5 rounded-full border-2 border-background bg-primary ring-1 ring-primary/30 lg:block" />

                <div className="group rounded-2xl border border-border/80 bg-card/65 p-6 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/[0.06] lg:p-8">
                  {/* Header */}
                  <div className="mb-5 flex flex-col gap-4 border-b border-border/60 pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">{experience.role}</h3>
                      <p className="text-primary font-medium mt-1">{experience.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </span>
                      {experience.current && (
                        <Badge variant="secondary" className="gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                          </span>
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}