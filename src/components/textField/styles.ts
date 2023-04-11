import styled, { css } from 'styled-components'

import { Label } from '@radix-ui/react-label'

import type { ITextFieldProps } from '.'

export const Container = styled.div<{ width?: ITextFieldProps['width'] }>`
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
  error?: ITextFieldProps['error']
  success?: ITextFieldProps['success']
  variant: ITextFieldProps['variant']
  warning?: ITextFieldProps['warning']
  width?: ITextFieldProps['width']
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

  ${({ variant }) => {
    if (variant === 'small') {
      return css`
        font-size: 1.2rem;
        line-height: 2.4rem;
        height: 3.2rem;
      `
    }

    if (variant === 'medium') {
      return css`
        font-size: 1.6rem;
        line-height: 3.2rem;
        height: 4.4rem;
      `
    }
  }}

  ${({ error }) =>
    error === true &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red} !important;
    `}

    ${({ success }) =>
    success === true &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueDark} !important;
    `}

    ${({ warning }) =>
    warning === true &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.orange} !important;
    `}
`
