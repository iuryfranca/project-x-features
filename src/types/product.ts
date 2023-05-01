export interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  amount_in_stock?: number
  amount_in_cart?: number
  created_at?: string
}
