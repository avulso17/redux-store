import styled, { css } from 'styled-components'

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '@/styles/keyframes'
import {
  Content,
  Label,
  Item,
  ItemIndicator,
  RadioItem,
  CheckboxItem,
  Separator,
  Arrow,
  SubTrigger,
  SubContent,
} from '@radix-ui/react-dropdown-menu'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.4rem;
  height: 4rem;
  min-width: 18.8rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    min-width: unset;
  }
`

export const DropdownButton = styled.button`
  background-color: unset;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.default.primary};
  display: grid;
  place-items: center;
  margin: auto 0;
  margin-left: 0.4rem;
  outline: 0 solid transparent;
  transition: background-color ${({ theme }) => theme.transition.default};
  height: 2.4rem;
  width: 2.4rem;

  > img {
    object-fit: contain;
    height: 0.5rem;
    width: 1rem;

    @media ${({ theme }) => theme.breakpoint.mobile} {
      display: none;
    }
  }

  > svg {
    display: none;

    @media ${({ theme }) => theme.breakpoint.mobile} {
      display: block;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.default.hoverAlpha};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.default.hoverAlpha};
  }
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 9.8rem;

  > span {
    display: flex;
    align-items: center;
    height: 1.6rem;
    width: 100%;

    > h2 {
      color: ${({ theme }) => theme.default.text};
      font-size: 1.2rem;
      font-weight: 700;
      overflow: hidden;
      text-align: end;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: fit-content;
      width: 9.8rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.4rem;
    height: 1.6rem;
    width: 100%;

    > p {
      color: ${({ theme }) => theme.default.text};
      font-size: 1rem;
      font-weight: 300;
    }

    > img {
      object-fit: contain;
      height: 1.4rem;
      width: 1.2rem;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: none;
  }
`

//  ----------------------------------------------
// DROPDOWN MENU STYLES
//  ----------------------------------------------

const MenuContentStyles = css`
  animation-duration: 400ms;
  animation-timing-function: ${({ theme }) => theme.transition.radix};
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 0.6rem;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: 0.4rem;
  min-width: 22rem;
  will-change: transform, opacity;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }

    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }

    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }

    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }
`

const menuItemStyles = css`
  all: unset;
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.default.text};
  display: flex;
  font-size: 1.2rem;
  line-height: 1;
  padding: 0 0.4rem;
  padding-left: 2.4rem;
  position: relative;
  height: 2.5rem;
  user-select: none;

  &[data-disabled] {
    color: ${({ theme }) => theme.default.textAlpha};
    pointer-events: 'none';
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.default.primary};
    color: ${({ theme }) => theme.default.textContrast};
  }
`

export const MenuContent = styled(Content)`
  ${MenuContentStyles}
`

export const MenuSubContent = styled(SubContent)`
  ${MenuContentStyles}
`

export const MenuSubTrigger = styled(SubTrigger)`
  ${menuItemStyles}
`

export const MenuItem = styled(Item)`
  ${menuItemStyles}
`

export const MenuRadioItem = styled(RadioItem)`
  ${menuItemStyles}
`

export const MenuCheckboxItem = styled(CheckboxItem)`
  ${menuItemStyles}
`

export const MenuArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.default.contrastColor};
`

export const MenuLabel = styled(Label)`
  color: ${({ theme }) => theme.default.textAlpha};
  font-size: 1.2rem;
  line-height: 2.4rem;
  padding-left: 2.4rem;
`

export const MenuItemIndicator = styled(ItemIndicator)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 2.5rem;
`

export const MenuSeparator = styled(Separator)`
  background-color: ${({ theme }) => theme.default.hoverAlpha};
  min-height: 0.1rem;
  height: 0.1rem;
  margin: 0.5rem;
`

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 2rem;
  color: ${({ theme }) => theme.default.text};

  [data-highlighted] > & {
    color: ${({ theme }) => theme.default.textContrast};
  }

  [data-disabled] > & {
    color: ${({ theme }) => theme.default.textAlpha};

    > svg {
      color: ${({ theme }) => theme.default.textAlpha};
    }
  }
`
