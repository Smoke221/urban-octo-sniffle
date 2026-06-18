import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const EMAILJS_TEMPLATES = {
  /** Shared by Contact page + Raise Ticket modal */
  support: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  join: import.meta.env.VITE_EMAILJS_JOIN_TEMPLATE_ID as string,
} as const;

export const REPLY_TO_EMAIL =
  (import.meta.env.VITE_EMAILJS_REPLY_TO as string) || 'badarlibasanagouda@gmail.com';

export async function sendFormEmail(
  templateId: string,
  params: Record<string, string>,
) {
  return emailjs.send(SERVICE_ID, templateId, params, PUBLIC_KEY);
}
