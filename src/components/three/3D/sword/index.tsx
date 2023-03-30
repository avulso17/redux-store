import { useRef } from 'react'

import type { Group, Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useLoader } from '@react-three/fiber'

type swordOptions =
  | 'bloodSword'
  | 'iceSword'
  | 'lavaSword'
  | 'meteorSword'
  | 'spaceSword'
  | 'sunSword'
  | 'thinSword'

export function Swords3D(
  props: any,
  sword: swordOptions = 'bloodSword'
): JSX.Element {
  const groupRef = useRef<Group>(null!)

  console.log('sword', sword)

  const { nodes, materials } = useLoader(
    GLTFLoader,
    `/models/GLTF/swords/${'bloodSword'}/${'bloodSword'}.gltf`
  )

  const swordMesh = nodes.BloodSword_Mesh_BloodSword_Mat1_0 as Mesh

  return (
    <>
      <pointLight position={[10, 10, 10]} />

      {/* <primitive position={[0, -2.2, 0]} ref={ref} object={bloodSword.scene} /> */}

      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          position={[0, -0.5, 0]}
          castShadow
          receiveShadow
          scale={[0.02, 0.02, 0.02]}
          args={[swordMesh.geometry, materials.BloodSword_Mat1]}
        />
      </group>
    </>
  )
}
