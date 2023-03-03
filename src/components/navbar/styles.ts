import styled, { css } from 'styled-components'

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: flex;
  justify-content: space-between;
  grid-area: nav;
  gap: 3.2rem;
  padding: 0.8rem 1.2rem;
  height: 100%;
  width: 100%;
`
export const Logo = styled.span`
  color: ${({ theme }) => theme.default.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.4rem;
  height: 4rem;
  width: fit-content;
`

export const InputDiv = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  height: fit-content;
  min-width: 17.2rem;
  width: 100%;
  max-width: 42.4rem;
`

export const SearchButton = styled.button`
  background-color: unset;
  border: none;
  border-radius: 999px;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 10px;
  padding: 0.3rem 0.4rem;
  transform: translateY(-50%);
  transition: all ${({ theme }) => theme.transition.default};
  height: fit-content;
  width: fit-content;

  > svg {
    color: ${({ theme }) => theme.default.primary};
    object-fit: contain;
    height: 2.4rem;
    width: 2.4rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.default.hoverAlpha};
  }
`

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.default.bgColor};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.default.text};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 3.2rem;
  padding: 0.8rem;
  padding-left: 5rem;
  transition: all 200ms ease;
  height: 4rem;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.default.primary};
  }
`

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  height: fit-content;
  width: fit-content;
`

export const MenuButton = styled.button<{ isActive?: boolean }>`
  background-color: unset;
  border: none;
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 0.6rem;
  position: relative;
  transition: all ${({ theme }) => theme.transition.default};
  height: fit-content;
  width: fit-content;

  > svg {
    color: ${({ theme }) => theme.default.primary};
    object-fit: contain;
    transition: all ${({ theme }) => theme.transition.default};
    height: 2.8rem;
    width: 2.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.default.primary};

    > svg {
      color: ${({ theme }) => theme.default.contrastColor};
    }
  }

  ${({ isActive }) =>
    isActive === true &&
    css`
      background-color: ${({ theme }) => theme.default.primary};

      > svg {
        color: ${({ theme }) => theme.default.contrastColor};
      }
    `}
`

export const CartCount = styled.span`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 999px;
  color: ${({ theme }) => theme.default.text};
  display: grid;
  place-items: center;
  font-weight: 500;
  position: absolute;
  top: -2px;
  right: -2px;
  height: 1.8rem;
  width: 1.8rem;
`
