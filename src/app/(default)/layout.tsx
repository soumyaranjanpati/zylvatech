import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Cobee Solutions - ERP & CRM Consulting',
    template: '%s | Cobee Solutions',
  },
  description: 'Cobee offers expert ERP and CRM consulting services to help your business thrive. Transform your operations with our tailored solutions.',
  keywords: ['ERP consulting', 'CRM solutions', 'business consulting', 'Cobee', 'enterprise resource planning', 'customer relationship management'],
  openGraph: {
    title: 'Cobee Solutions - ERP & CRM Consulting',
    description: 'Expert ERP and CRM consulting services to help your business thrive.',
    url: 'https://www.cobee.com', // Replace with actual domain
    siteName: 'Cobee Solutions',
    images: [
      {
        url: 'https://picsum.photos/seed/cobee-og/1200/630', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Cobee Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobee Solutions - ERP & CRM Consulting',
    description: 'Expert ERP and CRM consulting services to help your business thrive.',
    // site: '@cobee', // Replace with actual Twitter handle
    // creator: '@cobee', // Replace with actual Twitter handle
    images: ['https://picsum.photos/seed/cobee-twitter/1200/600'], // Replace with actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: { // Favicon can be added here if available
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
