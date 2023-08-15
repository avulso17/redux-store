import { Hero } from '@/components/hero'

import { Container } from './styles'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Hero
        title='Flow Store'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
      />
    </Container>
  )
}
