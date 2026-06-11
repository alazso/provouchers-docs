import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const revalidate = false;

const baseUrl = 'https://alaz.so/provouchers';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    ...source.getPages().map((page) => ({
      url: `${baseUrl}${page.url}`,
      priority: page.slugs.length === 0 ? 0.9 : 0.7,
    })),
  ];
}
