import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Float, Text } from '@react-three/drei'

const Experience = () => {

    return (
        <AnimatePresence>
            <m.div
                className='canvas_navbar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    shadows dpr={[1, 2]}
                    camera={{
                        position: [0, 15, 35],
                        fov: 22 }}
                    >
                    <Suspense fallback={null}>
                        <Text>Navbar items goes here</Text>
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience