import React from 'react';
import { useParams } from 'react-router-dom';

import BurgerHOC from './BurgerHOC'
import BurgerList from './BurgerList'

import Grid from '@material-ui/core/Grid';
import { Box, Text } from '@chakra-ui/core'

import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);
const MotionText = motion.custom(Text);

function BurgerItems(props) {
    const { name } = useParams()
    return (
        <>
            <MotionBox textAlign="center" mt="4">
                <MotionText
                    fontSize="25px" fontWeight="bold" color="rgb(42, 165, 93)"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.7, type: "spring", stiffness: 250 }}
                >
                    {name === "burger" ? "Best Ever Burgers" : "Best Ever Pizza'z"}
                </MotionText>
            </MotionBox>
            <Box mb="10" mt="4" h="auto" w="auto"
                style={{ display: "grid", placeItems: "center" }}
            >
                <Grid container spacing={2} item lg={10}>
                    {
                        props.burger.map(bItems => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={6}
                                    key={bItems.id}
                                >
                                    <BurgerList
                                        itemsId={bItems.id}
                                        imgSrc={bItems.srcImg}
                                        name={bItems.name}
                                        price={bItems.price}
                                        cartBtn={bItems.cartBtn}
                                        wishBtn={bItems.wishBtn}
                                        moreBtn={bItems.moreBtn}
                                        nameURL={name}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default BurgerHOC(BurgerItems)