// import { Hero } from '@/components/hero'
import { Earth3D } from '@/components/three/3D/earth'
import { Sphere3D } from '@/components/three/3D/sphere'
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
        {/* <Sphere3D position={[2.5, 0, 0]} /> */}
        <Earth3D position={[0, 0, 0]} />
      </Scene>
    </Container>
  )
}
