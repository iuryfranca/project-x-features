import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { projectFirestore } from '@/firebase/config'
import { doc, updateDoc } from 'firebase/firestore'

import { CartProps } from '@/types/cart'
import { ProductProps } from '@/types/product'
import { useUserContext } from './user-context'

interface PropsReactNode {
  children: ReactNode
}

type CartContextData = {
  cart: CartProps[]
  itemsCart: CartProps[]
  amountPriceCart: number
  removeItem: (id: number) => void
  addItemCart: (product: ProductProps) => void
}

export const CartContext = createContext({} as CartContextData)

export const CartProvider: FC<PropsReactNode> = ({ children }) => {
  const { user, getUser } = useUserContext()

  const [cart, setCart] = useState<CartProps[]>([])
  const amountPriceCart = cart?.reduce((a, b) => a + b.price * b.amount, 0)

  const itemsCart = cart?.reduce((products, product) => {
    const existingItem = products.find((item) => item.id === product.id)

    if (!existingItem) {
      products.push({ ...product })
    } else {
      existingItem.amount++
    }

    return products
  }, [] as CartProps[])

  const addItemCart = async (newProduct: ProductProps): Promise<void> => {
    if (user) {
      const documentRef = doc(projectFirestore, 'users', user.uid)
      await updateDoc(documentRef, {
        cart: [...cart, { ...newProduct, amount: 1 }],
      }).then(async (res) => {
        await getUser(user?.uid).then((user) => {
          setCart(user.cart)
        })
      })
    } else {
      setCart([...cart, { ...newProduct, amount: 1 }])
    }
  }

  const removeItem = (id: number) => {
    const objectToRemove: CartProps = cart?.find((product) => product.id === id)
    const tempCard = [...cart]
    tempCard.splice(cart?.indexOf(objectToRemove), 1)

    setCart(tempCard)
  }

  useEffect(() => {
    if (user) {
      setCart(user?.cart)
    } else {
      setCart(null)
    }
  }, [user])

  return (
    <CartContext.Provider
      value={{
        cart,
        itemsCart,
        amountPriceCart,
        removeItem,
        addItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return context
}
