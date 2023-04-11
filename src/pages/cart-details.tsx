import Head from 'next/head'
import CartDetailsView from '@/views/cart-details-view'

import { Layout } from '@/components/layout'

const CartDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Project X | Detalhes do Carrinho</title>
      </Head>
      <section className="items-center md:py-10">
        <CartDetailsView />
      </section>
    </Layout>
  )
}

export default CartDetails
