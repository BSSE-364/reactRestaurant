import React, { useContext } from 'react'
import { Contextvalues } from '../../App';
import location from "../../Images/location.jpg"
import ContactList from './ContactList';

import { makeStyles } from '@material-ui/core/styles';
import { Input, Stack, InputLeftElement, InputGroup, Text } from "@chakra-ui/core";

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import { Box, Button, Flex, Textarea } from '@chakra-ui/core';
import { Grid, Typography } from '@material-ui/core';


import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core';

import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);
const MotionTypography = motion.custom(Typography);
const MotionStack = motion.custom(Stack);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
const useStyles = makeStyles((theme) => ({
    textDiv: {
        position: 'absolute',
        top: "20%",
    },
    text1: {
        color: "white",
        textAlign: 'center',
    },
    text2: {
        color: "white",
        fontWeight: "bold",
        marginTop: 15,
        width: 300,
        textAlign: 'center',
    },
    text3: {
        color: "rgb(42, 165, 93)",
        paddingBottom: 15,

    },
    oneGridLight: {
        padding: 25,
        // borderRight: "1px solid rgb(42, 165, 93)",
        backgroundColor: "#f4f6ff",
    },
    twoGrid: {
        // borderLeft: "1px solid rgb(42, 165, 93)",
    },
}));

function Contact() {
    const classes = useStyles();
    const context = useContext(Contextvalues)
    return (
        <>
            <MotionBox
                variants={homeRouteVarients}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={1} d="flex" justify="center">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <div style={{ position: "relative", textAlign: "center", display: "flex", justifyContent: "center" }}>
                                <img src={location} className="img-fluid rounded img-thumbnail" alt="Not Found" style={{
                                    height: 340,
                                    width: "100%",
                                    objectFit: "cover"
                                }} />
                                <Box className={classes.textDiv}>
                                    <Typography variant="h4" gutterBottom className={classes.text1}>
                                        CONTACT US
                                    </Typography>
                                    <Typography variant="h6" gutterBottom className={classes.text2}>
                                        Find Us____
                                </Typography>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={context.colorMode === "light" ? classes.oneGridLight : "bg-dark p-4"}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <MotionTypography
                                variant="h6" className={classes.text3}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.7, type: "spring", stiffness: 300 }}
                            >
                                Get In Touch
                            </MotionTypography>
                            <MotionStack
                                spacing={4}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2.2, duration: 0.7, type: "spring", stiffness: 250 }}
                            >
                                <InputGroup
                                >
                                    <InputLeftElement children={<PersonRoundedIcon color="action" />} />
                                    <Input
                                        color={context.colorMode === "light" ? "black" : "white"}
                                        focusBorderColor="green.500"
                                        type="text"
                                        placeholder="Enter your name" />
                                </InputGroup>
                                <InputGroup
                                >
                                    <InputLeftElement children={<MailIcon fontSize="small" color="action" />} />
                                    <Input
                                        color={context.colorMode === "light" ? "black" : "white"}
                                        focusBorderColor="green.500"
                                        type="email"
                                        placeholder="Enter your email" />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<MessageIcon fontSize="small" color="action" />} />
                                    <Textarea
                                        color={context.colorMode === "light" ? "black" : "white"}
                                        pl="10"
                                        focusBorderColor="green.500"
                                        resize="none"
                                        type="msg"
                                        placeholder="Type message here..." />
                                </InputGroup>
                                <Button width="50"
                                    backgroundColor={context.colorMode === "light" ? "rgb(42, 165, 93)" : "#d3d6db"}
                                    size="sm" variant="solid">
                                    <Text style={{ paddingRight: 20 }}
                                        color={context.colorMode === "light" ? "#141829" : "rgb(42, 165, 93)"}
                                        fontSize="17px"
                                    >
                                        Send
                                    </Text>
                                    <Box as={SendRoundedIcon} size="30px"
                                        color={context.colorMode === "light" ? "#141829" : "rgb(42, 165, 93)"}
                                    />
                                </Button>
                            </MotionStack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Flex justify="center" align="center" alignItems="center" mt="5">
                                <ContactList />
                            </Flex>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </MotionBox>
        </>
    )
}

export default Contact
