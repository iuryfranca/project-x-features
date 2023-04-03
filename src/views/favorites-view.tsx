import { useEffect } from 'react'
import { useCartContext } from '@/core/context/cart-context'
import { useUserContext } from '@/core/context/user-context'

import { cn } from '@/lib/utils'
import CardProduct from '@/components/card-product'
import { Button } from '@/components/ui/button'

export const FavoriteView = () => {
  const { getProductsUsers, favoritesList } = useUserContext()

  useEffect(() => {
    getProductsUsers()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between py-5 pb-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Favoritos
        </h1>

        <div>
          <Button>Listar por</Button>
        </div>
      </div>
      <div
        className={cn(
          'flex flex-row flex-wrap justify-center gap-9 sm:justify-start'
        )}
      >
        {favoritesList &&
          favoritesList.map((product) => {
            return <CardProduct product={product} key={product.id} />
          })}

        {favoritesList.length === 0 && (
          <h1 className="text-xl font-semibold leading-tight tracking-tighter">
            Não há favoritos marcados 😄
          </h1>
        )}
      </div>
    </div>
  )
}

export default FavoriteView
