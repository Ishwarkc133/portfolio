import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Create a mock client for development when no API key is present
const createMockResend = () => ({
  emails: {
    send: async (options: { from: string; to: string[]; subject: string; html: string; text?: string }) => {
      console.log('📧 [MOCK RESEND] Email would be sent:');
      console.log('  From:', options.from);
      console.log('  To:', options.to);
      console.log('  Subject:', options.subject);
      console.log('  HTML:', options.html?.substring(0, 200) + '...');
      return { data: { id: 'mock-' + Date.now() }, error: null };
    },
  },
});

// Use real Resend client if API key is available, otherwise use mock
export const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : createMockResend();

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'ishwarkc133@gmail.com';
export const FROM_EMAIL = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';