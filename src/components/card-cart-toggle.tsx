import Image from 'next/image'
import { useCartContext } from '@/core/context/cart-context'
import { Minus, Plus } from 'lucide-react'

import { CartProps } from '@/types/cart'
import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { Icons } from './icons'
import { Button } from './ui/button'

const CardCartToggle = ({ product }: { product: CartProps }) => {
  const { addItemCart, removeItem, isPendingToCart } = useCartContext()

  return (
    <div
      className="relative mt-1 mb-2 grid h-28 w-full grid-cols-[80px_1fr] items-center justify-between overflow-hidden rounded-lg border border-border bg-muted text-center text-muted-foreground transition-all hover:cursor-default"
      key={product.id}
      tabIndex={1}
    >
      <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
        <span className="text-xs font-semibold text-primary-foreground">
          {product.amount}
        </span>
      </div>
      <div className="relative flex h-full w-full items-center justify-center bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="!object-contain p-5"
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
            <Button
              variant="ghost"
              onClick={() => addItemCart(product as ProductProps)}
              className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-muted p-1 text-sm font-medium transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
            >
              {isPendingToCart?.isPending &&
              isPendingToCart?.id === product.id ? (
                <Icons.spinnerLoading />
              ) : (
                <Plus className="h-5 w-5 p-0" />
              )}
            </Button>
            <Button
              onClick={() => removeItem(product.id)}
              variant="ghost"
              className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-muted p-1 text-sm font-medium transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
            >
              {isPendingToCart?.isPending &&
              isPendingToCart?.id === product.id ? (
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

export default CardCartToggle
