import { useCartContext } from '@/core/context/cart-context'
import { ChevronRight } from 'lucide-react'

import CardCart from '@/components/cart/card-cart'
import CartSubtotal from '@/components/cart/cart-subtotal'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const CartDetailsView = () => {
  const { itemsCart } = useCartContext()

  return (
    <div className="lg:container">
      <Tabs defaultValue="cart">
        <TabsList className="flex flex-row justify-start gap-1 bg-background pl-7 pt-5 dark:bg-background lg:p-0">
          <TabsTrigger
            value="cart"
            className="data-[state=active]:bg-200 w-min p-1 data-[state=active]:bg-slate-200 dark:data-[state=active]:bg-slate-800"
          >
            <h1 className="flex flex-row items-center gap-2 text-base font-semibold leading-tight tracking-tighter lg:text-xl">
              Carrinho
            </h1>
          </TabsTrigger>
          <ChevronRight size={16} />
          <TabsTrigger
            value="checkout"
            className="data-[state=active]:bg-200 w-min p-1 data-[state=active]:bg-slate-200 dark:data-[state=active]:bg-slate-800"
          >
            <h1 className="flex flex-row items-center gap-2 text-base font-semibold leading-tight tracking-tighter lg:text-xl">
              Checkout
            </h1>
          </TabsTrigger>
          <ChevronRight size={16} />
        </TabsList>
        <TabsContent value="cart" className="border-none p-0">
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="flex min-h-[600px] w-full flex-row flex-wrap justify-center px-7 pt-0 sm:justify-start lg:p-0">
              <ScrollArea className="hidden max-h-[700px] w-full rounded-lg pr-2 lg:block">
                {itemsCart &&
                  itemsCart.map((product) => {
                    return <CardCart product={product} key={product.id} />
                  })}

                {itemsCart.length === 0 && (
                  <h1 className="my-10 text-center text-xl font-semibold leading-tight tracking-tighter sm:text-left">
                    Não há produtos adicionados por aqui 😄
                  </h1>
                )}
              </ScrollArea>
              <div className="block w-full lg:hidden">
                {itemsCart &&
                  itemsCart.map((product) => {
                    return <CardCart product={product} key={product.id} />
                  })}

                {itemsCart.length === 0 && (
                  <h1 className="my-10 text-center text-xl font-semibold leading-tight tracking-tighter sm:text-left">
                    Não há produtos adicionados por aqui 😄
                  </h1>
                )}
              </div>
            </div>
            <CartSubtotal />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Change your password here. After saving, you&apos;ll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CartDetailsView
