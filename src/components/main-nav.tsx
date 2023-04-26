'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-bold">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Home
        </Link>
        <Link
          href="/shopping"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/shopping' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Compras
        </Link>
        <Link
          href="/favorites"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/favorites')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Favoritos
        </Link>
        <Link
          href="/cart-details"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/cart-details')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Carrinho
        </Link>
      </nav>
    </div>
  )
}
