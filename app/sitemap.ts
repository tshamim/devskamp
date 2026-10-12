import type { MetadataRoute } from 'next'
import { catalogs, siteUrl } from '@/lib/content'
export default function sitemap(): MetadataRoute.Sitemap {
 const paths = ['', '/about', '/contact', ...Object.entries(catalogs).flatMap(([key, c]) => [`/${key}`, ...c.entries.map(e => `/${key}/${e.slug}`)])]
 return paths.map(path => ({ url: `${siteUrl}${path}`, changeFrequency: path.startsWith('/resources/') ? 'monthly' : 'weekly', priority: path === '' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6 }))
}
