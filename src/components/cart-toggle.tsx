import { useEffect } from 'react'
import { useCartContext } from '@/core/context/cart-context'
import { Minus, Plus, ShoppingBag } from 'lucide-react'

import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

const CartToggle = () => {
  const {
    cart,
    itemsCart,
    amountPriceCart,
    isPendingToCart,
    addItemCart,
    removeItem,
  } = useCartContext()

  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <div
          className={buttonVariants({
            size: 'sm',
            variant: 'ghost',
            className: 'relative mr-2 px-5',
          })}
        >
          {cart?.length > 0 && (
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-200">
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-700">
                {cart?.length}
              </span>
            </div>
          )}
          <ShoppingBag className="absolute text-slate-700 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-2 shadow-lg">
        <ScrollArea className="flex-co flex h-96 pr-3">
          {cart?.length === 0 && (
            <div className="mt-40 flex h-full items-center px-5 text-center">
              Seu carrinho de encontra vazio. 😄
            </div>
          )}

          {itemsCart?.map((product) => {
            return (
              <div
                className="relative mt-1 mb-2 grid h-28 w-full grid-cols-[80px_1fr] items-center justify-between overflow-hidden rounded-lg border border-slate-200/80 bg-slate-200 text-center transition-all hover:cursor-default dark:border-slate-800 dark:bg-slate-700"
                key={product.id}
              >
                <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-200">
                  <span className="text-xs font-semibold text-slate-200 dark:text-slate-700">
                    {product.amount}
                  </span>
                </div>
                <div className="flex h-full w-full items-center justify-center bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-16"
                  />
                </div>
                <div className="flex flex-col items-start p-2">
                  <div>
                    <span className="whitespace-wrap text-ellipsis text-start text-sm font-semibold line-clamp-1">
                      {product.title}
                    </span>
                  </div>
                  <div className="flex h-9 w-full justify-start pb-2">
                    <span className="whitespace-wrap text-ellipsis text-start text-xs line-clamp-2">
                      {product.description}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-row gap-1">
                      <button
                        onClick={() => addItemCart(product as ProductProps)}
                        className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent p-1 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700"
                      >
                        {isPendingToCart ? (
                          <Icons.spinnerLoading />
                        ) : (
                          <Plus className="h-5 w-5 p-0" />
                        )}
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent p-1 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700"
                      >
                        {isPendingToCart ? (
                          <Icons.spinnerLoading />
                        ) : (
                          <Minus className="h-5 w-5 p-0" />
                        )}
                      </button>
                    </div>
                    <span className="text-sm font-semibold">
                      {priceFormatter(product.price)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </ScrollArea>
        <div className="flex h-8 flex-row items-center justify-between p-2">
          <span className="text-md font-semibold">Preço total:</span>
          <span className="text-md font-semibold">
            {priceFormatter(amountPriceCart)}
          </span>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartToggle
