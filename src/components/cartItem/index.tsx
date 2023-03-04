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
  StyledCartItem,
} from './styles'

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
      <img src={photo} alt={title} />

      <CartItemInfo>
        <h3>{category ?? <Skeleton />}</h3>
        <h2>{title ?? <Skeleton />}</h2>
        <p>
          Parcelado no cartão, à vista ou PIX:
          <b> R$ {price?.toFixed(2) ?? '00,00'}</b>
        </p>
      </CartItemInfo>

      <div>
        <CartItemActions>
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
            <input type='number' value={String(quantity).padStart(2, '0')} />
            <button
              disabled={quantity >= 10}
              onClick={() => {
                handleQuantity(id, +1)
              }}
            >
              <ChevronRightIcon />
            </button>
          </div>

          <button
            onClick={() => {
              handleCart()
            }}
          >
            <TrashIcon />
            Remover
          </button>
        </CartItemActions>

        <CartItemPrice>
          <p>Preço à vista no PIX:</p>
          <b>R$ {subtotal?.toFixed(2) ?? <Skeleton />}</b>
        </CartItemPrice>
      </div>
    </StyledCartItem>
  )
}
