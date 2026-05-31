import { Metadata } from 'next';
import { AboutContent } from '@/components/about-content';

export const metadata: Metadata = {
  title: 'About Us - Roblox Anime Game Codes & Guides',
  description: 'Learn about AnimeGameHub, a Roblox anime game resource site for codes, tier lists, rankings, guides, and player progression tips.',
};

export default function AboutPage() {
  return <AboutContent />;
}
