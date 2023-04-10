import styled, { css } from 'styled-components'

import { Label } from '@radix-ui/react-label'

interface IStyledTextFieldProps {
  error?: boolean
  size?: 'small' | 'medium'
  success?: boolean
  variant?: string
  warning?: boolean
  width?: 'full' | 'auto'
}

export const Container = styled.div<{ width?: IStyledTextFieldProps['width'] }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: ${({ width }) => (width === 'full' ? '100%' : 'auto')};
`

export const StyledLabel = styled(Label)`
  font-size: 1.6rem;
  font-weight: 500;
  width: fit-content;
`

export const StyledInput = styled.input<{
  size: IStyledTextFieldProps['size']
}>`
  background-color: ${({ theme }) => theme.default.bgColor};
  color: ${({ theme }) => theme.default.text};
  border: 0;
  border-radius: 0.6rem;
  display: inline-flex;
  align-items: center;
  filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));
  padding: 0 1.6rem;
  outline: none;
  transition: box-shadow 200ms ease;
  width: ${({ width }) => (width === 'full' ? '100%' : 'auto')};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.default.primary};
  }

  ${({ size }) => {
    if (size === 'small') {
      return css`
        font-size: 1.2rem;
        line-height: 2.4rem;
        height: 3.2rem;
      `
    }

    if (size === 'medium') {
      return css`
        font-size: 1.6rem;
        line-height: 3.2rem;
        height: 4.4rem;
      `
    }
  }}
`
