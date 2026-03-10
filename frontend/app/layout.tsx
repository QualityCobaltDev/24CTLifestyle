import '../styles/globals.css';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24CTLifestyle',
  description: 'Membership-driven business resource platform'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
