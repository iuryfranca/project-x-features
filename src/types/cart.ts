import { ProductProps } from './product'

export interface CartProps extends ProductProps {
  amount: number
}
