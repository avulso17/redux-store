import type { ReactNode, CSSProperties } from 'react'

import styled from 'styled-components'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
  size?: 'full' | 'hug'
  style?: CSSProperties
}
export function Button({ ...props }: IButtonProps): JSX.Element {
  const { children, size } = props

  return (
    <StyledButton size={size} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ size?: IButtonProps['size'] }>`
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
  width: ${({ size }) => (size === 'full' ? '100%' : 'fit-content')};

  > svg {
    color: inherit;
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover {
    background: ${({ theme }) => theme.default.thumbHover};
  }
`
