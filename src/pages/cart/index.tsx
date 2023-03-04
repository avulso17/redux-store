import { Button } from '@/components/button'
import { CartItem } from '@/components/cartItem'
import { Separator } from '@/components/separator'
import { useAppSelector } from '@/hooks/useType'
import type { ICartItemProps } from '@/interfaces/itens'
import { ArchiveIcon, FileTextIcon, TrashIcon } from '@radix-ui/react-icons'

import {
  CartContent,
  CartHeader,
  CartList,
  Container,
  ResumeSection,
} from './styles'

export default function CartPage(): JSX.Element {
  const cart = useAppSelector((state) => {
    const cartItens = state.cart.reduce((itens, cartItem) => {
      const item = state.itens.find((item) => item.id === cartItem.id)

      itens.push({
        ...item,
        quantity: cartItem.quantity,
      })

      return itens
    }, [])

    return cartItens
  })

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
          {cart.map((item: ICartItemProps) => {
            const { id, price, photo, category, title, quantity } = item

            return (
              <CartItem
                key={id}
                id={id}
                title={title}
                category={category}
                price={price}
                photo={photo}
                quantity={quantity}
              />
            )
          })}
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
