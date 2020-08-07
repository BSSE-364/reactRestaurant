import React from 'react'
import Testing from '../../../Testing'

import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/core';
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

function BurgerDetails() {
    return (
        <MotionBox
            variants={homeRouteVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Testing />
        </MotionBox>
    )
}

export default BurgerDetails
