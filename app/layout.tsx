import type { Metadata } from 'next';
import './globals.css';
import BottomNavWrapper from '@/components/BottomNavWrapper';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'eWa - Super App',
  description: 'Your digital life in one app',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: ['/ewa-icon.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl">
            {children}
            <BottomNavWrapper />
          </div>
        </Providers>
      </body>
    </html>
  );
}
