import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcingsmallbusinesses.com'), title: { default: 'Outsourcing Small Businesses | Offshore outsourcing guides', template: '%s | Outsourcing Small Businesses' }, description: 'Stealth Agents-style guides for outsourcing for small businesses: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourcing Small Businesses', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcingsmallbusinesses.com', siteName: 'Outsourcing Small Businesses', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
