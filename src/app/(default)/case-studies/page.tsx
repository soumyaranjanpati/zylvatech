import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudySummarizer from '@/components/CaseStudySummarizer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - ZYLVA Solutions',
  description: 'Explore success stories and learn how ZYLVA has helped businesses like yours achieve their goals with our ERP and CRM solutions.',
};

const caseStudies = [
  {
    title: 'Improving Efficiency for XYZ Corp',
    summary: 'Implemented a customized ERP solution that increased productivity by 30%, streamlined workflows, and reduced operational costs significantly.',
    imageSrc: 'https://picsum.photos/seed/xyz-corp/500/300',
    imageAlt: 'XYZ Corp Office',
    link: '/case-studies/xyz-corp', // Placeholder link
    dataAiHint: 'corporate office',
  },
  {
    title: 'Boosting Sales for ABC Ltd',
    summary: 'Developed a robust CRM strategy resulting in a 25% increase in sales, improved customer retention, and enhanced marketing ROI.',
    imageSrc: 'https://picsum.photos/seed/abc-ltd/500/300',
    imageAlt: 'ABC Ltd Storefront',
    link: '/case-studies/abc-ltd', // Placeholder link
    dataAiHint: 'retail store',
  },
  {
    title: 'Manufacturing Co. Process Automation',
    summary: 'Automated key manufacturing processes using an integrated ERP, leading to a 15% reduction in production time and better inventory management.',
    imageSrc: 'https://picsum.photos/seed/manufacturing-co/500/300',
    imageAlt: 'Manufacturing Plant',
    link: '/case-studies/manufacturing-co', // Placeholder link
    dataAiHint: 'factory interior',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Success Stories</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how ZYLVA has partnered with businesses across various industries to deliver impactful ERP and CRM solutions, driving real results and fostering growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Client Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.title}
                title={study.title}
                summary={study.summary}
                imageSrc={study.imageSrc}
                imageAlt={study.imageAlt}
                link={study.link}
                dataAiHint={study.dataAiHint}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <CaseStudySummarizer />
          </div>
        </div>
      </section>
    </>
  );
}
