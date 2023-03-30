import { useRef } from 'react'

import type { Mesh } from 'three'

import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Earth3D(props: any): JSX.Element {
  const earthRef = useRef<Mesh>(null!)
  const cloudsRef = useRef<Mesh>(null!)
  const moonRef = useRef<Mesh>(null!)
  const earthProps = useTexture({
    map: '/texture/galaxy/earth_nightmap.jpg',
  })

  const clouds = useTexture('/texture/galaxy/earth_clouds.jpg')

  const moon = useTexture('/texture/galaxy/moon.jpg')

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    earthRef.current.rotation.y = a / 30
    cloudsRef.current.rotation.y = a / 20
    moonRef.current.rotation.z = a / 5
  })

  return (
    <>
      {/* <pointLight position={[10000, 50000, 0]} /> */}

      <mesh {...props} ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial {...earthProps} displacementScale={0.2} />
      </mesh>

      <mesh {...props} ref={cloudsRef}>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshStandardMaterial alphaMap={clouds} opacity={0.1} transparent />
      </mesh>

      <mesh position={[3.5, 1.2, 0]} ref={moonRef}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial map={moon} />
      </mesh>
    </>
  )
}
