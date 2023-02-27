import Link from 'next/link'

import styled, { css } from 'styled-components'

import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '@/styles/keyframes'
import { Content } from '@radix-ui/react-tooltip'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.default.contrastColor};
  grid-area: sidebar;
  padding: 1.6rem 1.2rem;
  height: 100%;
  width: 100%;
`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  height: fit-content;
`

export const SideTooltip = styled(Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 0.8rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  padding: 1rem 1.2rem;
  padding-left: 1.8rem;
  text-transform: capitalize;
  user-select: none;
  height: 4.8rem;
  will-change: transform, opacity;

  &[data-state='delayed-open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='left'] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side='right'] {
      animation-name: ${slideRightAndFade};
    }
  }
`

export const SideButton = styled(Link)<{ selected?: boolean }>`
  background-color: unset;
  border: unset;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.orange};
  padding: 0.8rem;
  position: relative;
  outline: none;
  transition: all 200ms ease;
  height: 4.8rem;
  width: 4.8rem;
  z-index: 10;

  img {
    transition: all 200ms ease;
    object-fit: contain;
    height: 3.2rem;
    width: 3.2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};

    img {
      filter: grayscale(1) brightness(2);
    }
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.orange};

    img {
      filter: grayscale(1) brightness(2);
    }
  }

  ${({ selected }) =>
    selected === true &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};

      img {
        filter: grayscale(1) brightness(2);
      }
    `}
`

export const LogoutButton = styled(SideButton)``
