import { Metadata } from 'next';
import { PrivacyContent } from '@/components/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy - AnimeGameHub',
  description: 'Privacy Policy for AnimeGameHub. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
