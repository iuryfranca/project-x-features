import Link from 'next/link'
import { useCartContext } from '@/core/context/cart-context'

import { priceFormatter } from '@/lib/utils'
import { Button } from '../ui/button'

export default function CartSubtotal() {
  const { amountPriceCart } = useCartContext()

  return (
    <div className="flex h-min w-full max-w-sm flex-col gap-4 rounded-md border-2 border-slate-200 p-5 dark:border-slate-500">
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg font-medium text-slate-400">Subtotal</span>
        <span className="text-base font-semibold leading-tight tracking-tighter sm:text-xl">
          {priceFormatter(amountPriceCart)}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg font-medium text-slate-400">Desconto</span>
        <span className="text-base font-semibold leading-tight tracking-tighter sm:text-xl">
          {priceFormatter(0)}
        </span>
      </div>
      <div className="border border-dashed border-slate-300 dark:border-slate-500" />
      <div className="flex flex-row items-center justify-between">
        <span className="text-xl font-medium text-slate-400">Total final</span>
        <span className="text-xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          {priceFormatter(amountPriceCart)}
        </span>
      </div>
      <div className="mt-3 flex h-[50px] flex-row items-center justify-between gap-3">
        <div className="flex h-full w-full flex-row justify-between gap-2">
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
  )
}
