import Link from 'next/link'
import { useCartContext } from '@/core/context/cart-context'
import { ShoppingBag } from 'lucide-react'

import { priceFormatter } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import CardCartToggle from '../card-cart-toggle'
import { Button, buttonVariants } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

const CartToggle = () => {
  const { cart, itemsCart, amountPriceCart } = useCartContext()

  return (
    <Popover>
      <PopoverTrigger
        aria-label="Botão para abrir um Popover com as informações do carrinho"
        className="flex items-center"
      >
        <div
          className={buttonVariants({
            size: 'sm',
            variant: 'ghost',
            className: 'relative',
          })}
        >
          {cart?.length > 0 && (
            <div className="absolute -top-1 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary">
              <span className="text-xs font-semibold text-primary-foreground dark:text-primary-foreground">
                {cart?.length}
              </span>
            </div>
          )}
          <ShoppingBag className="text-foreground dark:text-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="group p-2 shadow-lg">
        <ScrollArea className="flex-co flex h-96 pr-3 pl-4 shadow-inner">
          {cart?.length === 0 && (
            <div className="mt-40 flex h-full items-center px-5 text-center">
              Seu carrinho se encontra vazio. 😄
            </div>
          )}

          {itemsCart?.map((product) => {
            return <CardCartToggle product={product} key={product.id} />
          })}
        </ScrollArea>
        <div className="flex h-[70px] flex-row items-center justify-between gap-2 py-1 pt-2">
          <div className="flex h-full w-full flex-col justify-center rounded-md bg-muted py-1 pl-3 pr-1 text-secondary-foreground dark:bg-muted dark:text-secondary-foreground">
            <span className="text-xs font-normal">Preço total</span>
            <span className="text-md font-semibold">
              {priceFormatter(amountPriceCart)}
            </span>
          </div>
          <Link href="/cart-details" className="h-full">
            <Button variant="default" className="text-md h-full font-semibold">
              Detalhes
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartToggle
