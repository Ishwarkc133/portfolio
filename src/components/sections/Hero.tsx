'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowLeftRight,
  ArrowRight,
  Check,
  Database,
  LoaderCircle,
  Mail,
  Table,
} from 'lucide-react';
import { socialLinks } from '@/content/config';
import { SocialIcon } from '@/components/ui/social-icon';

const validationChecks = [
  'Row counts match',
  'No duplicate claim IDs',
  'Schema matches specification',
  'No null member IDs',
];

export function Hero() {
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [passedChecks, setPassedChecks] = useState(0);
  const [progress, setProgress] = useState(0);
  const timeoutIds = useRef<number[]>([]);
  const progressInterval = useRef<number | null>(null);

  const runValidation = useCallback(() => {
    timeoutIds.current.forEach(window.clearTimeout);
    timeoutIds.current = [];
    if (progressInterval.current !== null) {
      window.clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
    setHasRun(true);
    setIsRunning(true);
    setPipelineStep(0);
    setPassedChecks(0);
    setProgress(0);

    const steps = [
      { delay: 0, action: () => setPipelineStep(1) },
      { delay: 500, action: () => setPipelineStep(2) },
      { delay: 1000, action: () => setPipelineStep(3) },
      { delay: 1500, action: () => setPipelineStep(4) },
      { delay: 2000, action: () => setPipelineStep(5) },
      { delay: 2600, action: () => setPassedChecks(1) },
      { delay: 3300, action: () => setPassedChecks(2) },
      { delay: 4000, action: () => setPassedChecks(3) },
      { delay: 4700, action: () => setPassedChecks(4) },
      {
        delay: 6000,
        action: () => {
          setProgress(100);
          setIsRunning(false);
          if (progressInterval.current !== null) {
            window.clearInterval(progressInterval.current);
            progressInterval.current = null;
          }
        },
      },
    ];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPipelineStep(5);
      setPassedChecks(4);
      setProgress(100);
      setIsRunning(false);
      return;
    }

    const startedAt = performance.now();
    progressInterval.current = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      setProgress(Math.min(Math.round((elapsed / 6000) * 100), 100));
    }, 100);
    steps.forEach(({ delay, action }) => {
      timeoutIds.current.push(window.setTimeout(action, delay));
    });
  }, []);

  useEffect(() => {
    return () => {
      timeoutIds.current.forEach(window.clearTimeout);
      if (progressInterval.current !== null) {
        window.clearInterval(progressInterval.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_46%,hsl(var(--primary)/0.18),transparent_42%),radial-gradient(ellipse_at_12%_18%,hsl(var(--primary)/0.08),transparent_34%),linear-gradient(140deg,hsl(var(--background)),hsl(var(--secondary)/0.38)_52%,hsl(var(--background))]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(hsl(var(--foreground))_0.65px,transparent_0.65px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.09] px-4 py-2 text-sm font-semibold text-primary shadow-sm shadow-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              <span className="block">Ishwar KC</span>
              <span className="mt-1 block bg-gradient-to-r from-primary via-primary to-primary/65 bg-clip-text text-transparent">
                Data QA Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0"
            >
              I help make healthcare data more dependable—building quality checks that keep complex ETL pipelines accurate, consistent, and trustworthy.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="mb-9 grid grid-cols-3 gap-2 sm:gap-3 lg:max-w-xl"
            >
              {[
                { value: '3', label: 'Years experience' },
                { value: '99.9%', label: 'Data accuracy' },
                { value: '40%', label: 'Efficiency gain' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="min-w-0 rounded-2xl border border-border/80 bg-card/65 px-2 py-3 text-center shadow-lg shadow-black/10 backdrop-blur-xl sm:px-4 sm:py-4 lg:text-left"
                >
                  <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="mb-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button
                size="xl"
                asChild
                className="group h-12 w-full rounded-xl px-7 shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20 sm:w-auto"
              >
                <a href="#experience" className="flex items-center gap-2">
                  View My Experience
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
                className="h-12 w-full rounded-xl border-border/80 bg-background/70 px-7 transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel={social.icon === 'mail' ? undefined : 'noopener noreferrer'}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/70',
                    'text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary'
                  )}
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Illustrative ETL validation demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/[0.08] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/75 shadow-[0_24px_80px_-32px_hsl(var(--primary)/0.18)] backdrop-blur-2xl sm:rounded-[2rem]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-5 py-4 sm:px-7 sm:py-5">
                <div>
                  <h2 className="font-semibold tracking-tight">Claims ETL validation</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">Sample run, illustrative data</p>
                </div>
                <button
                  type="button"
                  onClick={runValidation}
                  disabled={isRunning}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:translate-y-0 disabled:cursor-wait disabled:opacity-80"
                >
                  {isRunning ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Running
                    </>
                  ) : (
                    hasRun ? 'Run again' : 'Run validation'
                  )}
                </button>
              </div>

              <div className="space-y-3.5 p-5 sm:space-y-4 sm:p-6">
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center px-1 pb-1 pt-1" aria-hidden="true">
                  {[
                    { label: 'Source', Icon: Table },
                    { label: 'Transform', Icon: ArrowLeftRight },
                    { label: 'Load', Icon: Database },
                  ].map(({ label, Icon }, index) => (
                    <div key={label} className="contents">
                      <div className={cn('flex flex-col items-center gap-1.5 text-sm transition-colors', pipelineStep >= index * 2 + 1 ? 'text-foreground' : 'text-muted-foreground')}>
                        <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl border bg-background text-muted-foreground transition-all duration-300 sm:h-14 sm:w-14', pipelineStep >= index * 2 + 1 && 'border-primary bg-primary/[0.09] text-primary')}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                        </div>
                        <span>{label}</span>
                      </div>
                      {index < 2 && (
                        <div
                          className={cn(
                            'relative mb-5 h-0.5 w-5 overflow-hidden bg-border after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:content-[""] sm:w-10',
                            pipelineStep >= index * 2 + 2 && 'after:scale-x-100'
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-border/70 bg-secondary/40 px-3.5 py-3 font-mono text-xs leading-[1.65] text-foreground sm:px-4">
                  <div className="overflow-x-auto">
                    <code className="block min-w-max">
                      <span className="text-primary">SELECT</span> COUNT(*) <span className="text-primary">FROM</span> src.claims s
                      <br />
                      <span className="text-primary">LEFT JOIN</span> tgt.claims t <span className="text-primary">USING</span> (claim_id)
                      <br />
                      <span className="text-primary">WHERE</span> t.claim_id <span className="text-primary">IS NULL</span> <span className="text-primary">OR</span> s.paid_amt &lt;&gt; t.paid_amt;
                    </code>
                  </div>
                  <div className="mt-2 block border-t border-dashed border-border pt-2 text-muted-foreground" aria-live="polite">
                    {isRunning ? (
                      'Running...'
                    ) : hasRun ? (
                      <>Result: <strong className="font-medium text-primary">0 mismatches</strong> across 1,204,882 rows</>
                    ) : (
                      'Waiting to run...'
                    )}
                  </div>
                </div>

                <ul className="grid list-none gap-2 p-0">
                  {validationChecks.map((check, index) => (
                    <li
                      key={check}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors duration-300 sm:px-4',
                        passedChecks > index
                          ? 'border-transparent bg-primary/[0.09] text-foreground'
                          : 'border-border text-muted-foreground'
                      )}
                    >
                      {check}
                      <Check
                        className={cn('h-4 w-4 shrink-0 transition-colors', passedChecks > index ? 'text-primary' : 'text-border')}
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 px-1 pt-1" aria-live="polite">
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-full transition-all duration-500"
                    style={{
                      background: `conic-gradient(hsl(var(--primary)) ${progress}%, hsl(var(--border)) 0)`,
                    }}
                    role="progressbar"
                    aria-label="Validation progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  >
                    <div className="grid h-[50px] w-[50px] place-items-center rounded-full bg-card text-sm font-bold text-foreground">
                      {progress}%
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {isRunning ? 'Running' : hasRun ? 'All 4 checks passed' : 'Not run yet'}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {isRunning
                        ? 'Comparing source and target.'
                        : hasRun
                          ? 'Source and target agree. Safe to release.'
                          : 'Press Run validation to see the checks pass.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}