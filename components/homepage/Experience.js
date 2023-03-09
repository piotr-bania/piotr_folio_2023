import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Environment, OrbitControls } from '@react-three/drei'
import Model from './Model'

const Experience = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas_experience'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    shadows dpr={[1, 2]}
                    camera={{
                        position: [0, 15, 35],
                        fov: 22 }}
                    >
                    <OrbitControls />
                    <Environment
                        files='./environment/dikhololo_night_1k.hdr' />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience