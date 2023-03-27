import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { appFirebaseConfig } from '@/src/firebase/config'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  User as UserTypes,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'

import { AuthSignUpProps } from '@/src/types/auth'

interface PropsReactNode {
  children: ReactNode
}

type AuthContextData = {
  user: UserTypes
  error: string | null
  isPending: boolean
  signIn: ({ email, password }: AuthLoginProps) => void
  signUp: ({ email, password, displayName }: AuthSignUpProps) => void
  googleSignIn: () => void
  githubSignIn: () => void
}

type AuthLoginProps = Omit<AuthSignUpProps, 'displayName'>

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(appFirebaseConfig)

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: FC<PropsReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserTypes>(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const signIn = async ({ email, password }: AuthLoginProps) => {
    setIsPending(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setError(null)
        setUser(res.user)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsPending(false)
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
  }

  const signUp = async ({ email, password, displayName }: AuthSignUpProps) => {
    setIsPending(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          updateProfile(res.user, {
            displayName: displayName,
          }).then(() => setUser(res.user))
        }
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsPending(false)
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
  }

  const googleSignIn = async () => {
    setIsPending(true)
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        setUser(result.user)
      })
      .catch((error) => {
        // const errorCode = error.code
        setError(error.message)
        // const email = error.customData.email
        // const credential = GoogleAuthProvider.credentialFromError(error)
      })
      .finally(() => {
        setIsPending(false)
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
  }

  const githubSignIn = async () => {
    setIsPending(true)
    await signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
        console.log('credential Github:', credential)
        // const token = credential.accessToken
        setUser(result.user)
      })
      .catch((error) => {
        // const errorCode = error.code
        setError(error.message)
        // const email = error.customData.email
        // const credential = GoogleAuthProvider.credentialFromError(error)
      })
      .finally(() => {
        setIsPending(false)
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isPending,
        signIn,
        signUp,
        googleSignIn,
        githubSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
