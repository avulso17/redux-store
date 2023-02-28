import styled from 'styled-components'

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '@/styles/keyframes'
import {
  Root,
  Trigger,
  Portal,
  Content,
  Label,
  Item,
  ItemIndicator,
  RadioItem,
  CheckboxItem,
  RadioGroup,
  Separator,
  Arrow,
  Sub,
  SubTrigger,
  SubContent,
} from '@radix-ui/react-dropdown-menu'

export const MenuRoot = styled(Root)`
  outline: none;
`

export const MenuTrigger = styled(Trigger)`
  outline: none;
`

export const MenuPortal = styled(Portal)``

export const MenuContent = styled(Content)`
  animation-duration: 400ms;
  animation-timing-function: ${({ theme }) => theme.transition.radix};
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: 5px;
  min-width: 220px;
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

export const MenuLabel = styled(Label)``

export const MenuItem = styled(Item)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.default.text};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;

  &[data-disabled] {
    color: #c8c7cb;
    pointer-events: 'none';
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.default.primary};
    color: ${({ theme }) => theme.default.textContrast};
  }
`

export const MenuItemIndicator = styled(ItemIndicator)`
  color: ${({ theme }) => theme.default.textContrast};
  font-size: 1.2rem;
  line-height: 25px;
  padding-left: 25px;
`

export const MenuRadioItem = styled(RadioItem)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.default.text};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;

  &[data-disabled] {
    color: #c8c7cb;
    pointer-events: 'none';
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.default.primary};
    color: #fff;
  }
`

export const MenuCheckboxItem = styled(CheckboxItem)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.default.text};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;

  &[data-disabled] {
    color: #c8c7cb;
    pointer-events: 'none';
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.default.primary};
    color: #fff;
  }
`

export const MenuGroup = styled(Item)``

export const MenuRadioGroup = styled(RadioGroup)``

export const MenuSeparator = styled(Separator)`
  background-color: ${({ theme }) => theme.default.hoverAlpha};
  height: 1px;
  margin: 5px;
`

export const MenuArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.default.contrastColor};
`

export const MenuSub = styled(Sub)``

export const MenuSubTrigger = styled(SubTrigger)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.default.text};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;

  &[data-disabled] {
    color: #c8c7cb;
    pointer-events: 'none';
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.default.primary};
    color: #fff;
  }
`

export const MenuSubContent = styled(SubContent)`
  animation-duration: 400ms;
  animation-timing-function: ${({ theme }) => theme.transition.radix};
  background-color: ${({ theme }) => theme.default.contrastColor};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: 5px;
  min-width: 220px;
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

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: ${({ theme }) => theme.default.text};

  [data-highlighted] > & {
    color: ${({ theme }) => theme.default.textContrast};
  }

  [data-disabled] & {
    color: #c8c7cb;
  }
`
