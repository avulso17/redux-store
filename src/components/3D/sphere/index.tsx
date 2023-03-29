import { useEffect, useRef } from 'react'

import type { Mesh } from 'three'

import { useTexture } from '@react-three/drei'

export function Sphere3D(props: any): JSX.Element {
  const ref = useRef<Mesh>(null!)

  const StandardMaterialProps = useTexture({
    map: '/texture/wall/PavingStones092_1K_Color.jpg',
    displacementMap: '/texture/wall/PavingStones092_1K_Displacement.jpg',
    normalMap: '/texture/wall/PavingStones092_1K_NormalGL.jpg',
    roughnessMap: '/texture/wall/PavingStones092_1K_Roughness.jpg',
    aoMap: '/texture/wall/PavingStones092_1K_AmbientOcclusion.jpg',
  })

  useEffect(() => {
    console.log(Boolean(ref.current))
  }, [])

  return (
    <>
      <pointLight position={[1, 5, -4]} />

      <mesh {...props} ref={ref}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          {...StandardMaterialProps}
          displacementScale={0.2}
        />
      </mesh>
    </>
  )
}
