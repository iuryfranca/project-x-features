import Head from 'next/head'
import FavoritesView from '@/views/favorites-view'

import { Layout } from '@/components/layout'

const Favorites = () => {
  return (
    <Layout>
      <Head>
        <title>Project X | Favoritos</title>
      </Head>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <FavoritesView />
      </section>
    </Layout>
  )
}

export default Favorites
