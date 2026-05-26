import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const rawDomain = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'animegamehub.xyz';
  const baseUrl = rawDomain.startsWith('https://') ? rawDomain : `https://${rawDomain}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
