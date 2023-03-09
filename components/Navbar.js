import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import { AnimatePresence, motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'

const Experience = (props) => {

    const cubeRef = useRef()

    const [hoveredHome, hoverHome] = useState(false)
    const [clickedHome, clickHome] = useState(false)
    const [clickedAbout, clickAbout] = useState(false)
    const [hoverededAbout, hoverAbout] = useState(false)
    const [clickedProjects, clickProjects] = useState(false)
    const [hoverededProjects, hoverProjects] = useState(false)
    const [clickedSkills, clickSkills] = useState(false)
    const [hoverededSkills, hoverSkills] = useState(false)
    const [clickedContact, clickContact] = useState(false)
    const [hoveredContact, hoverContact] = useState(false)

    return (
        <AnimatePresence>
            <m.div
                className='logo'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
            >
                <Link href="/">
                    <Image className='logo' src="/logo/logo.svg" alt="logo" width={60} height={60} />
                </Link>
            </m.div>
            <m.div
                className='canvas_navbar'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    camera={{
                        position: [0, 0, 25],
                        fov: 22 }}
                    >
                    <Suspense fallback={null}>
                        <Float speed={3}>
                            <mesh position={[0, 3, 0]}>
                                <Text
                                    font='./fonts/Expansiva bold.otf'
                                    onPointerOver={(event) => hoverHome(true)}
                                    onPointerOut={(event) => hoverHome(false)}
                                    color={hoveredHome ? '#61F570' : '#7161F5'}
                                    scale={hoveredHome ? 1.25 : 1}
                                    onClick={(event) => clickHome(!clickedHome)}
                                >Home</Text>
                            </mesh>
                        </Float>
                        <Float speed={3}>
                            <mesh position={[0, 1.5, 0]}>
                                <Text
                                    font='./fonts/Expansiva bold.otf'
                                    onPointerOver={(event) => hoverAbout(true)}
                                    onPointerOut={(event) => hoverAbout(false)}
                                    color={hoverededAbout ? '#61F570' : '#7161F5'}
                                    onClick={(event) => clickAbout(!clickedAbout)}
                                    scale={hoverededAbout ? 1.25 : 1}
                                >About</Text>
                            </mesh>
                        </Float>
                        <Float speed={3}>
                            <mesh position={[0, 0, 0]}>
                                <Text
                                    font='./fonts/Expansiva bold.otf'
                                    onPointerOver={(event) => hoverProjects(true)}
                                    onPointerOut={(event) => hoverProjects(false)}
                                    color={hoverededProjects ? '#61F570' : '#7161F5'}
                                    onClick={(event) => clickProjects(!clickedProjects)}
                                    scale={hoverededProjects ? 1.25 : 1}
                                >Projects</Text>
                            </mesh>
                        </Float>
                        <Float speed={5}>
                            <mesh position={[0, -1.5, 0]}>
                                <Text
                                    font='./fonts/Expansiva bold.otf'
                                    onPointerOver={(event) => hoverSkills(true)}
                                    onPointerOut={(event) => hoverSkills(false)}
                                    color={hoverededSkills ? '#61F570' : '#7161F5'}
                                    onClick={(event) => clickSkills(!clickedSkills)}
                                    scale={hoverededSkills ? 1.25 : 1}
                                >Skills</Text>
                            </mesh>
                        </Float>
                        <Float speed={5}>
                            <mesh position={[0, -3, 0]}>
                                <Text
                                    font='./fonts/Expansiva bold.otf'
                                    onPointerOver={(event) => hoverContact(true)}
                                    onPointerOut={(event) => hoverContact(false)}
                                    color={hoveredContact ? '#61F570' : '#7161F5'}
                                    onClick={(event) => clickContact(!clickedContact)}
                                    scale={hoveredContact ? 1.25 : 1}
                                >Contact</Text>
                            </mesh>
                        </Float>
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience