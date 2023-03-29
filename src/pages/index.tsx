// import { Hero } from '@/components/hero'
import { Sphere3D } from '@/components/3D/sphere'
import Scene from '@/components/three/scene'

import { Container } from './styles'

export default function Home(): JSX.Element {
  return (
    <Container>
      {/* <Hero
        title='Redux Store'
        description='Compre diversos tipos de produtos no melhor site do Brasil!'
      /> */}
      <Scene>
        <Sphere3D />
      </Scene>
    </Container>
  )
}
