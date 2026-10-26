'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ChevronRight, Briefcase, Building2, Calendar, MapPin, Globe, Clock, Code, Database, Cloud, HeartPulse, Zap, Target } from 'lucide-react';

const quickFacts = [
  { label: 'Current Role', value: 'Data QA Engineer', icon: Briefcase },
  { label: 'Company', value: 'Cedar Gate Technologies', icon: Building2 },
  { label: 'Experience', value: '3 Years', icon: Calendar },
  { label: 'Location', value: 'Kathmandu, Nepal', icon: MapPin },
  { label: 'Work Mode', value: 'Remote (US Healthcare)', icon: Globe },
  { label: 'Availability', value: 'Open to Opportunities', icon: Clock },
];

const techStack = [
  'SQL', 'Python', 'Redshift', 'HIVE', 'AWS S3', 'PostgreSQL',
  'Pandas', 'Great Expectations', 'Zephyr', 'Jira', 'Git', 'Docker'
];

const technicalInterests = [
  { title: 'Data Quality & Automation', description: 'Building automated validation frameworks that catch data issues before they reach production', icon: Target },
  { title: 'ETL Testing & Pipeline Validation', description: 'End-to-end validation of data transformation logic across complex pipelines', icon: Database },
  { title: 'Healthcare Data Standards', description: 'Deep expertise in CMS code sets (ICD-10, CPT-4, HCPCS, NDC, NPI) and HIPAA compliance', icon: HeartPulse },
  { title: 'SQL & Python for Data Engineering', description: 'Advanced querying, optimization, and Python-based data quality automation', icon: Code },
  { title: 'Root Cause Analysis', description: 'Systematic investigation of data discrepancies using profiling and statistical analysis', icon: Zap },
  { title: 'Cloud Data Platforms', description: 'AWS ecosystem including Redshift, S3, and hybrid cloud data architectures', icon: Cloud },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-background py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">About</p>
          <h2 id="about-heading" className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Data QA Engineer with 3 years of experience specializing in US healthcare data validation,
            ETL testing, and building reliable data pipelines. Passionate about data quality automation
            and healthcare compliance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left side - Bio & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-10 lg:space-y-12"
          >
            {/* Professional Background */}
            <div className="space-y-5">
              <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-foreground">
                <span className="relative">
                  Professional Background
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 rounded-full" />
                </span>
              </h3>
              <div className="prose prose-sm max-w-none space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a Data QA Engineer based in Kathmandu, Nepal, currently working at Cedar Gate
                  Technologies where I specialize in US healthcare data validation and ETL quality assurance.
                </p>
                <p>
                  With over 3 years of professional experience, I design and execute comprehensive ETL test
                  scenarios, perform source-to-target data validation across Redshift, HIVE, and AWS S3, and
                  work extensively with CMS code sets including ICD-10, CPT-4, HCPCS, NDC, and NPI.
                </p>
                <p>
                  My work involves developing automated validation frameworks using Python (Pandas, Great
                  Expectations) and SQL, mentoring junior QA engineers, and improving data quality workflows.
                  I&apos;m passionate about building reliable data pipelines that ensure data integrity and
                  compliance with healthcare regulations like HIPAA.
                </p>
              </div>
            </div>

            {/* Technical Interests - Card Grid */}
            <div className="space-y-5">
              <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-foreground">
                <span className="relative">
                  Technical Interests
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 rounded-full" />
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalInterests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                    className="group rounded-xl border border-border/70 bg-card/40 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/70"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors text-primary">
                        <interest.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                          {interest.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="space-y-5 rounded-xl border border-border/70 bg-card/40 p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-foreground">
                <span className="relative">
                  Career Goals
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50 rounded-full" />
                </span>
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                I aim to advance as a senior data quality engineer, leading data governance initiatives and
                building scalable data quality frameworks that enable organizations to trust their data completely.
                I&apos;m also interested in contributing to open-source data quality tools and sharing knowledge
                through technical writing and mentoring.
              </p>
            </div>

            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                Let&apos;s Work Together
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right side - Quick Facts & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Quick Facts */}
            <div className="space-y-5 rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm lg:p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
                <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
                Quick Facts
              </h3>
              <div className="space-y-3">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                    className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/60 p-3.5 transition-colors duration-200 hover:border-primary/30 hover:bg-accent/30"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <fact.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <dt className="mb-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="truncate text-sm font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="space-y-4 rounded-xl border border-border/70 bg-card/40 p-5 text-center backdrop-blur-sm lg:p-6">
              <h3 className="flex items-center justify-center gap-2 text-lg font-semibold tracking-tight text-foreground">
                <Download className="h-5 w-5 text-primary" aria-hidden="true" />
                Resume
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-6 text-muted-foreground">
                Download my latest resume to learn more about my experience and skills.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/resume.pdf" className="flex items-center justify-center gap-2" download>
                  <Download className="h-5 w-5" />
                  Download Resume (PDF)
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                ATS-friendly format • Single column • Standard fonts
              </p>
            </div>

            {/* Tech Stack Highlights */}
            <div className="rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm lg:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
                <Code className="h-5 w-5 text-primary" aria-hidden="true" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-default rounded-md border border-border/70 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}