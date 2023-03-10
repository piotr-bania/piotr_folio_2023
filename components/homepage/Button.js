import React, { useRef, useState } from 'react'
import { Float, Text } from '@react-three/drei'

const Button = () => {
    
    const viewportRef = useRef(null)
    const [hoveredButton, hoverButton] = useState(false)

    const handleClick = () => {
        const windowHeight = window.innerHeight
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
        const newScrollTop = currentScrollTop + windowHeight
        window.scrollTo({
        top: newScrollTop,
        behavior: "smooth"
        })
    }

    return (
        <Float
            speed={ 3 }
            rotationIntensity={0.05} 
            floatIntensity={ 0.05 }
            floatingRange={[1, 2]}
        >
            <mesh ref={viewportRef} onClick={handleClick} position={[-1.6, -1.4, 1]} rotation={[0, 0.4, 0]}>
                <Text
                    font='./fonts/Expansiva bold.otf'
                    onPointerOver={(event) => hoverButton(true)}
                    onPointerOut={(event) => hoverButton(false)}
                    color={hoveredButton ? '#61F570' : '#7161F5'}
                    fontSize={0.1}
                    args={[1, 0.2, 0.1]}>Let Me Show You!</Text>
            </mesh>
        </Float>
    )
}

export default Button