import { useState } from 'react'

import { Button } from '@/components/button'
import { Swords3D } from '@/components/three/3D/sword'
import Scene from '@/components/three/scene'
import type { swordOptions } from '@/interfaces/sword'

import { ButtonGroup, Container } from './styles'

export default function PlaygroundPage(): JSX.Element {
  const [currentSword, setCurrentSword] = useState<swordOptions>('lava')

  return (
    <Container>
      <Scene>
        <Swords3D sword={currentSword} />
        {/* <Sphere3D position={[2.5, 0, 0]} /> */}
        {/* <Earth3D /> */}
        {/* <Room3D position={[0, 0, 0]} /> */}
      </Scene>

      <ButtonGroup>
        <h2>Choose your sword:</h2>

        <div>
          <Button
            onClick={() => {
              setCurrentSword('lava')
            }}
          >
            Lava
          </Button>

          <Button
            onClick={() => {
              setCurrentSword('ice')
            }}
          >
            Ice
          </Button>

          <Button
            onClick={() => {
              setCurrentSword('sun')
            }}
          >
            Sun
          </Button>

          <Button
            onClick={() => {
              setCurrentSword('meteor')
            }}
          >
            Meteor
          </Button>

          <Button
            onClick={() => {
              setCurrentSword('pointy')
            }}
          >
            Pointy
          </Button>

          <Button
            onClick={() => {
              setCurrentSword('thin')
            }}
          >
            Thin
          </Button>
        </div>
      </ButtonGroup>
    </Container>
  )
}
