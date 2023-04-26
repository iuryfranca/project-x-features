import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100vh_-_10.2rem)]">{children}</main>
      <div
        className={cn(
          '',
          pathname?.startsWith('/cart-details') ? 'hidden md:block' : ''
        )}
      >
        <SiteFooter />
      </div>
    </>
  )
}
