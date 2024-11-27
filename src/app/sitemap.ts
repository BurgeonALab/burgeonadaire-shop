import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shop.burgeonadaire.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}