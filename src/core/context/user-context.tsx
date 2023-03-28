import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { projectFirestore } from '@/firebase/config'
import { User } from 'firebase/auth'
import { DocumentData, doc, getDoc, setDoc } from 'firebase/firestore'

import { UserProps } from '@/types/user'

interface PropsReactNode {
  children: ReactNode
}

type UserContextData = {
  user: UserProps
  addUser: (data: User) => void
  setUser: Dispatch<SetStateAction<UserProps>>
  getUser: (id: string) => Promise<UserProps>
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider: FC<PropsReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const addUser = async (user: User) => {
    const userData = {
      uid: user.uid,
      admin: user.email === 'iurygfranca@gmail.com' ? true : false,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      favorites: [],
      orders: [],
      products: [],
    }
    await setDoc(doc(projectFirestore, 'users', userData.uid), userData)
  }

  const getUser = async (id: string): Promise<UserProps> => {
    const documentRef = doc(projectFirestore, 'users', id)

    return await getDoc(documentRef).then((doc: DocumentData) => {
      return doc.data()
    })
  }

  console.log(user)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        addUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}
