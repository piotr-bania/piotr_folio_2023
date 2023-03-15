import { AnimatePresence, motion as m } from 'framer-motion'

const Hero = () => {
    return (
        <AnimatePresence>
            <section
                id="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                <m.div
                    className="hero_text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                    {/* <h1>Piotr Bania - Creative Web Developer</h1>
                    <h2>Crafting immersive experiences with Next.js, Three.js, GLSL and React Three Fiber</h2> */}
                </m.div>
            </section>
        </AnimatePresence>
    )
}

export default Hero