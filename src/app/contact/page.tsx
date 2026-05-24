import { Metadata } from 'next';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact Us - AnimeGameHub',
  description: 'Contact AnimeGameHub for questions, suggestions, or error reports.',
};

export default function ContactPage() {
  return <ContactContent />;
}
