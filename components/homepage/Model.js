import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from '../../shaders/vertex.glsl'
import fragmentShader from '../../shaders/framgent.glsl'

const WaveShaderMaterial = shaderMaterial({
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
})

extend({WaveShaderMaterial})

const Model = () => {

    const model_1 = useLoader(GLTFLoader, './models/model_1.glb')

    return (
        <>
            {/* <mesh
                ref={boxRef}
                position={[1, 0, 0]}
                geometry={model_1.nodes.TwistedTorus.geometry}
            >
            <meshStandardMaterial
                attach="material"
                color={"#F5F4FE"}
                transparent={true}
                opacity={0.25}
                metalness={0.95}
                roughness={0.05}
            />
            </mesh> */}

            <mesh>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    side={THREE.DoubleSide}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                />
            </mesh>
        </>
    )
}

export default Model