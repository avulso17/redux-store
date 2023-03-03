import { useAppSelector } from '@/hooks/useType'

import { Container } from './styles'

export default function FavoritesPage(): JSX.Element {
  const { cart } = useAppSelector((state) => ({
    cart: state.cart,
  }))

  console.log(cart)

  return (
    <Container>
      <h1>Favorites</h1>
    </Container>
  )
}
