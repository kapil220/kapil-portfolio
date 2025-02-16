// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kapil Singh Rajput - Frontend Developer',
  description: 'Portfolio of Kapil Singh Rajput - Frontend Developer specializing in React and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}