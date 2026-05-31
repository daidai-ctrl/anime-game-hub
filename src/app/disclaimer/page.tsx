import { Metadata } from 'next';
import { DisclaimerContent } from '@/components/disclaimer-content';

export const metadata: Metadata = {
  title: 'Disclaimer - Codes, Tier Lists & Game Guides',
  description: 'Read the AnimeGameHub disclaimer about Roblox anime game codes, tier lists, rankings, guides, and third-party game information.',
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
