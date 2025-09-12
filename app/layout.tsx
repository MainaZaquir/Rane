import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deejay Rane - Professional DJ & Content Creator',
  description: 'Professional DJ and content creator making your nights and events unforgettable. Book now for weddings, corporate events, and parties.',
  keywords: ['DJ', 'Content Creator', 'Wedding DJ', 'Event DJ', 'Music', 'Entertainment'],
  authors: [{ name: 'Deejay Rane' }],
  openGraph: {
    title: 'Deejay Rane - Professional DJ & Content Creator',
    description: 'Making your nights and events unforgettable',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deejay Rane - Professional DJ & Content Creator',
    description: 'Making your nights and events unforgettable',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}