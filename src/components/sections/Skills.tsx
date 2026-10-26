'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '@/content/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Code, Cloud, Shield, Users } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  data: Database,
  healthcare: Shield,
  cloud: Cloud,
  programming: Code,
  qa: Database,
  collaboration: Users,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = React.useState<string>('programming');

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="bg-secondary/20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Expertise</p>
          <h2 id="skills-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Skills I've developed through professional experience in data QA and engineering.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Users;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="transition-all gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills
            .sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0))
            .map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.03 }}
              >
                <Card className="group relative h-full overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardContent className="flex min-h-28 items-center gap-4 p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {React.createElement(categoryIcons[skill.category] || Code, {
                        className: 'h-5 w-5',
                        'aria-hidden': true,
                      })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h3 className="truncate font-semibold text-foreground">{skill.name}</h3>
                        {skill.proficiency !== undefined && (
                          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold tabular-nums text-primary">
                            {skill.proficiency}%
                          </span>
                        )}
                      </div>
                      {skill.proficiency !== undefined ? (
                        <div
                          className="h-1.5 overflow-hidden rounded-full bg-muted"
                          role="progressbar"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.proficiency}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      ) : (
                        <p className="text-xs text-muted-foreground">Skill</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}