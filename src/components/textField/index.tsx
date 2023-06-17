import { forwardRef } from 'react'

import { StyledInput, Container, StyledLabel } from './styles'

export interface ITextFieldProps {
  error?: boolean
  forwardedRef?: React.Ref<HTMLInputElement>
  id: string
  label: string | null
  placeholder?: string
  ref?: React.Ref<HTMLInputElement>
  required?: boolean
  success?: boolean
  type?: React.HTMLInputTypeAttribute
  variant?: 'small' | 'medium'
  warning?: boolean
  width?: 'full' | 'auto'
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      error,
      id,
      label = null,
      placeholder = 'Text Field',
      forwardedRef,
      required = false,
      type = 'text',
      variant = 'medium',
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        {label != null && (
          <StyledLabel htmlFor={id}>
            {label} {required && '*'}
          </StyledLabel>
        )}

        <StyledInput
          {...props}
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          error={error}
          variant={variant}
          ref={forwardedRef ?? ref}
        />
      </Container>
    )
  }
)

TextField.displayName = 'TextField'

export { TextField }
