import { useAppSelector } from '@/hooks/useType'
import { ArchiveIcon } from '@radix-ui/react-icons'

import { CartContent, Container, ResumeSection } from './styles'

export default function CartPage(): JSX.Element {
  const { cart } = useAppSelector((state) => ({
    cart: state.cart,
  }))

  console.log(cart)

  return (
    <Container>
      <CartContent>
        <h1>itens</h1>
      </CartContent>

      <ResumeSection>
        <h2>
          <ArchiveIcon />
          Resumo
        </h2>
      </ResumeSection>
    </Container>
  )
}
