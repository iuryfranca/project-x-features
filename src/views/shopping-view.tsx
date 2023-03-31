import { useEffect } from 'react'
import Image from 'next/image'
import { useUserContext } from '@/core/context/user-context'
import { Plus } from 'lucide-react'

import { priceFormatter } from '@/lib/utils'
import CardProduct from '@/components/card-product'
import { Button } from '@/components/ui/button'

export const ShoppingView = () => {
  const { getProductsUsers, productsList } = useUserContext()

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
      <div className="flex flex-row flex-wrap justify-between gap-5">
        {productsList &&
          productsList.map((product) => {
            return <CardProduct {...product} key={product.id} />
          })}
      </div>
    </div>
  )
}

export default ShoppingView
