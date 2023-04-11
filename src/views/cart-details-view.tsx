import { useCartContext } from '@/core/context/cart-context'

import CardCart from '@/components/cart/card-cart'
import CartSubtotal from '@/components/cart/cart-subtotal'
import { ScrollArea } from '@/components/ui/scroll-area'

export const CartDetailsView = () => {
  const { itemsCart } = useCartContext()

  return (
    <div className="lg:container">
      <div className="flex items-center justify-between pb-4 lg:py-5 lg:pb-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter">
          Carrinho
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="flex w-full flex-row flex-wrap justify-center p-7 sm:justify-start lg:p-0">
          <ScrollArea className="max-h-[700px] w-full rounded-lg">
            {itemsCart &&
              itemsCart.map((product) => {
                return <CardCart product={product} key={product.id} />
              })}
          </ScrollArea>
        </div>
        <CartSubtotal />
      </div>
    </div>
  )
}

export default CartDetailsView
