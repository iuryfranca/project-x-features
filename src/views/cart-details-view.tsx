import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/core/context/cart-context'
import { useUserContext } from '@/core/context/user-context'
import { Plus } from 'lucide-react'

import { priceFormatter } from '@/lib/utils'
import CardCart from '@/components/card-cart'
import CardProduct from '@/components/card-product'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export const CartDetailsView = () => {
  const { itemsCart, amountPriceCart } = useCartContext()
  const [openModalAddress, setOpenModalAddress] = useState<boolean>(false)

  return (
    <div>
      <div className="flex items-center justify-between py-5 pb-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Detalhes de Carrinho
        </h1>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex w-full flex-row flex-wrap justify-center sm:justify-start">
          <ScrollArea className="max-h-[600px] w-full rounded-lg border border-slate-200 bg-slate-100 p-4 py-6 dark:border-slate-800 dark:bg-slate-800">
            {itemsCart &&
              itemsCart.map((product) => {
                return <CardCart product={product} key={product.id} />
              })}
          </ScrollArea>
        </div>
        <div className="flex w-full max-w-sm flex-col justify-between rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
          <div className="flex h-full flex-col justify-between">
            <div className="h-full p-4 text-end">
              <span className="text-lg leading-tight tracking-tighter">
                Total de items:
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
                {itemsCart.length}
              </h1>
            </div>
            <div className="border-2 border-dashed border-slate-400 p-4 ">
              <div className="flex flex-col items-end text-end">
                <span className="text-lg leading-tight tracking-tighter">
                  Selecionar endereço
                </span>
                <Button
                  variant="outline"
                  className="mt-1 min-w-min"
                  onClick={() => setOpenModalAddress(true)}
                >
                  <Plus />
                </Button>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-end p-4">
              <span className="text-lg leading-tight tracking-tighter">
                Frete:
              </span>
              <h1 className="text-sm font-semibold leading-tight tracking-tighter sm:text-lg">
                {priceFormatter(52)}
              </h1>
            </div>
            <div className="flex flex-col items-end p-4">
              <span className="text-lg leading-tight tracking-tighter">
                Total a pagar:
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-5xl">
                {priceFormatter(amountPriceCart)}
              </h1>
            </div>
          </div>
          <div className="flex h-[80px] flex-row items-center justify-between gap-2">
            <div className="flex h-full w-full flex-row justify-between gap-2 bg-slate-200 p-3 dark:bg-slate-700">
              <Link href="/shopping" className="h-full w-full">
                <Button
                  variant="default"
                  className="text-md h-full w-full font-semibold"
                >
                  Mais compras
                </Button>
              </Link>
              <Link href="/cart-details" className="h-full w-full">
                <Button
                  variant="default"
                  className="text-md h-full w-full font-semibold"
                >
                  Pagamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetailsView
