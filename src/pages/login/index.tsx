import Link from 'next/link'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { TextField } from '@/components/textField'

import { Container, FormContainer, StyledBox } from './styles'

// TODO: Add validation
// TODO: Add error messages
// TODO: Add loading state
// TODO: Add success state
// TODO: improve input ref, styles and component
export default function LoginPage(): JSX.Element {
  const { register } = useForm()

  return (
    <Container>
      <FormContainer>
        <span>Faça login com sua conta</span>

        <StyledBox>
          <TextField
            {...register('email')}
            type='email'
            id='input-username'
            placeholder='Ex.: usuario123@email.com'
            label='Email'
          />

          <TextField
            {...register('password')}
            type='password'
            id='input-pass'
            placeholder='Digite aqui sua senha...'
            label='Password'
          />

          <Button size='full'>Entrar</Button>

          <span>
            Não tem uma conta?{' '}
            <Link href='/create-account'>Crie uma conta</Link>
          </span>
        </StyledBox>
      </FormContainer>
    </Container>
  )
}
