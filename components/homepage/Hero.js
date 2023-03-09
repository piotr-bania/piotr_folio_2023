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
                    <h1>Hi, I'm Piotr Bania</h1>
                    <h2>Creative web developer</h2>
                    <p>I'm passionate about creating beautiful and innovative web experiences using next.js, three.js, react three fiber and glsl. With my expertise in these cutting-edge technologies, I can bring your ideas to life in ways you never thought possible.</p>
                </m.div>
            </section>
        </AnimatePresence>
    )
}

export default Hero