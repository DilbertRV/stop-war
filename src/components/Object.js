import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Hands from './Hands'


const Object = () => {
    return (
        <Canvas className='canvas' camera={{ position: [0, 0, 3.5], fov: 40 }}>
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={[Math.PI / 2]} />
            <Suspense fallback={null}>
                <Hands />
            </Suspense>
        </Canvas >
    )
}

export default Object