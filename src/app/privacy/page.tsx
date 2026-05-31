import { Metadata } from 'next';
import { PrivacyContent } from '@/components/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy - Roblox Anime Game Guides',
  description: 'Read the AnimeGameHub privacy policy to understand how we handle basic website data, analytics, cookies, and user privacy.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
