import React, { useRef } from 'react'
import { useFrame, useLoader, extend } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
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
    },
    planeVertexShader,
    planeFragmentShader
)

extend({ PlaneMaterial })

const Model = () => {

    const shaderControls = useControls('shader', {
        alpha: {
            min: 0, max: 1, value: 0.5
        },
        multiplier: {
            min: 1, max: 25, value: 10
        },
        color_A: '#FFFFFF',
        color_B: '#000000'
    })

    const shaderRef = useRef()
    useFrame((state) => {
        shaderRef.current.u_Time = state.clock.elapsedTime
    })

    const model_1 = useLoader(GLTFLoader, './models/model_1.glb')

    return (
        <>
            {/* <mesh
                position={[0, 0, 0]}
                geometry={model_1.nodes.TwistedTorus.geometry}
            >
            <planeMaterial  />
            <meshStandardMaterial
                attach="material"
                color={"#F5F4FE"}
                transparent={true}
                opacity={0.5}
                metalness={0.95}
                roughness={0.05}
            />
            </mesh> */}

            <mesh>
                <planeGeometry args={[2, 2, 20, 20]} />
                <planeMaterial
                    // wireframe
                    ref={shaderRef}
                    side={THREE.DoubleSide}
                    transparent
                    u_Alpha={shaderControls.alpha}
                    u_Multiplayer={shaderControls.multiplier}
                    u_Color_A={shaderControls.color_A}
                    u_Color_B={shaderControls.color_B}
                />

                {/* <shaderMaterial
                    wireframe
                    side={THREE.DoubleSide}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                /> */}
            </mesh>
        </>
    )
}

export default Model