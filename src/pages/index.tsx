import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { AnnouncementWebsite } from '@/components/announcement-website'
import { Layout } from '@/components/layout'
import { buttonVariants } from '@/components/ui/button'
import { TechsList } from '../components/techs-list'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Project X | Home</title>
      </Head>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="mt-20 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-7xl">
            Seja bem vindo
            <br className="hidden sm:inline" />
            ao mais novo ecommerce para você
          </h1>
          <p className="text-md my-6 max-w-[700px] text-slate-700 dark:text-slate-400 lg:text-lg">
            Esse é o novo site/projeto feito pelo [Link Linkedin | Iury França]
            para poder mostrar as vocês no o que ele esteve trabalhando.
          </p>
        </div>
        <div className="flex justify-center gap-4">
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
        <TechsList />
      </section>
    </Layout>
  )
}
