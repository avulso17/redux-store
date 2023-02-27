import styled from 'styled-components'

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '@/styles/keyframes'
import { Content, Close, Arrow } from '@radix-ui/react-popover'

export const PopoverContent = styled(Content)`
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
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

  &:focus {
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px violet;
  }
`

export const PopoverArrow = styled(Arrow)`
  fill: white;
`

export const PopoverClose = styled(Close)`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: violet;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: violet;
  }

  &:focus {
    box-shadow: 0 0 0 2px violet;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const IconButton = styled.button`
  background-color: unset;
  border: none;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-size: 22px;
  justify-content: center;
  font-family: inherit;
  transition: background-color ${({ theme }) => theme.transition.default};
  position: absolute;
  top: 8px;
  bottom: 8px;
  right: 12px;
  height: fit-content;
  width: fit-content;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`

export const Fieldset = styled.fieldset`
  all: unset;
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Label = styled.label`
  font-size: 13px;
  color: violet;
  width: 75px;
`

export const Input = styled.input`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 13;
  line-height: 1;
  color: violet;
  box-shadow: 0 0 0 1px violet;
  height: 25;

  &:focus {
    box-shadow: 0 0 0 2px violet;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.default.text};
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  margin: 0;
  margin-bottom: 10px;
`
