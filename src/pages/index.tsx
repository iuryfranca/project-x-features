import Head from 'next/head'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { AnnouncementWebsite } from '@/components/announcement-website'
import { Layout } from '@/components/layout'
import { TechsList } from '@/components/techs-list'
import { buttonVariants } from '@/components/ui/button'

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
            Esse é o novo site/projeto feito pelo{' '}
            <Link
              href="https://www.linkedin.com/in/iury-franca-37873318b/"
              target="_blank"
            >
              <span className="font-semibold text-secondary-foreground underline">
                Iury França
              </span>
            </Link>{' '}
            para poder mostrar as vocês no o que ele esteve trabalhando. Todo o
            design UI foi feito usando{' '}
            <Link href="https://ui.shadcn.com/" target="_blank">
              <span className="font-semibold text-secondary-foreground underline">
                ui.shadcn.com
              </span>
            </Link>{' '}
            como base, construído e disponibilizado pelo{' '}
            <Link href="https://twitter.com/shadcn" target="_blank">
              <span className="font-semibold text-secondary-foreground underline">
                shadcn
              </span>
            </Link>{' '}
          </p>
        </div>
        <div className="flex justify-center gap-4">
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
