'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Linkedin, ExternalLink, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig, socialLinks } from '@/content/config';
import { toast } from 'sonner';
import { SocialIcon } from '@/components/ui/social-icon';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Honeypot check
    if (data.honeypot) {
      toast.error('Spam detected');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or email directly.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ishwarkc133@gmail.com', href: 'mailto:ishwarkc133@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+977 984-0005868', href: 'tel:+9779840005868' },
    { icon: MapPin, label: 'Location', value: 'Balaju, Kathmandu, Nepal', href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ishwar-kc-6a3681245', href: 'https://linkedin.com/in/ishwar-kc-6a3681245' },
  ];

  return (
    <section
      id="contact"
      className="bg-secondary/20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 id="contact-heading" className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const content = (
                      <>
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="break-words font-medium text-foreground">{item.value}</p>
                        </div>
                        {item.href?.startsWith('https://') && (
                          <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                      </>
                    );
                    const className = cn(
                      'flex items-start gap-4 rounded-xl bg-muted/50 p-4 transition-colors',
                      item.href ? 'hover:bg-muted' : 'cursor-default'
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('https://') ? '_blank' : undefined}
                        rel={item.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className={className}>
                        {content}
                      </div>
                    );
                  })}
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">Connect on Social</h4>
                  <div className="flex gap-4">
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
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  {/* Honeypot field */}
                  <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register('name')}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-destructive" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register('email')}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...register('subject')}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-sm text-destructive" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      {...register('message')}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm" role="status">
                      <CheckCircle className="h-4 w-4" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-destructive text-sm" role="alert">
                      <AlertCircle className="h-4 w-4" />
                      <span>Failed to send message. Please try again or email directly.</span>
                    </div>
                  )}

                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}