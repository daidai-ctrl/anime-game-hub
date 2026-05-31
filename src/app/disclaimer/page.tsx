import { Metadata } from 'next';
import { DisclaimerContent } from '@/components/disclaimer-content';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Legal disclaimer for AnimeGameHub. We are not affiliated with Roblox Corporation.',
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
