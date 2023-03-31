import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { AuthToggle } from '@/components/auth-toggle'
import CartToggle from '@/components/cart-toggle'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-full w-full border-b border-b-slate-200 bg-white/80 backdrop-blur-sm backdrop-saturate-50 dark:border-b-slate-700 dark:bg-slate-900/80">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-slate-700 dark:text-slate-400',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeToggle />
            <CartToggle />
            <AuthToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
