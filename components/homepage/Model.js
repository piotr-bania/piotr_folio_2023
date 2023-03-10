import React, { useRef } from 'react'
import { useFrame, useLoader, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import planeVertexShader from '../../shaders/vertex.glsl'
import planeFragmentShader from '../../shaders/framgent.glsl'
import { Leva, useControls } from 'leva'

const PlaneMaterial = shaderMaterial(
    {
        u_Alpha: 0.5,
        u_Multiplayer: 10,
        u_Color_A: new THREE.Color('#FFFFFF'),
        u_Color_B: new THREE.Color('#000000'),
        u_Time: 0,
        u_Frequency: 10,
        u_Color: new THREE.Color(0.0, 0.0, 0.0),
        u_Texture: new THREE.Texture(),
    },
    planeVertexShader,
    planeFragmentShader
)

extend({ PlaneMaterial })

const Model = () => {
    // const shaderControls = useControls('shader', {
    //     alpha: { min: 0, max: 1, value: 1 },
    //     frquency: { min: 1, max: 25, value: 2 },
    // })
    const shaderRef = useRef()
    useFrame((state) => {
        shaderRef.current.u_Time = state.clock.elapsedTime
    })
    const [image] = useLoader(THREE.TextureLoader, ['./images/1.jpg'])
    
    return (
        <>
            <mesh position={[1, 0, 0]}>
                <planeGeometry args={[2.5, 2.5, 50, 50]} />
                <planeMaterial
                    ref={shaderRef}
                    u_Texture={image}
                    // u_Alpha={shaderControls.alpha}
                    // u_Frequency={shaderControls.frquency}
                    side={THREE.DoubleSide}
                    transparent
                />
            </mesh>
        </>
    )
}

export default Model