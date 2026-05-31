import { Metadata } from 'next';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact Us - Roblox Anime Game Guide Support',
  description: 'Contact AnimeGameHub for questions, feedback, corrections, partnership requests, or updates related to Roblox anime game codes and guides.',
};

export default function ContactPage() {
  return <ContactContent />;
}
