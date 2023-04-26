import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-background font-sans text-foreground antialiased dark:bg-background dark:text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
