import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { resend, CONTACT_EMAIL, FROM_EMAIL } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = validation.data;

    // Honeypot spam check
    if (honeypot) {
      // Silently succeed to not reveal the honeypot
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }

    // In development without RESEND_API_KEY, just log
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 [DEV MODE] Contact form submission:');
      console.log('  Name:', name);
      console.log('  Email:', email);
      console.log('  Subject:', subject);
      console.log('  Message:', message);
      return NextResponse.json(
        { message: 'Message sent successfully (dev mode - check console)' },
        { status: 200 }
      );
    }

    // Send email via Resend in production
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 24px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
            Sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio contact form at ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}