import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '@/src/config/site'

import { AnnouncementWebsite } from '@/src/components/announcement-website'
import { Layout } from '@/src/components/layout'
import { buttonVariants } from '@/src/components/ui/button'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[1200px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-7xl">
            Project X<br className="hidden sm:inline" />o novo ecommerce para
            você usar
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Esse é o novo site/projeto feito pelo [Link Linkedin | Iury França]
            para poder mostrar as vocês no o que ele esteve trabalhando.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'lg' })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            GitHub
          </Link>
        </div>
        <AnnouncementWebsite />
      </section>
    </Layout>
  )
}
