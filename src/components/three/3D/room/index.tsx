import { useRef } from 'react'

import type { Mesh } from 'three'

import { useTexture } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

export function Room3D(props: any): JSX.Element {
  const floorRef = useRef<Mesh>(null!)
  // const cloudsRef = useRef<Mesh>(null!)
  // const moonRef = useRef<Mesh>(null!)
  const floorProps = useTexture({
    map: '/texture/wood/Wood067_4K_Color.jpg',
    displacementMap: '/texture/wood/Wood067_4K_Displacement.jpg',
    normalMap: '/texture/wood/Wood067_4K_NormalDX.jpg',
    roughnessMap: '/texture/wood/Wood067_4K_Roughness.jpg',
    // aoMap: '/texture/wood/PavingStones092_1K_AmbientOcclusion.jpg',
  })

  const wallProps = useTexture({
    map: '/texture/concrete/concrete_color.jpg',
    displacementMap: '/texture/concrete/concrete_dis.jpg',
    normalMap: '/texture/concrete/concrete_normalDX.jpg',
    roughnessMap: '/texture/concrete/concrete_roug.jpg',
    aoMap: '/texture/concrete/concrete_ao.jpg',
  })

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime()
  //   // floorRef.current.rotation.y = a / 30
  //   // cloudsRef.current.rotation.y = a / 20
  //   // moonRef.current.rotation.y = a / 5
  // })

  return (
    <>
      <pointLight position={[-2, 4, 0]} />

      <mesh {...props} ref={floorRef}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshPhysicalMaterial {...floorProps} displacementScale={0} />
      </mesh>

      <mesh visible position={[2.05, 1.45, 0]} ref={floorRef}>
        <boxGeometry args={[0.1, 3, 4]} />
        <meshPhysicalMaterial {...wallProps} displacementScale={0} />
      </mesh>

      <mesh visible position={[0, 1.45, 2.04]} rotation-y={1.58} ref={floorRef}>
        <boxGeometry args={[0.1, 3, 4]} />
        <meshPhysicalMaterial {...wallProps} displacementScale={0} />
      </mesh>
    </>
  )
}
