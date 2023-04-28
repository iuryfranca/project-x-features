import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { projectFirestore } from '@/firebase/config'
import { useToast } from '@/hooks/use-toast'
import { doc, updateDoc } from 'firebase/firestore'

import { CartProps } from '@/types/cart'
import { ProductProps } from '@/types/product'
import { ToastAction } from '@/components/ui/toast'
import { useUserContext } from './user-context'

interface PropsReactNode {
  children: ReactNode
}

interface LoadingButtonProps {
  id?: number | null
  isPending: boolean
}

type CartContextData = {
  cart: CartProps[]
  isPendingToCart: LoadingButtonProps
  amountPriceCart: number
  removeItem: (id: number) => void
  removeAllItemCart: (id: number) => void
  addItemCart: (product: ProductProps) => void
  getAmountItemCart: (id: number) => number
  getAmountAllItemsCart: () => number
}

export const CartContext = createContext({} as CartContextData)

export const CartProvider: FC<PropsReactNode> = ({ children }) => {
  const { user, getUser } = useUserContext()
  const { toast } = useToast()
  const [cart, setCart] = useState<CartProps[]>([])
  const [isPendingToCart, setPendingToCart] = useState<LoadingButtonProps>()

  let temporaryCart: CartProps[] = []

  const amountPriceCart = cart?.reduce(
    (a, b) => a + b.price * b.amount_in_cart,
    0
  )

  const addItemCart = async (newProduct: ProductProps): Promise<void> => {
    const existingItem: CartProps = cart?.find(
      (product) => product.id === newProduct.id
    )
    temporaryCart = [...cart]

    if (existingItem) {
      temporaryCart.splice(temporaryCart.indexOf(existingItem), 1, {
        ...existingItem,
        amount_in_cart: existingItem.amount_in_cart + 1,
      })
    } else {
      temporaryCart = [...temporaryCart, { ...newProduct, amount_in_cart: 1 }]
    }

    await changeItemsInFirebase('add', newProduct.id)
  }

  const removeItem = async (id: number) => {
    const existingItem: CartProps = cart?.find((product) => product.id === id)
    temporaryCart = [...cart]

    if (existingItem && existingItem.amount_in_cart > 1) {
      temporaryCart.splice(temporaryCart.indexOf(existingItem), 1, {
        ...existingItem,
        amount_in_cart: existingItem.amount_in_cart - 1,
      })
    } else {
      temporaryCart.splice(cart?.indexOf(existingItem), 1)
    }

    await changeItemsInFirebase('remove', id)
  }

  const removeAllItemCart = async (id: number) => {
    temporaryCart = cart?.filter((obj) => obj.id !== id)
    await changeItemsInFirebase('remove', id)
  }

  const changeItemsInFirebase = async (
    action: 'add' | 'remove',
    id?: number
  ) => {
    if (user) {
      setPendingToCart({ isPending: true, id: id })
      const documentRef = doc(projectFirestore, 'users', user.uid)
      await updateDoc(documentRef, {
        cart: [...temporaryCart],
      })
        .then(async () => {
          await getUser(user?.uid).then((user) => {
            setCart(user.cart)
          })
        })
        .catch((error) => {
          toast({
            title: `Erro ao ${
              action === 'add' ? 'adicionar' : 'remover'
            } produto no carrinho`,
            description: error.code,
            variant: 'destructive',
            action: <ToastAction altText="Notificação">Certo!</ToastAction>,
          })
        })
        .finally(() => setPendingToCart({ isPending: false, id: null }))
    } else {
      setCart([...temporaryCart])
    }
  }

  const getAmountItemCart = (id: number): number => {
    return cart?.find((item) => item.id === id)?.amount_in_cart
  }

  const getAmountAllItemsCart = (): number => {
    return cart?.reduce((a, b) => a + b.amount_in_cart, 0)
  }

  useEffect(() => {
    if (user) {
      setCart(user?.cart)
      // setTempCart(user?.cart)
    } else {
      setCart([])
      // setTempCart([])
    }
  }, [user])

  return (
    <CartContext.Provider
      value={{
        cart,
        isPendingToCart,
        amountPriceCart,
        removeItem,
        addItemCart,
        getAmountItemCart,
        removeAllItemCart,
        getAmountAllItemsCart,
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
