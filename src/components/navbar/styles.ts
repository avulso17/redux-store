import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.default.contrastColor};
  display: flex;
  justify-content: space-between;
  grid-area: nav;
  gap: 32px;
  padding: 8px 12px;
  height: 100%;
  width: 100%;
`
export const Logo = styled.img`
  -webkit-user-drag: none;
  cursor: pointer;
  object-fit: contain;
  height: 40px;
  width: 148px;
`

export const InputDiv = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  height: fit-content;
  min-width: 172px;
  width: 100%;
  max-width: 424px;
`

export const SearchButton = styled.button`
  background-color: unset;
  border: none;
  padding: 0;
  position: absolute;
  left: 16px;
  top: 8px;
  bottom: 8px;
  height: fit-content;
  width: fit-content;

  > img {
    object-fit: contain;
    height: 24px;
    width: 24px;
  }
`

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.default.bgColor};
  border: none;
  border-radius: 8px;
  color: #484848;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 3.2rem;
  padding: 8px 56px 8px 50px;
  transition: all 200ms ease;
  height: 40px;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.orange};
  }
`

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: fit-content;
  width: fit-content;
`

export const MenuButton = styled.button`
  background-color: unset;
  border: none;
  border-radius: 8px;
  display: grid;
  place-items: center;
  padding: 4px;
  transition: all ${({ theme }) => theme.transition.default};
  height: fit-content;
  width: fit-content;

  > img {
    object-fit: contain;
    transition: all ${({ theme }) => theme.transition.default};
    height: 32px;
    width: 32px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};

    > img {
      filter: grayscale(1) brightness(2);
    }
  }
`
