import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website Generator - AI-Powered Landing Pages',
  description:
    'Generate beautiful landing pages from your website ideas using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
