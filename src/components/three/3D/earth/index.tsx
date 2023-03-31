import { useRef } from 'react'

import type { Mesh } from 'three'
import { TextureLoader } from 'three'

import { useFrame, useLoader } from '@react-three/fiber'

export function Earth3D(props: any): JSX.Element {
  const earthRef = useRef<Mesh>(null!)
  const cloudsRef = useRef<Mesh>(null!)
  const moonRef = useRef<Mesh>(null!)

  const [earthMap, earthNormal, earthDisplacement] = useLoader(TextureLoader, [
    '/texture/galaxy/earth_daymap.jpg',
    '/texture/galaxy/earth_normal.jpg',
    '/texture/galaxy/earth_dis.jpg',
  ])
  const clouds = useLoader(TextureLoader, '/texture/galaxy/earth_clouds.jpg')
  const moon = useLoader(TextureLoader, '/texture/galaxy/moon.jpg')

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const centerPosition = earthRef.current.position

    const radius = 3.5

    moonRef.current.position.x = centerPosition.x + Math.sin(time / 2) * radius
    moonRef.current.position.y = centerPosition.y + 1.5
    moonRef.current.position.z = centerPosition.z + Math.cos(time / 2) * radius

    moonRef.current.rotation.x = time / 40
    moonRef.current.rotation.y = time / 4

    earthRef.current.rotation.y = time / 30
    cloudsRef.current.rotation.y = time / 20
  })

  return (
    <>
      <pointLight position={[10, 10, 10]} />

      <mesh {...props} ref={earthRef}>
        <sphereBufferGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={earthMap}
          normalMap={earthNormal}
          displacementMap={earthDisplacement}
          displacementScale={-0.015}
        />
      </mesh>

      <mesh visible {...props} ref={cloudsRef}>
        <sphereBufferGeometry args={[2.02, 64, 64]} />
        <meshStandardMaterial alphaMap={clouds} opacity={0.75} transparent />
      </mesh>

      <mesh position={[3.5, 1.2, 0]} ref={moonRef}>
        <sphereBufferGeometry args={[0.25, 64, 64]} />
        <meshStandardMaterial map={moon} />
      </mesh>

      <fog attach='fog' args={['black', 0, 40]} />
    </>
  )
}
