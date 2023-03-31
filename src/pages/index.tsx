// import { Hero } from '@/components/hero'
// import { Earth3D } from '@/components/three/3D/earth'
// import { Room3D } from '@/components/three/3D/room'
// import { Sphere3D } from '@/components/three/3D/sphere'
import { Swords3D } from '@/components/three/3D/sword'
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
        <Swords3D sword='pointy' />
        {/* <Sphere3D position={[2.5, 0, 0]} /> */}
        {/* <Earth3D /> */}
        {/* <Room3D position={[0, 0, 0]} /> */}
      </Scene>
    </Container>
  )
}
