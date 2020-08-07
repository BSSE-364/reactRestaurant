import React from 'react'
import BurgerItems from './BurgerItems';
import { Box } from '@chakra-ui/core';

import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);

const homeRouteVarients = {
    hidden: {
        x: '-100%',
        opacity: 0,
    },
    visible: {
        x: '0',
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.8,
        }
    },
    exit: {
        x: '-100%',
        opacity: 0,
        ease: "easeInOut",
    }
}

function Menu() {
    return (
        <>
            <MotionBox
                variants={homeRouteVarients}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <BurgerItems />
            </MotionBox>
        </>
    )
}

export default Menu
