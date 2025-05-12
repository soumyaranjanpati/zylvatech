import ServiceCard from '@/components/ServiceCard';
import { ServerCog, UsersRound, BookOpenCheck, Brain, SearchCode, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Cobee Solutions',
  description: 'Explore Cobee\'s comprehensive ERP and CRM consulting services, including implementation, customization, training, and support.',
};

const services = [
  {
    icon: <ServerCog className="h-8 w-8 text-primary" />,
    title: 'ERP Consulting & Implementation',
    description: 'In-depth analysis, strategic planning, and full-cycle implementation of ERP systems (like SAP, Oracle NetSuite, Microsoft Dynamics 365) to streamline your core business operations, from finance to supply chain.',
    imageSrc: 'https://picsum.photos/seed/erp-consulting/500/300',
    imageAlt: 'ERP Consulting Session',
    dataAiHint: 'business planning',
  },
  {
    icon: <UsersRound className="h-8 w-8 text-primary" />,
    title: 'CRM Solutions & Strategy',
    description: 'Tailored CRM strategies and implementation (Salesforce, HubSpot, Zoho CRM) to enhance customer relationships, optimize sales pipelines, and drive marketing effectiveness for sustainable growth.',
    imageSrc: 'https://picsum.photos/seed/crm-solutions/500/300',
    imageAlt: 'CRM Dashboard',
    dataAiHint: 'customer relations',
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    title: 'Customization & Integration',
    description: 'Custom development and seamless integration of your ERP and CRM platforms with other business applications, ensuring a unified and efficient technology ecosystem.',
    imageSrc: 'https://picsum.photos/seed/custom-integration/500/300',
    imageAlt: 'System Integration Diagram',
    dataAiHint: 'software development',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'Business Process Optimization',
    description: 'We analyze your existing workflows and leverage ERP/CRM capabilities to redesign processes for maximum efficiency, cost reduction, and improved productivity.',
    imageSrc: 'https://picsum.photos/seed/process-optimization/500/300',
    imageAlt: 'Optimized Workflow Chart',
    dataAiHint: 'workflow diagram',
  },
   {
    icon: <SearchCode className="h-8 w-8 text-primary" />,
    title: 'Data Analytics & Reporting',
    description: 'Unlock valuable insights from your business data. We help you set up advanced analytics and reporting dashboards within your ERP/CRM systems for informed decision-making.',
    imageSrc: 'https://picsum.photos/seed/data-analytics/500/300',
    imageAlt: 'Data Analytics Dashboard',
    dataAiHint: 'charts graphs',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Training & Support',
    description: 'Comprehensive training programs for your team and ongoing technical support to ensure smooth adoption, proficient use of the systems, and quick issue resolution.',
    imageSrc: 'https://picsum.photos/seed/training-support/500/300',
    imageAlt: 'Team Training Session',
    dataAiHint: 'team collaboration',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Comprehensive Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cobee offers a full spectrum of ERP and CRM consulting services designed to optimize your business processes and drive sustainable growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                dataAiHint={service.dataAiHint}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
