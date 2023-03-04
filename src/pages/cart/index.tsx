import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { AlertDialog } from '@/components/alertDialog'
import { Button } from '@/components/button'
import { CartItem } from '@/components/cartItem'
import { Separator } from '@/components/separator'
import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import type { ICartItemProps } from '@/interfaces/itens'
import { changeCart } from '@/store/reducers/cart'
import { ArchiveIcon, FileTextIcon, TrashIcon } from '@radix-ui/react-icons'

import {
  CartContent,
  CartHeader,
  CartList,
  Container,
  ResumeSection,
} from './styles'

export default function CartPage(): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const frete = 20
  const { cart, total } = useAppSelector((state) => {
    let total = 0

    const cartItens = state.cart.reduce((itens, cartItem) => {
      const item = state.itens.find((item) => item.id === cartItem.id)

      total += (item?.price ?? 0) * cartItem.quantity

      itens.push({
        ...item,
        quantity: cartItem.quantity,
      })

      return itens
    }, [])

    return {
      cart: cartItens,
      total,
    }
  })
  const subtotal = total + frete

  function removeAllCartItens(): void {
    cart.forEach((item: ICartItemProps) => {
      dispatch(changeCart(item.id))
    })
  }

  function handleAlertDialog(): void {
    if (cart.length > 0) {
      removeAllCartItens()
    }
  }

  return (
    <Container>
      <CartContent>
        <CartHeader>
          <ArchiveIcon />
          <h2>Produto e frete</h2>

          <button
            onClick={() => {
              if (cart.length > 0) {
                setModalOpen(!modalOpen)
              }

              if (cart.length === 0) {
                toast('Carrinho vazio!', { icon: '🤷‍♂️' })
              }
            }}
          >
            <TrashIcon />
            REMOVER TODOS OS ITENS
          </button>
        </CartHeader>

        <Separator orientation='horizontal' />

        <CartList>
          {cart.length > 0 ? (
            cart.map((item: ICartItemProps) => {
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
            })
          ) : (
            <p>Carrinho vazio!</p>
          )}
        </CartList>
      </CartContent>

      <ResumeSection>
        <CartHeader>
          <FileTextIcon />
          <h2>Resumo</h2>
        </CartHeader>

        <div>
          <p>
            Valor dos Produtos: <b>R$ {total.toFixed(2)}</b>
          </p>

          <Separator orientation='horizontal' />

          <p>
            Frete: <b>R$ {frete.toFixed(2)}</b>
          </p>

          <p>
            Subtotal: <b>R$ {subtotal.toFixed(2)}</b>
          </p>
        </div>

        <Button size='full'>Ir para o pagamento</Button>
        <Button variant='outlined' size='full'>
          Continuar comprando
        </Button>
      </ResumeSection>

      <AlertDialog
        actionFn={() => {
          handleAlertDialog()
        }}
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open)
        }}
        description='Essa ação não pode ser desfeita. Isso excluirá todos os itens do seu carrinho.'
      />
    </Container>
  )
}
