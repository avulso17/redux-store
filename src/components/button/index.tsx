import type { ReactNode, CSSProperties } from 'react'

import styled, { css } from 'styled-components'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  size?: 'full' | 'hug'
  style?: CSSProperties
  variant?: 'colorful' | 'outlined'
}
export function Button({ ...props }: IButtonProps): JSX.Element {
  const { children, size, variant = 'colorful' } = props

  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{
  size?: IButtonProps['size']
  variant?: IButtonProps['variant']
}>`
  border-radius: 0.6rem;
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
  width: ${({ size }) => (size === 'full' ? '100%' : 'fit-content')};

  > svg {
    color: inherit;
    height: 1.8rem;
    width: 1.8rem;
  }

  ${({ variant }) =>
    variant === 'colorful' &&
    css`
      background: ${({ theme }) => theme.default.primary};
      border: none;
      color: ${({ theme }) => theme.default.textContrast};

      &:hover {
        background: ${({ theme }) => theme.default.thumbHover};
      }
    `}

  ${({ variant }) =>
    variant === 'outlined' &&
    css`
      background: unset;
      border: 1px solid ${({ theme }) => theme.default.primary};
      color: ${({ theme }) => theme.default.primary};

      &:hover {
        background-color: ${({ theme }) => theme.default.primary};
        color: ${({ theme }) => theme.default.textContrast};
      }
    `}
`
