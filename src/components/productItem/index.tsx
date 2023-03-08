import { GiShoppingCart } from 'react-icons/gi'

import { useAppDispatch, useAppSelector } from '@/hooks/useType'
import type { IItensState } from '@/interfaces/itens'
import { changeCart } from '@/store/reducers/cart'
import { toggleFavorite } from '@/store/reducers/itens'
import { HeartFilledIcon, HeartIcon, PlusIcon } from '@radix-ui/react-icons'

import { Button } from '../button'
import { Container, ItemInfo, TitleBox } from './styles'

export function ProductItem({ ...props }: IItensState): JSX.Element {
  const { description, favorite, photo, price, title, id } = props
  const dispatch = useAppDispatch()
  const hasItemInCart = useAppSelector((state) =>
    state.cart.some((item) => item.id === id)
  )

  function handleFavorite(): void {
    dispatch(toggleFavorite(id))
  }

  function handleCart(): void {
    dispatch(changeCart(id))
  }

  return (
    <Container>
      <img src={photo} alt={title} />

      <TitleBox>
        <h2>{title}</h2>
        <p>{description}</p>
      </TitleBox>

      <ItemInfo>
        <span>R$ {price.toFixed(2)}</span>

        <div>
          <Button
            onClick={() => {
              handleCart()
            }}
            size='full'
            disabled={hasItemInCart}
          >
            {hasItemInCart ? (
              <>
                <GiShoppingCart />
                Added to cart
              </>
            ) : (
              <>
                <PlusIcon />
                Add to cart
              </>
            )}
          </Button>

          <Button
            onClick={() => {
              handleFavorite()
            }}
          >
            {favorite ? <HeartFilledIcon /> : <HeartIcon />}
          </Button>
        </div>
      </ItemInfo>
    </Container>
  )
}
