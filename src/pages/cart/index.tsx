import Link from 'next/link'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { GiShoppingCart } from 'react-icons/gi'

import { AlertDialog } from '@/components/alertDialog'
import { Button } from '@/components/button'
import { CartItem } from '@/components/cartItem'
import { Separator } from '@/components/separator'
import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import { changeCart } from '@/store/reducers/cart'
import type { ICartItemProps } from '@/types/itens'
import { ArchiveIcon, FileTextIcon, TrashIcon } from '@radix-ui/react-icons'

import {
  CartContent,
  CartHeader,
  CartList,
  CartNoItems,
  Container,
  ResumeSection,
} from './styles'

export default function CartPage(): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const frete = 20
  const { cartItens, cartLength, total } = useAppSelector((state) => {
    let total = 0
    const regExp = new RegExp(state.search, 'i')

    const cartItens = state.cart.reduce((itens, cartItem) => {
      const item = state.itens.find((item) => item.id === cartItem.id)

      total += (item?.price ?? 0) * cartItem.quantity

      if (item?.title.match(regExp) != null) {
        itens.push({
          ...item,
          quantity: cartItem.quantity,
        })
      }

      return itens
    }, [])

    const cartLength = state.cart.length

    return {
      cartItens,
      total,
      cartLength,
    }
  })
  const subtotal = total + frete

  function removeAllCartItens(): void {
    cartItens.forEach((item: ICartItemProps) => {
      dispatch(changeCart(item.id))
    })
  }

  function handleAlertDialog(): void {
    if (cartItens.length > 0) {
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
              if (cartItens.length > 0) {
                setModalOpen(!modalOpen)
              }

              if (cartItens.length === 0 && cartLength === 0) {
                toast('Carrinho vazio!', { icon: '🤷‍♂️' })
              }
            }}
            ref={(ref) => {
              if (ref != null) {
                ref.style.setProperty('margin-left', 'auto', 'important')
              }
            }}
          >
            <TrashIcon />
            REMOVER TODOS <span>OS ITENS</span>
          </button>
        </CartHeader>

        <Separator orientation='horizontal' />

        <CartList>
          {cartItens.length > 0 &&
            cartLength > 0 &&
            cartItens.map((item: ICartItemProps) => {
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

          {cartItens.length === 0 && cartLength === 0 && (
            <CartNoItems>
              <b>O seu carrinho está vazio.</b>
              <p>Deseja olhar outros produtos similares?</p>
              <Link href={'/'}>
                <Button>
                  <GiShoppingCart />
                  Continuar comprando
                </Button>
              </Link>
            </CartNoItems>
          )}

          {cartItens.length === 0 && cartLength > 0 && (
            <CartNoItems>
              <b>Lamentamos, nenhum produto foi encontrado.</b>
              <p>Tente novamente com outro termo para busca...</p>
            </CartNoItems>
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
