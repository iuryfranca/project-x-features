import { useEffect } from 'react'
import { useUserContext } from '@/core/context/user-context'

import CardProduct from '@/components/card-product'
import CardProductSkeleton from '@/components/skeleton/card-product-skeleton'
import { Button } from '@/components/ui/button'

export const ShoppingView = () => {
  const { getProductsUsers, productsList, isPendingProducts } = useUserContext()
  const repeatSkeleton = 20

  useEffect(() => {
    getProductsUsers()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between py-5 pb-12">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Produtos
        </h1>

        <div>
          <Button>Listar por</Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-5 sm:justify-start md:gap-9">
        {isPendingProducts &&
          !productsList &&
          [...Array(repeatSkeleton)].map((e, i) => (
            <CardProductSkeleton key={i} />
          ))}

        {productsList &&
          productsList.map((product) => {
            return <CardProduct product={product} key={product.id} />
          })}
      </div>
    </div>
  )
}

export default ShoppingView
