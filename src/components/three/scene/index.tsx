import type { MutableRefObject } from 'react'
import { Suspense } from 'react'

import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Loader from '../loader'

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
      <Suspense fallback={<Loader />}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
