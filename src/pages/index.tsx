import { Hero } from '@/components/hero'
// import { useAppSelector } from '@/hooks/useType'

import { Container } from './styles'

export default function Home(): JSX.Element {
  // const { categorys } = useAppSelector((state) => {
  //   return {
  //     categorys: state.categorys,
  //   }
  // })

  return (
    <Container>
      <Hero
        title='Redux Store'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
      />
    </Container>
  )
}
