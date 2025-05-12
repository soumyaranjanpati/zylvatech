import BlogPostCard from '@/components/BlogPostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cobee Solutions',
  description: 'Stay updated with the latest insights, trends, and best practices in ERP and CRM systems from the experts at Cobee.',
};

const blogPosts = [
  {
    title: 'The Future of ERP Systems: AI and Automation',
    summary: 'Exploring emerging trends like AI-driven analytics, IoT integration, and hyperautomation that are shaping the next generation of ERP systems.',
    imageSrc: 'https://picsum.photos/seed/future-erp/500/300',
    imageAlt: 'Futuristic ERP Dashboard',
    link: '/blog/future-of-erp', // Placeholder link
    author: 'Dr. Eva Core',
    date: 'October 26, 2023',
    dataAiHint: 'futuristic technology',
  },
  {
    title: 'Maximizing CRM Efficiency: Best Practices for 2024',
    summary: 'Discover actionable best practices for leveraging your CRM tools effectively, from data hygiene to sales process automation and customer journey mapping.',
    imageSrc: 'https://picsum.photos/seed/crm-efficiency/500/300',
    imageAlt: 'CRM Efficiency Chart',
    link: '/blog/maximizing-crm-efficiency', // Placeholder link
    author: 'Mark Relation',
    date: 'November 5, 2023',
    dataAiHint: 'business chart',
  },
  {
    title: 'Choosing the Right ERP: A Comprehensive Guide for SMEs',
    summary: 'A step-by-step guide for Small and Medium Enterprises (SMEs) on how to select the ERP system that best fits their needs, budget, and growth strategy.',
    imageSrc: 'https://picsum.photos/seed/choosing-erp/500/300',
    imageAlt: 'Business owner choosing ERP',
    link: '/blog/choosing-erp-sme', // Placeholder link
    author: 'Jane Strategist',
    date: 'November 12, 2023',
    dataAiHint: 'business decision',
  },
   {
    title: 'The Impact of Cloud-Based CRM on Customer Engagement',
    summary: 'How cloud CRM solutions are revolutionizing customer engagement, offering scalability, accessibility, and real-time data for personalized interactions.',
    imageSrc: 'https://picsum.photos/seed/cloud-crm/500/300',
    imageAlt: 'Cloud technology graphic',
    link: '/blog/cloud-crm-engagement', // Placeholder link
    author: 'Peter Cloud',
    date: 'November 18, 2023',
    dataAiHint: 'cloud computing',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cobee Insights & Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your source for the latest news, trends, and expert advice in ERP and CRM solutions. Stay informed and ahead of the curve.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.title}
                title={post.title}
                summary={post.summary}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                link={post.link}
                author={post.author}
                date={post.date}
                dataAiHint={post.dataAiHint}
              />
            ))}
          </div>
          {/* Pagination could be added here if many posts */}
        </div>
      </section>
    </>
  );
}
