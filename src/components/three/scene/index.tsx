import type { MutableRefObject } from 'react'

import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

interface ISceneProps {
  children: JSX.Element[] | JSX.Element
  eventPrefix?: 'offset' | 'client' | 'page' | 'layer' | 'screen'
  eventSource?: HTMLElement | MutableRefObject<HTMLElement>
}

export default function Scene({
  children,
  ...props
}: ISceneProps): JSX.Element {
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.5} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
