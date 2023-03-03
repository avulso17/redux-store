import { Button } from '@/components/button'
import { Separator } from '@/components/separator'
import { useAppSelector } from '@/hooks/useType'
import { ArchiveIcon, FileTextIcon, TrashIcon } from '@radix-ui/react-icons'

import { CartItem } from './cartItem'
import {
  CartContent,
  CartHeader,
  CartList,
  Container,
  ResumeSection,
} from './styles'

export default function CartPage(): JSX.Element {
  const { cart, itens } = useAppSelector((state) => ({
    cart: state.cart,
    itens: state.itens.filter((item) => item.id === state.cart[0]),
  }))

  console.log(itens)

  return (
    <Container>
      <CartContent>
        <CartHeader>
          <ArchiveIcon />
          <h2>Produto e frete</h2>

          <button>
            <TrashIcon />
            REMOVER TODOS OS ITENS
          </button>
        </CartHeader>

        <Separator orientation='horizontal' />

        <CartList>
          <CartItem></CartItem>
        </CartList>
      </CartContent>

      <ResumeSection>
        <CartHeader>
          <FileTextIcon />
          <h2>Resumo</h2>
        </CartHeader>

        <div>
          <p>
            Valor dos Produtos: <b>R$ 0,00</b>
          </p>

          <Separator orientation='horizontal' />

          <p>
            Frete: <b>R$ 0,00</b>
          </p>

          <p>
            Subtotal: <b>R$ 0,00</b>
          </p>
        </div>

        <Button size='full'>Ir para o pagamento</Button>
        <Button variant='outlined' size='full'>
          Continuar comprando
        </Button>
      </ResumeSection>
    </Container>
  )
}
