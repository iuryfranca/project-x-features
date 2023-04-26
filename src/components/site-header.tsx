import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { AuthToggle } from '@/components/auth-toggle'
import CartToggle from '@/components/cart/cart-toggle'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-full w-full border-b border-b-border bg-background/80 backdrop-blur-sm backdrop-saturate-50 dark:border-b-border dark:bg-background/80">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center -space-x-1 sm:space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ModeToggle />
            <CartToggle />
            <AuthToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
