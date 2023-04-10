import { forwardRef } from 'react'

import type { CSSProperties } from 'styled-components'

import { StyledInput, Container, StyledLabel } from './styles'

// interface ITextFieldProps {
//   id: string
//   label: string | null
//   placeholder?: string
//   ref?: React.Ref<HTMLInputElement>
//   required?: boolean
//   width?: string
// }

// export function TextField({
//   id,
//   required = false,
//   label = null,
//   placeholder = 'Text Field',
//   ref,
//   ...props
// }: ITextFieldProps): JSX.Element {
//   return (
//     <Container>
//       {label != null && (
//         <StyledLabel htmlFor={id}>
//           {label} {required && '*'}
//         </StyledLabel>
//       )}

//       <StyledInput
//         {...props}
//         id={id}
//         type='text'
//         placeholder={placeholder}
//         required={required}
//         ref={ref}
//       />
//     </Container>
//   )
// }

type TextFieldProps = React.ComponentProps<typeof StyledInput> & {
  label?: string | null
  required?: boolean
  style?: CSSProperties
  success?: boolean
  warning?: boolean
}

const TextField = forwardRef<
  React.ElementRef<typeof StyledInput>,
  TextFieldProps
>((props, forwardedRef) => {
  const {
    // warning = false,
    // success = false,
    label = null,
    required = false,
    id,
    ...textFieldProps
  } = props

  return (
    <Container>
      {label != null && (
        <StyledLabel htmlFor={id}>
          {label} {required && '*'}
        </StyledLabel>
      )}
      <StyledInput
        size='medium'
        id={id}
        ref={forwardedRef}
        {...textFieldProps}
      />
    </Container>
  )
})

TextField.displayName = 'TextField'

export { TextField }
