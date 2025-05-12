'use server';

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | null;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check the fields.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log('Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  // In a real application, you would integrate with an email service or DB here.
  // For example:
  // try {
  //   await sendEmail({ to: 'contact@cobee.com', subject: `New Inquiry from ${name}`, body: ... });
  // } catch (error) {
  //   return { message: 'Failed to send message. Please try again later.', status: 'error' };
  // }

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    status: 'success',
  };
}
