import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Environment, OrbitControls } from '@react-three/drei'
import Model from './Model'
import Button from './Button'

const Experience = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas_hero_homepage'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    camera={{
                        position: [2, 0, 5],
                        fov: 35 }}
                    >
                    {/* <OrbitControls /> */}
                    <Environment
                        files='./environment/neon_photostudio_1k.hdr' />
                    <Suspense fallback={null}>
                        <Model />
                        <Button />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience