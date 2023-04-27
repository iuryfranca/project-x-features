import { FC, ReactNode, createContext, useContext, useState } from 'react'

interface PropsReactNode {
  children: ReactNode
}

type IColor = 'gray' | 'green' | 'sky' | 'violet' | 'pink' | 'red' | 'amber'

type ColorsContextData = {
  color: IColor
  changeColor: (IColor) => void
}

export const ColorsContext = createContext({} as ColorsContextData)

export const ColorsProvider: FC<PropsReactNode> = ({ children }) => {
  const [color, setColor] = useState<IColor>('violet')

  const changeColor = (color: IColor) => {
    setColor(color)
  }

  return (
    <ColorsContext.Provider
      value={{
        color,
        changeColor,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}

export const useColorsContext = () => {
  const context = useContext(ColorsContext)

  if (!context) {
    throw new Error('useColorsContext must be used within a ColorsProvider')
  }

  return context
}
