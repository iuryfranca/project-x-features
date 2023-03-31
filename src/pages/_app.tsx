import type { AppProps } from 'next/app'
import { Inter as FontSans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { CartProvider } from '@/core/context/cart-context'
import { UserProvider } from '@/core/context/user-context'

import { AuthProvider } from '../core/context/auth-context'

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

      <CartProvider>
        <UserProvider>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthProvider>
        </UserProvider>
      </CartProvider>
    </>
  )
}

export default App
