import { useCartContext } from '@/core/context/cart-context'

import CardCart from '@/components/cart/card-cart'
import CartSubtotal from '@/components/cart/cart-subtotal'
import { ScrollArea } from '@/components/ui/scroll-area'

export const CartDetailsView = () => {
  const { itemsCart } = useCartContext()

  return (
    <div>
      <div className="flex items-center justify-between py-5 pb-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Carrinho
        </h1>
      </div>

      <div className="flex flex-row gap-2">
        <div className="flex w-full flex-row flex-wrap justify-center sm:justify-start">
          <ScrollArea className="max-h-[700px] w-full rounded-lg pr-4">
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
