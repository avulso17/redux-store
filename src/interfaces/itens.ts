export interface IItensState {
  category?: string
  description: string
  favorite: boolean
  id: string
  photo: string
  price: number
  title: string
}

export interface ICartItemProps {
  category: string
  favorite?: boolean
  id: string
  photo: string
  price: number
  quantity: number
  title: string
}
