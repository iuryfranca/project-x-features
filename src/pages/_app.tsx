import type { AppProps } from 'next/app'
import { Inter as FontSans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { AuthProvider } from '@/core/context/auth-context'
import { CartProvider } from '@/core/context/cart-context'
import { ColorsProvider } from '@/core/context/colors-context'
import { UserProvider } from '@/core/context/user-context'
import { Analytics } from '@vercel/analytics/react'

import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>

      <UserProvider>
        <AuthProvider>
          <CartProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ColorsProvider>
                <Component {...pageProps} />
                <Analytics />
                <Toaster />
                <TailwindIndicator />
              </ColorsProvider>
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </UserProvider>
    </>
  )
}

export default App
