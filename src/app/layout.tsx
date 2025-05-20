import type { Metadata } from 'next';
import { Lato } from 'next/font/google'; // Use Lato font from Google Fonts
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Instantiate Lato font
const lato = Lato({
  variable: '--font-lato-sans', // Define CSS variable name
  weight: ['300', '400', '700'], // Specify desired weights
  subsets: ['latin'],
});

// Note: GeistMono is not used in the current design, but kept if needed later
// const geistMono = GeistMono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'ZYLVA',
  description: 'ZYLVA offers expert ERP and CRM consulting services to help your business thrive.',
  keywords: ["ERP consulting", "CRM solutions", "business consulting", "ZYLVA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply the Lato font variable to the body */}
      <body className={`${lato.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
