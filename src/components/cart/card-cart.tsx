import Image from 'next/image'
import { useCartContext } from '@/core/context/cart-context'
import { Minus, Plus, Trash2 } from 'lucide-react'

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
        className="relative mt-1 mb-2 grid h-28 w-full grid-cols-[112px_1fr] items-center justify-between overflow-hidden text-center transition-all hover:cursor-default"
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
        <div className="grid h-full grid-cols-8 px-2">
          <div className="col-span-4 ml-2 flex flex-col gap-4">
            <span className="whitespace-wrap w-72 text-ellipsis text-start text-base font-semibold line-clamp-1">
              {product.title}
            </span>
            <span className="whitespace-wrap w-72 text-ellipsis text-start text-xs line-clamp-3">
              {product.description}
            </span>
          </div>
          <div className="col-span-2 flex w-full p-1">
            <div className="flex flex-col justify-between">
              <div className="flex h-min flex-row items-center justify-center gap-2 rounded-lg border-2 border-slate-200 p-2 dark:border-slate-500">
                <Button
                  onClick={() => removeItem(product.id)}
                  variant="ghost"
                  size="sm"
                >
                  {isPendingToCart?.isPending &&
                  isPendingToCart?.id === product.id ? (
                    <Icons.spinnerLoading />
                  ) : (
                    <Minus className="h-5 w-5 p-0" />
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
                >
                  {isPendingToCart?.isPending &&
                  isPendingToCart?.id === product.id ? (
                    <Icons.spinnerLoading />
                  ) : (
                    <Plus className="h-5 w-5 p-0" />
                  )}
                </Button>
              </div>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => removeAllItemCart(product.id)}
                >
                  <Trash2 size={18} /> <span className="ml-2">Remover</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid justify-items-end">
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
