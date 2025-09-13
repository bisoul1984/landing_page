import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bisrate Tadesse - Software Engineer & Full-Stack Developer',
    template: '%s | Bisrate Tadesse'
  },
  description: 'Experienced Software Engineer and Full-Stack Developer specializing in modern web applications, microservices architecture, and scalable solutions. Portfolio showcasing full-stack development expertise.',
  keywords: [
    'software engineer',
    'full-stack developer',
    'software architecture',
    'full-stack development',
    'microservices',
    'serverless',
    'DevOps',
    'portfolio',
    'React',
    'Node.js',
    'TypeScript',
    'modern web technologies',
    'software development'
  ],
  authors: [{ name: 'Bisrate Tadesse' }],
  creator: 'Bisrate Tadesse',
  publisher: 'Bisrate Tadesse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bisratetadesse.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
      'de-DE': '/de',
      'zh-CN': '/zh',
      'ja-JP': '/ja',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bisratetadesse.com',
    title: 'Bisrate Tadesse - Software Engineer & Full-Stack Developer',
    description: 'Experienced Software Engineer and Full-Stack Developer specializing in modern web applications, microservices architecture, and scalable solutions.',
    siteName: 'Bisrate Tadesse Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bisrate Tadesse - Software Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisrate Tadesse - Software Engineer & Full-Stack Developer',
    description: 'Experienced Software Engineer and Full-Stack Developer specializing in modern web applications, microservices architecture, and scalable solutions.',
    images: ['/og-image.jpg'],
    creator: '@bisratetadesse',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bisrate Tadesse Portfolio" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
} 