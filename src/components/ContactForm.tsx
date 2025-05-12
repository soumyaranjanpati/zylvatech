"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contactFormSchema, submitContactForm, type ContactFormState } from '@/app/(default)/contact/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        'Submit Inquiry'
      )}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<ContactFormState | null, FormData>(submitContactForm, null);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      form.reset(); // Reset form fields on successful submission
    } else if (state?.status === 'error') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
      // Set form errors from server action response
      if (state.errors) {
        if (state.errors.name) form.setError('name', { type: 'server', message: state.errors.name.join(', ') });
        if (state.errors.email) form.setError('email', { type: 'server', message: state.errors.email.join(', ') });
        if (state.errors.phone) form.setError('phone', { type: 'server', message: state.errors.phone.join(', ') });
        if (state.errors.message) form.setError('message', { type: 'server', message: state.errors.message.join(', ') });
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="border-input focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} className="border-input focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(123) 456-7890" {...field} className="border-input focus:border-primary" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  {...field}
                  className="border-input focus:border-primary"
                />
              </FormControl>
              <FormDescription>
                Please provide as much detail as possible.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
