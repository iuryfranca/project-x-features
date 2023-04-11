import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCartContext } from '@/core/context/cart-context'
import { useUserContext } from '@/core/context/user-context'
import { Plus } from 'lucide-react'

import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { FavoriteHeart } from '@/components/animations/like-favorite/index'
import { Icons } from './icons'
import { Button } from './ui/button'

const CardProduct = ({ product }: { product: ProductProps }) => {
  const { addItemCart, getAmountItemCart, isPendingToCart } = useCartContext()
  const { getItemIsFavorite } = useUserContext()

  return (
    <div
      key={product.id}
      className="relative flex h-[350px] w-full max-w-[160px] flex-col rounded-lg border border-slate-200/80 bg-slate-200 shadow-sm transition-all duration-200 hover:cursor-default hover:shadow-lg dark:border-slate-800 dark:bg-slate-700 dark:shadow-slate-800 dark:drop-shadow-lg md:h-[350px] md:w-52 md:max-w-none"
    >
      {getAmountItemCart(product.id) > 0 && (
        <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-200">
          <span className="text-xs font-bold text-slate-200 dark:text-slate-700">
            {getAmountItemCart(product.id)}
          </span>
        </div>
      )}
      <div className="flex w-full justify-start p-3">
        <span className="whitespace-wrap text-ellipsis text-start text-sm font-bold line-clamp-1">
          {product.title}
        </span>
      </div>
      <div className="relative flex h-56 w-full overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="!object-contain p-8 transition-all duration-300 hover:scale-125"
        />
      </div>
      <div className="flex h-[90px] w-full justify-start p-3 pb-2">
        <span className="whitespace-wrap text-ellipsis text-start text-xs line-clamp-4">
          {product.description}
        </span>
      </div>
      <div className="flex w-full items-center justify-between p-3 pt-0">
        <div className="flex flex-row items-center justify-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="relative h-7 w-7"
            onClick={() => {
              addItemCart(product)
            }}
          >
            {isPendingToCart?.isPending &&
            isPendingToCart?.id === product.id ? (
              <Icons.spinnerLoading />
            ) : (
              <Plus className="absolute h-6 w-6 p-0" />
            )}
          </Button>
          <FavoriteHeart
            checked={getItemIsFavorite(product.id)}
            product={product}
            key={product.id}
          />
        </div>
        <span className="text-sm font-semibold sm:text-base">
          {priceFormatter(product.price)}
        </span>
      </div>
    </div>
  )
}

export default CardProduct
