// @refresh reset

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUserContext } from '@/core/context/user-context'
import {
  Alignment,
  Fit,
  Layout,
  RiveState,
  StateMachineInput,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas'
import { LogIn } from 'lucide-react'

import { ProductProps } from '@/types/product'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import LikeFavorite from './like-favorite.riv'

interface LikeFavoriteProps {
  product: ProductProps
  checked: boolean
}

export const FavoriteHeart = ({ checked, product }: LikeFavoriteProps) => {
  const { user, addItemToFavorite, removeItemToFavorite } = useUserContext()
  const router = useRouter()

  const STATE_MACHINE_NAME = 'stateMachine'
  const { rive, RiveComponent }: RiveState = useRive({
    src: LikeFavorite,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  })

  const onCheckInput: StateMachineInput | null = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'check'
  )

  const onBackInput: StateMachineInput | null = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'back'
  )

  const onHoverNotCheckedInput: StateMachineInput | null = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'hover_not_checked'
  )

  const onHoverCheckedInput: StateMachineInput | null = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'hover_checked'
  )

  function onClick() {
    if (!user) return router.push('/login')
    if (onCheckInput.value) {
      onCheckInput.value = false
      onBackInput.value = true
      removeItemToFavorite(product.id)
    } else {
      onBackInput.value = false
      onCheckInput.value = true
      addItemToFavorite(product)
    }
  }

  function onMouseEnter() {
    onCheckInput.value
      ? (onHoverCheckedInput.value = true)
      : (onHoverNotCheckedInput.value = true)
  }

  function onMouseLeave() {
    onHoverNotCheckedInput.value = false
    onHoverCheckedInput.value = false
  }

  useEffect(() => {
    if (onCheckInput !== null) {
      if (!checked) {
        onCheckInput.value = false
        onBackInput.value = true
      } else {
        onCheckInput.value = true
        onBackInput.value = false
        onHoverNotCheckedInput.value = true
      }
    }
  }, [onCheckInput, onBackInput])

  return (
    <>
      <div className="flex items-center justify-center">
        {user ? (
          <RiveComponent
            className="h-8 w-8"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />
        ) : (
          <AlertDialog>
            <AlertDialogTrigger>
              <RiveComponent
                className="h-8 w-8"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Para favoritar é necessário fazer login 😅
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Por conta dos favoritos serem salvos no seu perfil, é
                  necessário fazer login uma conta do google ou github. Se não
                  tiver quaisquer conta nesses sites, basta criar uma com um
                  email qualquer (não vai ter teste) e uma senha que você criar.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link href="/login" className="flex flex-row gap-2">
                    Login
                    <LogIn />
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </>
  )
}
