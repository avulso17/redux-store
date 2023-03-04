import styled from 'styled-components'

export const StyledCartItem = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  outline: 0 solid transparent;
  height: fit-content;
  width: 100%;

  > img {
    background-color: #fff;
    border-radius: 0.4rem;
    object-fit: contain;
    height: 8.8rem;
    width: 8.8rem;
  }

  > div:nth-child(3) {
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    margin-left: auto;
    height: 100%;
    width: 25rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  height: fit-content;
  max-width: 50rem;
  width: 100%;

  > h3 {
    color: ${({ theme }) => theme.default.textAlpha};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.default.text};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 50rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  > p {
    color: ${({ theme }) => theme.default.textAlpha};
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 400;
    margin-top: 0.4rem;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: fit-content;

  > p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
    text-align: center;
    margin-bottom: 0.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    height: 2.8rem;
    width: fit-content;

    > button {
      background-color: unset;
      border: none;
      border-radius: 0.4rem;
      display: grid;
      place-items: center;
      transition: all ${({ theme }) => theme.transition.default};
      height: 2.8rem;
      width: 2.8rem;

      > svg {
        color: ${({ theme }) => theme.default.primary};
        height: 1.8rem;
        width: 1.8rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.default.hoverAlpha};
      }

      &:disabled {
        cursor: default;
        opacity: 0.4;
        filter: grayscale(1);
      }
    }

    > input {
      background-color: unset;
      border: none;
      border-radius: 0.4rem;
      color: ${({ theme }) => theme.default.text};
      font-size: 1;
      font-weight: 700;
      line-height: 2.8rem;
      text-align: center;
      height: 100%;
      width: 4.6rem;

      &:focus {
        outline: 2px solid ${({ theme }) => theme.default.hoverAlpha};
      }
    }
  }

  > button {
    background-color: unset;
    border: none;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.default.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
    margin-top: auto;
    padding: 0.4rem;
    transition: all ${({ theme }) => theme.transition.default};
    text-transform: uppercase;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.default.hoverAlpha};
    }
  }
`

export const CartItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
  height: 100%;
  width: fit-content;

  > p {
    color: ${({ theme }) => theme.default.textAlpha};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  > b {
    color: ${({ theme }) => theme.default.primary};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.8rem;
  }
`
