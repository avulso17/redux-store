import Image from 'next/image'

import { useAppDispatch } from '@/hooks/useType'
import type { ICartItemProps } from '@/interfaces/itens'
import { changeCart, changeQuantity } from '@/store/reducers/cart'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from '@radix-ui/react-icons'

import { Skeleton } from '../skeleton/skeleton'
import {
  CartItemActions,
  CartItemInfo,
  CartItemPrice,
  LeftSide,
  RightSide,
  StyledCartItem,
} from './styles'

// TODO: FIX ONCHANGE INPUT
export function CartItem({
  category,
  price,
  title,
  photo,
  id,
  quantity,
}: ICartItemProps): JSX.Element {
  const dispatch = useAppDispatch()
  const subtotal = price * quantity

  function handleCart(): void {
    dispatch(changeCart(id))
  }

  function handleQuantity(id: string, value: number): void {
    if (quantity >= 1) {
      dispatch(changeQuantity({ id, quantity: value }))
    }
  }

  return (
    <StyledCartItem>
      <LeftSide>
        <Image src={photo} alt={title} height={88} width={88} />

        <CartItemInfo>
          <h3>{category ?? <Skeleton />}</h3>
          <h2>{title ?? <Skeleton />}</h2>
          <p>
            Parcelado no cartão, à vista ou PIX:
            <b> R$ {price?.toFixed(2) ?? '00,00'}</b>
          </p>
        </CartItemInfo>
      </LeftSide>

      <RightSide>
        <CartItemActions>
          <div>
            <p>Quant.</p>

            <div>
              <button
                disabled={quantity <= 1}
                onClick={() => {
                  handleQuantity(id, -1)
                }}
              >
                <ChevronLeftIcon />
              </button>
              <input
                type='number'
                value={String(quantity).padStart(2, '0')}
                onChange={(e) => {
                  const value = Number(e.target.value)

                  dispatch(changeQuantity({ id, quantity: value }))
                }}
              />
              <button
                disabled={quantity >= 10}
                onClick={() => {
                  handleQuantity(id, +1)
                }}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              handleCart()
            }}
          >
            <TrashIcon />
            <span>Remover</span>
          </button>
        </CartItemActions>

        <CartItemPrice>
          <p>Preço à vista no PIX:</p>
          <b>R$ {subtotal?.toFixed(2) ?? <Skeleton />}</b>
        </CartItemPrice>
      </RightSide>
    </StyledCartItem>
  )
}
