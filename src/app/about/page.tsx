import { Metadata } from 'next';
import { AboutContent } from '@/components/about-content';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AnimeGameHub - your go-to source for Roblox anime game codes, tier lists, and guides.',
};

export default function AboutPage() {
  return <AboutContent />;
}
