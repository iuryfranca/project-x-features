import type { AppProps } from 'next/app'
import { Inter as FontSans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

import '@/src/styles/globals.css'
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

      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
