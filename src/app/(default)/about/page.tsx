import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, ShieldCheck, Users, Lightbulb, Handshake } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ZYLVA Solutions',
  description: 'Learn about ZYLVA\'s mission, vision, and values in providing expert ERP and CRM consulting.',
};

const values = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    name: 'Integrity',
    description: 'We operate with transparency and honesty in all our engagements.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    name: 'Customer Focus',
    description: 'Our clients\' success is our top priority, driving every solution we deliver.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    name: 'Innovation',
    description: 'We continuously seek and implement cutting-edge solutions for modern business challenges.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    name: 'Collaboration',
    description: 'We work closely with our clients and partners to achieve shared goals.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About ZYLVA Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses with transformative ERP and CRM solutions to drive growth, efficiency, and lasting success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://picsum.photos/seed/team-meeting/600/400"
                alt="ZYLVA Team Meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="team meeting"
              />
            </div>
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    To empower businesses with effective ERP and CRM solutions that drive growth and efficiency. We strive to deliver measurable results and build long-term partnerships.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    Become a leading consulting partner for innovative business solutions, recognized for our expertise, commitment, and transformative impact on client operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.name} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
