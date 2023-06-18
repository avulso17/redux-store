import styled from 'styled-components'

import { contentShow, overlayShow } from '@/styles/keyframes'
import {
  Overlay,
  Content,
  Title,
  Description,
  Cancel,
  Action,
} from '@radix-ui/react-alert-dialog'

export const DialogOverlay = styled(Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
`

export const DialogContent = styled(Content)`
  background-color: ${({ theme }) => theme.default.bgColor};
  border-radius: 16px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  min-width: 35rem;
  max-width: 50rem;
  max-height: 85vh;
  padding: 2.5rem;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1100;

  &:focus {
    outline: none;
  }
`

export const DialogTitle = styled(Title)`
  color: ${({ theme }) => theme.default.text};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
`

export const DialogDescription = styled(Description)`
  color: ${({ theme }) => theme.default.textAlpha};
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 1rem 0 2rem;
`

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  width: 100%;
`

export const DialogCancel = styled(Cancel)`
  background: unset;
  border: 1px solid ${({ theme }) => theme.default.primary};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.default.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding: 1.2rem 1.6rem;
  transition: all ${({ theme }) => theme.transition.default};
  height: fit-content;
  width: fit-content;

  > svg {
    color: inherit;
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.default.primary};
    color: ${({ theme }) => theme.default.textContrast};
  }

  &:disabled {
    filter: grayscale(1);
    opacity: 0.6;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 1rem 1.4rem;
  }
`

export const DialogAction = styled(Action)`
  background: ${({ theme }) => theme.default.primary};
  border: none;
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.default.textContrast};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding: 1.2rem 1.6rem;
  transition: all ${({ theme }) => theme.transition.default};
  height: fit-content;
  width: fit-content;

  > svg {
    color: inherit;
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background: ${({ theme }) => theme.default.thumbHover};
  }

  &:disabled {
    filter: brightness(0.6);
    opacity: 0.8;
    pointer-events: none;
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 1rem 1.4rem;
  }
`
