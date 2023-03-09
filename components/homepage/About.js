import { AnimatePresence, motion as m } from 'framer-motion'

const About = () => {
    return (
        <AnimatePresence>
            <section
                id="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >

                <m.div
                    className="hero_text"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                    <h1>A header goes here</h1>
                    <h2>Subheader goes here</h2>
                    <p>Short paragraph describing this particular section</p>
                </m.div>

                <m.div
                    className="hero_image"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                </m.div>
            </section>
        </AnimatePresence>
    )
}

export default About