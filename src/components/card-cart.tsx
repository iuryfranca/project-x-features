import { useCartContext } from '@/core/context/cart-context'
import { Minus, Plus } from 'lucide-react'

import { CartProps } from '@/types/cart'
import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { Icons } from './icons'
import { Button } from './ui/button'

const CardCart = ({ product }: { product: CartProps }) => {
  const { addItemCart, removeItem, isPendingToCart } = useCartContext()

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
        <img src={product.image} alt={product.title} className="max-h-16" />
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
            <Button
              variant="ghost"
              onClick={() => addItemCart(product as ProductProps)}
              className="inline-flex h-8 items-center justify-center rounded-md border border-slate-200 bg-transparent p-1 text-sm font-medium transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {isPendingToCart ? (
                <Icons.spinnerLoading />
              ) : (
                <Plus className="h-5 w-5 p-0" />
              )}
            </Button>
            <Button
              onClick={() => removeItem(product.id)}
              variant="ghost"
              className="inline-flex h-8 items-center justify-center rounded-md border border-slate-200 bg-transparent p-1 text-sm font-medium transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {isPendingToCart ? (
                <Icons.spinnerLoading />
              ) : (
                <Minus className="h-5 w-5 p-0" />
              )}
            </Button>
          </div>
          <span className="text-sm font-semibold">
            {priceFormatter(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardCart
