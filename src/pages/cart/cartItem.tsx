import { StyledCartItem } from './styles'

export function CartItem(): JSX.Element {
  return (
    <StyledCartItem>
      <img src='' alt='' />

      <div>
        <h3>category</h3>
        <h2>product name</h2>
        <p>subtotal price</p>
      </div>

      <div>
        <p>Quant.</p>

        <div>
          <button>{'<'}</button>
          <input type='number' />
          <button>{'>'}</button>
        </div>

        <button>Remover</button>
      </div>

      <div>
        <p>Preço à vista no PIX:</p>
        <b>R$ 0,00</b>
      </div>
    </StyledCartItem>
  )
}
