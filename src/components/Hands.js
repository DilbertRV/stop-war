import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hands.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.2, 0, 0]} scale={1.78} position={[0, -0.78, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['defaultMat.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['defaultMat.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/hands.gltf')
