import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AnimeGameHub - Roblox Anime Game Codes, Tier Lists & Guides',
    template: '%s | AnimeGameHub',
  },
  description:
    'Latest Roblox anime game codes, tier lists, and guides for Blox Fruits, Anime Rangers, Anime Vanguards and more. Updated daily!',
  keywords: [
    'Roblox codes',
    'Blox Fruits codes',
    'Anime Rangers codes',
    'Anime Vanguards codes',
    'Roblox tier list',
    'Blox Fruits tier list',
    'anime game codes',
    'Roblox guides',
  ],
  authors: [{ name: 'AnimeGameHub' }],
  openGraph: {
    title: 'AnimeGameHub - Roblox Anime Game Codes, Tier Lists & Guides',
    description:
      'Latest Roblox anime game codes, tier lists, and guides. Updated daily!',
    type: 'website',
    siteName: 'AnimeGameHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeGameHub - Roblox Anime Game Codes, Tier Lists & Guides',
    description:
      'Latest Roblox anime game codes, tier lists, and guides. Updated daily!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
