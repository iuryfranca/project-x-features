import Link from 'next/link'
import { useUserContext } from '@/core/context/user-context'

import { siteConfig } from '@/config/site'
import { AuthToggle } from '@/components/auth-toggle'
import CartToggle from '@/components/cart/cart-toggle'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'

export function SiteHeader() {
  const { user } = useUserContext()
  return (
    <header className="sticky top-0 z-40 h-full w-full border-b border-b-border bg-background/80 backdrop-blur-sm backdrop-saturate-50 dark:border-b-border dark:bg-background/80">
      <div className="container flex h-16 items-center sm:justify-between sm:space-x-0">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 rounded-lg bg-muted p-1">
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
            {user && <p className="!ml-2">|</p>}
            <AuthToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
