import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcingsmallbusinesses.com'),
  title: {
    default: 'Filipino talent for small businesses | Outsourcing Small Businesses',
    template: '%s | Outsourcing Small Businesses',
  },
  description: 'Plan a Filipino support role around the recurring admin, customer support, operations, and reporting work inside your small business.',
  openGraph: {
    title: 'Filipino talent for small businesses',
    description: 'Turn recurring work into a clear role for Filipino talent.',
    url: 'https://outsourcingsmallbusinesses.com',
    siteName: 'Outsourcing Small Businesses',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
