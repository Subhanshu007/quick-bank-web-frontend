import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.quickbank.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/login', '/signup', '/send-money', '/receive-money', '/dashboard', '/profile']

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))
}

