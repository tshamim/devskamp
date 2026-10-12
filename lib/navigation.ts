import { catalogs } from './content'

export type NavGroup = { key: string; label: string; href: string; intro: string; items: { title: string; href: string; description: string }[] }

export const navigation: NavGroup[] = ['products', 'services', 'industries', 'resources'].map(key => ({
  key, label: key[0].toUpperCase() + key.slice(1), href: `/${key}`, intro: catalogs[key].intro,
  items: catalogs[key].entries.map(entry => ({ title: entry.title, href: `/${key}/${entry.slug}`, description: entry.summary })),
}))

navigation.push({ key: 'company', label: 'Company', href: '/about', intro: 'Get to know Devskamp and find the right starting point for your software project.', items: [
  { title: 'About Devskamp', href: '/about', description: 'Our engineering focus, delivery approach, and Utah–Dhaka presence.' },
  { title: 'Contact & project discovery', href: '/contact', description: 'Discuss a project, request a product demo, or ask about engineering capacity.' },
] })
