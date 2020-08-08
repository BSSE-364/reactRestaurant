import React, { useContext } from 'react';
import { Contextvalues } from '../../../App';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { IconButton, Text, Box, Divider } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
const MotionListItemAvatar = motion.custom(ListItemAvatar);
const MotionListItem = motion.custom(ListItem);
const MotionListItemText = motion.custom(ListItemText);
const MotionIconButton = motion.custom(IconButton);
const MotionIconList = motion.custom(List);

export default function BurgerList(props) {
    const context = useContext(Contextvalues)
    return (
        <MotionIconList>
            <MotionListItem>
                <MotionListItemAvatar
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{ delay: 3.1, duration: 1.3 }}
                >
                    <img src={props.imgSrc} className="img-fluid shadow-lg img-thumbnail" alt="Not Found" style={{
                        height: "150px",
                        width: "150px",
                        objectFit: "cover",
                        borderRadius: "50%",
                    }} />
                </MotionListItemAvatar>
                <MotionListItemText
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, }}
                    transition={{ ease: "linear", delay: 2, duration: 1.3, type: "spring", stiffness: 150 }}
                    primary={
                        <Text
                            ml="4"
                            fontSize="2xl"
                            color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                        >
                            {props.name}
                        </Text>
                    }
                    secondary={
                        <Text
                            ml="4"
                            fontSize="md"
                            color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                        >
                            ${props.price}.00
                        </Text>
                    }
                />
            </MotionListItem>
            <Box d="flex" justifyContent="center" mb="10">
                <MotionIconButton
                    color="rgb(42, 165, 93)"
                    fontSize="19px"
                    aria-label="Call Segun"
                    size="sm"
                    mr="8"
                    ml="36"
                    icon={props.cartBtn}

                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: 360 }}
                    transition={{ delay: 6.5, duration: 0.7 }}
                />
                <MotionIconButton
                    color="rgb(42, 165, 93)"
                    fontSize="19px"
                    aria-label="Call Segun"
                    size="sm"
                    mr="8"
                    icon={props.wishBtn}

                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: 360 }}
                    transition={{ delay: 5.5, duration: 0.7 }}
                />
                <NavLink exact to={`/menu/burger/${props.itemsId}`}>
                    <MotionIconButton
                        color="rgb(42, 165, 93)"
                        fontSize="19px"
                        aria-label="Call Segun"
                        size="sm"
                        mr="2"
                        icon={props.moreBtn}

                        initial={{ x: -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, rotate: 360 }}
                        transition={{ delay: 4.5, duration: 0.7 }}
                    />
                </NavLink>
            </Box>
            <Divider />
        </MotionIconList>

    );
}
