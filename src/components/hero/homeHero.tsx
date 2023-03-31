import { OrbitControls } from '@react-three/drei'

import { Iphone3D } from '../three/3D/iphone'
import Scene from '../three/scene'
import { Container } from './styles'

export function HomeHero(): JSX.Element {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1>Redux Store</h1>
        <p>Compre diversos tipos de produtos no melhor site do Brasil!</p>
      </div>

      <div id='canvas-container'>
        <Scene>
          <directionalLight intensity={0.75} />
          <ambientLight intensity={0.5} />

          <Iphone3D />

          <OrbitControls enableZoom />
        </Scene>
      </div>
    </Container>
  )
}
