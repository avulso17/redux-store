import styled, { css } from 'styled-components'

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: nav;
  gap: 3.2rem;
  padding: 0.8rem 1.2rem;
  position: relative;
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    gap: 1.6rem;

    > .input-div-web {
      display: none;
    }
  }
`
export const Logo = styled.span`
  color: ${({ theme }) => theme.default.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.4rem;
  margin-left: 0.6rem;
  height: 4rem;
  width: fit-content;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    > b {
      display: none;
    }
  }
`

export const InputDiv = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  height: fit-content;
  min-width: 17.2rem;
  width: 100%;
  max-width: 42.4rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    gap: 1.2rem;
    max-width: none;
  }
`

const SearchButtonStyles = css`
  background-color: unset;
  border: none;
  border-radius: 999px;
  padding: 0;
  padding: 0.3rem 0.4rem;
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

export const SearchButton = styled.button`
  ${SearchButtonStyles}
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

export const MobileSearchButton = styled.button`
  ${SearchButtonStyles}
  display: none;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: block;
  }
`

export const CloseSearchButton = styled.button`
  ${SearchButtonStyles}
`

export const MobileSearchContainer = styled.div`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: none;
  align-items: center;
  gap: 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.8rem 1.2rem;
  height: 100%;
  width: 100%;
  z-index: 10;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: flex;
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

  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding-left: 1.8rem;
  }
`

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  height: fit-content;
  width: fit-content;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    > :nth-child(-n + 1) {
      display: none;
    }
  }
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
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 500;
  position: absolute;
  top: -2px;
  right: -2px;
  height: 1.8rem;
  width: 1.8rem;
`
