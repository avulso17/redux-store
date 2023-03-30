import { useRef } from 'react'

import type { Group } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useLoader } from '@react-three/fiber'

export function Ektor3D(props: any): JSX.Element {
  const ref = useRef<Group>(null!)
  const ektor = useLoader(GLTFLoader, '/models/GLTF/ektor/Ektor.gltf')
  const ektorLight = useLoader(
    GLTFLoader,
    '/models/GLTF/ektorLight/Ektor_Lights.gltf'
  )

  return (
    <>
      <pointLight position={[10, 10, 10]} />

      <primitive object={ektor.scene} />
    </>
  )
}
