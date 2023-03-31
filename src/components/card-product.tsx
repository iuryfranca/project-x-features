import { useCartContext } from '@/core/context/cart-context'
import { Plus } from 'lucide-react'

import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { Button } from './ui/button'

const CardProduct = (product: ProductProps) => {
  const { addItemCart } = useCartContext()
  return (
    <div
      key={product.id}
      className="relative flex h-[350px] w-52 flex-col items-center justify-between overflow-hidden rounded-lg border border-slate-200/80 bg-slate-200 text-center transition-all hover:scale-[1.02] hover:cursor-default dark:border-slate-800 dark:bg-slate-700"
    >
      <div className="flex w-full justify-start p-3">
        <span className="whitespace-wrap text-ellipsis text-start text-sm font-bold line-clamp-1">
          {product.title}
        </span>
      </div>
      <div className="flex h-56 w-full items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-24 transition-all duration-300 hover:scale-125"
        />
      </div>
      <div className="flex h-[90px] w-full justify-start p-3 pb-2">
        <span className="whitespace-wrap text-ellipsis text-start text-xs line-clamp-4">
          {product.description}
        </span>
      </div>
      <div className="flex w-full items-center justify-between p-3 pt-0">
        <Button variant="ghost" size="sm" onClick={() => addItemCart(product)}>
          <Plus className="h-6 w-6 p-0" />
        </Button>
        <span className="text-base font-semibold">
          {priceFormatter(product.price)}
        </span>
      </div>
    </div>
  )
}

export default CardProduct
