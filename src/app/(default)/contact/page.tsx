import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us - Cobee Solutions',
  description: 'Get in touch with Cobee Solutions for expert ERP and CRM consulting. We are ready to help you transform your business.',
};

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: 'Email Us',
    value: 'info@cobee.com', // Placeholder
    href: 'mailto:info@cobee.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: 'Call Us',
    value: '+1 (555) 123-4567', // Placeholder
    href: 'tel:+15551234567',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: 'Visit Us',
    value: '123 Business Rd, Innovation City, ST 54321', // Placeholder
    href: '#', // Could be a Google Maps link
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re here to help you navigate your ERP and CRM challenges. Reach out to us with your questions or to start a project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="shadow-xl border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-foreground">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below, and one of our consultants will contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-xl border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">Contact Information</CardTitle>
                  <CardDescription>
                    You can also reach us through the following channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{detail.title}</h3>
                        <a
                          href={detail.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={detail.href.startsWith('http') ? '_blank' : '_self'}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {detail.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <div className="rounded-lg overflow-hidden shadow-xl">
                 <Image 
                    src="https://picsum.photos/seed/map-location/600/400" 
                    alt="Map location of Cobee Solutions"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    data-ai-hint="map location"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
