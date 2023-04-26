import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { useUserContext } from '@/core/context/user-context'
import { appFirebaseConfig, projectStorage } from '@/firebase/config'
import { useToast } from '@/hooks/use-toast'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  User as UserTypes,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutFire,
  updateProfile,
} from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { AuthSignUpProps } from '@/types/auth'
import { ToastAction } from '@/components/ui/toast'

interface PropsReactNode {
  children: ReactNode
}

type AuthContextData = {
  userAuth: UserTypes
  isPending: boolean
  signIn: ({ email, password }: AuthLoginProps) => void
  signUp: ({ email, password, displayName }: AuthSignUpProps) => void
  signOut: () => void
  googleSignIn: () => void
  githubSignIn: () => void
}

type AuthLoginProps = Omit<AuthSignUpProps, 'displayName' | 'photoURL'>

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const auth = getAuth(appFirebaseConfig)

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: FC<PropsReactNode> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<UserTypes>(null)
  const [isPending, setIsPending] = useState(false)
  const { addUser, setUser, getUser } = useUserContext()

  const router = useRouter()
  const { toast } = useToast()
  let urlProfileImage = ''

  const signIn = async ({ email, password }: AuthLoginProps) => {
    setIsPending(true)
    setPersistence(auth, browserSessionPersistence).then(async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          setUserAuth(res.user)
          setUser(await getUser(res.user?.uid))

          router.push('/')
        })
        .catch((error) => {
          toast({
            title: `${error.name} | Erro ao fazer login`,
            description: error.code,
            variant: 'destructive',
            action: <ToastAction altText="Notificação">Certo!</ToastAction>,
          })
        })
        .finally(() => {
          setIsPending(false)
        })
    })
  }

  const signUp = async ({
    email,
    password,
    displayName,
    photoURL,
  }: AuthSignUpProps) => {
    setIsPending(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        await uploadProfileImage(res?.user?.uid, photoURL).then(async () => {
          await updateProfile(res?.user, {
            displayName: displayName,
            photoURL: urlProfileImage,
          })
        })

        addUser(res.user)
        router.push('/login')
      })
      .catch((error) => {
        toast({
          title: `${error.name} | Erro ao se cadastrar`,
          description: error.code,
          variant: 'destructive',
          action: <ToastAction altText="Notificação">Certo!</ToastAction>,
        })
      })
      .finally(() => {
        setIsPending(false)
      })
  }

  const signOut = async () => {
    setIsPending(true)
    await signOutFire(auth)
      .then(() => {
        setUserAuth(null)
        setUser(null)
        router.push('/')
      })
      .finally(() => {
        setIsPending(false)
      })
  }

  const googleSignIn = async () => {
    setIsPending(true)
    setPersistence(auth, browserSessionPersistence).then(async () => {
      return await signInWithPopup(auth, googleProvider)
        .then(async (res) => {
          setUserAuth(res.user)

          const getUserFirebase = await getUser(res.user?.uid)
          if (getUserFirebase) {
            setUser(getUserFirebase)
          } else {
            addUser(res.user)
            setUser(await getUser(res.user?.uid))
          }

          router.push('/')
        })
        .catch((error) => {
          toast({
            title: `${error.name} | Erro entrar com o Google`,
            description: error.code,
            variant: 'destructive',
            action: <ToastAction altText="Notificação">Certo!</ToastAction>,
          })
        })
        .finally(() => {
          setIsPending(false)
        })
    })
  }

  const githubSignIn = async () => {
    setIsPending(true)
    setPersistence(auth, browserSessionPersistence).then(async () => {
      return await signInWithPopup(auth, githubProvider)
        .then(async (res) => {
          setUserAuth(res.user)
          const getUserFirebase = await getUser(res.user?.uid)

          if (getUserFirebase) {
            setUser(getUserFirebase)
          } else {
            addUser(res.user)
            setUser(await getUser(res.user?.uid))
          }

          router.push('/')
        })
        .catch((error) => {
          toast({
            title: `${error.name} | Erro ao entrar com o github`,
            description: error.code,
            variant: 'destructive',
            action: <ToastAction altText="Notificação">Certo!</ToastAction>,
          })
        })
        .finally(() => {
          setIsPending(false)
        })
    })
  }

  const uploadProfileImage = async (uid: string, file: File | null) => {
    if (!file) return
    urlProfileImage = ''

    const typeImage = file.type.split('image/')
    const filePath = `profile-users/${uid}/profile-image.${typeImage[1]}`

    const storageRef = ref(projectStorage, filePath)
    await uploadBytes(storageRef, file).then(async (res) => {
      await getDownloadURL(res.ref).then((res) => {
        urlProfileImage = res
      })
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuthStateChanged) => {
      if (userAuthStateChanged) {
        setUserAuth({ ...userAuthStateChanged })
        setUser(await getUser(userAuthStateChanged?.uid))
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        isPending,
        signIn,
        signUp,
        signOut,
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
