import { NavItem } from '@/types/nav'

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    linkedIn: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Project X',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Shopping',
      href: '/shopping',
    },
    {
      title: 'Favoritos',
      href: '/favorites',
    },
  ],
  links: {
    github: 'https://github.com/iuryfranca/project-x-features',
    linkedIn: 'https://www.linkedin.com/in/iury-franca-37873318b',
  },
}
