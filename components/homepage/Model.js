import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Model = () => {

    const boxRef = useRef()

    useFrame(() => {
        boxRef.current.rotation.y -= 0.003,
        boxRef.current.rotation.z -= 0.004,
        boxRef.current.rotation.x -= 0.005
    })

    return (
        <>
            <mesh ref={boxRef} scale={4} >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}

export default Model