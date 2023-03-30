import { useEffect, useRef } from 'react'

import type { Mesh } from 'three'

import { useTexture } from '@react-three/drei'

interface ISphere3DProps {
  // materialProps?: ReturnType<typeof useTexture>
  props?: any
}

export function Sphere3D(props: any): JSX.Element {
  const materialProps = useTexture({
    map: '/texture/wall/PavingStones092_1K_Color.jpg',
    displacementMap: '/texture/wall/PavingStones092_1K_Displacement.jpg',
    normalMap: '/texture/wall/PavingStones092_1K_NormalGL.jpg',
    roughnessMap: '/texture/wall/PavingStones092_1K_Roughness.jpg',
    aoMap: '/texture/wall/PavingStones092_1K_AmbientOcclusion.jpg',
  })
  const ref = useRef<Mesh>(null!)

  useEffect(() => {
    console.log(Boolean(ref.current))
  }, [])

  return (
    <>
      {/* <pointLight position={[10000, 50000, 0]} /> */}

      <mesh {...props} ref={ref}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...materialProps} displacementScale={0.2} />
      </mesh>
    </>
  )
}
