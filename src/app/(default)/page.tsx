import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings2, Link2, LifeBuoy, Briefcase, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <Settings2 className="h-10 w-10 text-primary" />,
    title: 'Customized ERP Solutions',
    description: 'Tailored ERP systems designed to fit your unique business processes and goals.',
    dataAiHint: 'gears technology',
  },
  {
    icon: <Link2 className="h-10 w-10 text-primary" />,
    title: 'Seamless CRM Integration',
    description: 'Integrate CRM software smoothly to manage customer interactions and data.',
    dataAiHint: 'network connection',
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    title: 'Ongoing Support & Training',
    description: 'Comprehensive training and continuous support to ensure optimal system usage.',
    dataAiHint: 'support team',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Industry-Specific Expertise',
    description: 'Leverage our deep knowledge across various industries for targeted solutions.',
    dataAiHint: 'business meeting',
  },
];

const servicesPreview = [
  { title: "ERP Consulting", description: "Streamline operations with our expert ERP analysis and implementation.", dataAiHint: "consulting meeting" },
  { title: "CRM Solutions", description: "Enhance customer relationships and drive sales with tailored CRM strategies.", dataAiHint: "sales chart" },
];

const caseStudiesPreview = [
  { title: "XYZ Corp Efficiency Boost", summary: "30% productivity increase via custom ERP.", dataAiHint: "office productivity" },
  { title: "ABC Ltd Sales Growth", summary: "25% sales increase with a robust CRM strategy.", dataAiHint: "retail success" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Transform Your Business with <span className="text-primary">ZYLVA</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Expert ERP and CRM Solutions Tailored for Your Success. We empower businesses with innovative technology and strategic insights.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Why Choose ZYLVA?</h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
            We provide cutting-edge solutions and dedicated support to help your business thrive in a competitive landscape.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Our Core Services</h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
            Discover how our specialized ERP and CRM services can revolutionize your business operations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {servicesPreview.map((service) => (
              <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/${service.title.replace(/\s+/g, '-')}/600/400`}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={service.dataAiHint}
                />
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/services">Explore All Services <ChevronRight className="ml-1 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results through our expert consulting.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudiesPreview.map((cs) => (
               <Card key={cs.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
               <Image 
                 src={`https://picsum.photos/seed/${cs.title.replace(/\s+/g, '-')}/600/400`}
                 alt={cs.title}
                 width={600}
                 height={400}
                 className="w-full h-48 object-cover"
                 data-ai-hint={cs.dataAiHint}
               />
               <CardHeader>
                 <CardTitle className="text-xl">{cs.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground">{cs.summary}</p>
               </CardContent>
             </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/case-studies">View More Case Studies <ChevronRight className="ml-1 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-primary-foreground/80">
            Let's discuss how ZYLVA can tailor ERP and CRM solutions to meet your specific needs and drive your business forward.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105 px-10 py-6 text-lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
