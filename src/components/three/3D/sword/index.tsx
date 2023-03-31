import { useMemo, useRef } from 'react'

import type { Mesh, Group } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useFrame, useLoader } from '@react-three/fiber'

type swordOptions =
  | 'blood'
  | 'ice'
  | 'lava'
  | 'meteor'
  | 'pointy'
  | 'sun'
  | 'thin'

interface ISword3DProps {
  props?: any
  sword?: swordOptions
}

export function Swords3D({
  props,
  sword = 'blood',
}: ISword3DProps): JSX.Element {
  const groupRef = useRef<Group>(null!)

  const { nodes, materials, scene } = useLoader(
    GLTFLoader,
    `/models/GLTF/swords/${sword}Sword/${sword}Sword.gltf`
  )

  const swordMesh = useMemo(() => {
    const mesh = nodes[scene.children[0].name] as Mesh
    return mesh
  }, [nodes, scene])

  const swordMaterial = useMemo(() => {
    const materialKeys = Object.keys(materials)

    const swordMaterialName = materialKeys.find((key) =>
      key.toLowerCase().includes(sword.toLowerCase())
    )

    return materials[swordMaterialName!].name
  }, [materials, sword])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    groupRef.current.rotation.y = time / 1
  })

  return (
    <>
      <pointLight position={[10, 10, 10]} />

      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          args={[swordMesh.geometry, materials[swordMaterial]]}
          castShadow
          position={[0, -0.5, 0]}
          receiveShadow
          rotation={[0, Math.PI / 6, Math.PI / 6]}
          scale={[0.02, 0.02, 0.02]}
        />
      </group>
    </>
  )
}
