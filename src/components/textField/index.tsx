import { Container, StyledLabel, StyledTextField } from './styles'

interface ITextFieldProps {
  id: string
  label: string | null
  placeholder?: string
  required?: boolean
}

export function TextField({
  id,
  required = false,
  label = null,
  placeholder = 'Text Field',
  ...props
}: ITextFieldProps): JSX.Element {
  return (
    <Container>
      {label != null && (
        <StyledLabel htmlFor={id}>
          {label} {required && '*'}
        </StyledLabel>
      )}

      <StyledTextField
        {...props}
        id={id}
        type='text'
        placeholder={placeholder}
        required={required}
      />
    </Container>
  )
}
