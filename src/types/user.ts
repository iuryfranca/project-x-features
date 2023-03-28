import { User as UserFirebaseAuth } from 'firebase/auth'

import { ProductProps } from '@/types/product'

type UserPick = Pick<
  UserFirebaseAuth,
  'displayName' | 'email' | 'phoneNumber' | 'uid' | 'emailVerified' | 'photoURL'
>
export interface UserProps extends UserPick {
  admin: boolean
  favorites: ProductProps[]
  orders: any[]
  products: ProductProps[]
}
