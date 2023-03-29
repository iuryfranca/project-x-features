import Head from 'next/head'
import ShoppingView from '@/views/shopping-view'

import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Project X | Shopping</title>
      </Head>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <ShoppingView />
      </section>
    </Layout>
  )
}
