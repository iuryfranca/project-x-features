import { useCartContext } from '@/core/context/cart-context'
import { Plus } from 'lucide-react'

import { ProductProps } from '@/types/product'
import { priceFormatter } from '@/lib/utils'
import { Icons } from './icons'
import { Button } from './ui/button'

const CardProduct = ({ product }: { product: ProductProps }) => {
  const { addItemCart, getAmountItemCart, isPendingToCart } = useCartContext()
  return (
    <div
      key={product.id}
      className="relative flex h-[350px] w-full max-w-[160px] flex-col items-center justify-between rounded-lg border border-slate-200/80 bg-slate-200 text-center transition-all hover:scale-[1.02] hover:cursor-default dark:border-slate-800 dark:bg-slate-700 md:h-[350px] md:w-52 md:max-w-none"
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
      <div className="flex h-56 w-full items-center justify-center overflow-hidden bg-white">
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
          {isPendingToCart ? (
            <Icons.spinnerLoading />
          ) : (
            <Plus className="h-6 w-6 p-0" />
          )}
        </Button>
        <span className="text-base font-semibold">
          {priceFormatter(product.price)}
        </span>
      </div>
    </div>
  )
}

export default CardProduct
