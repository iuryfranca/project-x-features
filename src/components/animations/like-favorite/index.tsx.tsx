// @refresh reset

import { useUserContext } from '@/core/context/user-context'
import {
  Alignment,
  Fit,
  Layout,
  RiveState,
  StateMachineInput,
  UseRiveParameters,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas'

import { ProductProps } from '@/types/product'
import LikeFavorite from './like-favorite.riv'

export const FavoriteHeart = (
  riveProps: UseRiveParameters = {},
  product: ProductProps
) => {
  const {} = useUserContext()

  const STATE_MACHINE_NAME = 'stateMachine'
  const { rive, RiveComponent }: RiveState = useRive({
    src: LikeFavorite,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
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

  function onMouseDown() {
    if (onCheckInput.value) {
      onCheckInput.value = false
      onBackInput.value = true
    } else {
      onBackInput.value = false
      onCheckInput.value = true
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

  // useEffect(() => {}, [onCheckInput, onBackInput])

  return (
    <>
      <div className="flex items-center justify-center">
        <RiveComponent
          className="h-8 w-8"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
        />
      </div>
    </>
  )
}
