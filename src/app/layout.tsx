import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Hospital — Quality Care',
  description: 'Compassionate, comprehensive healthcare for your community.',
  openGraph: {
    title: 'Your Hospital — Quality Care',
    description: 'Compassionate, comprehensive healthcare for your community.',
    url: 'https://example.com',
    siteName: 'Your Hospital',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}