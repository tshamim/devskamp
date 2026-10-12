import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/content'
export default function robots(): MetadataRoute.Robots {
  const publicRules = { allow: '/', disallow: ['/api/', '/internal/', '/docs/'] }
  return { rules: [
    { userAgent: '*', ...publicRules },
    { userAgent: 'OAI-SearchBot', ...publicRules },
  ], sitemap: `${siteUrl}/sitemap.xml` }
}
