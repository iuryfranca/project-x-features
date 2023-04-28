import Image from 'next/image'
import { useCartContext } from '@/core/context/cart-context'
import { Loader2, Minus, Plus, Trash2 } from 'lucide-react'

import { CartProps } from '@/types/cart'
import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const CardCart = ({ product }: { product: CartProps }) => {
  const { addItemCart, removeItem, isPendingToCart, removeAllItemCart } =
    useCartContext()

  return (
    <>
      <Separator className="mt-8 mb-8 text-slate-200 first:mt-0" />
      <div
        className="relative mt-1 mb-2 grid w-full grid-rows-[112px_1fr] items-center justify-items-center gap-4 overflow-hidden rounded-md py-3 text-center transition-all hover:cursor-default lg:h-28 lg:grid-cols-[112px_1fr] lg:border-none lg:p-0"
        key={product.id}
        tabIndex={1}
      >
        <div className="relative flex h-full w-[112px] items-center justify-center rounded-lg border-2 border-slate-200 bg-white dark:border-slate-300">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="!object-contain p-5"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-4 px-2 lg:grid lg:grid-cols-8">
          <div className="col-span-4 ml-2 flex flex-col gap-4">
            <span className="whitespace-wrap text-ellipsis text-start text-base font-semibold line-clamp-1 lg:w-72">
              {product.title}
            </span>
            <span className="whitespace-wrap text-ellipsis text-start text-xs line-clamp-3 lg:w-72">
              {product.description}
            </span>
          </div>
          <div className="col-span-2 flex w-full justify-between p-1 lg:justify-center">
            <div className="flex flex-row items-center justify-between gap-2 lg:flex-col">
              <div className="flex h-min flex-row items-center justify-center gap-1 rounded-lg border-2 border-slate-200 p-1 dark:border-slate-500 lg:gap-2 lg:p-2">
                <Button
                  onClick={() => removeItem(product.id)}
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  {isPendingToCart?.isPending &&
                  isPendingToCart?.id === product.id ? (
                    <Loader2 className="h-4 w-4 animate-spin text-foreground" />
                  ) : (
                    <Minus className="h-4 w-4 p-0" />
                  )}
                </Button>
                <div className="flex h-4 w-4 items-center justify-center">
                  <span className="text-xs font-semibold">
                    {product.amount}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => addItemCart(product)}
                  size="sm"
                  className="p-2"
                >
                  {isPendingToCart?.isPending &&
                  isPendingToCart?.id === product.id ? (
                    <Loader2 className="h-4 w-4 animate-spin text-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 p-0" />
                  )}
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-full w-full rounded-lg border-2 border-slate-200 p-2 dark:border-slate-500 lg:border-none lg:p-0"
                onClick={() => removeAllItemCart(product.id)}
              >
                <Trash2 size={18} /> <span className="ml-1">Remover</span>
              </Button>
            </div>
            <div className="col-span-2 grid items-center justify-items-end lg:hidden lg:items-end">
              <span className="text-base font-semibold">
                {priceFormatter(product.price)}
              </span>
            </div>
          </div>
          <div className="col-span-2 hidden justify-items-end lg:grid">
            <span className="text-base font-semibold">
              {priceFormatter(product.price)}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCart
