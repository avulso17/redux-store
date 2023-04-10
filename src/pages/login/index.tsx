import { Button } from '@/components/button'
import { TextField } from '@/components/textField'

import { Container, FormContainer, StyledBox } from './styles'

export default function LoginPage(): JSX.Element {
  return (
    <Container>
      <FormContainer>
        <span>Faça login com sua conta</span>

        <StyledBox>
          <TextField
            id='input-username'
            placeholder='Ex.: usuario123@email.com'
            label='Username ou Email'
          />

          <TextField
            id='input-pass'
            placeholder='Digite aqui sua senha...'
            label='Password'
          />

          <div>
            <Button>Entrar</Button>

            <Button variant='outlined'>Esqueceu a senha?</Button>
          </div>
        </StyledBox>
      </FormContainer>
    </Container>
  )
}
