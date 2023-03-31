import { useMemo, useRef } from 'react'

import type { Group, Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useLoader } from '@react-three/fiber'

export function Iphone3D(props: any): JSX.Element {
  const iphoneRef = useRef<Group>(null!)
  const { nodes, materials, scene } = useLoader(
    GLTFLoader,
    '/models/GLTF/iphone/iphoneScene.gltf'
  )

  const iphoneMesh = useMemo(() => {
    const mesh = nodes.Iphone_13_pro_0 as Mesh
    return mesh
  }, [nodes])

  console.log(scene)

  return (
    <>
      <pointLight position={[10, 10, 10]} />

      <group
        ref={iphoneRef}
        position={[0, 0, 0]}
        dispose={null}
        // rotation={[0, Math.PI / 6, Math.PI / 6]}
      >
        <mesh visible args={[iphoneMesh.geometry]} castShadow receiveShadow />
      </group>
    </>
  )
}
